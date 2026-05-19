import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // i18n routing is handled via the [locale] catch-all segment (App Router pattern).
  // Active locales: en only — multilanguage deferred to a future phase.

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // San Patrik production CDN
      {
        protocol: 'https',
        hostname: '**.sanpatrik.co',
      },
      // Client image CDN — Bunny (used on 100m2.si and related sites)
      {
        protocol: 'https',
        hostname: 'bunny-hr.100m2.si',
      },
      // AgentPlus S3 bucket — Petram media assets from client CRM
      {
        protocol: 'https',
        hostname: 'agentplus-s3.s3.eu-west-2.amazonaws.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Clickjacking protection
          { key: 'X-Frame-Options',        value: 'SAMEORIGIN' },
          // MIME sniffing protection
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer sent only on same-origin or HTTPS downgrades
          { key: 'Referrer-Policy',        value: 'strict-origin-when-cross-origin' },
          // Lock unnecessary browser features
          { key: 'Permissions-Policy',     value: 'camera=(), microphone=(), geolocation=()' },
          // Basic CSP — tightened before go-live once all third-party origins are confirmed
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Inline scripts needed for GTM snippet; adjust if moving to external loader
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'" +
                " https://www.googletagmanager.com" +
                " https://www.google.com" +
                " https://www.gstatic.com" +
                " https://connect.facebook.net" +
                " https://snap.licdn.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              // data: for base64 inline images; blob: for next/image object URLs
              "img-src 'self' data: blob: https:",
              "connect-src 'self'" +
                " https://www.google-analytics.com" +
                " https://stats.g.doubleclick.net" +
                " https://www.googletagmanager.com" +
                // Vimeo player API calls (quality selection, analytics)
                " https://vimeo.com https://*.vimeocdn.com https://fresnel.vimeocdn.com",
              // player.vimeo.com — hero background video iframe
              // maps.google.com — Location section embed
              "frame-src https://www.googletagmanager.com https://www.google.com" +
                " https://player.vimeo.com" +
                " https://maps.google.com",
              // Vimeo video segments and manifest fetched via XHR/fetch
              "media-src 'self' https://*.vimeocdn.com https://vod-progressive.akamaized.net",
              "worker-src 'none'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

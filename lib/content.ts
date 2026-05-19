// ─────────────────────────────────────────────────────────────────────────────
// Petram Resort & Residences — single source of truth for all content
// When duplicating this project, replace every value here; don't touch JSX.
// ─────────────────────────────────────────────────────────────────────────────

export const content = {

  // ── Meta / SEO ──────────────────────────────────────────────────────────────
  meta: {
    title:       'Petram Resort & Residences',
    description: 'Ultra-premium stone villas with private pools on the Istrian coast, Savudrija, Croatia.',
    siteUrl:     'https://petram.sanpatrik.co',
    ogImage:     '/images/hero/hero-poster.webp',
  },

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    brandName:    'PETRAM',
    brandTagline: 'SAN PATRIK',
    phone:        '+385992172314',
    phoneDisplay: '+385 99 217 2314',
    ctaLabel:     'Request Details',
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    vimeoId:     '1042261054',
    eyebrow:     'Petram Resort & Residences · Savudrija, Istria',
    headline:    "Where Europe's Elite Choose to Invest",
    subheadline: 'Exclusive villa residences with managed rental returns — from €1,700,000',
    ctaPrimary:  'Request Villa Details',
    ctaPhone:    'Call Ivan Now',
    stats: [
      { value: '55',          label: 'Exclusive Villas' },
      { value: 'Golf & Sea',  label: 'Access'           },
      { value: 'Managed',     label: 'Rental Program'   },
      { value: 'From €1.7M', label: 'Starting Price'   },
    ],
  },

  // ── Project facts (shared across sections) ──────────────────────────────────
  project: {
    name:             'Petram Resort & Residences',
    location:         'Savudrija, Istria, Croatia',
    totalUnits:       55,
    startingPrice:    '€1,700,000',
    startingPriceShort: '€1.7M',
    developer:        'Nobilis Expo d.o.o.',
    leadingReMember:  true,
    remainingUnits:   12,
  },

  // ── Investment case ──────────────────────────────────────────────────────────
  investment: {
    yieldRange:         '6–8%',
    yieldLabel:         'Projected Annual Yield',
    occupancyRate:      '78%',
    occupancyLabel:     'Average Occupancy Rate',
    appreciationRate:   '42%',
    appreciationLabel:  '5-Year Price Growth in Istria',
    rentalProgramName:  'Petram Managed Rental',
  },

  // ── Agent ────────────────────────────────────────────────────────────────────
  agent: {
    name:        'Ivan Varat',
    title:       'Senior Property Consultant',
    phone:       '+385992172314',
    phoneDisplay: '+385 99 217 2314',
    email:       'ivan.varat@sanpatrik.co',
    whatsappUrl: 'https://wa.me/385992172314',
    quote:       'Every villa at Petram is a statement of permanence — stone-built, sea-viewed, and structured to grow your wealth while you enjoy the finest the Adriatic has to offer.',
    imageSrc:    '/images/agent/ivan-varat.webp',
    initials:    'IV',
  },

  // ── Final CTA / Footer ───────────────────────────────────────────────────────
  finalCta: {
    urgencyLabel: 'Only 12 Villas Remaining',
    headline:     'Secure Your\nPetram Villa',
    subheadline:  'Limited release. Priority access for registered investors.',
    ctaPrimary:   'Request Villa Details',
    legalEntity:  'Nobilis Expo d.o.o.',
    year:         '2026',
  },

} as const;

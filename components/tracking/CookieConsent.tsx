'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'sp_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'granted');
    setVisible(false);
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage:  'granted',
        ad_storage:         'granted',
        ad_user_data:       'granted',
        ad_personalization: 'granted',
      });
    }
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'denied');
    setVisible(false);
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage:  'denied',
        ad_storage:         'denied',
        ad_user_data:       'denied',
        ad_personalization: 'denied',
      });
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{ backgroundColor: '#0D2137' }}
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5 shadow-2xl
                 md:bottom-6 md:left-6 md:right-auto md:max-w-md md:rounded-lg"
    >
      <p className="font-body text-sm text-white/80 leading-relaxed mb-4">
        We use cookies to analyse site traffic and improve your experience.
        By clicking <strong className="text-white">Accept</strong> you consent
        to our use of analytics and advertising cookies.{' '}
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          style={{ backgroundColor: '#C8A96E', color: '#0D2137' }}
          className="flex-1 rounded px-4 py-2 text-sm font-semibold font-body
                     hover:opacity-90 transition-opacity"
        >
          Accept all
        </button>
        <button
          onClick={decline}
          className="flex-1 rounded px-4 py-2 text-sm font-body text-white/70
                     border border-white/20 hover:border-white/50 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

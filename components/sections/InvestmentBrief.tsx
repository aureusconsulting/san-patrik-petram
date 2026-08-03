'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FADE_UP_LG, FADE_UP_SM, STAGGER_MD, EASE_OUT } from '@/lib/animations';
import { gtmEvents } from '@/lib/gtm';
import { usePageContent } from '@/lib/content-context';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function localeFromPathname(pathname: string): 'en' | 'pl' | 'de' {
  if (pathname === '/pl' || pathname.startsWith('/pl/')) return 'pl';
  if (pathname === '/de' || pathname.startsWith('/de/')) return 'de';
  return 'en';
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function InvestmentBrief() {
  const { investmentBrief } = usePageContent();
  const pathname = usePathname();
  const locale   = localeFromPathname(pathname ?? '/');

  const [email, setEmail]           = useState('');
  const [honeypot, setHoneypot]     = useState('');
  const [fieldError, setFieldError] = useState('');
  const [serverError, setServerError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError('');

    const trimmed = email.trim();
    if (!trimmed) {
      setFieldError(investmentBrief.validation.emailRequired);
      return;
    }
    if (!EMAIL_RE.test(trimmed)) {
      setFieldError(investmentBrief.validation.emailInvalid);
      return;
    }
    setFieldError('');
    setSubmitting(true);

    // UTM params are captured by <UTMCapture> at page level; here we only read them
    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].reduce<
      Record<string, string>
    >((acc, key) => {
      acc[key] = sessionStorage.getItem(key) ?? '';
      return acc;
    }, {});

    try {
      const res = await fetch('/api/download-brief', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: trimmed, locale, form_token: honeypot, ...utms }),
      });

      if (res.ok) {
        const { url } = await res.json() as { url?: string };
        gtmEvents.briefDownloaded(locale);
        setSuccess(true);
        if (url) {
          const a = document.createElement('a');
          a.href = url;
          a.download = '';
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      } else {
        setServerError(investmentBrief.serverError);
      }
    } catch {
      setServerError(investmentBrief.networkError);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="investment-brief" className="bg-navy-deep py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={STAGGER_MD}
        >
          <motion.p
            variants={FADE_UP_SM}
            className="font-body font-bold text-xs uppercase tracking-[0.2em] text-gold"
          >
            {investmentBrief.eyebrow}
          </motion.p>

          <motion.h2
            variants={FADE_UP_LG}
            className="font-display font-light text-4xl md:text-5xl text-white mt-4"
            style={{ lineHeight: 1.1 }}
          >
            {investmentBrief.headline}
          </motion.h2>

          <motion.p
            variants={FADE_UP_SM}
            className="font-body font-light text-[14px] mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.72)' }}
          >
            {investmentBrief.body}
          </motion.p>
        </motion.div>

        {/* ── Gold divider ───────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="w-16 h-px bg-gold mx-auto my-10 origin-center"
          aria-hidden="true"
        />

        {/* ── Email form / success state ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="flex flex-col items-center py-4"
            >
              <CheckCircle size={40} strokeWidth={1.25} className="text-gold mb-4" aria-hidden="true" />
              <p className="font-body font-normal text-[14px] max-w-md leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {investmentBrief.successMessage}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="brief-email" className="sr-only">
                  {investmentBrief.emailLabel}
                </label>
                <input
                  id="brief-email"
                  type="email"
                  placeholder={investmentBrief.emailPlaceholder}
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 font-body text-[14px] text-navy-deep bg-white border border-transparent px-4 py-4 focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-navy-deep/30 rounded-none"
                />
                {/* Honeypot — hidden from humans, bots fill it */}
                <input
                  type="text"
                  name="form_token"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute left-[-9999px] w-px h-px opacity-0"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className={cn(
                    'bg-gold text-navy-deep font-body font-bold text-[13px] uppercase tracking-[0.1em]',
                    'px-8 py-4 rounded-none transition-colors duration-200 whitespace-nowrap',
                    submitting
                      ? 'cursor-wait opacity-70'
                      : 'cursor-pointer hover:bg-gold-light active:bg-gold-dark',
                  )}
                >
                  {submitting ? investmentBrief.submitting : investmentBrief.ctaLabel}
                </button>
              </div>

              <AnimatePresence>
                {(fieldError || serverError) && (
                  <motion.p
                    key={fieldError || serverError}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-body font-light text-[12px] text-red-400 mt-3 text-left"
                  >
                    {fieldError || serverError}
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="font-body font-light text-[11px] mt-4 tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {investmentBrief.microLine}
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}

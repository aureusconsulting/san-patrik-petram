'use client';

import { useState, useCallback, useMemo, useRef } from 'react';
import Image from 'next/image';
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EASE_OUT } from '@/lib/animations';
import { gtmEvents } from '@/lib/gtm';
import { usePageContent } from '@/lib/content-context';
import type { PageContent } from '@/lib/content-context';

// ─── Schema ───────────────────────────────────────────────────────────────────

function buildSchema(v: PageContent['form']['validation']) {
  return z.object({
    fullName:  z.string().min(2,  v.fullName),
    email:     z.string().min(1,  v.emailRequired).email(v.emailInvalid),
    phone:     z.string().min(6,  v.phone),
    country:   z.string().min(1,  v.country),
    villaType: z.string().min(1,  v.villaType),
    message:   z.string().optional(),
    gdpr:      z.boolean().refine((val) => val === true, {
      message: v.gdpr,
    }),
  });
}

type FormData = z.infer<ReturnType<typeof buildSchema>>;

// ─── Shared input styles ──────────────────────────────────────────────────────

const inputBase =
  'w-full font-body text-[14px] text-navy-deep border border-cream-dark bg-white px-4 py-3 ' +
  'focus:outline-none focus:border-gold transition-colors duration-200 ' +
  'placeholder:text-navy-deep/30 rounded-none';

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body font-bold text-[11px] uppercase tracking-[0.12em] text-navy-deep/70">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            key={error}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-body font-light text-[12px] text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Agent card ───────────────────────────────────────────────────────────────

function AgentCard() {
  const { agent, form } = usePageContent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: EASE_OUT }}
      className="flex flex-col items-center text-center lg:items-start lg:text-left"
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div
          className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0"
          style={{ border: '3px solid #C8A96E' }}
        >
          <Image
            src={agent.imageSrc}
            alt={agent.imageAlt}
            width={160}
            height={160}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Name + title */}
      <h3 className="font-body font-bold text-2xl text-navy-deep">
        {agent.name}
      </h3>
      <p className="font-body font-normal text-[13px] text-gold mt-1">
        {agent.title}
      </p>

      {/* LeadingRE badge */}
      <p className="font-body font-normal text-[11px] uppercase tracking-[0.12em] text-navy-deep/40 mt-2">
        {form.memberBadge}
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-gold/40 my-6 mx-auto lg:mx-0" aria-hidden="true" />

      {/* Quote */}
      <blockquote className="font-display font-light italic text-lg text-navy-deep/75 leading-relaxed max-w-sm">
        &ldquo;{agent.quote}&rdquo;
      </blockquote>

      {/* Contact links */}
      <div className="mt-8 flex flex-col gap-3 items-center lg:items-start">
        <a
          href={`tel:${agent.phone}`}
          className="flex items-center gap-2.5 font-body font-normal text-[13px] text-navy-deep hover:text-gold transition-colors duration-200"
        >
          <Phone size={15} strokeWidth={1.5} className="text-gold flex-shrink-0" />
          {agent.phoneDisplay}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center gap-2.5 font-body font-normal text-[13px] text-navy-deep hover:text-gold transition-colors duration-200"
        >
          <Mail size={15} strokeWidth={1.5} className="text-gold flex-shrink-0" />
          {agent.email}
        </a>
        <a
          href={agent.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 font-body font-normal text-[13px] text-navy-deep hover:text-gold transition-colors duration-200"
        >
          <MessageCircle size={15} strokeWidth={1.5} className="text-gold flex-shrink-0" />
          WhatsApp
        </a>
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-8 w-full max-w-xs lg:max-w-none">
        <p className="font-body font-light text-[12px] text-navy-deep/50 mb-3 text-center lg:text-left">
          {form.preferChat.replace('{name}', agent.name.split(' ')[0])}
        </p>
        <a
          href={agent.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-3.5 font-body font-bold text-[12px] uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
          {form.whatsappCta.replace('{name}', agent.name.split(' ')[0])}
        </a>
      </div>
    </motion.div>
  );
}

// ─── Thank-you state ──────────────────────────────────────────────────────────

function ThankYou({ name }: { name: string }) {
  const { form } = usePageContent();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="flex flex-col items-center justify-center text-center py-16 px-6"
    >
      <CheckCircle size={52} strokeWidth={1.25} className="text-gold mb-6" aria-hidden="true" />
      <p className="font-display font-light text-3xl text-navy-deep leading-snug">
        {form.thankYouTitle.replace('{name}', name)}
      </p>
      <p className="font-body font-normal text-[14px] text-navy-deep/60 mt-3 max-w-sm leading-relaxed">
        {form.thankYouBody}
      </p>
    </motion.div>
  );
}

// ─── Lead form inner (needs reCAPTCHA context) ────────────────────────────────

function LeadFormInner() {
  const { form } = usePageContent();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submitted, setSubmitted]         = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [serverError, setServerError]     = useState('');
  const formStartedFired                  = useRef(false);

  const schema = useMemo(() => buildSchema(form.validation), [form.validation]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName:  '',
      email:     '',
      phone:     '',
      country:   '',
      villaType: '',
      message:   '',
      gdpr:      false,
    },
  });

  // UTM params are captured by <UTMCapture> at page level; here we only read them
  const onSubmit = useCallback(
    async (data: FormData) => {
      setServerError('');

      let recaptchaToken = '';
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('submit_lead');
      }

      const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].reduce<
        Record<string, string>
      >((acc, key) => {
        acc[key] = sessionStorage.getItem(key) ?? '';
        return acc;
      }, {});

      try {
        const res = await fetch('/api/submit-lead', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ ...data, recaptchaToken, ...utms }),
        });

        if (res.ok) {
          const { eventId } = await res.json() as { eventId?: string };
          gtmEvents.formSubmitted({ country: data.country, villaType: data.villaType, event_id: eventId });
          setSubmittedName(data.fullName.split(' ')[0]);
          setSubmitted(true);
        } else {
          setServerError(form.serverError);
        }
      } catch {
        setServerError(form.networkError);
      }
    },
    [executeRecaptcha, form.serverError, form.networkError],
  );

  const onError = useCallback((errs: FieldErrors<FormData>) => {
    const firstKey = Object.keys(errs)[0];
    document
      .getElementById(firstKey)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  if (submitted) return <ThankYou name={submittedName} />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT }}
    >
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        onFocus={() => {
          if (!formStartedFired.current) {
            formStartedFired.current = true;
            gtmEvents.formStarted();
          }
        }}
        noValidate
        className="flex flex-col gap-5"
      >
        {/* Full Name */}
        <Field label={form.labels.fullName} required error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            placeholder={form.placeholders.fullName}
            autoComplete="name"
            className={inputBase}
            {...register('fullName')}
          />
        </Field>

        {/* Email */}
        <Field label={form.labels.email} required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            placeholder={form.placeholders.email}
            autoComplete="email"
            className={inputBase}
            {...register('email')}
          />
        </Field>

        {/* Phone */}
        <Field
          label={form.labels.phone}
          required
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            placeholder={form.placeholders.phone}
            autoComplete="tel"
            className={inputBase}
            {...register('phone')}
          />
        </Field>

        {/* Country */}
        <Field label={form.labels.country} required error={errors.country?.message}>
          <select
            id="country"
            className={cn(inputBase, 'cursor-pointer')}
            defaultValue=""
            {...register('country')}
          >
            <option value="" disabled>
              {form.placeholders.country}
            </option>
            {form.countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        {/* Villa type */}
        <Field label={form.labels.villaType} required error={errors.villaType?.message}>
          <select
            id="villaType"
            className={cn(inputBase, 'cursor-pointer')}
            defaultValue=""
            {...register('villaType')}
          >
            <option value="" disabled>
              {form.placeholders.villaType}
            </option>
            {form.villaTypes.map((v) => (
              <option key={v.value} value={v.value}>
                {v.label}
              </option>
            ))}
          </select>
        </Field>

        {/* Message */}
        <Field label={form.labels.message} error={errors.message?.message}>
          <textarea
            id="message"
            rows={4}
            placeholder={form.placeholders.message}
            className={cn(inputBase, 'resize-none')}
            {...register('message')}
          />
        </Field>

        {/* GDPR */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              id="gdpr"
              type="checkbox"
              className="mt-0.5 w-4 h-4 flex-shrink-0 accent-gold cursor-pointer"
              {...register('gdpr')}
            />
            <span className="font-body font-normal text-[12px] text-navy-deep/60 leading-relaxed group-hover:text-navy-deep/80 transition-colors">
              {form.gdprPrefix}
              <a
                href="/privacy-policy"
                className="underline underline-offset-2 hover:text-gold transition-colors"
              >
                {form.gdprLink}
              </a>
              {form.gdprSuffix}
              <span className="text-gold ml-0.5">*</span>
            </span>
          </label>
          <AnimatePresence>
            {errors.gdpr && (
              <motion.p
                key="gdpr-error"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-body font-light text-[12px] text-red-500 pl-7"
              >
                {errors.gdpr.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Server error */}
        {serverError && (
          <p className="font-body font-light text-[13px] text-red-600 text-center">
            {serverError}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'w-full py-4 font-body font-bold text-[13px] uppercase tracking-[0.12em]',
            'transition-colors duration-200',
            isSubmitting
              ? 'cursor-wait opacity-70'
              : 'cursor-pointer hover:opacity-90',
          )}
          style={{ backgroundColor: '#C8A96E', color: '#0D2137' }}
        >
          {isSubmitting ? form.submitting : form.submit}
        </button>

        <p className="font-body font-light text-[11px] text-navy-deep/35 text-center tracking-wide leading-relaxed">
          {form.recaptchaPrefix}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-navy-deep/60">{form.recaptchaPrivacy}</a>
          {form.recaptchaMid}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-navy-deep/60">{form.recaptchaTerms}</a>
          {form.recaptchaSuffix}
        </p>
      </form>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function AgentLeadForm() {
  const { form } = usePageContent();

  return (
    <section id="lead-form" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="text-center mb-14"
        >
          <p className="font-body font-bold text-xs uppercase tracking-[0.2em] text-gold">
            {form.eyebrow}
          </p>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-navy-deep mt-4"
            style={{ lineHeight: 1.1 }}
          >
            {form.headline}
          </h2>
          <p className="font-body font-light text-[14px] text-navy-deep/55 mt-3 max-w-lg mx-auto leading-relaxed">
            {form.subheadline}
          </p>
        </motion.div>

        {/* ── Two-column layout ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AgentCard />

          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
          >
            <LeadFormInner />
          </GoogleReCaptchaProvider>
        </div>

      </div>
    </section>
  );
}

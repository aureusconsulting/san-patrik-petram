'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FADE_UP_LG, FADE_UP_SM, STAGGER_MD, STAGGER_SM, EASE_OUT } from '@/lib/animations';
import { usePageContent } from '@/lib/content-context';
import type { PageContent } from '@/lib/content-context';

// ─── Star rating ──────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={13}
          strokeWidth={0}
          fill="#C8A96E"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Testimonial card ─────────────────────────────────────────────────────────

function TestimonialCard({
  quote,
  name,
  country,
  stars,
}: PageContent['socialProof']['testimonials'][number]) {
  return (
    <motion.div
      variants={FADE_UP_LG}
      className="flex flex-col gap-5 p-7 border border-cream-dark"
    >
      <Stars count={stars} />
      {/* PLACEHOLDER: Replace with real client testimonial */}
      <blockquote className="font-display font-light italic text-lg text-navy-deep/75 leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-body font-bold text-[13px] text-navy-deep">{name}</p>
        <p className="font-body font-normal text-[11px] uppercase tracking-[0.14em] text-navy-deep/45 mt-0.5">
          {country}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function SocialProof() {
  const { socialProof } = usePageContent();

  return (
    <section id="social-proof" className="py-24" style={{ backgroundColor: '#F5F3EF' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* ── LeadingRE badge ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-16 p-7 border border-cream-dark"
        >
          <Image
            src="/images/logos/leadingre-badge.png"
            alt="Leading Real Estate Companies of the World"
            width={88}
            height={88}
            className="flex-shrink-0 w-20 h-20 object-contain"
            style={{ filter: 'invert(1)' }}
          />

          <div className="text-center sm:text-left">
            <p className="font-body font-bold text-[13px] uppercase tracking-[0.15em] text-gold mb-2">
              {socialProof.leadingReTitle}
            </p>
            <p className="font-body font-light text-[13px] text-navy-deep/65 leading-relaxed max-w-xl">
              {socialProof.leadingReBody}
            </p>
          </div>
        </motion.div>

        {/* ── Testimonials ────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={STAGGER_MD}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16"
        >
          {socialProof.testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </motion.div>

        {/* ── Gold divider ────────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="w-16 h-px bg-gold mx-auto mb-16 origin-center"
          aria-hidden="true"
        />

        {/* ── Trust stats ─────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={STAGGER_SM}
          className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-cream-dark border border-cream-dark"
        >
          {socialProof.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={FADE_UP_SM}
              className="flex-1 flex flex-col items-center text-center py-8 px-6"
            >
              <span
                className="font-display font-light text-gold leading-none"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                {stat.value}
              </span>
              <span className="font-body font-normal text-[11px] uppercase tracking-[0.15em] text-navy-deep/55 mt-2.5 max-w-[160px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

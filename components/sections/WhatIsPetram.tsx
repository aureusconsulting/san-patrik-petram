'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Waves,
  Sparkles,
  Umbrella,
  Flag,
  UtensilsCrossed,
  Shield,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FADE_UP, STAGGER_MD } from '@/lib/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Amenity {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const AMENITIES: Amenity[] = [
  {
    Icon: Waves,
    title: 'Rooftop Infinity Pool',
    desc: "Largest in Europe — panoramic Adriatic views at 42 m elevation",
  },
  {
    Icon: Sparkles,
    title: 'Spa & Wellness',
    desc: 'Full-service spa with hammam, sauna & private treatment rooms',
  },
  {
    Icon: Umbrella,
    title: 'Private Beach',
    desc: 'Exclusive owner access with reserved sunbeds & personal service',
  },
  {
    Icon: Flag,
    title: 'Golf Course (PGA National)',
    desc: 'Championship 18-hole course, 10 minutes from the resort',
  },
  {
    Icon: UtensilsCrossed,
    title: 'Fine Dining',
    desc: 'Award-winning restaurant — Istrian & Mediterranean cuisine',
  },
  {
    Icon: Shield,
    title: '24/7 Security & Concierge',
    desc: 'Gated community with round-the-clock personal service',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function WhatIsPetram() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={STAGGER_MD}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={FADE_UP}
            className="font-body font-bold text-xs uppercase tracking-[0.2em] text-gold"
          >
            The Resort
          </motion.p>

          <motion.h2
            variants={FADE_UP}
            className="font-display font-light text-4xl md:text-5xl text-navy-deep mt-4"
            style={{ lineHeight: 1.1 }}
          >
            Europe&apos;s Most Exclusive New Resort Residences — Istria, Croatia
          </motion.h2>

          <motion.p
            variants={FADE_UP}
            className="font-body font-light text-base leading-relaxed mt-6"
            style={{ color: 'rgba(44,44,44,0.78)' }}
          >
            Petram Resort &amp; Residences rises from the ancient limestone of Savudrija —
            Croatia&apos;s most coveted peninsula. Each of the 55 privately owned villas
            occupies a unique position above the Adriatic, delivering unobstructed sea and
            sunset views that have no rival on the European coastline. At its crown sits
            the largest rooftop infinity pool in Europe — a landmark statement that defines
            the entire resort.
          </motion.p>
        </motion.div>

        {/* ── Gold divider ───────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="w-16 h-px bg-gold mx-auto mt-12 mb-14 origin-center"
          aria-hidden="true"
        />

        {/* ── Amenity grid ── collapsed-border technique ────────────── */}
        {/*
          Container:  border-t  border-l
          Each cell:  border-b  border-r
          → each shared edge has exactly one border, no doubles.
        */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={STAGGER_MD}
          className="grid grid-cols-2 lg:grid-cols-3 border-t border-l border-cream-dark"
        >
          {AMENITIES.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={FADE_UP}
              className="flex flex-col gap-4 p-6 lg:p-8 border-b border-r border-cream-dark"
            >
              {/* Gold icon circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(200,169,110,0.12)' }}
              >
                <Icon size={18} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
              </div>

              <div>
                <p className="font-body font-semibold text-sm text-navy-deep leading-snug">
                  {title}
                </p>
                <p
                  className="font-body font-light text-xs mt-1 leading-relaxed"
                  style={{ color: 'rgba(44,44,44,0.58)' }}
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Masterplan image ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-14 aspect-video w-full overflow-hidden relative"
        >
          <Image
            src="/images/masterplan/masterplan-aerial-view.png"
            alt="Petram Resort & Residences masterplan — aerial view, Savudrija, Istria"
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* ── LeadingRE badge ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 pt-10 border-t border-cream-dark flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
        >
          <Image
            src="/images/logos/leadingre-badge.png"
            alt="Leading Real Estate Companies of the World"
            width={88}
            height={88}
            className="flex-shrink-0 w-22 h-22 object-contain"
            style={{ filter: 'invert(1)' }}
          />

          <div>
            <p
              className="font-body text-[11px] uppercase tracking-[0.18em]"
              style={{ color: 'rgba(44,44,44,0.42)' }}
            >
              Member of
            </p>
            <p
              className="font-body font-semibold text-base mt-1"
              style={{ color: 'rgba(44,44,44,0.80)' }}
            >
              Leading Real Estate Companies of the World™
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

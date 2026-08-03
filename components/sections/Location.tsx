'use client';

import { motion } from 'framer-motion';
import { Plane, Car } from 'lucide-react';
import { FADE_UP_LG, FADE_UP_SM, STAGGER_MD, STAGGER_SM, EASE_OUT } from '@/lib/animations';
import { usePageContent } from '@/lib/content-context';

// ─── Data ─────────────────────────────────────────────────────────────────────

type TransportMode = 'plane' | 'car';

interface ProximityCard {
  city: string;
  time: string;
  mode: TransportMode;
}

// Transport mode per proximity card, matched by index to location.proximity
const PROXIMITY_MODES: TransportMode[] = ['car', 'car', 'car', 'car', 'plane', 'car'];

// ─── Proximity card ───────────────────────────────────────────────────────────

function ProxCard({ card }: { card: ProximityCard }) {
  const Icon = card.mode === 'plane' ? Plane : Car;
  return (
    <motion.div
      variants={FADE_UP_SM}
      className="flex-shrink-0 w-36 flex flex-col items-center text-center py-6 px-4"
      style={{ backgroundColor: '#F5F3EF', border: '1px solid rgba(200,169,110,0.2)' }}
    >
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
        style={{ backgroundColor: 'rgba(200,169,110,0.12)' }}
        aria-hidden="true"
      >
        <Icon size={16} strokeWidth={1.5} className="text-gold" />
      </span>
      <span className="font-body font-bold text-[13px] text-navy-deep leading-tight">
        {card.city}
      </span>
      <span className="font-body font-light text-[12px] text-navy-deep/50 mt-1.5 tracking-wide">
        {card.time}
      </span>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Location() {
  const { location } = usePageContent();
  const proximity: ProximityCard[] = location.proximity.map((card, i) => ({
    ...card,
    mode: PROXIMITY_MODES[i],
  }));

  return (
    <section id="location" className="bg-navy-deep py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={STAGGER_MD}
          className="text-center mb-16"
        >
          <motion.p
            variants={FADE_UP_SM}
            className="font-body font-bold text-xs uppercase tracking-[0.2em] text-gold"
          >
            {location.eyebrow}
          </motion.p>

          <motion.h2
            variants={FADE_UP_LG}
            className="font-display font-light text-4xl md:text-5xl text-white mt-4"
            style={{ lineHeight: 1.1 }}
          >
            {location.headlineLine1}{' '}
            <br className="hidden sm:block" />
            {location.headlineLine2}
          </motion.h2>
        </motion.div>

        {/* ── Proximity cards — horizontal scroll on mobile ──────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={STAGGER_SM}
          className="flex gap-3 overflow-x-auto pb-2 md:justify-center md:flex-wrap md:overflow-visible mb-16 -mx-6 px-6 md:mx-0 md:px-0"
          role="list"
          aria-label="Distance from Petram Resort"
        >
          {proximity.map((card) => (
            <ProxCard key={card.city} card={card} />
          ))}
        </motion.div>

        {/* ── Gold divider ───────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="w-16 h-px bg-gold mx-auto mb-16 origin-center"
          aria-hidden="true"
        />

        {/* ── Google Maps embed ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mb-12 w-full aspect-video overflow-hidden"
          style={{ border: '1px solid rgba(200,169,110,0.2)' }}
        >
          <iframe
            src="https://www.google.com/maps?q=45.4934,13.5008&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Petram Resort location — Savudrija, Istria, Croatia (45.4934°N 13.5008°E)"
          />
        </motion.div>

        {/* ── Location narrative ─────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          className="font-body font-light text-[14px] text-white/60 leading-loose text-center max-w-2xl mx-auto"
        >
          {location.body}
        </motion.p>

      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FADE_UP_SM, STAGGER_SM } from '@/lib/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface LifestyleItem {
  caption: string;
  aspectClass: string;
  imageSrc: string;
}

/*
  Column split (flexbox masonry):
    Col 1 — indices 0, 2, 4: landscape · landscape · portrait
    Col 2 — indices 1, 3, 5: portrait  · landscape · landscape

  Different aspect ratios create natural stagger between the two columns,
  giving the masonry feel without JavaScript height calculations.
*/
const ITEMS: LifestyleItem[] = [
  {
    caption:     'Largest rooftop pool in Europe',
    aspectClass: 'aspect-video',
    imageSrc:    '/images/lifestyle/pool.jpg',
  },
  {
    caption:     'PGA National Golf — 10 minutes',
    aspectClass: 'aspect-[4/5]',
    imageSrc:    '/images/lifestyle/golf.jpg',
  },
  {
    caption:     'Private beach for owners',
    aspectClass: 'aspect-[4/3]',
    imageSrc:    '/images/lifestyle/beach.jpg',
  },
  {
    caption:     'Award-winning fine dining',
    aspectClass: 'aspect-video',
    imageSrc:    '/images/lifestyle/dining.jpg',
  },
  {
    caption:     'Spa & wellness sanctuary',
    aspectClass: 'aspect-[3/4]',
    imageSrc:    '/images/lifestyle/spa.jpg',
  },
  {
    caption:     'Istrian sunsets, every evening',
    aspectClass: 'aspect-[4/3]',
    imageSrc:    '/images/lifestyle/villa-interior.jpg',
  },
];

// ─── Photo item ───────────────────────────────────────────────────────────────

function PhotoItem({ item }: { item: LifestyleItem }) {
  return (
    <motion.div variants={FADE_UP_SM} className="w-full">
      <div className={`w-full overflow-hidden relative ${item.aspectClass}`}>
        <Image
          src={item.imageSrc}
          alt={item.caption}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover object-center"
        />
        {/* Subtle bottom vignette for caption readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 40%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Caption */}
      <p className="font-body font-light text-[11px] tracking-wide text-gold mt-2.5">
        {item.caption}
      </p>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Lifestyle() {
  const col1 = ITEMS.filter((_, i) => i % 2 === 0);
  const col2 = ITEMS.filter((_, i) => i % 2 === 1);

  return (
    <section id="lifestyle" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Headline ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2
            className="font-display font-light italic text-5xl md:text-6xl text-navy-deep"
            style={{ lineHeight: 1.08 }}
          >
            A Life Earned. A Life Lived.
          </h2>
        </motion.div>

        {/* ── Masonry grid — two-column flexbox split ─────────────────
            Items are split by even/odd index across two flex columns.
            Different aspect ratios stagger the column heights organically.
        ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={STAGGER_SM}
          className="flex items-start gap-3 md:gap-5"
        >
          {/* Column 1: items 0, 2, 4 */}
          <div className="flex-1 flex flex-col gap-3 md:gap-5">
            {col1.map((item) => (
              <PhotoItem key={item.caption} item={item} />
            ))}
          </div>

          {/* Column 2: items 1, 3, 5 */}
          <div className="flex-1 flex flex-col gap-3 md:gap-5">
            {col2.map((item) => (
              <PhotoItem key={item.caption} item={item} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

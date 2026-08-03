'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { gtmEvents } from '@/lib/gtm';
import { EASE_OUT } from '@/lib/animations';
import { usePageContent } from '@/lib/content-context';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

// ─── Accordion item ───────────────────────────────────────────────────────────

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-cream-dark last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="font-body font-semibold text-[14px] text-navy-deep leading-snug group-hover:text-gold transition-colors duration-200 flex-1"
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: EASE_OUT }}
          className="flex-shrink-0 text-gold"
          aria-hidden="true"
        >
          <ChevronDown size={18} strokeWidth={1.75} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-body font-light text-[13px] text-charcoal leading-loose pb-5 max-w-2xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function FAQ() {
  const { faq } = usePageContent();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
      gtmEvents.faqOpened(index, faq.items[index].question);
    }
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="text-center mb-14"
        >
          <p className="font-body font-bold text-xs uppercase tracking-[0.2em] text-gold">
            {faq.eyebrow}
          </p>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-navy-deep mt-4"
            style={{ lineHeight: 1.1 }}
          >
            {faq.headline}
          </h2>
        </motion.div>

        {/* ── Accordion ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
          className="border-t border-cream-dark"
        >
          {faq.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

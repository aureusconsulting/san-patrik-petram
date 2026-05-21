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
    ctaLabel:     'Request Villa Details',
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
    name:                'Petram Resort & Residences',
    location:            'Savudrija, Istria, Croatia',
    totalUnits:          55,
    startingPrice:       '€1,700,000',
    startingPriceShort:  '€1.7M',
    developer:           'Nobilis Expo d.o.o.',
    leadingReMember:     true,
    remainingUnits:      12,
  },

  // ── Investment case ──────────────────────────────────────────────────────────
  investment: {
    yieldRange:         '6–8%',
    yieldLabel:         'Expected Annual Rental Yield',
    occupancyRate:      '78%',
    occupancyLabel:     'Peak Season Occupancy Rate',
    appreciationRate:   '42%',
    appreciationLabel:  'Property Value Growth — Istria 2019–2024',
    rentalProgramName:  'Petram Managed Rental',
  },

  // ── Agent ────────────────────────────────────────────────────────────────────
  agent: {
    name:         'Ivan Varat',
    title:        'Luxury Villa Specialist — San Patrik Real Estate',
    phone:        '+385992172314',
    phoneDisplay: '+385 99 217 2314',
    email:        'ivan@sanpatrik.co',
    whatsappUrl:  'https://api.whatsapp.com/send?phone=385992172314&text=Hi+Ivan%2C+I%27d+like+to+know+more+about+Petram+Resort+villas.',
    quote:        "When you invest in Petram, you're not buying a property — you're securing a lifestyle and a financial future in the heart of Europe.",
    imageSrc:     '/images/agent/ivan-varat.jpg',
    imageAlt:     'Ivan Varat — Luxury Villa Specialist, San Patrik Real Estate',
  },

  // ── Villa portfolio ──────────────────────────────────────────────────────────
  villas: [
    {
      typeId:   'type-1',
      type:     'Type I',
      name:     'Villa Type I',
      size:     '282 m²',
      beds:     2,
      baths:    1,
      feature:  '🌿 Garden, Terrace & Private Parking',
      price:    '€1,746,375',
      soldOut:  false,
      imageSrc: '/images/villas/villa-type-1.webp',
      imageAlt: 'Villa Type I — Garden villa at Petram Resort, Savudrija Istria',
    },
    {
      typeId:   'type-2',
      type:     'Type II',
      name:     'Villa Type II',
      size:     '376 m²',
      beds:     3,
      baths:    4,
      feature:  '🍷 Wine Cellar & Double Garage',
      price:    '€2,007,250',
      soldOut:  false,
      imageSrc: '/images/villas/villa-type-2.webp',
      imageAlt: 'Villa Type II — Sea view villa at Petram Resort, Savudrija Istria',
    },
    {
      typeId:   'type-3',
      type:     'Type III',
      name:     'Villa Type III',
      size:     '489 m²',
      beds:     4,
      baths:    5,
      feature:  '🏊 Private Rooftop Pool',
      price:    '€2,929,700',
      soldOut:  false,
      imageSrc: '/images/villas/villa-type-3.webp',
      imageAlt: 'Villa Type III — Rooftop pool villa at Petram Resort, Savudrija Istria',
    },
    {
      typeId:   'type-4',
      type:     'Type IV',
      name:     'Villa Type IV',
      size:     '480 – 550 m²',
      beds:     6,
      baths:    7,
      feature:  '🏆 Private Cliffside Estate',
      price:    '€3,500,000',
      soldOut:  true,
      imageSrc: '/images/villas/villa-type-4.jpg',
      imageAlt: 'Villa Type IV — Cliffside estate at Petram Resort, Savudrija Istria',
    },
  ],

  // ── Final CTA / Footer ───────────────────────────────────────────────────────
  finalCta: {
    urgencyLabel: 'Only 12 Villas Remaining',
    headline:     'Secure Your\nPetram Villa',
    subheadline:  'Limited release. Priority access for registered investors.',
    ctaPrimary:   'Request Villa Details',
    legalEntity:  'Nobilis Expo d.o.o.',
    year:         '2026',
  },

};

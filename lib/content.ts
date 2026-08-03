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
    eyebrow:            'The Investment',
    headline:           'Your Villa Works For You — Year-Round',
    benefits: [
      'Professional rental management — no owner involvement required',
      'Flexible owner usage — use your villa whenever you want',
      'All rental income managed and reported transparently',
      'Full legal compliance and guest registration handled',
      "Long-term capital appreciation in EU's fastest-growing luxury market",
      'No capital gains tax after 2 years for EU residents',
    ],
    croatiaTitle: 'Why Croatia? Why Now?',
    croatiaTags: [
      'EU member state',
      'Euro currency',
      'Schengen zone',
      'Established property law',
      'Strong demand from German, Austrian, Slovak markets',
    ],
    croatiaQuote:    'Croatia is where smart European capital is moving — similar to Dubai a decade ago, but within the EU.',
    rentalParagraph: 'Petram Resort operates a fully managed rental programme — your villa is listed, maintained, and hosted by our on-site team while you earn. Owners receive quarterly income reports, flexible personal-use calendars, and a dedicated property manager. No effort required on your part.',
  },

  // ── Agent ────────────────────────────────────────────────────────────────────
  agent: {
    name:         'Ivan Varat',
    title:        'Luxury Villa Specialist — San Patrik Real Estate',
    phone:        '+385992172314',
    phoneDisplay: '+385 99 217 2314',
    email:        'ivan@sanpatrik.eu',
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
    // Rendered footer strings (FinalCTA.tsx)
    headlineBefore: 'Only ',
    headlineAfter:  ' Villas Remaining —',
    headlineLine2:  'Secure Your Viewing Today',
    whatsappLabel:  'WhatsApp Ivan',
    privacyLabel:   'Privacy Policy',
    cookieLabel:    'Cookie Policy',
    copyright:      '© 2026 San Patrik (Nobilis Expo d.o.o.)',
  },

  // ── Resort overview (WhatIsPetram.tsx) ──────────────────────────────────────
  whatIsPetram: {
    eyebrow:  'The Resort',
    headline: "Europe's Most Exclusive New Resort Residences — Istria, Croatia",
    body:     "Petram Resort & Residences rises from the ancient limestone of Savudrija — Croatia's most coveted peninsula. Each of the 55 privately owned villas occupies a unique position above the Adriatic, delivering unobstructed sea and sunset views that have no rival on the European coastline. At its crown sits the largest rooftop infinity pool in Europe — a landmark statement that defines the entire resort.",
    amenities: [
      { title: 'Rooftop Infinity Pool',      desc: 'Largest in Europe — panoramic Adriatic views at 42 m elevation' },
      { title: 'Spa & Wellness',             desc: 'Full-service spa with hammam, sauna & private treatment rooms' },
      { title: 'Private Beach',              desc: 'Exclusive owner access with reserved sunbeds & personal service' },
      { title: 'Golf Course (PGA National)', desc: 'Championship 18-hole course, 10 minutes from the resort' },
      { title: 'Fine Dining',                desc: 'Award-winning restaurant — Istrian & Mediterranean cuisine' },
      { title: '24/7 Security & Concierge',  desc: 'Gated community with round-the-clock personal service' },
    ],
    memberOfLabel: 'Member of',
    memberOfName:  'Leading Real Estate Companies of the World™',
  },

  // ── Villa portfolio section strings (VillaPortfolio.tsx) ────────────────────
  villaPortfolio: {
    eyebrow:          'Villa Portfolio',
    headlineBefore:   'Choose Your Villa — ',
    headlineAfter:    ' Residences, Four Distinct Types',
    urgencyBefore:    '⚡ Limited availability — only ',
    urgencyAfter:     ' villas remaining',
    bedLabel:         'bed',
    bathLabel:        'bath',
    soldOutLabel:     'Sold Out',
    unavailableLabel: 'Unavailable',
    ctaLabel:         'Request Villa Details',
  },

  // ── Lifestyle (Lifestyle.tsx) ────────────────────────────────────────────────
  lifestyle: {
    headline: 'A Life Earned. A Life Lived.',
    captions: [
      'Largest rooftop pool in Europe',
      'PGA National Golf — 10 minutes',
      'Private beach for owners',
      'Award-winning fine dining',
      'Spa & wellness sanctuary',
      'Istrian sunsets, every evening',
    ],
  },

  // ── Location (Location.tsx) ──────────────────────────────────────────────────
  location: {
    eyebrow:       'Location',
    headlineLine1: 'Savudrija, Istria —',
    headlineLine2: 'The Heart of European Accessibility',
    proximity: [
      { city: 'Venice',       time: '1.5h'  },
      { city: 'Trieste',      time: '1h'    },
      { city: 'Ljubljana',    time: '2h'    },
      { city: 'Zagreb',       time: '2.5h'  },
      { city: 'Pula Airport', time: '45min' },
      { city: 'Vienna',       time: '4.5h'  },
    ],
    body: "Savudrija sits at the northwestern tip of the Istrian peninsula, where the Adriatic meets the Slovenian border — placing Petram Resort within reach of five European capitals in under three hours. The peninsula's UNESCO-listed coastline, Michelin-starred dining scene, and PGA National golf course make it Croatia's most coveted address for discerning European buyers. Direct air connections via Pula International Airport and proximity to Venice Marco Polo ensure effortless arrival from across the continent.",
  },

  // ── Lead form + agent section (AgentLeadForm.tsx) ────────────────────────────
  form: {
    eyebrow:     'Get In Touch',
    headline:    'Speak With Ivan Today',
    subheadline: 'Request your private brochure, floor plans, and investment details — no commitment required.',
    memberBadge: 'Member of LeadingRE Global Network',
    preferChat:  'Prefer to chat? Message {name} directly',
    whatsappCta: 'Message {name} on WhatsApp',
    labels: {
      fullName:  'Full Name',
      email:     'Email Address',
      phone:     'Phone / WhatsApp',
      country:   'Country of Residence',
      villaType: 'Villa Type of Interest',
      message:   'Message',
    },
    placeholders: {
      fullName:  'Your full name',
      email:     'your@email.com',
      phone:     '+49 123 456 7890 (include country code)',
      country:   'Select your country',
      villaType: 'Select a villa type',
      message:   'Any questions or preferred viewing dates?',
    },
    countries: [
      'Germany', 'Austria', 'Switzerland', 'Slovenia', 'Slovakia',
      'Czech Republic', 'Croatia', 'United Kingdom', 'Netherlands', 'Belgium',
      'France', 'Spain', 'Italy', 'Poland', 'Hungary',
      'Romania', 'USA', 'UAE', 'Russia', 'Other',
    ],
    villaTypes: [
      { value: 'type-1', label: 'Type I — Garden Villa'      },
      { value: 'type-2', label: 'Type II — Sea View Villa'   },
      { value: 'type-3', label: 'Type III — Cliff Penthouse' },
      { value: 'type-4', label: 'Type IV — Signature Estate' },
      { value: 'unsure', label: 'Not sure yet'               },
    ],
    validation: {
      fullName:     'Please enter your full name',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      phone:        'Please include your country code',
      country:      'Please select your country',
      villaType:    'Please select a villa type',
      gdpr:         'You must accept the Privacy Policy to continue',
    },
    gdprPrefix: 'I agree to the ',
    gdprLink:   'Privacy Policy',
    gdprSuffix: ' and consent to being contacted about this enquiry',
    recaptchaPrefix:  'Protected by reCAPTCHA — ',
    recaptchaPrivacy: 'Privacy',
    recaptchaMid:     ' & ',
    recaptchaTerms:   'Terms',
    recaptchaSuffix:  ' apply.',
    submit:      'Request Villa Details',
    submitting:  'Sending…',
    serverError:  'Something went wrong. Please try again or call Ivan directly.',
    networkError: 'Network error. Please try again or call Ivan directly.',
    thankYouTitle: 'Thank you, {name}.',
    thankYouBody:  'Ivan will contact you within 24 hours. Keep an eye on your inbox — and your WhatsApp.',
  },

  // ── Social proof (SocialProof.tsx) ───────────────────────────────────────────
  socialProof: {
    leadingReTitle: 'Leading Real Estate Companies of the World™',
    leadingReBody:  'Member of LeadingRE — an exclusive global network of top independent agencies selected for quality and results. San Patrik is the only member in Croatia, among fewer than 570 companies worldwide.',
    testimonials: [
      {
        quote:   'Buying our villa through Ivan was the most seamless property purchase we have ever made. The documentation, the legal process, the rental setup — everything was handled with exceptional professionalism. We are already earning returns.',
        name:    'Thomas & Marta K.',
        country: 'Germany',
        stars:   5,
      },
      {
        quote:   'We had been looking at Istria for three years before finding Petram. The combination of resort infrastructure, rental management, and direct sea views at this price point simply does not exist elsewhere in Europe.',
        name:    'Andreas B.',
        country: 'Austria',
        stars:   5,
      },
    ],
    stats: [
      { value: '50+', label: 'Properties Sold in Istria'      },
      { value: '15+', label: 'Years Combined Experience'       },
      { value: '12',  label: 'Countries Our Clients Represent' },
    ],
  },

  // ── FAQ (FAQ.tsx) ────────────────────────────────────────────────────────────
  faq: {
    eyebrow:  'Frequently Asked',
    headline: 'Your Questions, Answered',
    items: [
      {
        question: 'Can foreigners (EU and non-EU citizens) purchase property in Croatia?',
        answer:   'Yes. EU citizens may purchase property in Croatia under the same conditions as Croatian nationals. Non-EU citizens may also purchase real estate in Croatia, subject to bilateral agreements and standard registration procedures. Our legal team handles the full acquisition process for international buyers.',
      },
      {
        question: 'What taxes and legal costs are involved in buying?',
        answer:   'Property transfer tax in Croatia is 3% of the property value, payable by the buyer. Additional costs typically include notary fees, land registry fees, and legal representation — usually 1–2% combined. VAT applies to new-build properties from VAT-registered developers instead of transfer tax. Ivan can provide a full cost breakdown for your specific situation.',
      },
      {
        question: 'How does the Petram rental management program work?',
        answer:   'Petram Resort operates a fully managed rental programme. Our on-site team handles listing, booking management, guest check-in and check-out, housekeeping, and maintenance. Owners receive quarterly income statements and can reserve their villa for personal use with advance notice. No action is required from owners.',
      },
      {
        question: 'What is the expected annual rental yield?',
        answer:   'Based on comparable properties in Istria and our resort occupancy modelling, owners can expect 6–8% net annual rental yield. Peak season (June–August) typically sees 90%+ occupancy, with strong shoulder-season demand from the German, Austrian, and Slovenian markets.',
      },
      {
        question: 'What is included in the purchase price?',
        answer:   'All villas are delivered fully finished and fitted to resort standard. The purchase price includes interior furnishings, white goods, outdoor furniture, landscaping, and connection to resort utilities. A detailed inclusions schedule is provided with the reservation agreement.',
      },
      {
        question: 'When is the resort scheduled for completion?',
        answer:   'Petram Resort is currently under development with construction progressing on schedule. Full resort completion and handover to owners is targeted for [DATE]. Buyers receive a construction progress report quarterly and are invited to a site visit prior to handover.',
      },
      {
        question: 'Can I finance the purchase with an EU mortgage?',
        answer:   'Yes. Croatian banks and several EU lenders offer mortgage financing for property in Croatia. Typical loan-to-value ratios range from 60–70%. We work with preferred mortgage brokers who specialise in cross-border financing for international buyers and can introduce you to the right contacts.',
      },
      {
        question: 'What are my owner usage rights during peak season?',
        answer:   'Owner usage is flexible. You may block weeks for personal use at any time, with reasonable advance notice during peak season (typically 90 days). There is no restriction on the total number of weeks you may use your villa. Owners who choose not to use their villa during peak season participate more fully in the rental income programme.',
      },
      {
        question: 'Is the investment legally protected in Croatia?',
        answer:   'Croatia is an EU member state with a well-established legal framework for real estate ownership. Property rights are registered in the Land Registry (Zemljišna knjiga), which is publicly accessible and legally binding. All Petram transactions are handled by licensed Croatian notaries and registered with local authorities.',
      },
      {
        question: 'How do I arrange a viewing or investment trip?',
        answer:   'Contact Ivan directly via the form on this page, by phone, or via WhatsApp. We organise private investment site visits, including airport transfers, accommodation in Istria, and a guided resort presentation. Most visits take place over one to two days and are arranged around your schedule.',
      },
    ],
  },

  // ── Mobile CTA bar (MobileCTABar.tsx) ────────────────────────────────────────
  mobileCta: {
    call:    'Call Ivan',
    request: 'Request Details',
  },

  // ── Floating WhatsApp button (WhatsAppButton.tsx) ────────────────────────────
  whatsappFloat: {
    url:     "https://api.whatsapp.com/send?phone=385992172314&text=Hello%20Ivan%2C%20I'm%20interested%20in%20the%20Petram%20Resort%20villas.%20Can%20we%20speak%3F",
    tooltip: 'Chat with Ivan',
  },

};

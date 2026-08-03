// ─────────────────────────────────────────────────────────────────────────────
// Petram Resort & Residences — German (DE) content
// Source: vault doc "Petram - LP Copy DE.md" (2026-07-08). Full content object:
// spreads the EN defaults and overrides every translated value. Not connected
// to Sanity — /de renders these values directly.
// Number format: body copy uses German style "1.700.000 €", compact stats use
// "€1,7 Mio." (per the doc's convention decision).
// ─────────────────────────────────────────────────────────────────────────────

import { content } from './content';

export const contentDe: typeof content = {
  ...content,

  meta: {
    ...content.meta,
    description: 'Ultra-exklusive Steinvillen mit privaten Pools an der Küste Istriens — Savudrija, Kroatien. Ab 1.700.000 €, mit verwaltetem Mietertrag.',
  },

  nav: {
    ...content.nav,
    ctaLabel: 'Villa-Details anfordern',
  },

  hero: {
    ...content.hero,
    eyebrow:     'Petram Resort & Residences · Savudrija, Istrien',
    headline:    'Wo Europas Elite investiert',
    subheadline: 'Exklusive Villenresidenzen mit verwaltetem Mietertrag — ab 1.700.000 €',
    ctaPrimary:  'Villa-Details anfordern',
    ctaPhone:    'Ivan direkt anrufen',
    ctaBrief:    'Investment Brief herunterladen',
    stats: [
      { value: '55',           label: 'Exklusive Villen'    },
      { value: 'Golf & Meer',  label: 'Direkter Zugang'     },
      { value: 'Verwaltet',    label: 'Vermietungsprogramm' },
      { value: 'Ab €1,7 Mio.', label: 'Einstiegspreis'      },
    ],
  },

  project: {
    ...content.project,
    location:           'Savudrija, Istrien, Kroatien',
    startingPrice:      '1.700.000 €',
    startingPriceShort: '€1,7 Mio.',
  },

  investment: {
    ...content.investment,
    yieldRange:        '6–8 %',
    yieldLabel:        'Erwartete jährliche Mietrendite',
    occupancyRate:     '78 %',
    occupancyLabel:    'Auslastung in der Hochsaison',
    appreciationRate:  '42 %',
    appreciationLabel: 'Immobilien-Wertzuwachs — Istrien 2019–2024',
    eyebrow:           'Das Investment',
    headline:          'Ihre Villa arbeitet für Sie — das ganze Jahr',
    benefits: [
      'Professionelle Vermietung — kein Aufwand für Eigentümer',
      'Flexible Eigennutzung — nutzen Sie Ihre Villa, wann immer Sie möchten',
      'Alle Mieterträge transparent verwaltet und quartalsweise berichtet',
      'Rechtskonformität und Gästeregistrierung vollständig übernommen',
      'Langfristiger Wertzuwachs im am schnellsten wachsenden Luxusmarkt der EU',
      'Für EU-Ansässige: steuerfreier Verkauf nach 2 Jahren Haltedauer',
    ],
    croatiaTitle: 'Warum Kroatien? Warum jetzt?',
    croatiaTags: [
      'EU-Mitgliedstaat',
      'Euro-Währung',
      'Schengen-Raum',
      'Grundbuchgesichertes Eigentum — lastenfreier Titel, EU-Rechtsrahmen',
      'Starke Nachfrage aus Deutschland, Österreich und der Schweiz',
    ],
    croatiaQuote:    'Kroatien ist der Ort, an den kluges europäisches Kapital gerade zieht — vergleichbar mit Dubai vor einem Jahrzehnt, aber innerhalb der EU.',
    rentalParagraph: 'Ihre Villa wird von unserem Team vor Ort inseriert, gepflegt und betreut, während Sie verdienen. Eigentümer erhalten vierteljährliche Ertragsberichte, einen flexiblen Eigennutzungskalender und einen persönlichen Property Manager. Ohne eigenen Aufwand.',
  },

  // Draft DE copy — pending native review. Source: vault "Petram - LP Copy DE.md" §15
  // (headline changed to "Why invest" phrasing per brief; success/micro lines adapted
  // to direct download instead of email delivery).
  investmentBrief: {
    ...content.investmentBrief,
    eyebrow:          'Investmentanalyse',
    headline:         'Warum in Istrien investieren?',
    body:             'Renditemodell, Marktdaten Istrien 2019–2024, Kaufprozess und Steuern — kompakt aufbereitet für Ihre eigene Prüfung im Petram Investment Brief.',
    emailLabel:       'E-Mail-Adresse',
    emailPlaceholder: 'ihre@email.de',
    ctaLabel:         'Investment Brief herunterladen (PDF)',
    submitting:       'Wird gesendet…',
    microLine:        'Kein Anruf, keine Verpflichtung — zuerst die Zahlen.',
    successMessage:   'Vielen Dank — Ihr Download startet. Wir empfehlen, das PDF für später zu speichern.',
    validation: {
      emailRequired: 'E-Mail-Adresse ist erforderlich',
      emailInvalid:  'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    },
    serverError:  'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    networkError: 'Netzwerkfehler. Bitte versuchen Sie es erneut.',
  },

  agent: {
    ...content.agent,
    title:       'Spezialist für Luxusvillen — San Patrik Real Estate',
    quote:       'Wer in Petram investiert, kauft nicht nur eine Immobilie — er sichert sich einen Lebensstil und eine finanzielle Zukunft im Herzen Europas.',
    imageAlt:    'Ivan Varat — Spezialist für Luxusvillen, San Patrik Real Estate',
    whatsappUrl: 'https://api.whatsapp.com/send?phone=385992172314&text=Guten%20Tag%20Ivan%2C%20ich%20interessiere%20mich%20f%C3%BCr%20die%20Petram-Villen%20und%20bitte%20um%20weitere%20Informationen.',
  },

  villas: [
    {
      ...content.villas[0],
      type:     'Typ I',
      name:     'Villa Typ I — Gartenvilla',
      feature:  '🌿 Garten, Terrasse & privater Stellplatz',
      price:    '1.746.375 €',
      imageAlt: 'Villa Typ I — Gartenvilla im Petram Resort, Savudrija, Istrien',
    },
    {
      ...content.villas[1],
      type:     'Typ II',
      name:     'Villa Typ II — Meerblick-Villa',
      feature:  '🍷 Weinkeller & Doppelgarage',
      price:    '2.007.250 €',
      imageAlt: 'Villa Typ II — Meerblick-Villa im Petram Resort, Savudrija, Istrien',
    },
    {
      ...content.villas[2],
      type:     'Typ III',
      name:     'Villa Typ III — Rooftop-Pool-Villa',
      feature:  '🏊 Privater Rooftop-Pool',
      price:    '2.929.700 €',
      imageAlt: 'Villa Typ III — Rooftop-Pool-Villa im Petram Resort, Savudrija, Istrien',
    },
    {
      ...content.villas[3],
      type:     'Typ IV',
      name:     'Villa Typ IV — Anwesen in Klippenlage',
      feature:  '🏆 Privates Anwesen in Klippenlage',
      price:    '3.500.000 €',
      imageAlt: 'Villa Typ IV — Anwesen in Klippenlage im Petram Resort, Savudrija, Istrien',
    },
  ],

  finalCta: {
    ...content.finalCta,
    urgencyLabel:   'Nur noch 12 Villen verfügbar',
    headline:       'Sichern Sie sich\nIhre Petram-Villa',
    subheadline:    'Limitierte Verfügbarkeit. Bevorzugter Zugang für registrierte Investoren.',
    ctaPrimary:     'Villa-Details anfordern',
    headlineBefore: 'Nur noch ',
    headlineAfter:  ' Villen —',
    headlineLine2:  'Sichern Sie sich heute Ihre Besichtigung',
    whatsappLabel:  'WhatsApp an Ivan',
    privacyLabel:   'Datenschutzerklärung',
    cookieLabel:    'Cookie-Richtlinie',
  },

  whatIsPetram: {
    ...content.whatIsPetram,
    eyebrow:  'Das Resort',
    headline: 'Europas exklusivste neue Resort-Residenzen — Istrien, Kroatien',
    body:     'Das Petram Resort erhebt sich aus altem Kalkstein in Savudrija, auf Kroatiens begehrtester Halbinsel. Jede der 55 Villen im Privateigentum bietet eine einzigartige Lage über der Adria mit freiem Blick auf Meer und Sonnenuntergang. Herzstück des Resorts: der 105 Meter lange Rooftop-Infinity-Pool — der größte Europas.',
    amenities: [
      { title: 'Rooftop-Infinity-Pool',    desc: '105 m, der größte Europas · Adria-Panorama auf 42 m Höhe' },
      { title: 'Spa & Wellness',           desc: 'Full-Service-Spa mit Hamam, Sauna & privaten Behandlungsräumen' },
      { title: 'Privater Strand',          desc: 'Exklusiv für Eigentümer, mit reservierten Liegen & persönlichem Service' },
      { title: 'Golfplatz (PGA National)', desc: '18-Loch-Championship-Kurs, 10 Minuten entfernt' },
      { title: 'Fine Dining',              desc: 'Prämiertes Restaurant · istrische & mediterrane Küche' },
      { title: '24/7 Security & Concierge', desc: 'Bewachte Anlage mit persönlichem Service rund um die Uhr' },
    ],
    memberOfLabel: 'Mitglied der',
  },

  villaPortfolio: {
    eyebrow:          'Villen-Portfolio',
    headlineBefore:   'Wählen Sie Ihre Villa — ',
    headlineAfter:    ' Residenzen, vier Typen',
    urgencyBefore:    '⚡ Begrenzte Verfügbarkeit — nur noch ',
    urgencyAfter:     ' Villen',
    bedLabel:         'Schlafzimmer',
    bathLabel:        'Bad',
    soldOutLabel:     'Verkauft',
    unavailableLabel: 'Nicht verfügbar',
    ctaLabel:         'Villa-Details anfordern',
  },

  lifestyle: {
    headline: 'Hart erarbeitet. Gut gelebt.',
    captions: [
      'Europas größter Rooftop-Pool',
      'PGA National Golf — 10 Minuten',
      'Privater Strand für Eigentümer',
      'Prämiertes Fine Dining',
      'Spa- & Wellness-Refugium',
      'Istrische Sonnenuntergänge, jeden Abend',
    ],
  },

  location: {
    ...content.location,
    eyebrow:       'Lage',
    headlineLine1: 'Savudrija, Istrien —',
    headlineLine2: 'im Herzen der europäischen Erreichbarkeit',
    proximity: [
      { city: 'Venedig',        time: '1,5 h'   },
      { city: 'Triest',         time: '1 h'     },
      { city: 'Ljubljana',      time: '2 h'     },
      { city: 'Zagreb',         time: '2,5 h'   },
      { city: 'Flughafen Pula', time: '45 Min.' },
      { city: 'Wien',           time: '4,5 h'   },
    ],
    body: 'Savudrija liegt an der Nordwestspitze der istrischen Halbinsel, wo die Adria auf die slowenische Grenze trifft. UNESCO-gelistete Küste, Michelin-Sterne-Gastronomie und der PGA-National-Golfplatz machen den Ort zu Kroatiens begehrtester Adresse.',
  },

  form: {
    ...content.form,
    eyebrow:     'Kontakt aufnehmen',
    headline:    'Sprechen Sie noch heute mit Ivan',
    subheadline: 'Fordern Sie Broschüre, Grundrisse und Investment-Details an — unverbindlich.',
    memberBadge: 'Mitglied des LeadingRE Global Network',
    preferChat:  'Lieber per Chat? Schreiben Sie Ivan direkt',
    whatsappCta: 'Ivan auf WhatsApp schreiben',
    labels: {
      fullName:  'Vollständiger Name',
      email:     'E-Mail-Adresse',
      phone:     'Telefon / WhatsApp',
      country:   'Wohnsitzland',
      villaType: 'Gewünschter Villentyp',
      message:   'Nachricht',
    },
    placeholders: {
      fullName:  'Ihr vollständiger Name',
      email:     'ihre@email.de',
      phone:     '+49 123 456 7890 (mit Ländervorwahl)',
      country:   'Land auswählen',
      villaType: 'Villentyp auswählen',
      message:   'Fragen oder Wunschtermin für eine Besichtigung?',
    },
    countries: [
      'Deutschland', 'Österreich', 'Schweiz', 'Slowenien', 'Slowakei',
      'Tschechien', 'Kroatien', 'Vereinigtes Königreich', 'Niederlande', 'Belgien',
      'Frankreich', 'Spanien', 'Italien', 'Polen', 'Ungarn',
      'Rumänien', 'USA', 'VAE', 'Russland', 'Anderes Land',
    ],
    villaTypes: [
      { value: 'type-1', label: 'Typ I — Gartenvilla'      },
      { value: 'type-2', label: 'Typ II — Meerblick-Villa' },
      { value: 'type-3', label: 'Typ III — Cliff Penthouse' },
      { value: 'type-4', label: 'Typ IV — Signature Estate' },
      { value: 'unsure', label: 'Noch unentschieden'       },
    ],
    validation: {
      fullName:      'Bitte geben Sie Ihren vollständigen Namen ein',
      emailRequired: 'E-Mail-Adresse ist erforderlich',
      emailInvalid:  'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      phone:         'Bitte geben Sie Ihre Nummer mit Ländervorwahl an',
      country:       'Bitte wählen Sie Ihr Wohnsitzland',
      villaType:     'Bitte wählen Sie einen Villentyp',
      gdpr:          'Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren',
    },
    gdprPrefix: 'Ich stimme der ',
    gdprLink:   'Datenschutzerklärung',
    gdprSuffix: ' zu und bin einverstanden, zu dieser Anfrage kontaktiert zu werden',
    recaptchaPrefix:  'Geschützt durch reCAPTCHA — es gelten die ',
    recaptchaPrivacy: 'Datenschutzerklärung',
    recaptchaMid:     ' und ',
    recaptchaTerms:   'Nutzungsbedingungen',
    recaptchaSuffix:  ' von Google.',
    submit:       'Villa-Details anfordern',
    submitting:   'Wird gesendet…',
    serverError:  'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie Ivan direkt an.',
    networkError: 'Netzwerkfehler. Bitte versuchen Sie es erneut oder rufen Sie Ivan direkt an.',
    thankYouTitle: 'Vielen Dank, {name}.',
    thankYouBody:  'Ivan meldet sich innerhalb von 24 Stunden bei Ihnen. Behalten Sie Ihr Postfach im Blick — und Ihr WhatsApp.',
  },

  socialProof: {
    ...content.socialProof,
    leadingReBody: 'Mitglied von LeadingRE — einem exklusiven globalen Netzwerk führender unabhängiger Agenturen, ausgewählt nach Qualität und Ergebnissen. San Patrik ist das einzige Mitglied in Kroatien, unter weniger als 570 Unternehmen weltweit.',
    testimonials: [
      {
        quote:   'Der Kauf unserer Villa über Ivan war die reibungsloseste Immobilientransaktion, die wir je erlebt haben. Dokumentation, Rechtsprozess, Vermietungs-Setup — alles wurde mit außergewöhnlicher Professionalität abgewickelt. Wir erzielen bereits Erträge.',
        name:    'Thomas & Marta K.',
        country: 'Deutschland',
        stars:   5,
      },
      {
        quote:   'Wir haben drei Jahre lang in Istrien gesucht, bevor wir Petram fanden. Diese Kombination aus Resort-Infrastruktur, Vermietungsmanagement und direktem Meerblick gibt es zu diesem Preis sonst nirgends in Europa.',
        name:    'Andreas B.',
        country: 'Österreich',
        stars:   5,
      },
    ],
    stats: [
      { value: '50+', label: 'Verkaufte Immobilien in Istrien'        },
      { value: '15+', label: 'Jahre kombinierte Erfahrung'            },
      { value: '12',  label: 'Länder, aus denen unsere Kunden kommen' },
    ],
  },

  faq: {
    eyebrow:  'Häufige Fragen',
    headline: 'Ihre Fragen, beantwortet',
    items: [
      {
        question: 'Können Ausländer (EU- und Nicht-EU-Bürger) in Kroatien Immobilien erwerben?',
        answer:   'Ja. EU-Bürger erwerben Immobilien in Kroatien zu denselben Bedingungen wie kroatische Staatsangehörige — für deutsche und österreichische Käufer heißt das: kein Genehmigungsverfahren, voller Grundbucheintrag. Nicht-EU-Bürger können vorbehaltlich bilateraler Abkommen und der üblichen Registrierungsverfahren ebenfalls erwerben. Unser Rechtsteam begleitet den gesamten Erwerbsprozess für internationale Käufer.',
      },
      {
        question: 'Welche Steuern und Nebenkosten fallen beim Kauf an?',
        answer:   'Die Grunderwerbsteuer in Kroatien beträgt 3 % des Immobilienwerts und wird vom Käufer getragen. Hinzu kommen üblicherweise Notar-, Grundbuch- und Anwaltskosten — zusammen etwa 1–2 %. Bei Neubauten von umsatzsteuerpflichtigen Bauträgern fällt statt der Grunderwerbsteuer Mehrwertsteuer an. Ivan erstellt Ihnen gern eine vollständige Kostenaufstellung für Ihre Situation.',
      },
      {
        question: 'Wie funktioniert das Petram-Vermietungsprogramm?',
        answer:   'Das Petram Resort betreibt ein vollständig verwaltetes Vermietungsprogramm. Unser Team vor Ort übernimmt Inserate, Buchungsmanagement, Check-in und Check-out, Housekeeping und Instandhaltung. Eigentümer erhalten vierteljährliche Ertragsberichte und können ihre Villa mit Vorlauf jederzeit für die Eigennutzung reservieren. Für Eigentümer fällt kein Aufwand an.',
      },
      {
        question: 'Welche jährliche Mietrendite ist zu erwarten?',
        answer:   'Auf Basis vergleichbarer Objekte in Istrien und unserer Auslastungsmodellierung können Eigentümer mit 6–8 % Netto-Mietrendite pro Jahr rechnen. In der Hochsaison (Juni–August) liegt die Auslastung typischerweise bei über 90 %, mit starker Nebensaison-Nachfrage aus Deutschland, Österreich und Slowenien.',
      },
      {
        question: 'Was ist im Kaufpreis enthalten?',
        answer:   'Alle Villen werden komplett fertiggestellt und im Resort-Standard ausgestattet übergeben. Der Kaufpreis umfasst Innenausstattung, Elektrogeräte, Außenmöblierung, Gartengestaltung und den Anschluss an die Resort-Infrastruktur. Eine detaillierte Leistungsbeschreibung erhalten Sie mit der Reservierungsvereinbarung.',
      },
      {
        question: 'Wann wird das Resort fertiggestellt?',
        answer:   'Das Petram Resort befindet sich derzeit in der Entwicklung, der Bau verläuft planmäßig. Die vollständige Fertigstellung und Übergabe an die Eigentümer ist für [DATUM] vorgesehen. Käufer erhalten vierteljährlich einen Baufortschrittsbericht und werden vor der Übergabe zu einer Besichtigung eingeladen.',
      },
      {
        question: 'Kann ich den Kauf mit einer EU-Hypothek finanzieren?',
        answer:   'Ja. Kroatische Banken und mehrere EU-Kreditinstitute finanzieren Immobilien in Kroatien. Übliche Beleihungsquoten liegen bei 60–70 %. Wir arbeiten mit spezialisierten Finanzierungsvermittlern für grenzüberschreitende Käufe zusammen und stellen gern den Kontakt her.',
      },
      {
        question: 'Welche Eigennutzungsrechte habe ich in der Hochsaison?',
        answer:   'Die Eigennutzung ist flexibel. Sie können jederzeit Wochen für den Eigenbedarf blockieren — in der Hochsaison mit angemessenem Vorlauf (üblicherweise 90 Tage). Die Gesamtzahl Ihrer Nutzungswochen ist nicht begrenzt. Wer in der Hochsaison auf Eigennutzung verzichtet, partizipiert stärker am Mietertrag.',
      },
      {
        question: 'Ist die Investition in Kroatien rechtlich abgesichert?',
        answer:   'Kroatien ist EU-Mitgliedstaat mit einem etablierten Rechtsrahmen für Immobilieneigentum. Eigentumsrechte werden im kroatischen Grundbuch (Zemljišna knjiga) eingetragen — dem Pendant zum deutschen Grundbuch: öffentlich einsehbar, rechtsverbindlich und mit lastenfrei dokumentiertem Titel. Alle Petram-Transaktionen werden von zugelassenen kroatischen Notaren beurkundet und behördlich registriert.',
      },
      {
        question: 'Wie vereinbare ich eine Besichtigung oder Investment-Reise?',
        answer:   'Kontaktieren Sie Ivan direkt über das Formular auf dieser Seite, telefonisch oder per WhatsApp. Wir organisieren private Besichtigungsreisen inklusive Flughafentransfer, Unterkunft in Istrien und geführter Resort-Präsentation. Die meisten Besuche dauern ein bis zwei Tage und richten sich nach Ihrem Kalender.',
      },
    ],
  },

  mobileCta: {
    call:    'Ivan anrufen',
    request: 'Details anfordern',
  },

  whatsappFloat: {
    url:     'https://api.whatsapp.com/send?phone=385992172314&text=Guten%20Tag%20Ivan%2C%20ich%20interessiere%20mich%20f%C3%BCr%20die%20Petram-Villen%20und%20bitte%20um%20weitere%20Informationen.',
    tooltip: 'Chat mit Ivan',
  },

};

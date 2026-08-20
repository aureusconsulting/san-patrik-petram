// ─────────────────────────────────────────────────────────────────────────────
// Petram Resort & Residences — Polish (PL) content
// Source: vault doc "Petram - LP Copy PL.md" (2026-07-08). Full content object:
// spreads the EN defaults and overrides every translated value. Not connected
// to Sanity — /pl renders these values directly.
// ─────────────────────────────────────────────────────────────────────────────

import { content } from './content';

export const contentPl: typeof content = {
  ...content,

  meta: {
    ...content.meta,
    description: 'Luksusowe kamienne wille z prywatnymi basenami na wybrzeżu Istrii — Savudrija, Chorwacja.',
  },

  nav: {
    ...content.nav,
    ctaLabel: 'Zapytaj o szczegóły willi',
  },

  hero: {
    ...content.hero,
    headline:    'Tu inwestuje europejska elita',
    subheadline: 'Ekskluzywne rezydencje willowe z dochodem z zarządzanego najmu — od 1 700 000 €',
    ctaPrimary:  'Zapytaj o szczegóły willi',
    ctaPhone:    'Zadzwoń do Ivana',
    ctaBrief:    'Pobierz Investment Brief',
    stats: [
      { value: '55',           label: 'Ekskluzywnych willi' },
      { value: 'Golf i morze', label: 'W zasięgu'           },
      { value: 'Zarządzany',   label: 'Program najmu'       },
      { value: 'Od 1,7 mln €', label: 'Cena wejścia'        },
    ],
  },

  project: {
    ...content.project,
    location:           'Savudrija, Istria, Chorwacja',
    startingPrice:      '1 700 000 €',
    startingPriceShort: '1,7 mln €',
  },

  investment: {
    ...content.investment,
    yieldLabel:        'Roczny zysk netto z najmu',
    occupancyLabel:    'Obłożenie w szczycie sezonu (78% w skali roku)',
    appreciationLabel: 'Wzrost wartości nieruchomości — Istria 2019–2024',
    eyebrow:           'Inwestycja',
    headline:          'Państwa willa pracuje na Państwa — przez cały rok',
    benefits: [
      'Profesjonalne zarządzanie najmem — bez zaangażowania właściciela',
      'Elastyczne korzystanie — willa do Państwa dyspozycji, kiedy tylko Państwo chcą',
      'Cały dochód z najmu rozliczany i raportowany w pełni transparentnie',
      'Pełna zgodność prawna i meldunek gości po naszej stronie',
      'Długoterminowy wzrost wartości na najszybciej rosnącym rynku premium w UE',
      'Nowe wille bez podatku od przeniesienia własności',
    ],
    croatiaTitle: 'Dlaczego Chorwacja? Dlaczego teraz?',
    croatiaTags: [
      'Kraj członkowski UE',
      'Waluta euro',
      'Strefa Schengen',
      'Ugruntowane prawo własności',
      'Silny popyt z rynków niemieckiego, austriackiego i słowackiego',
    ],
    croatiaQuote:    'Chorwacja to kierunek, w którym płynie dziś mądry europejski kapitał — jak Dubaj dekadę temu, tylko wewnątrz UE.',
    rentalParagraph: 'Państwa willa jest wystawiana, utrzymywana i obsługiwana przez nasz zespół na miejscu, podczas gdy Państwo zarabiają. Właściciele otrzymują kwartalne raporty dochodów, elastyczny kalendarz pobytów własnych i dedykowanego opiekuna nieruchomości. Bez żadnego wysiłku.',
  },

  // Draft PL copy — pending native review. Source: vault "Petram - LP Copy PL.md" §15
  // (headline changed to "Why invest" phrasing; yield figure removed per brief).
  investmentBrief: {
    ...content.investmentBrief,
    eyebrow:          'Analiza inwestycji',
    headline:         'Dlaczego warto inwestować na Istrii?',
    body:             'Pełna analiza w jednym PDF: ceny willi, model całkowitego zwrotu, dane rynkowe Istrii i przebieg procesu zakupu — do spokojnej lektury, zanim porozmawiamy.',
    emailLabel:       'Adres e-mail',
    emailPlaceholder: 'adres@email.com',
    ctaLabel:         'Pobierz Investment Brief (PDF)',
    submitting:       'Wysyłanie…',
    microLine:        'Bez rozmowy i bez zobowiązań — najpierw liczby.',
    successMessage:   'Dziękujemy — pobieranie właśnie się rozpoczyna. Zachęcamy do zapisania pliku PDF na później.',
    validation: {
      emailRequired: 'Adres e-mail jest wymagany',
      emailInvalid:  'Proszę podać poprawny adres e-mail',
    },
    serverError:  'Coś poszło nie tak. Proszę spróbować ponownie.',
    networkError: 'Błąd połączenia. Proszę spróbować ponownie.',
  },

  agent: {
    ...content.agent,
    title:       'Specjalista ds. luksusowych willi — San Patrik Real Estate',
    quote:       'Inwestując w Petram, nie kupują Państwo po prostu nieruchomości — zabezpieczają Państwo styl życia i finansową przyszłość w sercu Europy.',
    imageAlt:    'Ivan Varat — specjalista ds. luksusowych willi, San Patrik Real Estate',
    whatsappUrl: 'https://api.whatsapp.com/send?phone=385992172314&text=Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%2Fchcia%C5%82abym%20dowiedzie%C4%87%20si%C4%99%20wi%C4%99cej%20o%20willach%20Petram%20Resort.',
  },

  villas: [
    {
      ...content.villas[0],
      type:     'Typ I',
      name:     'Willa Typ I',
      feature:  '🌿 Ogród, taras i prywatny parking',
      price:    '1 746 375 €',
      imageAlt: 'Willa Typ I — willa ogrodowa w Petram Resort, Savudrija, Istria',
    },
    {
      ...content.villas[1],
      type:     'Typ II',
      name:     'Willa Typ II',
      feature:  '🍷 Piwniczka na wino i podwójny garaż',
      price:    '2 007 250 €',
      imageAlt: 'Willa Typ II — willa z widokiem na morze, Petram Resort, Savudrija, Istria',
    },
    {
      ...content.villas[2],
      type:     'Typ III',
      name:     'Willa Typ III',
      feature:  '🏊 Prywatny basen na dachu',
      price:    '2 929 700 €',
      imageAlt: 'Willa Typ III — willa z basenem na dachu, Petram Resort, Savudrija, Istria',
    },
    {
      ...content.villas[3],
      type:     'Typ IV',
      name:     'Willa Typ IV',
      feature:  '🏆 Prywatna posiadłość na klifie',
      price:    '3 500 000 €',
      imageAlt: 'Willa Typ IV — posiadłość na klifie, Petram Resort, Savudrija, Istria',
    },
  ],

  finalCta: {
    ...content.finalCta,
    urgencyLabel:   'Zostały tylko 23 wille',
    headline:       'Zabezpiecz swoją\nwillę Petram',
    subheadline:    'Limitowana pula. Pierwszeństwo dla zarejestrowanych inwestorów.',
    ctaPrimary:     'Zapytaj o szczegóły willi',
    headlineBefore: 'Zostały tylko ',
    headlineAfter:  ' wille —',
    headlineLine2:  'Umów prezentację już dziś',
    whatsappLabel:  'WhatsApp z Ivanem',
    privacyLabel:   'Polityka prywatności',
    cookieLabel:    'Polityka cookies',
  },

  whatIsPetram: {
    ...content.whatIsPetram,
    eyebrow:  'Resort',
    headline: 'Najbardziej ekskluzywne nowe rezydencje resortowe w Europie — Istria, Chorwacja',
    body:     'Petram Resort wyrasta z antycznego wapienia w Savudriji, na najbardziej pożądanym półwyspie Chorwacji. Każda z 55 prywatnych willi ma wyjątkowe położenie nad Adriatykiem, z niczym niezasłoniętym widokiem na morze i zachody słońca. Sercem resortu jest największy basen infinity na dachu w Europie.',
    amenities: [
      { title: 'Basen infinity na dachu',    desc: 'Największy w Europie — panorama Adriatyku z wysokości 42 m' },
      { title: 'Spa i wellness',             desc: 'Pełnowymiarowe spa z hammamem, sauną i prywatnymi gabinetami zabiegowymi' },
      { title: 'Prywatna plaża',             desc: 'Wyłącznie dla właścicieli, z rezerwowanymi leżakami i osobistą obsługą' },
      { title: 'Pole golfowe (PGA National)', desc: 'Mistrzowskie 18 dołków, 10 minut drogi' },
      { title: 'Fine dining',                desc: 'Nagradzana restauracja — kuchnia istryjska i śródziemnomorska' },
      { title: 'Ochrona i concierge 24/7',   desc: 'Osiedle zamknięte z całodobową osobistą obsługą' },
    ],
    memberOfLabel: 'Członek',
  },

  villaPortfolio: {
    eyebrow:          'Portfolio willi',
    headlineBefore:   'Wybierz swoją willę — ',
    headlineAfter:    ' rezydencji, cztery typy',
    urgencyBefore:    '⚡ Ograniczona dostępność — zostały tylko ',
    urgencyAfter:     ' wille',
    bedLabel:         'sypialnie',
    bathLabel:        'łazienki',
    soldOutLabel:     'Wyprzedane',
    unavailableLabel: 'Niedostępna',
    ctaLabel:         'Zapytaj o szczegóły willi',
  },

  lifestyle: {
    headline: 'Życie, na które Państwo zapracowali. Życie, którym warto żyć.',
    captions: [
      'Największy basen na dachu w Europie',
      'Golf PGA National — 10 minut',
      'Prywatna plaża dla właścicieli',
      'Nagradzany fine dining',
      'Sanktuarium spa i wellness',
      'Istryjskie zachody słońca, każdego wieczoru',
    ],
  },

  location: {
    ...content.location,
    eyebrow:       'Lokalizacja',
    headlineLine1: 'Savudrija, Istria —',
    headlineLine2: 'w samym środku Europy',
    proximity: [
      { city: 'Wenecja',       time: '1,5 h'  },
      { city: 'Triest',        time: '1 h'    },
      { city: 'Lublana',       time: '2 h'    },
      { city: 'Zagrzeb',       time: '2,5 h'  },
      { city: 'Lotnisko Pula', time: '45 min' },
      { city: 'Wiedeń',        time: '4,5 h'  },
    ],
    body: 'Savudrija leży na północno-zachodnim cyplu półwyspu Istria, tam gdzie Adriatyk spotyka się ze słoweńską granicą. Wybrzeże z listy UNESCO, restauracje z gwiazdkami Michelin i pole golfowe PGA National czynią z niej najbardziej pożądany adres Chorwacji.',
  },

  form: {
    ...content.form,
    eyebrow:     'Kontakt',
    headline:    'Porozmawiaj z Ivanem już dziś',
    subheadline: 'Zamów prywatną broszurę, plany willi i szczegóły inwestycji — bez żadnych zobowiązań.',
    memberBadge: 'Członek globalnej sieci LeadingRE',
    preferChat:  'Wolą Państwo napisać? Wiadomość trafi prosto do Ivana',
    whatsappCta: 'Napisz do Ivana na WhatsApp',
    labels: {
      fullName:  'Imię i nazwisko',
      email:     'Adres e-mail',
      phone:     'Telefon / WhatsApp',
      country:   'Kraj zamieszkania',
      villaType: 'Interesujący typ willi',
      message:   'Wiadomość',
    },
    placeholders: {
      fullName:  'Imię i nazwisko',
      email:     'adres@email.com',
      phone:     '+48 123 456 789 (z numerem kierunkowym kraju)',
      country:   'Proszę wybrać kraj',
      villaType: 'Proszę wybrać typ willi',
      message:   'Pytania lub preferowany termin prezentacji?',
    },
    countries: [
      'Polska', 'Niemcy', 'Austria', 'Szwajcaria', 'Słowenia',
      'Słowacja', 'Czechy', 'Chorwacja', 'Wielka Brytania', 'Holandia',
      'Belgia', 'Francja', 'Hiszpania', 'Włochy', 'Węgry',
      'Rumunia', 'USA', 'ZEA', 'Rosja', 'Inny kraj',
    ],
    villaTypes: [
      { value: 'type-1', label: 'Typ I — willa ogrodowa'           },
      { value: 'type-2', label: 'Typ II — willa z widokiem na morze' },
      { value: 'type-3', label: 'Typ III — penthouse na klifie'    },
      { value: 'type-4', label: 'Typ IV — rezydencja Signature'    },
      { value: 'unsure', label: 'Jeszcze nie wiem'                 },
    ],
    validation: {
      fullName:      'Proszę podać imię i nazwisko',
      emailRequired: 'Adres e-mail jest wymagany',
      emailInvalid:  'Proszę podać poprawny adres e-mail',
      phone:         'Proszę podać numer z kierunkowym kraju',
      country:       'Proszę wybrać kraj zamieszkania',
      villaType:     'Proszę wybrać typ willi',
      gdpr:          'Aby kontynuować, należy zaakceptować Politykę prywatności',
    },
    gdprPrefix: 'Akceptuję ',
    gdprLink:   'Politykę prywatności',
    gdprSuffix: ' i wyrażam zgodę na kontakt w sprawie tego zapytania',
    recaptchaPrefix:  'Chronione przez reCAPTCHA — obowiązują ',
    recaptchaPrivacy: 'Prywatność',
    recaptchaMid:     ' i ',
    recaptchaTerms:   'Warunki',
    recaptchaSuffix:  ' Google.',
    submit:       'Zapytaj o szczegóły willi',
    submitting:   'Wysyłanie…',
    serverError:  'Coś poszło nie tak. Proszę spróbować ponownie lub zadzwonić bezpośrednio do Ivana.',
    networkError: 'Błąd połączenia. Proszę spróbować ponownie lub zadzwonić bezpośrednio do Ivana.',
    thankYouTitle: 'Dziękujemy, {name}.',
    thankYouBody:  'Ivan skontaktuje się z Państwem w ciągu 24 godzin. Proszę mieć oko na skrzynkę e-mail — i na WhatsApp.',
  },

  socialProof: {
    ...content.socialProof,
    leadingReBody: 'Członek LeadingRE — ekskluzywnej globalnej sieci najlepszych niezależnych agencji, wybieranych za jakość i wyniki. San Patrik jest jedynym członkiem w Chorwacji, wśród niespełna 570 firm na świecie.',
    testimonials: [
      {
        quote:   'Zakup willi z Ivanem był najsprawniejszą transakcją nieruchomościową, jaką kiedykolwiek przeprowadziliśmy. Dokumentacja, proces prawny, uruchomienie najmu — wszystko poprowadzone z wyjątkowym profesjonalizmem. Już osiągamy zwroty.',
        name:    'Thomas i Marta K.',
        country: 'Niemcy',
        stars:   5,
      },
      {
        quote:   'Przyglądaliśmy się Istrii przez trzy lata, zanim znaleźliśmy Petram. Połączenie infrastruktury resortu, zarządzania najmem i bezpośredniego widoku na morze w tej cenie po prostu nie istnieje nigdzie indziej w Europie.',
        name:    'Andreas B.',
        country: 'Austria',
        stars:   5,
      },
    ],
    stats: [
      { value: '50+', label: 'Nieruchomości sprzedanych na Istrii'   },
      { value: '15+', label: 'Lat łącznego doświadczenia'            },
      { value: '12',  label: 'Krajów, z których pochodzą nasi klienci' },
    ],
  },

  faq: {
    eyebrow:  'Najczęstsze pytania',
    headline: 'Odpowiadamy na Państwa pytania',
    items: [
      {
        question: 'Czy cudzoziemcy (obywatele UE i spoza UE) mogą kupować nieruchomości w Chorwacji?',
        answer:   'Tak. Obywatele UE kupują nieruchomości w Chorwacji na tych samych zasadach co obywatele chorwaccy. Obywatele spoza UE również mogą nabywać nieruchomości, z zastrzeżeniem umów bilateralnych i standardowych procedur rejestracyjnych. Nasz zespół prawny prowadzi cały proces zakupu dla kupujących z zagranicy.',
      },
      {
        question: 'Jakie podatki i koszty prawne wiążą się z zakupem?',
        answer:   'Podatek od przeniesienia własności w Chorwacji wynosi 3% wartości nieruchomości i płaci go kupujący. Dodatkowe koszty to zwykle opłaty notarialne, wpis do księgi wieczystej i obsługa prawna — łącznie ok. 1–2%. Przy nowych inwestycjach od deweloperów będących płatnikami VAT zamiast podatku od przeniesienia stosuje się VAT. Ivan przygotuje pełne zestawienie kosztów dla Państwa konkretnej sytuacji.',
      },
      {
        question: 'Jak działa program zarządzania najmem w Petram?',
        answer:   'Petram Resort prowadzi w pełni zarządzany program najmu. Zespół na miejscu zajmuje się ofertowaniem, rezerwacjami, zameldowaniem i wymeldowaniem gości, sprzątaniem i serwisem. Właściciele otrzymują kwartalne zestawienia dochodów i mogą rezerwować willę na własny użytek z wyprzedzeniem. Od właścicieli nie są wymagane żadne działania.',
      },
      {
        question: 'Jakiego rocznego zysku z najmu można oczekiwać?',
        answer:   'Na podstawie danych obłożenia resortu właściciele mogą oczekiwać 3–4% rocznego zysku netto z najmu przy w pełni zarządzanym wynajmie (opłata za zarządzanie 20%) — a łączny zwrot dopełnia wzrost wartości: ceny nieruchomości na Istrii wzrosły o 42% w latach 2019–2024. W szczycie sezonu (czerwiec–sierpień) obłożenie sięga 100%, w skali całego roku 78%, a poza sezonem popyt podtrzymują rynki niemiecki, austriacki i słoweński.',
      },
      {
        question: 'Co obejmuje cena zakupu?',
        answer:   'Wszystkie wille są oddawane w pełni wykończone i wyposażone w standardzie resortowym. Cena obejmuje umeblowanie wnętrz, sprzęt AGD, meble ogrodowe, zagospodarowanie terenu i przyłącza do mediów resortu. Szczegółowy wykaz wyposażenia jest załącznikiem do umowy rezerwacyjnej.',
      },
      {
        question: 'Kiedy planowane jest ukończenie resortu?',
        answer:   'Petram Resort jest w trakcie realizacji, a budowa przebiega zgodnie z harmonogramem. Pełne ukończenie resortu i przekazanie willi właścicielom planowane jest na [DATA]. Kupujący otrzymują kwartalny raport z postępu budowy i są zapraszani na wizytę na placu budowy przed odbiorem.',
      },
      {
        question: 'Czy zakup można sfinansować kredytem hipotecznym z UE?',
        answer:   'Tak. Chorwackie banki oraz kilku kredytodawców z UE oferuje finansowanie hipoteczne nieruchomości w Chorwacji. Typowe LTV to 60–70%. Współpracujemy z brokerami specjalizującymi się w finansowaniu transgranicznym i chętnie polecimy właściwe kontakty.',
      },
      {
        question: 'Jakie mam prawa do korzystania z willi w szczycie sezonu?',
        answer:   'Korzystanie przez właściciela jest elastyczne. Tygodnie na własny użytek można blokować w dowolnym momencie, z rozsądnym wyprzedzeniem w szczycie sezonu (zwykle 90 dni). Nie ma limitu łącznej liczby tygodni. Właściciele, którzy nie korzystają z willi w szczycie sezonu, w większym stopniu uczestniczą w dochodach z najmu.',
      },
      {
        question: 'Czy inwestycja jest prawnie chroniona w Chorwacji?',
        answer:   'Chorwacja jest krajem członkowskim UE z ugruntowanym systemem prawnym dla własności nieruchomości. Prawa własności są wpisywane do księgi wieczystej (Zemljišna knjiga), publicznie dostępnej i prawnie wiążącej. Wszystkie transakcje Petram prowadzą licencjonowani chorwaccy notariusze, z rejestracją we właściwych urzędach.',
      },
      {
        question: 'Jak umówić prezentację lub wyjazd inwestycyjny?',
        answer:   'Prosimy o kontakt z Ivanem przez formularz na tej stronie, telefonicznie lub przez WhatsApp. Organizujemy prywatne wizyty inwestycyjne — z transferem z lotniska, noclegiem na Istrii i prezentacją resortu z przewodnikiem. Większość wizyt trwa jeden–dwa dni i jest planowana pod Państwa kalendarz.',
      },
    ],
  },

  mobileCta: {
    call:    'Zadzwoń do Ivana',
    request: 'Zapytaj o szczegóły',
  },

  whatsappFloat: {
    url:     'https://api.whatsapp.com/send?phone=385992172314&text=Dzie%C5%84%20dobry%2C%20chcia%C5%82bym%2Fchcia%C5%82abym%20dowiedzie%C4%87%20si%C4%99%20wi%C4%99cej%20o%20willach%20Petram%20Resort.',
    tooltip: 'Napisz do Ivana',
  },

};

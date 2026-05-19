import { Navigation }       from '@/components/layout/Navigation';
import { WhatsAppButton }   from '@/components/layout/WhatsAppButton';
import { MobileCTABar }     from '@/components/layout/MobileCTABar';
import { Hero }             from '@/components/sections/Hero';
import { WhatIsPetram }     from '@/components/sections/WhatIsPetram';
import { VillaPortfolio }   from '@/components/sections/VillaPortfolio';
import { Lifestyle }        from '@/components/sections/Lifestyle';
import { InvestmentCase }   from '@/components/sections/InvestmentCase';
import { Location }         from '@/components/sections/Location';
import { AgentLeadForm }    from '@/components/sections/AgentLeadForm';
import { SocialProof }      from '@/components/sections/SocialProof';
import { FAQ }              from '@/components/sections/FAQ';
import { FinalCTA }         from '@/components/sections/FinalCTA';
import { TrackPageVisit }   from '@/components/tracking/TrackPageVisit';
import { UTMCapture }       from '@/components/tracking/UTMCapture';

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <WhatIsPetram />
        <VillaPortfolio />
        <Lifestyle />
        <InvestmentCase />
        <Location />
        <AgentLeadForm />
        <SocialProof />
        <FAQ />
      </main>

      <FinalCTA />

      <WhatsAppButton />
      <MobileCTABar />

      {/* Tracking — no visual output */}
      <TrackPageVisit />
      <UTMCapture />
    </>
  );
}

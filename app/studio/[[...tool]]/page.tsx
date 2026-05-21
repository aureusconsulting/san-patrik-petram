'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

// Opt out of ISR for the Studio route — it's an interactive editor
export const dynamic = 'force-dynamic';

export default function StudioPage() {
  return <NextStudio config={config} />;
}

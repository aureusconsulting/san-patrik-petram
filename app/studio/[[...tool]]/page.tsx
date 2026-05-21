// Server Component — NextStudio uses preloadModule (server-only React DOM API)
// Do NOT add 'use client' here.
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export { metadata, viewport } from 'next-sanity/studio';

export const dynamic = 'force-dynamic';

export default function StudioPage() {
  return <NextStudio config={config} />;
}

import { NextRequest, NextResponse } from 'next/server';

// ─── Types ────────────────────────────────────────────────────────────────────

interface BriefPayload {
  email:         string;
  locale?:       string;
  website?:      string; // honeypot — must stay empty
  utm_source?:   string;
  utm_medium?:   string;
  utm_campaign?: string;
  utm_content?:  string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOCALES  = ['en', 'de', 'pl'] as const;

// ─── HubSpot: create-or-update contact + attach note ──────────────────────────

async function upsertHubSpotContact(payload: BriefPayload, locale: string): Promise<void> {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    console.warn('[download-brief] HUBSPOT_TOKEN not set — skipping CRM');
    return;
  }

  const headers = {
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${token}`,
  };

  // 1. Create contact (email only); on 409 look up the existing contact by email
  let contactId: string | null = null;

  const createRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers,
    body:   JSON.stringify({ properties: { email: payload.email } }),
  });

  if (createRes.ok) {
    const contact = await createRes.json() as { id: string };
    contactId = contact.id;
    console.log('[download-brief] HubSpot contact created:', contactId, 'for', payload.email);
  } else if (createRes.status === 409) {
    const getRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(payload.email)}?idProperty=email`,
      { headers },
    );
    if (getRes.ok) {
      const contact = await getRes.json() as { id: string };
      contactId = contact.id;
      console.log('[download-brief] HubSpot contact exists:', contactId, 'for', payload.email);
    } else {
      console.error('[download-brief] HubSpot contact lookup error:', getRes.status, await getRes.text());
      return;
    }
  } else {
    console.error('[download-brief] HubSpot contact error:', createRes.status, await createRes.text());
    return;
  }

  // 2. Attach a note recording the brief download + UTMs
  const utms = [
    payload.utm_source   ? `source=${payload.utm_source}`     : null,
    payload.utm_medium   ? `medium=${payload.utm_medium}`     : null,
    payload.utm_campaign ? `campaign=${payload.utm_campaign}` : null,
    payload.utm_content  ? `content=${payload.utm_content}`   : null,
  ].filter(Boolean).join(', ') || '—';

  const noteRes = await fetch('https://api.hubapi.com/crm/v3/objects/notes', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      properties: {
        hs_note_body: `Downloaded Investment Brief (locale: ${locale}) — UTMs: ${utms}`,
        hs_timestamp: new Date().toISOString(),
      },
      associations: [{
        to:    { id: contactId },
        types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
      }],
    }),
  });

  if (!noteRes.ok) {
    console.error('[download-brief] HubSpot note error:', noteRes.status, await noteRes.text());
  } else {
    console.log('[download-brief] HubSpot note attached to contact', contactId);
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json() as BriefPayload;

    // 1. Honeypot — a real user never fills the hidden "website" field
    if (payload.website) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // 2. Server-side email validation
    if (!payload.email || !EMAIL_RE.test(payload.email.trim())) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const locale = LOCALES.includes(payload.locale as (typeof LOCALES)[number])
      ? (payload.locale as (typeof LOCALES)[number])
      : 'en';
    const url = `/downloads/petram-investment-brief-${locale}.pdf`;

    // 3. CRM — never block the download on HubSpot errors
    try {
      await upsertHubSpotContact({ ...payload, email: payload.email.trim() }, locale);
    } catch (err) {
      console.error('[download-brief] HubSpot unexpected error:', err);
    }

    return NextResponse.json({ ok: true, url });
  } catch (err) {
    console.error('[download-brief] Unexpected error:', err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

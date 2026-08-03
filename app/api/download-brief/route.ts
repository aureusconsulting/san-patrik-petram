import { NextRequest, NextResponse } from 'next/server';

// ─── Types ────────────────────────────────────────────────────────────────────

interface BriefPayload {
  email:         string;
  locale?:       string;
  form_token?:   string; // honeypot — must stay empty (named so browser autofill never touches it)
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

  // 2. Stamp the brief_downloaded date property — this is what HubSpot Active Lists
  //    filter on ("Investment Brief Downloaded is known"). Auto-creates the custom
  //    property on first ever use, then retries once.
  const stampBody = JSON.stringify({
    properties: { brief_downloaded: new Date().toISOString().slice(0, 10) },
  });
  const patchUrl = `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`;

  let stampRes = await fetch(patchUrl, { method: 'PATCH', headers, body: stampBody });
  if (!stampRes.ok && stampRes.status === 400) {
    const errText = await stampRes.text();
    if (errText.includes('brief_downloaded')) {
      const propRes = await fetch('https://api.hubapi.com/crm/v3/properties/contacts', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name:       'brief_downloaded',
          label:      'Investment Brief Downloaded',
          type:       'date',
          fieldType:  'date',
          groupName:  'contactinformation',
          description:'Date the Petram Investment Brief PDF was downloaded from invest.sanpatrik.co',
        }),
      });
      if (propRes.ok) {
        stampRes = await fetch(patchUrl, { method: 'PATCH', headers, body: stampBody });
        console.log('[download-brief] created brief_downloaded property, retry patch:', stampRes.status);
      } else {
        console.error('[download-brief] property create failed:', propRes.status, await propRes.text());
      }
    } else {
      console.error('[download-brief] property stamp error:', errText);
    }
  }

  // 3. Attach a note recording the brief download + UTMs
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

    // 1. Honeypot — a real user never fills the hidden field
    if (payload.form_token) {
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

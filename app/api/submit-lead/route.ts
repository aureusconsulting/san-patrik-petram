import { NextRequest, NextResponse } from 'next/server';

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeadPayload {
  fullName:       string;
  email:          string;
  phone:          string;
  country:        string;
  villaType:      string;
  message?:       string;
  recaptchaToken: string;
  utm_source?:    string;
  utm_medium?:    string;
  utm_campaign?:  string;
  utm_content?:   string;
}

// ─── reCAPTCHA verification ───────────────────────────────────────────────────

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) return true; // skip in dev if not configured

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    `secret=${secret}&response=${token}`,
  });
  const data = await res.json() as { success: boolean; score: number };
  return data.success && data.score >= 0.5;
}

// ─── HubSpot contact creation ─────────────────────────────────────────────────

async function createHubSpotContact(payload: LeadPayload): Promise<void> {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    console.warn('[submit-lead] HUBSPOT_TOKEN not set — skipping CRM');
    return;
  }

  const [firstName, ...rest] = payload.fullName.trim().split(' ');
  const lastName = rest.join(' ') || '';

  const body = {
    properties: {
      firstname:    firstName,
      lastname:     lastName,
      email:        payload.email,
      phone:        payload.phone,
      country:      payload.country,
      // Custom HubSpot properties — create these in HubSpot if they don't exist
      villa_type_interest: payload.villaType,
      message:      payload.message ?? '',
      utm_source:   payload.utm_source   ?? '',
      utm_medium:   payload.utm_medium   ?? '',
      utm_campaign: payload.utm_campaign ?? '',
      utm_content:  payload.utm_content  ?? '',
      lead_source:  'Petram Landing Page',
    },
  };

  const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    // 409 = contact already exists — not an error, just update silently
    if (res.status === 409) {
      console.log('[submit-lead] HubSpot contact already exists for', payload.email);
    } else {
      console.error('[submit-lead] HubSpot error:', res.status, err);
    }
  } else {
    console.log('[submit-lead] HubSpot contact created for', payload.email);
  }
}

// ─── Email notification via Resend ────────────────────────────────────────────

async function sendNotificationEmail(payload: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[submit-lead] RESEND_API_KEY not set — skipping email');
    return;
  }

  const villaLabel: Record<string, string> = {
    'type-1': 'Type I — Garden Villa',
    'type-2': 'Type II — Sea View Villa',
    'type-3': 'Type III — Cliff Penthouse',
    'type-4': 'Type IV — Signature Estate',
    'unsure': 'Not sure yet',
  };

  const html = `
    <h2 style="color:#0D2137;font-family:sans-serif;">New Lead — Petram Resort</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      <tr><td style="padding:6px 16px 6px 0;color:#666;font-weight:bold;">Name</td><td style="padding:6px 0;">${payload.fullName}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666;font-weight:bold;">Email</td><td style="padding:6px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666;font-weight:bold;">Phone</td><td style="padding:6px 0;"><a href="tel:${payload.phone}">${payload.phone}</a></td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666;font-weight:bold;">Country</td><td style="padding:6px 0;">${payload.country}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666;font-weight:bold;">Villa Interest</td><td style="padding:6px 0;">${villaLabel[payload.villaType] ?? payload.villaType}</td></tr>
      ${payload.message ? `<tr><td style="padding:6px 16px 6px 0;color:#666;font-weight:bold;">Message</td><td style="padding:6px 0;">${payload.message}</td></tr>` : ''}
      ${payload.utm_source ? `<tr><td style="padding:6px 16px 6px 0;color:#666;font-weight:bold;">Source</td><td style="padding:6px 0;">${payload.utm_source} / ${payload.utm_medium ?? '—'} / ${payload.utm_campaign ?? '—'}</td></tr>` : ''}
    </table>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from:    'Petram Leads <onboarding@resend.dev>',
      to:      ['ivan@sanpatrik.co'],
      subject: `New lead: ${payload.fullName} — ${payload.country} — ${villaLabel[payload.villaType] ?? payload.villaType}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error('[submit-lead] Resend error:', res.status, await res.text());
  } else {
    console.log('[submit-lead] Notification email sent to ivan@sanpatrik.co');
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json() as LeadPayload;

    // 1. Validate required fields
    if (!payload.fullName || !payload.email || !payload.phone || !payload.country || !payload.villaType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Verify reCAPTCHA
    const captchaOk = await verifyRecaptcha(payload.recaptchaToken);
    if (!captchaOk) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // 3. Create HubSpot contact + send email in parallel
    await Promise.allSettled([
      createHubSpotContact(payload),
      sendNotificationEmail(payload),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[submit-lead] Unexpected error:', err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

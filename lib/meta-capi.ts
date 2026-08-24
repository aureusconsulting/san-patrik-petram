import { createHash } from 'crypto';

function sha256(value: string): string {
  return createHash('sha256').update(value.toLowerCase().trim()).digest('hex');
}

interface CAPILeadParams {
  email:           string;
  phone:           string;
  firstName:       string;
  lastName:        string;
  eventId:         string;
  sourceUrl:       string;
  clientIp:        string;
  clientUserAgent: string;
}

export async function sendCAPILead(params: CAPILeadParams): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token   = process.env.META_CAPI_TOKEN;

  if (!pixelId || !token) {
    console.warn('[meta-capi] NEXT_PUBLIC_META_PIXEL_ID or META_CAPI_TOKEN not set — skipping');
    return;
  }

  const payload = {
    data: [{
      event_name:       'Lead',
      event_time:       Math.floor(Date.now() / 1000),
      event_source_url: params.sourceUrl,
      action_source:    'website',
      event_id:         params.eventId,
      user_data: {
        em:                  [sha256(params.email)],
        ph:                  [sha256(params.phone.replace(/\D/g, ''))],
        fn:                  [sha256(params.firstName)],
        ln:                  [sha256(params.lastName)],
        client_ip_address:   params.clientIp,
        client_user_agent:   params.clientUserAgent,
      },
    }],
  };

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
    {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    },
  );

  if (!res.ok) {
    console.error('[meta-capi] Lead event error:', res.status, await res.text());
  } else {
    console.log('[meta-capi] Lead event sent, event_id:', params.eventId);
  }
}

interface CAPIBriefLeadParams {
  email:           string;
  locale:          string;
  eventId:         string;
  sourceUrl:       string;
  clientIp:        string;
  clientUserAgent: string;
}

// Brief downloads report as Lead with content_name 'investment_brief' so ad sets
// can optimize on Lead while reporting still separates briefs from villa enquiries.
export async function sendCAPIBriefLead(params: CAPIBriefLeadParams): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token   = process.env.META_CAPI_TOKEN;

  if (!pixelId || !token) {
    console.warn('[meta-capi] NEXT_PUBLIC_META_PIXEL_ID or META_CAPI_TOKEN not set — skipping');
    return;
  }

  const payload = {
    data: [{
      event_name:       'Lead',
      event_time:       Math.floor(Date.now() / 1000),
      event_source_url: params.sourceUrl,
      action_source:    'website',
      event_id:         params.eventId,
      user_data: {
        em:                [sha256(params.email)],
        client_ip_address: params.clientIp,
        client_user_agent: params.clientUserAgent,
      },
      custom_data: {
        content_name:     'investment_brief',
        content_category: params.locale,
      },
    }],
  };

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
    {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    },
  );

  if (!res.ok) {
    console.error('[meta-capi] Brief Lead event error:', res.status, await res.text());
  } else {
    console.log('[meta-capi] Brief Lead event sent, event_id:', params.eventId);
  }
}

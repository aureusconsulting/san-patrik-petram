const HUBSPOT_API = 'https://api.hubapi.com';

// Cached per serverless instance — the subscription type id never changes.
let cachedSubscriptionId: string | null = null;

async function findOneToOneSubscriptionId(token: string): Promise<string | null> {
  if (cachedSubscriptionId) return cachedSubscriptionId;

  const res = await fetch(`${HUBSPOT_API}/communication-preferences/v3/definitions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    console.error('[comm-prefs] definitions error:', res.status, await res.text());
    return null;
  }
  const data = await res.json() as {
    subscriptionDefinitions?: Array<{ id: string; name: string }>;
  };
  const def =
    data.subscriptionDefinitions?.find((d) => d.name === 'One to One') ??
    data.subscriptionDefinitions?.find((d) => d.name.toLowerCase().includes('one to one'));

  cachedSubscriptionId = def?.id ?? null;
  if (!cachedSubscriptionId) console.error('[comm-prefs] "One to One" subscription type not found');
  return cachedSubscriptionId;
}

// Records an explicit One to One email opt-in with legal basis, so HubSpot
// sequences can enroll the contact (portal refuses "Not Specified" contacts).
export async function subscribeOneToOne(email: string, explanation: string): Promise<void> {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) {
    console.warn('[comm-prefs] HUBSPOT_TOKEN not set — skipping');
    return;
  }
  const subscriptionId = await findOneToOneSubscriptionId(token);
  if (!subscriptionId) return;

  const res = await fetch(`${HUBSPOT_API}/communication-preferences/v3/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      emailAddress: email,
      subscriptionId,
      legalBasis: 'CONSENT_WITH_NOTICE',
      legalBasisExplanation: explanation,
    }),
  });

  if (res.ok) {
    console.log('[comm-prefs] One to One opt-in recorded for', email);
    return;
  }
  const text = await res.text();
  // Re-subscribing an already-subscribed contact is a 400 — not a failure.
  if (res.status === 400 && text.toLowerCase().includes('already')) {
    console.log('[comm-prefs] already subscribed:', email);
    return;
  }
  console.error('[comm-prefs] subscribe error:', res.status, text);
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log submission for now
    console.log('[submit-lead]', JSON.stringify(body, null, 2));

    // TODO: connect to HubSpot webhook or Supabase
    // HubSpot: POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}
    // Supabase: await supabase.from('leads').insert([{ ...body }])

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

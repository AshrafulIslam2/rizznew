import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const sha256 = (v: string) =>
  crypto.createHash('sha256').update(v.trim().toLowerCase()).digest('hex');

export async function POST(req: NextRequest) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return NextResponse.json({ skipped: true }, { status: 200 });
  }

  const { order, eventId, fbc, fbp } = await req.json();

  const userData: Record<string, unknown> = {
    client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? undefined,
    client_user_agent: req.headers.get('user-agent') ?? undefined,
  };

  if (order.customerEmail) userData.em = [sha256(order.customerEmail)];

  if (order.customerPhone) {
    const raw = String(order.customerPhone).replace(/[\s\-]/g, '');
    const normalised = raw.startsWith('0') ? '880' + raw.slice(1) : raw;
    userData.ph = [sha256(normalised)];
  }

  // external_id — hashed order ID ties this event to a known order
  if (order.id) userData.external_id = [sha256(String(order.id))];

  // fbc / fbp — raw cookie values, do NOT hash these
  if (fbc) userData.fbc = fbc;
  if (fbp) userData.fbp = fbp;

  const payload = {
    data: [
      {
        event_name: 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        event_source_url: 'https://rizzleather.com/brand/thank-you',
        user_data: userData,
        custom_data: {
          currency: 'BDT',
          value: order.total,
          content_ids: order.items.map((i: { slug: string }) => i.slug),
          content_type: 'product',
          num_items: order.items.reduce((s: number, i: { quantity: number }) => s + i.quantity, 0),
        },
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );
    const json = await res.json();
    return NextResponse.json(json, { status: res.ok ? 200 : 502 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

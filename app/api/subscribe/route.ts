import { NextResponse } from 'next/server';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwg6YeBglqmtuKel0Chu2J3l9LP81KBrpfOIRual-DUYrfF7yPxT_4ZLjntiWmwiHJxSQ/exec';

export async function POST(req: Request) {
  const body = await req.json();

  // Forward to GAS (server-to-server, CORS doesn't apply)
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // keep JSON here
    body: JSON.stringify(body),
    // no need for mode/cors tweaks server-side
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.ok ? 200 : 500 });
}

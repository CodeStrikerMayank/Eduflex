import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ pong: true, time: Date.now() });
}

export async function HEAD() {
  return new Response(null, { status: 200 });
}

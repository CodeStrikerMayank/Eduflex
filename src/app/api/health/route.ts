import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const uptime = process.uptime();
  return NextResponse.json(
    {
      status: 'ok',
      service: 'eduflex-discovery-portal',
      uptimeSeconds: Math.floor(uptime),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production',
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'X-Service-Status': 'healthy',
      },
    }
  );
}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Service-Status': 'healthy',
    },
  });
}

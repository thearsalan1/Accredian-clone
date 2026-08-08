import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo purposes. Swap for a database in production.
const leads: Array<Record<string, unknown>> = [];

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body?.name || !body?.email || !body?.company) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lead = {
    ...body,
    receivedAt: new Date().toISOString(),
  };

  leads.push(lead);

  return NextResponse.json({ ok: true, lead }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}

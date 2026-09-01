import { NextResponse } from "next/server";
import Retell from "retell-sdk";

// Shared secret for validating Retell call requests.
// Set RETELL_SECRET in your environment (Vercel dashboard or .env.local).
// When set, the POST endpoint requires the x-retell-secret header to match.
const EXPECTED_SECRET = process.env.RETELL_SECRET;

export async function GET() {
  return NextResponse.json({ status: "ok", agent: "voice-agent-ready" });
}

export async function POST(request: Request) {
  // Validate the shared secret header when RETELL_SECRET is configured
  if (EXPECTED_SECRET) {
    const secretHeader = request.headers.get("x-retell-secret");
    if (secretHeader !== EXPECTED_SECRET) {
      return NextResponse.json(
        { error: "Unauthorized: invalid or missing secret header" },
        { status: 401 },
      );
    }
  }

  const apiKey = process.env.RETELL_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Retell API key not configured" },
      { status: 500 },
    );
  }

  try {
    const client = new Retell({ apiKey });
    const webCallResponse = await client.call.createWebCall({
      agent_id: "agent_900e0981c4164abc0affa72c7a",
    });

    return NextResponse.json({ access_token: webCallResponse.access_token });
  } catch (error: unknown) {
    console.error("Error creating Retell web call:", error);
    return NextResponse.json(
      { error: "Failed to create web call" },
      { status: 500 },
    );
  }
}

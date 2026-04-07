import { NextResponse } from "next/server";
import Retell from "retell-sdk";

export async function POST() {
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

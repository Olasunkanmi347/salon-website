import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const prompt = body.prompt;

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API key not configured. Set OPENAI_API_KEY in .env." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText || "Image generation failed." }, { status: response.status });
    }

    const data = await response.json();
    const imageUrl = data?.data?.[0]?.url;
    if (!imageUrl) {
      return NextResponse.json({ error: "No image URL returned from OpenAI." }, { status: 500 });
    }

    return NextResponse.json({ imageUrl });
  } catch (error) {
    return NextResponse.json({ error: "Unable to generate image." }, { status: 500 });
  }
}

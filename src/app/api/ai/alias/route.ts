import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json(
        {
          message: "URL is required.",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = `
You are an AI URL alias generator.

Generate 5 unique URL aliases for this website:

${url}

Rules:
- lowercase only
- use hyphens if needed
- maximum 20 characters
- SEO friendly
- easy to remember
- do not include spaces
- do not include numbers unless necessary
- return ONLY a JSON array

Example:

[
"youtube-guide",
"watch-video",
"yt-tutorial",
"video-course",
"learn-youtube"
]
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    let suggestions: string[];

    try {
      suggestions = JSON.parse(text);
    } catch {
      suggestions = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .replace("[", "")
        .replace("]", "")
        .replace(/"/g, "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    suggestions = [...new Set(suggestions)].slice(0, 5);

    return NextResponse.json({
      suggestions,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to generate alias.",
      },
      {
        status: 500,
      }
    );
  }
}
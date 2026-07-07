import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createLinkSchema } from "@/lib/validators/link";
import { generateShortCode } from "@/utils/generate-short-code";

export async function GET() {
  const links = await prisma.link.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(links);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = createLinkSchema.parse(body);

    let shortCode = generateShortCode();

    while (await prisma.link.findUnique({ where: { shortCode } })) {
      shortCode = generateShortCode();
    }

    const link = await prisma.link.create({
      data: {
        originalUrl: validatedData.originalUrl,
        shortCode,
      },
    });

    return NextResponse.json(link, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
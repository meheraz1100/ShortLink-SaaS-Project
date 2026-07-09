import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { generateShortCode } from "@/utils/generate-short-code";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const links = await prisma.link.findMany({
      where: {
        clerkUserId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(links);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch links" },
      { status: 500 }
    );
  }
}


export async function POST(request: Request) {
  const { userId } = await auth();
  
  try {
    const body = await request.json();

    const { originalUrl, customAlias, expiresAt } = body;

    if (!originalUrl) {
      return NextResponse.json(
        { message: "Original URL is required" },
        { status: 400 }
      );
    }

    let shortCode: string;

    if (customAlias?.trim()) {
      shortCode = customAlias.trim().toLowerCase();

      const exists = await prisma.link.findUnique({
        where: {
          shortCode,
        },
      });

      if (exists) {
        return NextResponse.json(
          {
            message: "Alias already exists",
          },
          {
            status: 409,
          }
        );
      }
    } else {
      shortCode = generateShortCode();

      while (
        await prisma.link.findUnique({
          where: {
            shortCode,
          },
        })
      ) {
        shortCode = generateShortCode();
      }
    }

    const link = await prisma.link.create({
  data: {
    originalUrl,
    shortCode,
    clerkUserId: userId,
    expiresAt: expiresAt
      ? new Date(expiresAt)
      : null,
  },
});

    return NextResponse.json(link, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to create link",
      },
      {
        status: 500,
      }
    );
  }
}
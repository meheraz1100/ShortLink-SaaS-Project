import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json([], {
      status: 401,
    });
  }

  const links = await prisma.link.findMany({
    where: {
      clerkUserId: userId,
    },
    select: {
      id: true,
    },
  });

  const ids = links.map((l) => l.id);

  const events =
    await prisma.clickEvent.findMany({
      where: {
        linkId: {
          in: ids,
        },
      },
      select: {
        os: true,
      },
    });

  const map: Record<string, number> = {};

  events.forEach((item) => {
    const os = item.os || "Unknown";

    map[os] = (map[os] || 0) + 1;
  });

  return NextResponse.json(
    Object.entries(map).map(
      ([name, value]) => ({
        name,
        value,
      })
    )
  );
}
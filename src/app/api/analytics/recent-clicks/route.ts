import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

type DailyClicks = {
  day: string;
  clicks: number;
};

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const links = await prisma.link.findMany({
    where: {
      clerkUserId: userId,
    },
    select: {
      createdAt: true,
      clicks: true,
    },
  });

  const last7Days: DailyClicks[] = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();

    date.setDate(date.getDate() - i);

    const key = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    last7Days.push({
      day: key,
      clicks: 0,
    });
  }

  links.forEach((link) => {
    const key = new Date(link.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    const item = last7Days.find((d) => d.day === key);

    if (item) {
      item.clicks += link.clicks;
    }
  });

  return NextResponse.json(last7Days);
}
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const totalLinks = await prisma.link.count();

    const totalClicks = await prisma.link.aggregate({
      _sum: {
        clicks: true,
      },
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayLinks = await prisma.link.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });

    return NextResponse.json({
      totalLinks,
      totalClicks: totalClicks._sum.clicks ?? 0,
      todayLinks,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to load dashboard stats" },
      { status: 500 }
    );
  }
}
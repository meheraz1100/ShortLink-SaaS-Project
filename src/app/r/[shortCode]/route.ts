import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

type Props = {
  params: Promise<{
    shortCode: string;
  }>;
};

export async function GET(
  req: NextRequest,
  { params }: Props
) {
  const { shortCode } = await params;

  console.log("Short Code:", shortCode);

  const link = await prisma.link.findUnique({
    where: {
      shortCode,
    },
  });

  console.log("Found Link:", link);

  if (!link) {
    return NextResponse.redirect(
      new URL("/404", req.url)
    );
  }

  if (
    link.expiresAt &&
    new Date() > link.expiresAt
  ) {
    return NextResponse.redirect(
      new URL("/expired", req.url)
    );
  }

  // ==========================
  // Collect Analytics
  // ==========================

  const userAgent =
    req.headers.get("user-agent") ?? "";

  const parser = new UAParser(userAgent);

  const browser =
    parser.getBrowser().name ?? "Unknown";

  const os =
    parser.getOS().name ?? "Unknown";

  const device =
    parser.getDevice().type ?? "Desktop";

  const referrer =
    req.headers.get("referer") ?? "Direct";

  const forwardedFor =
    req.headers.get("x-forwarded-for");

  const ip =
    forwardedFor?.split(",")[0]?.trim() ??
    "Unknown";

  const country =
    req.headers.get("x-vercel-ip-country") ??
    req.headers.get("cf-ipcountry") ??
    "Unknown";

  // Save Click Event

  await prisma.clickEvent.create({
    data: {
      linkId: link.id,
      browser,
      os,
      device,
      country,
      referrer,
      ip,
    },
  });

  // Increment Click Count

  await prisma.link.update({
    where: {
      id: link.id,
    },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });

  return NextResponse.redirect(link.originalUrl);
}
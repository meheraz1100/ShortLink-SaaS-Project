import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  return NextResponse.json({
    success: true,
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;

  try {
    const body = await req.json();

    const {
      originalUrl,
      customAlias,
      expiresAt,
    } = body;

    const link = await prisma.link.findUnique({
      where: {
        id,
      },
    });

    if (!link) {
      return NextResponse.json(
        { message: "Link not found" },
        { status: 404 }
      );
    }

    if (link.clerkUserId !== userId) {
      return NextResponse.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    // Check duplicate alias (only if alias changed)
    if (
      customAlias &&
      customAlias.trim().toLowerCase() !==
        link.shortCode
    ) {
      const exists =
        await prisma.link.findUnique({
          where: {
            shortCode: customAlias
              .trim()
              .toLowerCase(),
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
    }

    const updated =
      await prisma.link.update({
        where: {
          id,
        },
        data: {
          originalUrl,

          shortCode:
            customAlias?.trim()
              ? customAlias
                  .trim()
                  .toLowerCase()
              : link.shortCode,

          expiresAt: expiresAt
            ? new Date(expiresAt)
            : null,
        },
      });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to update link",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();
  

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const link = await prisma.link.findUnique({
    where: { id },
  });

  if (!link) {
    return NextResponse.json({ message: "Link not found" }, { status: 404 });
  }

  if (link.clerkUserId !== userId) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  await prisma.link.delete({
    where: { id },
  });

  return NextResponse.json({
    success: true,
  });
}

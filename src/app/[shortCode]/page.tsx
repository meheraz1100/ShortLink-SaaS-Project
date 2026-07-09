import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: Promise<{
    shortCode: string;
  }>;
};

export default async function RedirectPage({ params }: Props) {
  const { shortCode } = await params;

  const link = await prisma.link.findUnique({
    where: {
      shortCode,
    },
  });

  if (!link) {
    notFound();
  }

  if (
    link.expiresAt &&
    new Date() > link.expiresAt
) {
    return redirect("/expired");
}

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

  redirect(link.originalUrl);
}
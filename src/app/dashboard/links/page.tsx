import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

import LinksTable from "@/components/dashboard/links-table";

export default async function LinksPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const links = await prisma.link.findMany({
    where: {
      clerkUserId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      originalUrl: true,
      shortCode: true,
      createdAt: true,
      clicks: true,
      expiresAt: true,
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          My Links
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage, edit, delete and monitor all your shortened links.
        </p>
      </div>

      <LinksTable links={links} />
    </div>
  );
}
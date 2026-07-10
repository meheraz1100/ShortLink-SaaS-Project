import { prisma } from "@/lib/prisma";
import LinksTable from "@/components/dashboard/links-table";
import DashboardStats from "@/components/dashboard/dashboard-stats";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const user = await currentUser();

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
    <main className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Header */}
      <section className="mb-8 flex flex-col gap-3 sm:mb-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Manage all your shortened links from one place.
          </p>
        </div>

        <div className="rounded-xl border bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground">
            Welcome back,
            <span className="ml-1 font-semibold text-foreground">
              {user?.fullName || user?.firstName || "User"}
            </span>
            👋
          </p>

          <p className="mt-1 break-all text-xs text-muted-foreground sm:text-sm">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="mb-8">
        <DashboardStats />
      </div>

      {/* Table */}
      <LinksTable links={links} />
    </main>
  );
}
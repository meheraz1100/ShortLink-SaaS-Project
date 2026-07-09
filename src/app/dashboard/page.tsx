import { prisma } from "@/lib/prisma";
import LinksTable from "@/components/dashboard/links-table";
import DashboardStats from "@/components/dashboard/dashboard-stats";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();

if (!userId) {
  return null;
}

  const user = await currentUser();
  // const links = await prisma.link.findMany({
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  //   select: {
  //     id: true,
  //     originalUrl: true,
  //     shortCode: true,
  //     createdAt: true,
  //     clicks: true,
  //   },
  // });
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
    <main className="container mx-auto py-10">
      <div className="mb-8">
        
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="mt-2">
  <p className="text-sm text-muted-foreground">
    Welcome,
    <span className="font-medium ml-1">
      {user?.fullName || user?.firstName || "User"}
    </span>
  </p>

  <p className="text-xs text-muted-foreground">
    {user?.primaryEmailAddress?.emailAddress}
  </p>
</div>
        <p className="text-muted-foreground">
          Manage all your shortened links.
        </p>
      </div>

      <DashboardStats />
      <LinksTable links={links} />
    </main>
  );
}
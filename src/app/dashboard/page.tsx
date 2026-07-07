import { prisma } from "@/lib/prisma";
import LinksTable from "@/components/dashboard/links-table";

export default async function DashboardPage() {
  const links = await prisma.link.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      originalUrl: true,
      shortCode: true,
      createdAt: true,
      clicks: true,
    },
  });

  return (
    <main className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage all your shortened links.
        </p>
      </div>

      <LinksTable links={links} />
    </main>
  );
}
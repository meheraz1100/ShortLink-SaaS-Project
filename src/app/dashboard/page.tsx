import DashboardStats from "@/components/dashboard/dashboard-stats";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();


  if (!userId) {
    return null;
  }

  const user = await currentUser();

  

  return (
    <main className=" mb-8 ">
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
        {/* <RecentClickChart /> */}
      </div>

      {/* Table */}
      {/* <LinksTable links={links} />  */}
      {/* <br />
        <AnalyticsChart data={weeklyClicks} />
        <br />
        <TopLinksChart data={topLinks} />
        <br />
        <DeviceDistribution /> */}
    </main>
  );
}
import DashboardStats from "@/components/dashboard/dashboard-stats";
import AnalyticsCharts from "@/components/dashboard/analytics-chart";
import RecentClickChart from "@/components/dashboard/recent-click-chart";
import TopLinksChart from "@/components/dashboard/top-links-chart";
import DeviceDistribution from "@/components/analytics/device-distribution";

export default function AnalyticsPage() {

    const weeklyClicks = [
  {
    day: "Mon",
    clicks: 15,
  },
  {
    day: "Tue",
    clicks: 30,
  },
  {
    day: "Wed",
    clicks: 22,
  },
  {
    day: "Thu",
    clicks: 50,
  },
  {
    day: "Fri",
    clicks: 41,
  },
  {
    day: "Sat",
    clicks: 36,
  },
  {
    day: "Sun",
    clicks: 62,
  },
];

    const topLinks = [
  {
    name: "Google",
    clicks: 182,
  },
  {
    name: "GitHub",
    clicks: 140,
  },
  {
    name: "Portfolio",
    clicks: 95,
  },
  {
    name: "LinkedIn",
    clicks: 73,
  },
  {
    name: "YouTube",
    clicks: 60,
  },
];


  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="mt-2 text-muted-foreground">
          Track your links performance, clicks and audience insights.
        </p>
      </div>

      {/* Stats */}

      <DashboardStats />

      {/* Main Charts */}

      <AnalyticsCharts data={weeklyClicks} />

      {/* Bottom Section */}

      <div className="grid gap-6 lg:grid-cols-2">

        <RecentClickChart />

        <DeviceDistribution />

      </div>

      {/* Top Links */}

      <TopLinksChart data={topLinks} />

    </div>
  );
}
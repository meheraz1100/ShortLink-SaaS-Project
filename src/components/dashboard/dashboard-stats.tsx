"use client";

import { useEffect, useState } from "react";

type Stats = {
  totalLinks: number;
  totalClicks: number;
  todayLinks: number;
  weeklyClicks: [
  { day: "Mon", clicks: 15 },
  { day: "Tue", clicks: 22 },
  { day: "Wed", clicks: 11 },
  { day: "Thu", clicks: 45 },
  { day: "Fri", clicks: 37 },
  { day: "Sat", clicks: 29 },
  { day: "Sun", clicks: 51 },
]
};

export default function DashboardStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/dashboard/stats");
      const data = await res.json();

      setStats(data);
    }

    load();
  }, []);

  if (!stats) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-8">
      <div className="rounded-xl border p-6">
        <h3 className="text-gray-500">
          Total Links
        </h3>

        <p className="text-4xl font-bold">
          {stats.totalLinks}
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-gray-500">
          Total Clicks
        </h3>

        <p className="text-4xl font-bold">
          {stats.totalClicks}
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-gray-500">
          Todays Links
        </h3>

        <p className="text-4xl font-bold">
          {stats.todayLinks}
        </p>
      </div>
    </div>
  );
}
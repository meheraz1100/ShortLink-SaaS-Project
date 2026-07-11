"use client";

import { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Laptop,
  Apple,
  Smartphone,
  Monitor,
} from "lucide-react";

import OsCard from "./os-card";

type OsData = {
  name: string;
  value: number;
};

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
  "#06b6d4",
  "#f97316",
];

export default function OsDistributionChart() {
  const [data, setData] = useState<OsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/analytics/os");

        if (!res.ok) {
          throw new Error("Failed");
        }

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  function getIcon(name: string) {
    switch (name.toLowerCase()) {
      case "windows":
        return <Laptop />;

      case "macos":
        return <Apple />;

      case "ios":
        return <Apple />;

      case "android":
        return <Smartphone />;

      case "linux":
        return <Monitor />;

      default:
        return <Monitor />;
    }
  }

  if (loading) {
    return (
      <div className="rounded-2xl border bg-card p-6">
        <h2 className="text-xl font-bold">
          Operating System Distribution
        </h2>

        <p className="mt-2 text-muted-foreground">
          Loading analytics...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-card p-6">

      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Operating System Distribution
        </h2>

        <p className="text-sm text-muted-foreground">
          Breakdown of visitors by operating system.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Chart */}

        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                innerRadius={70}
                paddingAngle={3}
              >
                {data.map((_, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Cards */}

        <div className="grid gap-4 sm:grid-cols-2">

          {data.map((item) => (
            <OsCard
              key={item.name}
              title={item.name}
              value={item.value}
              icon={getIcon(item.name)}
            />
          ))}

        </div>

      </div>

    </div>
  );
}
"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  data: {
    day: string;
    clicks: number;
  }[];
};

export default function AnalyticsChart({
  data,
}: Props) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-colors">

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Click Overview
        </h2>

        <p className="text-sm text-muted-foreground">
          Total clicks during the last 7 days.
        </p>
      </div>

      <div className="h-80 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="var(--border)"
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "currentColor",
                fontSize: 13,
              }}
              stroke="var(--border)"
            />

            <YAxis
              tick={{
                fill: "currentColor",
                fontSize: 13,
              }}
              stroke="var(--border)"
            />

            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--foreground)",
              }}
            />

            <Line
              type="monotone"
              dataKey="clicks"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{
                r: 5,
              }}
              activeDot={{
                r: 7,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
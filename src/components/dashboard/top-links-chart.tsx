"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  data: {
    name: string;
    clicks: number;
  }[];
};

export default function TopLinksChart({
  data,
}: Props) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-colors">

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Top Performing Links
        </h2>

        <p className="text-sm text-muted-foreground">
          Your most visited short links.
        </p>
      </div>

      <div className="h-[320px] w-full">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
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
              dataKey="name"
              stroke="var(--border)"
              tick={{
                fill: "currentColor",
                fontSize: 13,
              }}
            />

            <YAxis
              stroke="var(--border)"
              tick={{
                fill: "currentColor",
                fontSize: 13,
              }}
            />

            <Tooltip
              cursor={{
                fill: "var(--muted)",
              }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--foreground)",
              }}
            />

            <Bar
              dataKey="clicks"
              radius={[8, 8, 0, 0]}
              fill="hsl(var(--primary))"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
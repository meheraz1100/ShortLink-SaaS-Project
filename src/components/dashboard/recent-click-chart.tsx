"use client";

import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Data = {
  day: string;
  clicks: number;
};

export default function RecentClickChart() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("/api/analytics/recent-clicks")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm transition-colors">

      <h2 className="mb-6 text-lg font-semibold">
        Click Activity (Last 7 Days)
      </h2>

      <div className="h-80 w-full">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="clicks"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}
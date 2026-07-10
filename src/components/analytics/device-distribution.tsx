"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const data = [
  {
    name: "Desktop",
    value: 58,
  },
  {
    name: "Mobile",
    value: 32,
  },
  {
    name: "Tablet",
    value: 7,
  },
  {
    name: "Others",
    value: 3,
  },
];

export default function DeviceDistribution() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Device Distribution
        </h2>

        <p className="text-sm text-muted-foreground">
          Visitors by device type
        </p>
      </div>

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
              outerRadius={110}
              innerRadius={60}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">

        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-3"
          >
            <div
              className="h-3 w-3 rounded-full"
              style={{
                background:
                  COLORS[index],
              }}
            />

            <span className="text-sm">
              {item.name}
            </span>

            <span className="ml-auto text-sm font-semibold">
              {item.value}%
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
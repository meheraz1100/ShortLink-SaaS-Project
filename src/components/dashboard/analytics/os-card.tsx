import { ReactNode } from "react";

type Props = {
  title: string;
  value: number;
  icon: ReactNode;
};

export default function OsCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="rounded-2xl border bg-card p-5 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">
          {title}
        </span>

        <div className="text-primary">
          {icon}
        </div>
      </div>

      <h2 className="mt-4 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}
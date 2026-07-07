"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export type Link = {
  id: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: Date;
};

export const columns: ColumnDef<Link>[] = [
  {
    accessorKey: "originalUrl",
    header: "Original URL",
  },
  {
    accessorKey: "shortCode",
    header: "Short URL",
    cell: ({ row }) => {
      const code = row.original.shortCode;

      return (
        <a
          href={`/${code}`}
          target="_blank"
          className="text-blue-600 underline"
        >
          {code}
        </a>
      );
    },
  },
  {
    accessorKey: "clicks",
    header: "Clicks",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      return format(new Date(row.original.createdAt), "dd MMM yyyy");
    },
  },
];
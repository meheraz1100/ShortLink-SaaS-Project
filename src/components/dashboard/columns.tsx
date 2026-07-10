"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import CopyButton from "./copy-button";
import EditButton from "./edit-button";
import QRButton from "./qr-button";
import DeleteDialog from "./delete-dialog";

export type Link = {
  id: string;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: Date;
  expiresAt: Date | null;
};

export const columns: ColumnDef<Link>[] = [
  {
  accessorKey: "originalUrl",
  header: "Original URL",

  cell: ({ row }) => (
    <div
      className="max-w-62.5 truncate"
      title={row.original.originalUrl}
    >
      {row.original.originalUrl}
    </div>
  ),
},
  {
  accessorKey: "shortCode",
  header: "Short URL",
  cell: ({ row }) => {
    const shortUrl =
  `${process.env.NEXT_PUBLIC_APP_URL}/${row.original.shortCode}`;

    return (
      <div className="flex min-w-0 items-center gap-2">
  <a
    href={shortUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-0 truncate text-primary hover:underline"
  >
    {shortUrl}
  </a>

  <div className="flex shrink-0 gap-2">
    <CopyButton text={shortUrl} />
    <QRButton shortCode={row.original.shortCode} />
  </div>
</div>
    );
  },
},
{
  accessorKey: "expiresAt",
  header: "Expires",

  cell: ({ row }) => {
    if (!row.original.expiresAt) {
      return "Never";
    }

    return format(
      new Date(row.original.expiresAt),
      "dd MMM yyyy HH:mm"
    );
  },
},
  {
    accessorKey: "clicks",
    header: "Clicks",
  },

  {
    id: "status",
  accessorKey: "expiresAt",
  header: "Status",
  cell: ({ row }) => {
    const expiresAt = row.original.expiresAt;

    if (!expiresAt) {
      return (
        <span className="inline-flex whitespace-nowrap rounded bg-green-100 px-2 py-1 text-xs text-green-700">
          Active
        </span>
      );
    }

    const expired =
      new Date() > new Date(expiresAt);

    return expired ? (
      <span className="inline-flex whitespace-nowrap rounded bg-red-100 px-2 py-1 text-xs text-red-700">
        Expired
      </span>
    ) : (
      <span className="inline-flex whitespace-nowrap rounded bg-green-100 px-2 py-1 text-xs text-green-700">
        Active
      </span>
    );
  },
},

  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      return format(new Date(row.original.createdAt), "dd MMM yyyy");
    },
  },
  {
  id: "actions",
  header: "Actions",
  cell: ({ row }) => (
    <div className="flex shrink-0 gap-2">
      <EditButton id={row.original.id} />
      <DeleteDialog
    id={row.original.id}
/>
    </div>
  ),
},
];
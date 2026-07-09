"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import CopyButton from "./copy-button";
import DeleteButton from "./delete-button";
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
  },
  {
  accessorKey: "shortCode",
  header: "Short URL",
  cell: ({ row }) => {
    const shortUrl =
  `${process.env.NEXT_PUBLIC_APP_URL}/${row.original.shortCode}`;

    return (
      <div className="flex items-center gap-2">
        <a
          href={shortUrl}
          target="_blank"
          className="text-blue-600 underline"
        >
          {shortUrl}
        </a>

        <CopyButton text={shortUrl} />
        <QRButton shortCode={row.original.shortCode} />
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
  accessorKey: "expiresAt",
  header: "Status",
  cell: ({ row }) => {
    const expiresAt = row.original.expiresAt;

    if (!expiresAt) {
      return (
        <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-700">
          Active
        </span>
      );
    }

    const expired =
      new Date() > new Date(expiresAt);

    return expired ? (
      <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-700">
        Expired
      </span>
    ) : (
      <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-700">
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
    <div className="flex gap-2">
      <EditButton id={row.original.id} />
      <DeleteDialog
    id={row.original.id}
/>
    </div>
  ),
},
];
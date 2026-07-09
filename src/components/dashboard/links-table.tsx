"use client";

import { useMemo, useState, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { columns, Link } from "./columns";
import SearchInput from "./search-input";
import Pagination from "./pagination";
import SortSelect from "./sort-select";

type Props = {
  links: Link[];
};


export default function LinksTable({ links }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const ITEMS_PER_PAGE = 10;
  useEffect(() => {
  setCurrentPage(1);
}, [search]);

  // Search Filter
  const filteredLinks = useMemo(() => {
  let result = [...links];

  if (search.trim()) {
    const keyword = search.toLowerCase();

    result = result.filter((link) => {
      return (
        link.originalUrl
          .toLowerCase()
          .includes(keyword) ||
        link.shortCode
          .toLowerCase()
          .includes(keyword)
      );
    });
  }

  switch (sortBy) {
    case "oldest":
      result.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      );
      break;

    case "most-clicked":
      result.sort(
        (a, b) => b.clicks - a.clicks
      );
      break;

    case "least-clicked":
      result.sort(
        (a, b) => a.clicks - b.clicks
      );
      break;

    case "a-z":
      result.sort((a, b) =>
        a.shortCode.localeCompare(
          b.shortCode
        )
      );
      break;

    case "z-a":
      result.sort((a, b) =>
        b.shortCode.localeCompare(
          a.shortCode
        )
      );
      break;

    default:
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      );
  }

  return result;
}, [links, search, sortBy]);


  const paginatedLinks = useMemo(() => {
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  return filteredLinks.slice(start, end);
}, [filteredLinks, currentPage]);

const totalPages = Math.max(
  1,
  Math.ceil(filteredLinks.length / ITEMS_PER_PAGE)
);

  const table = useReactTable({
    data: paginatedLinks,
    columns: columns as ColumnDef<Link>[],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">

      {/* Search Box */}
      <div className="flex items-center justify-between gap-4">
  <SearchInput
    value={search}
    onChange={setSearch}
  />

  <SortSelect
    value={sortBy}
    onChange={setSortBy}
  />
</div>

      {/* Table */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="py-10 text-center text-muted-foreground"
                >
                  No links found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        
      </div>
<div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
  <span>
    Showing{" "}
    {filteredLinks.length === 0
      ? 0
      : (currentPage - 1) * ITEMS_PER_PAGE + 1}
    –
    {Math.min(
      currentPage * ITEMS_PER_PAGE,
      filteredLinks.length
    )}{" "}
    of {filteredLinks.length} links
  </span>
</div>

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
    </div>
  );
}
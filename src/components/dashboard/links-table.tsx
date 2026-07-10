"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

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

import { Button } from "@/components/ui/button";

import {
  Inbox,
  SearchX,
  Plus,
} from "lucide-react";

import { columns, Link as LinkType } from "./columns";
import SearchInput from "./search-input";
import Pagination from "./pagination";
import SortSelect from "./sort-select";

type Props = {
  links: LinkType[];
};

export default function LinksTable({ links }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

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
    const start =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredLinks.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredLinks, currentPage]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredLinks.length / ITEMS_PER_PAGE
    )
  );

  const table = useReactTable({
    data: paginatedLinks,
    columns: columns as ColumnDef<LinkType>[],
    getCoreRowModel: getCoreRowModel(),
  });

  // Empty Dashboard State
  if (links.length === 0) {
    return (
      <div className="space-y-6">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchInput
            value={search}
            onChange={setSearch}
          />

          <SortSelect
            value={sortBy}
            onChange={setSortBy}
          />
        </div>

        <div className="rounded-2xl border border-dashed bg-muted/30 px-6 py-16 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Inbox className="h-10 w-10 text-primary" />
          </div>

          <h2 className="mt-6 text-3xl font-bold">
            No Links Yet
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            You have not created any shortened
            links yet. Create your first link
            and start managing everything from
            your dashboard.
          </p>

          <Link
            href="/#create-link"
            className="mt-8 inline-block"
          >
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Link
            </Button>
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-w-0 space-y-6">

      {/* Search + Sort */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

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

      <div className="w-full overflow-x-auto rounded-xl border">
        

        <Table className="min-w-237.5">

          <TableHeader>
            {table
              .getHeaderGroups()
              .map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map(
                    (header) => (
                      <TableHead
                        key={header.id}
                      >
                        {flexRender(
                          header.column
                            .columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    )
                  )}
                </TableRow>
              ))}
          </TableHeader>

          <TableBody>

            {table.getRowModel().rows.length ? (
              table
                .getRowModel()
                .rows.map((row) => (
                  <TableRow key={row.id}>
                    {row
                      .getVisibleCells()
                      .map((cell) => (
                        <TableCell
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column
                              .columnDef.cell,
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
                  className="py-14"
                >
                  <div className="flex flex-col items-center justify-center text-center">

                    <SearchX className="h-12 w-12 text-muted-foreground" />

                    <h3 className="mt-5 text-xl font-semibold">
                      No matching links
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      Try searching with a
                      different keyword.
                    </p>

                  </div>
                </TableCell>
              </TableRow>
            )}

          </TableBody>

        </Table>

      </div>

      {filteredLinks.length > 0 && (
        <>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">

            <span>
              Showing{" "}
              {(currentPage - 1) *
                ITEMS_PER_PAGE +
                1}
              –
              {Math.min(
                currentPage *
                  ITEMS_PER_PAGE,
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
        </>
      )}
    </div>
  );
}
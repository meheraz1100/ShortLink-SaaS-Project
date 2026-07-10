"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Link2,
  BarChart3,
  Menu,
  Settings,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import SidebarLink from "./sidebar-link";

export default function MobileSidebar() {
  return (
    <Sheet>

      <SheetTrigger asChild>

        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72 p-0"
      >
        <div className="flex h-full flex-col">

          {/* Logo */}

          <div className="border-b p-6">

            <Link
              href="/"
              className="text-2xl font-bold"
            >
              ShortLink
            </Link>

          </div>

          {/* Menu */}

          <nav className="flex-1 space-y-2 p-4">

            <SidebarLink
              href="/dashboard"
              title="Dashboard"
              icon={<LayoutDashboard size={20} />}
            />

            <SidebarLink
              href="/dashboard/links"
              title="Links"
              icon={<Link2 size={20} />}
            />

            <SidebarLink
              href="/dashboard/analytics"
              title="Analytics"
              icon={<BarChart3 size={20} />}
            />

            <SidebarLink
              href="/dashboard/settings"
              title="Settings"
              icon={<Settings size={20} />}
            />

          </nav>

          {/* Footer */}

          <div className="border-t p-4">

            <div className="rounded-xl border bg-muted/40 p-4">

              <p className="font-semibold">
                Free Plan
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Upgrade to Pro anytime.
              </p>

            </div>

          </div>

        </div>

      </SheetContent>

    </Sheet>
  );
}
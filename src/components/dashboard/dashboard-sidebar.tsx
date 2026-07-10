"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  Link2,
  BarChart3,
  Settings,
} from "lucide-react";

import SidebarLink from "./sidebar-link";

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r bg-card lg:block">
    

      <div className="sticky top-0 flex h-screen flex-col">

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

        {/* Bottom */}

        <div className="border-t p-4">

          <div className="rounded-xl border bg-muted/40 p-4">

            <p className="font-semibold">
              Free Plan
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Upgrade to Pro to unlock premium
              features.
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}
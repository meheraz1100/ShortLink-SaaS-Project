"use client";

import { usePathname } from "next/navigation";

import { UserButton } from "@clerk/nextjs";

import ThemeToggle from "@/components/theme-toggle";

import MobileSidebar from "./mobile-sidebar";

export default function DashboardHeader() {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/links": "Links",
    "/dashboard/analytics": "Analytics",
    "/dashboard/settings": "Settings",
  };

  const title = titleMap[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur lg:px-8">

      {/* Left */}
      <div className="flex items-center gap-3">

        <MobileSidebar />

        <div>
          <h1 className="text-xl font-bold">
            
          </h1>

          <p className="hidden text-sm text-muted-foreground md:block">
            Manage your ShortLink workspace With ease and efficiency. Explore the dashboard to access your links, analytics, and settings all in one place. Track your link performance, monitor clicks, and gain valuable insights into your audience. Customize your workspace settings to suit your preferences and optimize your link management experience.
          </p>
        </div>

      </div>

      {/* Right */}
      {/* <div className="flex items-center gap-3">

        <ThemeToggle />

        <UserButton
          appearance={{
            elements: {
              avatarBox:
                "h-10 w-10 border shadow-sm",
            },
          }}
        />

      </div> */}

    </header>
  );
}
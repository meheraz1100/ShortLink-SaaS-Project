"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "../shared/container";

import {
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import {
  Link2,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="rounded-lg bg-primary p-2 text-white">
              <Link2 className="h-5 w-5" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              ShortLink
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {isSignedIn ? (
              <div className="ml-2 flex items-center gap-3">

                <Link href="/dashboard">
                  <Button className="gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>

                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 border shadow-sm",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="ml-2 flex items-center gap-3">

                <SignInButton mode="modal">
                  <Button variant="outline">
                    Login
                  </Button>
                </SignInButton>

                <SignInButton mode="modal">
                  <Button>
                    Get Started
                  </Button>
                </SignInButton>

              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-125" : "max-h-0"
        }`}
      >
        <Container>
          <div className="space-y-2 py-6">

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-lg px-3 py-2 text-sm transition ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-5 border-t pt-5">

              {isSignedIn ? (
                <div className="flex items-center justify-between gap-4">

                  <Link
                    href="/dashboard"
                    onClick={closeMenu}
                    className="flex-1"
                  >
                    <Button className="w-full gap-2">
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>

                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-10 h-10 border shadow-sm",
                      },
                    }}
                  />

                </div>
              ) : (
                <div className="space-y-3">

                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      Login
                    </Button>
                  </SignInButton>

                  <SignInButton mode="modal">
                    <Button className="w-full">
                      Get Started Free
                    </Button>
                  </SignInButton>

                </div>
              )}

            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
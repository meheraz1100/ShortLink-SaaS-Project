"use client";

import Link from "next/link";

import Container from "../shared/container";

import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            ShortLink
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Features
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              About
            </Link>

            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>

                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 border shadow-sm",
                    },
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <SignInButton mode="modal">
                  <Button variant="outline">Login</Button>
                </SignInButton>

                <SignInButton mode="modal">
                  <Button>Get Started</Button>
                </SignInButton>
              </div>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}

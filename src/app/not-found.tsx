import Link from "next/link";
import { Home, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-linear-to-b from-background to-muted/40 px-4">

      <div className="mx-auto max-w-xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <SearchX className="h-12 w-12 text-primary" />
        </div>

        <h1 className="mt-8 text-6xl font-bold tracking-tight sm:text-7xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mt-5 text-muted-foreground leading-7">
          Sorry, the page you are looking for does not exist or has been
          moved. Please check the URL or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link href="/">
            <Button className="w-48">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button
              variant="outline"
              className="w-48"
            >
              Dashboard
            </Button>
          </Link>

        </div>

      </div>

    </main>
  );
}
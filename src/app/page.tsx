import Link from "next/link";
import { ArrowRight, Link2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import Container from "@/components/shared/container";
import CreateLinkForm from "@/components/forms/create-link-form";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors py-24">
      <Container>
        <section className="mx-auto max-w-5xl text-center">

          {/* Badge */}

          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur">
              <Link2 className="h-4 w-4 text-primary" />
              Fast • Secure • Analytics
            </div>
          </div>

          {/* Heading */}

          <h1 className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Shorten URLs
            <br />
            Track Every Click
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Create branded short links, manage them from your dashboard,
            and monitor every click with detailed analytics.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link href="/dashboard">
              <Button
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
            </Link>

            <Link href="/features">
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto"
              >
                Learn More

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

          </div>

          {/* Create Form */}

          <div className="mt-14">
            <CreateLinkForm />
          </div>

        </section>
      </Container>
    </main>
  );
}
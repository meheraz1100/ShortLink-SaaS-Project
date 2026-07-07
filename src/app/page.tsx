import { ArrowRight, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/container";

export default function HomePage() {
  return (
    <main className="py-24">
      <Container>
        <section className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <Link2 className="h-4 w-4" />
              Fast • Secure • Analytics
            </div>
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Shorten URLs
            <br />
            Track Every Click
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Create branded short links, manage them from your dashboard,
            and monitor every click with detailed analytics.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">
              Get Started
            </Button>

            <Button variant="outline" size="lg">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
import { BadgeCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="container mx-auto py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          About ShortLink
        </h1>

        <p className="text-center mt-6 text-muted-foreground">
          ShortLink is a modern SaaS URL shortening platform built
          with the latest web technologies to make sharing links
          easier, faster and smarter.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="rounded-xl border p-8">
            <h2 className="text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 text-muted-foreground">
              We aim to provide a secure, fast and elegant URL
              shortening solution for everyone.
            </p>
          </div>

          <div className="rounded-xl border p-8">
            <h2 className="text-2xl font-bold">
              Technologies
            </h2>

            <ul className="space-y-3 mt-6">
              <li><BadgeCheck className="inline mr-2 h-5 w-5" />Next.js 16</li>
              <li><BadgeCheck className="inline mr-2 h-5 w-5" />TypeScript</li>
              <li><BadgeCheck className="inline mr-2 h-5 w-5" />Prisma ORM</li>
              <li><BadgeCheck className="inline mr-2 h-5 w-5" />PostgreSQL</li>
              <li><BadgeCheck className="inline mr-2 h-5 w-5" />Clerk Authentication</li>
              <li><BadgeCheck className="inline mr-2 h-5 w-5" />Tailwind CSS</li>
              <li><BadgeCheck className="inline mr-2 h-5 w-5" />shadcn/ui</li>
            </ul>
          </div>

        </div>

        <div className="rounded-xl border p-10 mt-12 text-center">
          <h2 className="text-3xl font-bold">
            Why ShortLink?
          </h2>

          <p className="mt-4 text-muted-foreground">
            Built as a portfolio-quality SaaS project demonstrating
            authentication, database management, modern UI,
            analytics and scalable architecture.
          </p>
        </div>

      </div>
    </main>
  );
}
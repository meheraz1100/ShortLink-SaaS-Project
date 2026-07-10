import { BadgeCheck, Rocket, ShieldCheck } from "lucide-react";

const technologies = [
  "Next.js 16",
  "TypeScript",
  "Prisma ORM",
  "PostgreSQL",
  "Clerk Authentication",
  "Tailwind CSS",
  "shadcn/ui",
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

      {/* Hero */}
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          About ShortLink
        </h1>

        <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
          ShortLink is a modern SaaS URL shortening platform built with
          the latest web technologies to make sharing links easier,
          faster and smarter.
        </p>
      </section>

      {/* Cards */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16">

        {/* Mission */}
        <div className="rounded-2xl border bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Rocket className="h-6 w-6 text-primary" />
          </div>

          <h2 className="text-2xl font-bold">
            Our Mission
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            We aim to provide a secure, fast and elegant URL shortening
            solution for individuals, developers and businesses with a
            clean, modern experience.
          </p>
        </div>

        {/* Technologies */}
        <div className="rounded-2xl border bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>

          <h2 className="text-2xl font-bold">
            Technologies
          </h2>

          <ul className="mt-6 space-y-4">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-3"
              >
                <BadgeCheck className="h-5 w-5 text-green-600" />
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why ShortLink */}
      <section className="mt-12 rounded-2xl border bg-muted/30 p-8 text-center shadow-sm lg:mt-16 lg:p-10">

        <h2 className="text-2xl font-bold sm:text-3xl">
          Why ShortLink?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
          ShortLink was built as a portfolio-quality SaaS application to
          demonstrate authentication, database management, analytics,
          responsive UI, QR code generation, custom aliases and scalable
          architecture using modern web technologies.
        </p>

      </section>
    </main>
  );
}
export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-4xl py-20">
      <h1 className="text-5xl font-bold">
        Terms of Service
      </h1>

      <p className="mt-4 text-muted-foreground">
        Last updated: July 2026
      </p>

      <div className="mt-10 space-y-8">

        <section>
          <h2 className="text-2xl font-semibold">
            Acceptance of Terms
          </h2>

          <p className="mt-3 text-muted-foreground leading-7">
            By using ShortLink, you agree to comply with these Terms
            of Service and all applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            User Responsibilities
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
            <li>Do not create malicious links.</li>
            <li>Respect applicable laws.</li>
            <li>Protect your account credentials.</li>
            <li>Use the platform responsibly.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Limitation of Liability
          </h2>

          <p className="mt-3 text-muted-foreground leading-7">
            ShortLink is provided |as is| without warranties of any
            kind. We are not responsible for damages arising from the
            use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Changes
          </h2>

          <p className="mt-3 text-muted-foreground leading-7">
            We may update these Terms at any time. Continued use of
            the platform means you accept the updated Terms.
          </p>
        </section>

      </div>
    </main>
  );
}
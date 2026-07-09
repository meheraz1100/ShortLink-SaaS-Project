export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-4xl py-20">
      <h1 className="text-5xl font-bold">
        Privacy Policy
      </h1>

      <p className="mt-4 text-muted-foreground">
        Last updated: July 2026
      </p>

      <div className="mt-10 space-y-8">

        <section>
          <h2 className="text-2xl font-semibold">
            Information We Collect
          </h2>

          <p className="mt-3 text-muted-foreground leading-7">
            We collect the information you provide when creating
            shortened links, signing in through Clerk Authentication,
            and using our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>

          <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
            <li>Create and manage your shortened URLs.</li>
            <li>Provide dashboard analytics.</li>
            <li>Improve platform security.</li>
            <li>Enhance user experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Data Security
          </h2>

          <p className="mt-3 text-muted-foreground leading-7">
            We use modern authentication, encrypted connections,
            and secure cloud infrastructure to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Contact
          </h2>

          <p className="mt-3 text-muted-foreground">
            Email: contact@shortlink.dev
          </p>
        </section>

      </div>
    </main>
  );
}
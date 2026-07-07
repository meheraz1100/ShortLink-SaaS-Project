import Container from "@/components/shared/container";

export default function HomePage() {
  return (
    <main className="py-20">
      <Container>
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold">
            Shorten Your Links Instantly
          </h1>

          <p className="mx-auto max-w-2xl text-gray-600">
            Create short, memorable links and track every click with detailed
            analytics.
          </p>

          <button className="rounded-lg bg-black px-6 py-3 text-white">
            Get Started
          </button>
        </div>
      </Container>
    </main>
  );
}
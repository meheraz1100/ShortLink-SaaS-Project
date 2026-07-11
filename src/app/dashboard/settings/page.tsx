import {
  Zap,
  Link2,
  QrCode,
  ShieldCheck,
  BarChart3,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: "Lightning Fast",
    description:
      "Generate short links instantly with blazing fast performance.",
  },
  {
    icon: <Link2 className="h-7 w-7 text-primary" />,
    title: "Custom Alias",
    description:
      "Create memorable URLs using your own custom alias.",
  },
  {
    icon: <QrCode className="h-7 w-7 text-primary" />,
    title: "QR Code",
    description:
      "Generate QR codes for every shortened link.",
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-primary" />,
    title: "Analytics",
    description:
      "Track clicks and monitor link performance easily.",
  },
  {
    icon: <Clock3 className="h-7 w-7 text-primary" />,
    title: "Expiration",
    description:
      "Set expiration dates for temporary links.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Secure",
    description:
      "Protected with Clerk Authentication and modern security.",
  },
];

export default function SettingsPage() {
  return (
    <main className="container mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 bg-background text-foreground transition-colors">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Powerful Features
        </h1>

        <p className="mt-4 text-sm text-muted-foreground sm:text-base lg:text-lg">
          Everything you need to shorten, manage and track your links in one
          powerful platform.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group flex h-full flex-col rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              {feature.icon}
            </div>

            <h2 className="mt-5 text-xl font-semibold">
              {feature.title}
            </h2>

            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
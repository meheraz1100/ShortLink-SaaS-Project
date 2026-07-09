import { Zap, Link2, QrCode, ShieldCheck, BarChart3, Clock3 } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Lightning Fast",
    description: "Generate short links instantly with blazing fast performance.",
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: "Custom Alias",
    description: "Create memorable URLs using your own custom alias.",
  },
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: "QR Code",
    description: "Generate QR codes for every shortened link.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Analytics",
    description: "Track clicks and monitor link performance easily.",
  },
  {
    icon: <Clock3 className="h-8 w-8 text-primary" />,
    title: "Expiration",
    description: "Set expiration dates for temporary links.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure",
    description: "Protected with Clerk Authentication and modern security.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="container mx-auto py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold">
          Powerful Features
        </h1>

        <p className="mt-5 text-muted-foreground">
          Everything you need to shorten, manage and track your links.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border p-6 hover:shadow-lg transition"
          >
            {feature.icon}

            <h2 className="text-xl font-semibold mt-5">
              {feature.title}
            </h2>

            <p className="mt-3 text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
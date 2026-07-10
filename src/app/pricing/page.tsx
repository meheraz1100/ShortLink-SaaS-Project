import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "$0",
    description: "Perfect for personal use and getting started.",
    features: [
      "Unlimited Links",
      "QR Code",
      "Dashboard",
      "Custom Alias",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    title: "Pro",
    price: "$9/mo",
    description: "Best for creators and growing businesses.",
    features: [
      "Advanced Analytics",
      "Password Protection",
      "Folders",
      "Priority Support",
    ],
    button: "Coming Soon",
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for teams and organizations.",
    features: [
      "Unlimited Team",
      "API Access",
      "Dedicated Support",
      "Custom Domain",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-14 sm:px-6 lg:px-8 lg:py-20">

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Simple Pricing
        </h1>

        <p className="mt-4 text-sm text-muted-foreground sm:text-base lg:text-lg">
          Choose the perfect plan for your personal projects or business.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              plan.featured
                ? "border-primary shadow-lg ring-2 ring-primary/20"
                : ""
            }`}
          >
            {plan.featured && (
              <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most Popular
              </span>
            )}

            <h2 className="text-2xl font-bold">
              {plan.title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {plan.description}
            </p>

            <p className="mt-6 text-4xl font-bold">
              {plan.price}
            </p>

            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                >
                  <Check className="h-4 w-4 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              className="mt-8 w-full"
              variant={plan.featured ? "default" : "outline"}
            >
              {plan.button}
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
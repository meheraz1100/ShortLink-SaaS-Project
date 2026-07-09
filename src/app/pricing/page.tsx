import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Unlimited Links",
      "QR Code",
      "Dashboard",
      "Custom Alias",
    ],
    button: "Get Started",
  },
  {
    title: "Pro",
    price: "$9/mo",
    features: [
      "Advanced Analytics",
      "Password Protection",
      "Folders",
      "Priority Support",
    ],
    button: "Coming Soon",
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Team",
      "API Access",
      "Dedicated Support",
      "Custom Domain",
    ],
    button: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <main className="container mx-auto py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Simple Pricing
        </h1>

        <p className="mt-4 text-muted-foreground">
          Choose the perfect plan for your needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-16">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="rounded-xl border p-8"
          >
            <h2 className="text-2xl font-bold">
              {plan.title}
            </h2>

            <p className="text-4xl font-bold mt-5">
              {plan.price}
            </p>

            <ul className="space-y-3 mt-8">
              {plan.features.map((item) => (
                <li key={item}>
                  ✅ {item}
                </li>
              ))}
            </ul>

            <Button className="w-full mt-8">
              {plan.button}
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
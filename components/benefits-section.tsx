"use client";

import {
  TrendingUp,
  Leaf,
  Clock,
  DollarSign,
  Globe,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Yield",
    description:
      "Early detection leads to timely treatment, helping you save up to 40% of potential crop damage.",
  },
  {
    icon: Leaf,
    title: "Healthier Crops",
    description:
      "Grow stronger, more resilient crops with proper disease management and targeted care.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Get instant diagnosis without waiting for experts. Available 24/7 whenever you need it.",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description:
      "Avoid unnecessary pesticide applications with accurate, targeted treatment recommendations.",
  },
  {
    icon: Globe,
    title: "Works Anywhere",
    description:
      "Uses WhatsApp for easy access. Perfect for rural areas with basic internet connectivity.",
  },
  {
    icon: Shield,
    title: "Reliable Results",
    description:
      "AI trained on thousands of crop disease images ensuring consistent, accurate diagnoses.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Benefits
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Farmers Choose Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Technology that was previously only available to large agricultural
            enterprises, now accessible to every farmer.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex gap-4 rounded-xl bg-card p-5 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <benefit.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

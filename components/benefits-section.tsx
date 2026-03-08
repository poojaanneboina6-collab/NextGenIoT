"use client";

import {
  TrendingDown,
  Sprout,
  Wallet,
  Globe,
  Users,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Crop Loss",
    description:
      "Early detection means early treatment. Identify diseases before they spread and save up to 40% of potential crop damage.",
  },
  {
    icon: Sprout,
    title: "Healthier Harvests",
    description:
      "With timely disease management, grow stronger, more resilient crops that yield better quality produce for market.",
  },
  {
    icon: Wallet,
    title: "Save on Costs",
    description:
      "Avoid unnecessary pesticide applications and reduce treatment costs by getting accurate, targeted recommendations.",
  },
  {
    icon: Globe,
    title: "Works Offline-First",
    description:
      "Send images when you have connectivity, receive results instantly. Perfect for rural areas with intermittent internet.",
  },
  {
    icon: Users,
    title: "No Technical Skills Needed",
    description:
      "If you can use WhatsApp, you can use CropGuard AI. No apps to download, no accounts to create, no learning curve.",
  },
  {
    icon: BarChart3,
    title: "Track Crop Health History",
    description:
      "Review past diagnoses and monitor disease patterns in your fields over time to make informed farming decisions.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Benefits for Farmers
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            CropGuard AI empowers farmers with technology that was previously
            only available to large agricultural enterprises.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex gap-4 rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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

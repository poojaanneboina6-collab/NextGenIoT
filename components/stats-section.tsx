"use client";

import { Target, Users, Leaf, Clock } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "95%",
    label: "Detection Accuracy",
    description: "AI-powered precision",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Farmers Helped",
    description: "Across multiple regions",
  },
  {
    icon: Leaf,
    value: "50+",
    label: "Crops Supported",
    description: "Major crop varieties",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Availability",
    description: "Always ready to help",
  },
];

export function StatsSection() {
  return (
    <section className="border-y bg-primary/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Impact
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by farmers worldwide
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center text-center rounded-2xl bg-card p-6 border transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-semibold text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Brain, MessageCircle, Zap, Leaf, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Disease Detection",
    description:
      "Advanced machine learning models trained on thousands of crop disease images for accurate identification.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chatbot",
    description:
      "Simply send a photo via WhatsApp and receive instant diagnosis. No app downloads required.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get disease identification and treatment recommendations within seconds, not hours.",
  },
  {
    icon: Leaf,
    title: "Multi-Crop Support",
    description:
      "Supports rice, wheat, tomato, potato, corn, and 50+ other crops commonly grown worldwide.",
  },
  {
    icon: Shield,
    title: "Treatment Plans",
    description:
      "Receive actionable treatment suggestions including organic alternatives and preventive measures.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description:
      "Available in English, Hindi, Telugu, and more languages to serve farmers across regions.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to protect your crops
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our AI-powered platform provides comprehensive tools for crop disease
            management.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

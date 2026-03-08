"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Scan, MessageCircle, Zap } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "AI Disease Detection",
    description:
      "Advanced machine learning analyzes crop images to identify diseases with high accuracy, detecting visual patterns humans might miss.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chatbot",
    description:
      "No app downloads needed. Simply send a photo via WhatsApp and receive instant diagnosis in your preferred language.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get disease identification and treatment recommendations within seconds. Available 24/7 for time-critical farming decisions.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful AI for Crop Health
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our AI-powered system analyzes crop images to identify diseases with
            remarkable precision.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-0 bg-card shadow-sm transition-all hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

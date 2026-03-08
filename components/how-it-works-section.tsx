"use client";

import { Camera, Brain, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Upload Image",
    description:
      "Take a clear photo of the affected crop leaf and upload it to our platform or send via WhatsApp.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analysis",
    description:
      "Our advanced AI model analyzes the image, identifying disease patterns and symptoms in seconds.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Get Treatment",
    description:
      "Receive detailed diagnosis with treatment recommendations, preventive measures, and supplier locations.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three simple steps to protect your crops
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Getting a crop disease diagnosis has never been easier. Follow these
            steps to get started.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line - desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-0.5 w-8 translate-x-full bg-border lg:block">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-muted-foreground" />
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step number and icon */}
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="mx-auto my-6 h-8 w-0.5 bg-border lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

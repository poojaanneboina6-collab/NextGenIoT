"use client";

import { Smartphone, Send, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Take a Photo",
    description:
      "Use your phone camera to capture a clear image of the affected crop leaves, stems, or fruits showing symptoms of disease.",
  },
  {
    number: "02",
    icon: Send,
    title: "Send via WhatsApp",
    description:
      "Open WhatsApp and send the image to our CropGuard AI chatbot. No downloads or sign-ups required — just message and go.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Get Instant Results",
    description:
      "Receive a detailed diagnosis within seconds, including disease name, severity assessment, and recommended treatment options.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Getting a crop disease diagnosis is as simple as sending a message.
            Follow these three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connection line - desktop only */}
          <div className="absolute left-0 right-0 top-24 hidden h-0.5 bg-border lg:block" />

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-card shadow-lg">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Step number badge */}
                <span className="absolute -top-2 right-1/2 translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground lg:right-auto lg:translate-x-0 lg:left-1/2 lg:ml-8">
                  Step {step.number}
                </span>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-muted-foreground">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="mt-8 h-8 w-0.5 bg-border lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

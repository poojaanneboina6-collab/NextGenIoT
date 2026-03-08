"use client";

import { Camera, Cpu, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Camera,
    title: "Upload Image",
    description:
      "Take a clear photo of the affected crop leaves, stems, or fruits showing disease symptoms.",
  },
  {
    number: "2",
    icon: Cpu,
    title: "AI Analysis",
    description:
      "Our AI model processes the image, analyzing patterns to identify the disease accurately.",
  },
  {
    number: "3",
    icon: FileText,
    title: "Get Treatment",
    description:
      "Receive detailed diagnosis with recommended treatments and preventive measures.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three Simple Steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Getting a crop disease diagnosis is as simple as sending a message.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connection line - desktop only */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-border lg:block" />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step icon with number */}
                <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-primary/20 bg-card shadow-sm">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                {/* Step number */}
                <div className="absolute -top-2 right-1/2 flex h-8 w-8 translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground lg:right-auto lg:left-1/2 lg:ml-12 lg:translate-x-0">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="mt-8 h-12 w-px bg-border lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

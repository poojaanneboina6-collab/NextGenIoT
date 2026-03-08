"use client";

import { Button } from "@/components/ui/button";
import { Upload, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            AI-Powered Crop Protection
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Detect Crop Diseases
            <span className="block text-primary">Instantly with AI</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Upload a photo of your affected crop and receive instant AI-powered
            diagnosis with treatment recommendations. Available 24/7 via WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <a
                href="https://wa.me/1234567890?text=Hi%20Crop%20Health%20AI!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Upload className="h-4 w-4" />
                Upload Crop Image
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid w-full max-w-2xl grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground sm:text-4xl">
                95%
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                Accuracy
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground sm:text-4xl">
                10K+
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                Farmers Helped
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground sm:text-4xl">
                50+
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                Crops Supported
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

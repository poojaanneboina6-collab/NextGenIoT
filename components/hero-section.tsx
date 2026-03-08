"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Leaf, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span>AI-Powered Crop Protection</span>
            <ArrowRight className="h-3 w-3" />
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Detect Crop Diseases
            <span className="block text-primary">Instantly via WhatsApp</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Protect your harvest with AI-powered disease detection. Simply snap
            a photo of your affected crop and receive instant diagnosis with
            treatment recommendations — all through WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" asChild>
              <a
                href="https://wa.me/1234567890?text=Hi%20CropGuard!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Try on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Leaf className="h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground sm:text-4xl">
                50+
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                Diseases Detected
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-foreground sm:text-4xl">
                95%
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                Accuracy Rate
              </span>
            </div>
            <div className="col-span-2 flex flex-col items-center sm:col-span-1">
              <span className="text-3xl font-bold text-foreground sm:text-4xl">
                10K+
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                Farmers Helped
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

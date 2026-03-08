"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to Protect Your Crops?
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            Join thousands of farmers using AI to detect crop diseases early.
            Start for free today.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Button
              size="lg"
              className="gap-2 bg-background px-8 text-primary hover:bg-background/90"
              asChild
            >
              <a
                href="https://wa.me/1234567890?text=Hi%20Crop%20Health%20AI!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the AI Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="mt-6 text-sm text-primary-foreground/60">
            No registration required. Free to use. Available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}

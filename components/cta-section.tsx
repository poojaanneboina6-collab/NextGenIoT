"use client";

import { Button } from "@/components/ui/button";
import { Upload, MessageCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
            <Upload className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready to Protect Your Crops?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Upload your first crop image and get instant AI-powered diagnosis.
            Free to use, no registration required.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="#try-ai">
                <Upload className="h-5 w-5" />
                Upload Crop Image
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a
                href="https://wa.me/1234567890?text=Hi%20CropHealth!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Try via WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            No registration required. Free to use. Available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}

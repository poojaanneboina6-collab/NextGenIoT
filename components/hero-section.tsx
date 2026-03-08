"use client";

import { Button } from "@/components/ui/button";
import { Upload, Sparkles, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="try-ai" className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.05),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Disease Detection</span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Identify Crop Diseases
            <span className="block mt-2 text-primary">Instantly</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Upload a photo of an affected leaf to get instant AI-powered
            diagnostics, treatment recommendations, and locate your nearest
            supplier.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href="#upload">
                <Upload className="h-5 w-5" />
                Upload Crop Image
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 px-8" asChild>
              <a href="#how-it-works">
                Learn How It Works
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Upload Card Preview */}
          <div
            id="upload"
            className="mt-16 w-full max-w-xl rounded-2xl border-2 border-dashed border-primary/30 bg-card p-8 transition-colors hover:border-primary/50"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">
                  Upload leaf image
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Drag and drop an image of the affected crop leaf here, or
                  click to browse files.
                </p>
              </div>
              <Button variant="secondary" size="sm" className="mt-2">
                Browse Files
              </Button>
              <p className="text-xs text-muted-foreground">
                Supports: JPG, PNG, WebP (Max 10MB)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

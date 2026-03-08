"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* WhatsApp icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
            <MessageCircle className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Ready to Protect Your Crops?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Join thousands of farmers already using CropGuard AI. Start
            detecting crop diseases in seconds — completely free.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a
                href="https://wa.me/1234567890?text=Hi%20CropGuard!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Start Chatting on WhatsApp
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

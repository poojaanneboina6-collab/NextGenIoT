"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            Crop Health AI
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm" asChild>
            <a
              href="https://wa.me/1234567890?text=Hi%20Crop%20Health%20AI!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the AI
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full" asChild>
                <a
                  href="https://wa.me/1234567890?text=Hi%20Crop%20Health%20AI!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the AI
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

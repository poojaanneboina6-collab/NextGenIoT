"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Camera,
  Brain,
  MessageSquareText,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Image-Based Detection",
    description:
      "Simply take a photo of the affected plant part and send it via WhatsApp. Our AI analyzes leaf patterns, discoloration, and other visual symptoms.",
  },
  {
    icon: Brain,
    title: "Advanced AI Analysis",
    description:
      "Powered by deep learning models trained on thousands of crop disease images, ensuring accurate identification across multiple crop varieties.",
  },
  {
    icon: MessageSquareText,
    title: "Instant Recommendations",
    description:
      "Receive detailed treatment suggestions, preventive measures, and organic alternatives tailored to your specific crop disease.",
  },
  {
    icon: Zap,
    title: "Real-Time Response",
    description:
      "Get results within seconds. No waiting, no appointments — immediate access to expert-level diagnostics when you need it most.",
  },
  {
    icon: Shield,
    title: "Crop-Specific Guidance",
    description:
      "Customized advice for rice, wheat, tomato, potato, corn, and many more crops commonly grown across different regions.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Access disease detection anytime, anywhere. Our WhatsApp chatbot is always ready to help protect your crops around the clock.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Image-Based Disease Detection
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our AI-powered system analyzes crop images to identify diseases with
            remarkable precision, providing actionable insights for farmers.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-card shadow-md transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

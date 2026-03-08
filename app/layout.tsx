import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crop Health AI - AI-Powered Crop Disease Detection",
  description:
    "Detect crop diseases instantly with AI. Upload a photo of your affected crop and receive diagnosis with treatment recommendations via WhatsApp chatbot.",
  keywords: ["crop disease detection", "AI agriculture", "plant health", "farming technology", "WhatsApp chatbot"],
  authors: [{ name: "NextGenIoT Team" }],
};

export const viewport: Viewport = {
  themeColor: "#166534",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

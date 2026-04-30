import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Param Clinic | Premium Dental Excellence",
  description: "Experience the next level of dental care with our 'Antigravity' precision treatments. Professional, painless, and premium dental services at Param Clinic.",
  keywords: ["dental clinic", "teeth whitening", "orthodontics", "param clinic", "painless dentistry"],
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${plusJakartaSans.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <div className="relative min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

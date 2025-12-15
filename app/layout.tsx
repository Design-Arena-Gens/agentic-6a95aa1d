import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Prism — Intelligent AI Photo Sharing",
  description: "Prism is an intelligent AI photo-sharing platform for professionals blending tech-noir minimalism with cinematic storytelling.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-void text-white antialiased`}>{children}</body>
    </html>
  );
}

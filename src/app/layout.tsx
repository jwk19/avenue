import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Avenue Tax Audit Associates | Authorized KRA Tax Agents in Kenya",
    template: "%s | Avenue Tax Audit Associates",
  },
  description:
    "Avenue Tax Audit Associates is a Nairobi-based KRA authorized tax agency providing tax compliance, audit, VAT, bookkeeping, and advisory support for Kenyan businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 bg-white pt-40 md:pt-48">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import FaqScreen from './FaqScreen';

export const metadata: Metadata = {
  title: "Tax, Audit & Compliance FAQs for Kenyan Businesses",
  description:
    "Get answers to the most common questions about KRA registrations, VAT, PAYE, bookkeeping, audits, and penalties from Avenue Tax Audit Associates.",
};

export default function FaqPage() {
  return <FaqScreen />;
}

import type { Metadata } from 'next';

import ContactScreen from './ContactScreen';

export const metadata: Metadata = {
  title: 'Contact Avenue Tax Audit Associates | Talk to a Tax Expert',
  description:
    'Reach Avenue Tax Audit Associates for tax compliance, audit, VAT, bookkeeping, and advisory inquiries via phone, email, or our consultation form.',
};

export default function ContactPage() {
  return <ContactScreen />;
}

'use client';

import { FormEvent, useState } from 'react';
import ServiceDiscovery from '@/components/sections/ServiceDiscovery';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiSend,
} from 'react-icons/fi';

const contactChannels = [
  {
    title: 'Call our team',
    detail: '+254 711 500451',
    meta: 'Mon – Fri · 8:00 AM – 5:00 PM',
    icon: <FiPhone className="h-6 w-6" />,
    href: 'tel:+254711500451',
  },
  {
    title: 'Email us',
    detail: 'info@avenuetaxaudit.co.ke',
    meta: 'We respond within 1 business day',
    icon: <FiMail className="h-6 w-6" />,
    href: 'mailto:info@avenuetaxaudit.co.ke',
  },
  {
    title: 'Visit our office',
    detail: 'Sundial Plaza, Kamakis, Eastern Bypass',
    meta: 'Nairobi, Kenya',
    icon: <FiMapPin className="h-6 w-6" />,
    href: 'https://maps.app.goo.gl/Jiy3n4q6uQyY9FuF6',
  },
];

const responseHighlights = [
  'Dedicated account manager in your first week',
  'WhatsApp updates for urgent compliance matters',
  'Access to eTIMS and bookkeeping specialists',
];

export default function ContactScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      event.currentTarget.reset();
      alert('Thanks! Our team will reach out shortly.');
    }, 800);
  };

  return (
    <div className="bg-[#F6F4EF]">
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#071427] py-24 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Contact Avenue Tax Audit</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Talk to a dedicated tax & audit team that scales with you.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Whether you need urgent compliance support, strategic advisory, or a full finance partner, we're one conversation away.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="tel:+254711500451" variant="secondary" size="lg">
              Speak to an Advisor
            </Button>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/80 hover:text-[#071427]"
            >
              Find Services for Me
            </Button>
          </div>
          <div className="grid gap-3 text-left text-sm text-white/70 sm:grid-cols-3">
            {responseHighlights.map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="-mt-16 pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-8">
              <div className="rounded-3xl bg-white p-8 shadow-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Get in touch</p>
                <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                  Three quick ways to reach us
                </h2>
                <p className="mt-4 text-gray-600">
                  Prefer WhatsApp or a site visit? Let us know and we'll tailor the engagement experience for your team.
                </p>

                <div className="mt-8 space-y-4">
                  {contactChannels.map((channel) => (
                    <a
                      key={channel.title}
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition hover:border-secondary hover:bg-white"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-secondary shadow">
                        {channel.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">{channel.title}</p>
                        <p className="text-xl font-semibold text-gray-900">{channel.detail}</p>
                        <p className="text-sm text-gray-500">{channel.meta}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-dashed border-secondary/50 bg-secondary/5 p-4 text-secondary">
                  <FiClock className="h-5 w-5" />
                  <p className="text-sm font-medium">
                    Need after-hours support? Flag it in the form—we keep capacity for urgent compliance issues.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#071427] p-8 text-white">
                <h3 className="text-2xl font-semibold">Unsure what to request?</h3>
                <p className="mt-3 text-white/80">
                  Use our guided Service Discovery tool to get personalized recommendations in minutes.
                </p>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 bg-secondary text-[#071427] hover:bg-secondary-dark"
                >
                  Launch Discovery Tool
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <FiMessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">Contact Form</p>
                  <h2 className="text-3xl font-semibold text-gray-900">Tell us about your mandate</h2>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Company / Organization</label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none"
                      placeholder="ABC Holdings"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Work Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">What support do you need?</label>
                  <select
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary focus:bg-white focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="compliance">Compliance catch-up</option>
                    <option value="advisory">Tax & structuring advisory</option>
                    <option value="audit">Audit & assurance</option>
                    <option value="bookkeeping">Bookkeeping & reporting</option>
                    <option value="etims">eTIMS enablement</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Tell us more</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none"
                    placeholder="Share timelines, current challenges, or anything else we should prepare."
                  />
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-primary/5 p-4 text-sm text-gray-600">
                  <FiSend className="mt-1 h-5 w-5 text-primary" />
                  <p>
                    By submitting, you agree to our privacy policy and allow our client services team to contact you via email, phone, or WhatsApp.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit request'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Service Discovery">
        <ServiceDiscovery
          variant="modal"
          className="bg-transparent"
          heading="Get your personalized tax roadmap"
          subheading="Answer a few questions and we will recommend the right services and urgency level."
          onBookConsultation={() => {
            setIsModalOpen(false);
            window.location.href = 'tel:+254711500451';
          }}
        />
      </Modal>
    </div>
  );
}

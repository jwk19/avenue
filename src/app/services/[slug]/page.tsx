import Button from "@/components/ui/Button";
import { getServiceBySlug, services } from "@/data/services";
import { getServicePageContent, standardCtaContent, trustIndicators } from "@/data/servicePageContent";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const serviceContent = getServicePageContent(slug);

  if (!service || !serviceContent) {
    return {
      title: "Service not found | Avenue Tax & Audit",
    };
  }

  return {
    title: `${service.title} | Avenue Tax & Audit`,
    description: serviceContent.hero.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const serviceContent = getServicePageContent(slug);

  if (!service || !serviceContent) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <article className="bg-[#F6F4EF] text-[#071427]">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#050b20] py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:24px_24px]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 uppercase tracking-[0.4em]">
              {serviceContent.hero.eyebrow}
            </span>
            <Link href="/services" className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">
              <span>← Back to Services</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{serviceContent.hero.title}</h1>
            <p className="mt-6 text-lg text-white/80">{serviceContent.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary" size="lg" className="bg-white/15 text-white hover:bg-white/25">
                Book a Consultation
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                Explore all services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10 pb-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white px-4 py-12 shadow-2xl sm:px-6 lg:px-12">
          <div className="space-y-10">
            <div className="space-y-4">
              {serviceContent.overview.map((paragraph) => (
                <p key={paragraph} className="text-lg text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {serviceContent.sections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-gray-100 bg-gray-50/70 p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#071427]">{section.title}</h2>
                    {section.description && <p className="mt-3 text-base text-gray-600">{section.description}</p>}
                  </div>

                  {section.items && (
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {section.items.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                          <h3 className="text-lg font-semibold text-[#071427]">{item.title}</h3>
                          <p className="mt-2 text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="mt-4 space-y-3 text-base text-gray-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && <p className="mt-4 text-sm font-medium text-gray-600">{section.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-gray-200 bg-white px-8 py-12 text-center shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary">{standardCtaContent.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#071427]">{standardCtaContent.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{standardCtaContent.description}</p>
          <span className="mt-6 inline-flex items-center justify-center rounded-full bg-secondary/10 px-4 py-1 text-sm font-semibold text-secondary">
            {standardCtaContent.badge}
          </span>
          <p className="mt-4 text-base text-gray-600">{standardCtaContent.body}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-gray-100 bg-white px-8 py-12 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary">Trust Indicators</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#071427]">Why Kenyan Businesses Trust Avenue Tax Audit Associates</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                <p className="text-base text-gray-700">{indicator}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

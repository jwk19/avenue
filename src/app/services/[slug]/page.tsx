import Button from "@/components/ui/Button";
import { getServiceBySlug, services } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service not found | Avenue Tax & Audit",
    };
  }

  return {
    title: `${service.title} | Avenue Tax & Audit`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
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
              {service.hero.eyebrow}
            </span>
            <Link href="/services" className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">
              <span>← Back to Services</span>
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{service.title}</h1>
              <p className="mt-6 text-lg text-white/80">{service.hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="secondary" size="lg" className="bg-white/15 text-white hover:bg-white/25">
                  Book a Consultation
                </Button>
                <Button href="/services" variant="outline" size="lg" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                  Explore all services
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-sm uppercase tracking-[0.4em] text-white/70">Impact Metrics</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                {service.hero.highlights.map((highlight) => (
                  <div key={highlight.label} className="rounded-2xl bg-white/10 p-4">
                    <p className="text-3xl font-semibold text-white">{highlight.value}</p>
                    <p className="text-white/70">{highlight.label}</p>
                    {highlight.detail && <p className="text-sm text-white/60">{highlight.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10 pb-4">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white px-4 py-12 shadow-2xl sm:px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary">
                Why teams need this
              </p>
              <h2 className="text-3xl font-semibold text-[#071427]">Pain points we eliminate</h2>
              <p className="text-base text-gray-600">Built from dozens of Kenyan finance teams facing the same hurdles.</p>
            </div>
            <div className="grid gap-6 lg:col-span-2">
              {service.painPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 text-gray-800">
                  <p className="text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary">What we focus on</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#071427]">Engagement pillars</h2>
            </div>
            <p className="max-w-2xl text-base text-gray-600">
              Every engagement is delivered by a pod of specialists with clear swim lanes and measurable outcomes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.focusAreas.map((area) => (
              <div key={area.title} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#071427]">{area.title}</h3>
                <p className="mt-3 text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1429] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary-light">What you receive</p>
              <h2 className="mt-3 text-3xl font-semibold">Signature deliverables</h2>
            </div>
            <p className="max-w-2xl text-base text-white/70">
              We document everything—ensuring leadership, regulators, and auditors have the proof they need.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {service.deliverables.map((deliverable) => (
              <div key={deliverable.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{deliverable.title}</h3>
                <p className="mt-3 text-white/70">{deliverable.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary">How we work together</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#071427]">Our delivery rhythm</h2>
            </div>
            <p className="max-w-2xl text-base text-gray-600">
              Transparent milestones with artefacts at every step keep stakeholders confident and informed.
            </p>
          </div>
          <ol className="mt-10 space-y-6">
            {service.process.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-4 rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-sm md:flex-row md:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-lg font-semibold text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#071427]">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-gray-100 bg-white p-10 text-center shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-secondary">Next step</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#071427]">{service.cta.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{service.cta.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg">
              Talk to our team
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-gray-200">
              Browse other services
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}

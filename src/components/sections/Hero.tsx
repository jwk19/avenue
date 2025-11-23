'use client';

import PayeCalculator from '@/components/calculators/PayeCalculator';
import Button from '../ui/Button';

const partnerLogos = ['Holdings', 'Martyn', 'Reliance', 'Eastline'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#030a16] via-[#071427] to-primary-dark text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-16 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:py-28 lg:px-10">
        <div className="max-w-2xl space-y-8">
          <p className="text-sm uppercase tracking-[0.5em] text-secondary">Payroll Intelligence</p>
          <div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Smart PAYE solutions for Kenyan businesses
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Model gross-to-net pay in seconds, compare statutory deductions, and brief decision makers with
              export-ready reports powered by Avenue Tax Audit Associates.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm sm:flex-row">
            <Button href="/calculators" size="lg" variant="secondary" className="text-[#071427]">
              Calculate PAYE
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Talk to an Expert
            </Button>
          </div>

          <div className="space-y-6 text-sm text-white/70">
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p>Employers trust our payroll desk</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24 hrs</p>
                <p>Typical response for advisory briefs</p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">We work with</p>
              <div className="mt-3 flex flex-wrap gap-4 text-base font-semibold text-white">
                {partnerLogos.map((logo) => (
                  <span key={logo} className="rounded-full border border-white/20 px-4 py-2 text-sm uppercase tracking-wide">
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-lg lg:ml-auto">
          <PayeCalculator variant="card" className="shadow-primary/30" />
        </div>
      </div>
    </section>
  );
}

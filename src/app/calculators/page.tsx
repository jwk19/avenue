import PayeCalculator from '@/components/calculators/PayeCalculator';

export const metadata = {
  title: 'PAYE & Tax Calculators | Avenue Tax Audit Associates',
  description:
    'Run PAYE, NSSF, NHIF and housing levy scenarios with Avenue Tax Audit Associates payroll and compliance team.',
};

export default function CalculatorsPage() {
  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gradient-to-br from-[#071427] via-primary-dark to-primary py-24 text-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 text-center">
          <p className="text-sm uppercase tracking-[0.6em] text-white/70">Tax Calculators</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Plan your payroll & personal taxes with confidence.
          </h1>
          <p className="text-white/80">
            Estimate every statutory deduction—PAYE, NSSF, NHIF and Housing Levy—using the latest 2025 Kenya tax
            bands. More calculators (capital gains, rental income and PAYE annualizer) are rolling out soon.
          </p>
          <div className="mx-auto flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/20 px-4 py-2">Updated for 2025 tax bands</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Compliant with Treasury guidelines</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Export or print-ready results</span>
          </div>
        </div>
      </section>

      <section className="-mt-20">
        <PayeCalculator />
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  AlertCircle,
  Calculator,
  CheckCircle,
  Download,
  Mail,
  TrendingDown,
} from 'lucide-react';

interface BenefitInputs {
  housing: string;
  medical: string;
  other: string;
}

const PERSONAL_RELIEF = 2400;

type PayeCalculatorProps = {
  variant?: 'full' | 'card';
  className?: string;
};

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 2,
  }).format(amount);

const calculatePAYE = (taxableIncome: number) => {
  if (taxableIncome <= 0) return 0;

  if (taxableIncome <= 24000) {
    return taxableIncome * 0.1;
  }

  if (taxableIncome <= 32333) {
    return 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
  }

  if (taxableIncome <= 500000) {
    return (
      24000 * 0.1 +
      (32333 - 24000) * 0.25 +
      (taxableIncome - 32333) * 0.3
    );
  }

  if (taxableIncome <= 800000) {
    return (
      24000 * 0.1 +
      (32333 - 24000) * 0.25 +
      (500000 - 32333) * 0.3 +
      (taxableIncome - 500000) * 0.325
    );
  }

  return (
    24000 * 0.1 +
    (32333 - 24000) * 0.25 +
    (500000 - 32333) * 0.3 +
    (800000 - 500000) * 0.325 +
    (taxableIncome - 800000) * 0.35
  );
};

const calculateNSSF = (salary: number) => {
  if (salary <= 0) return 0;
  const tierOneCap = 7000;
  const tierTwoCap = 36000;
  const tierOne = Math.min(salary, tierOneCap) * 0.06;
  const tierTwo =
    salary > tierOneCap
      ? Math.min(salary - tierOneCap, tierTwoCap - tierOneCap) * 0.06
      : 0;

  return tierOne + tierTwo;
};

const calculateNHIF = (salary: number) => {
  if (salary <= 0) return 0;

  const bands = [
    { limit: 5999, amount: 150 },
    { limit: 7999, amount: 300 },
    { limit: 11999, amount: 400 },
    { limit: 14999, amount: 500 },
    { limit: 19999, amount: 600 },
    { limit: 24999, amount: 750 },
    { limit: 29999, amount: 850 },
    { limit: 34999, amount: 900 },
    { limit: 39999, amount: 950 },
    { limit: 44999, amount: 1000 },
    { limit: 49999, amount: 1100 },
    { limit: 59999, amount: 1200 },
    { limit: 69999, amount: 1300 },
    { limit: 79999, amount: 1400 },
    { limit: 89999, amount: 1500 },
    { limit: 99999, amount: 1600 },
  ];

  const band = bands.find(({ limit }) => salary <= limit);
  return band ? band.amount : 1700;
};

const computeResults = (grossSalary: string, benefits: BenefitInputs) => {
  const gross = parseFloat(grossSalary) || 0;
  const housingBenefit = parseFloat(benefits.housing) || 0;
  const medicalBenefit = parseFloat(benefits.medical) || 0;
  const otherBenefit = parseFloat(benefits.other) || 0;

  const taxableMedical = medicalBenefit > 15000 ? medicalBenefit - 15000 : 0;
  const totalTaxableIncome = gross + housingBenefit + taxableMedical + otherBenefit;

  const nssf = calculateNSSF(gross);
  const taxableIncome = Math.max(totalTaxableIncome - nssf, 0);
  const payeBeforeRelief = calculatePAYE(taxableIncome);
  const paye = Math.max(payeBeforeRelief - PERSONAL_RELIEF, 0);
  const nhif = calculateNHIF(gross);
  const housingLevy = gross * 0.015;
  const totalDeductions = paye + nssf + nhif + housingLevy;
  const netPay = gross - totalDeductions;

  return {
    gross,
    nssf,
    taxableIncome,
    paye,
    nhif,
    housingLevy,
    totalDeductions,
    netPay,
    deductionPercentage: gross > 0 ? (totalDeductions / gross) * 100 : 0,
  };
};

const PayeCalculator = ({ variant = 'full', className = '' }: PayeCalculatorProps) => {
  const [grossSalary, setGrossSalary] = useState('');
  const [benefits, setBenefits] = useState<BenefitInputs>({
    housing: '',
    medical: '',
    other: '',
  });
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(
    () => computeResults(grossSalary, benefits),
    [grossSalary, benefits]
  );

  const handleEmailSubmit = () => {
    if (!email || !email.includes('@')) {
      return;
    }

    // Placeholder for CRM integration
    console.info('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setShowEmailCapture(false);
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  if (variant === 'card') {
    return (
      <div className={`rounded-3xl bg-white p-6 shadow-2xl ${className}`}>
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">PAYE Calculator</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">
            See your take-home instantly
          </h3>
          <p className="text-sm text-gray-500">Updated for 2025 tax bands</p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Gross Salary (KES)
            </label>
            <input
              type="number"
              value={grossSalary}
              onChange={(event) => setGrossSalary(event.target.value)}
              placeholder="e.g., 120000"
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[0.7rem] uppercase tracking-[0.3em] text-gray-500">
                Housing
              </label>
              <input
                type="number"
                value={benefits.housing}
                onChange={(event) =>
                  setBenefits((prev) => ({ ...prev, housing: event.target.value }))
                }
                placeholder="0"
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-[0.7rem] uppercase tracking-[0.3em] text-gray-500">
                Medical
              </label>
              <input
                type="number"
                value={benefits.medical}
                onChange={(event) =>
                  setBenefits((prev) => ({ ...prev, medical: event.target.value }))
                }
                placeholder="0"
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[0.7rem] uppercase tracking-[0.3em] text-gray-500">
              Other Benefits
            </label>
            <input
              type="number"
              value={benefits.other}
              onChange={(event) =>
                setBenefits((prev) => ({ ...prev, other: event.target.value }))
              }
              placeholder="0"
              className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-primary/5 px-5 py-4">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Monthly Take-Home</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {formatCurrency(results.netPay)}
          </p>
          <p className="text-xs text-gray-500">
            {results.deductionPercentage.toFixed(1)}% in statutory deductions
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="rounded-2xl bg-gray-50 p-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">PAYE</p>
            <p className="text-lg font-semibold text-gray-900">
              {formatCurrency(results.paye)}
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">NSSF</p>
            <p className="text-lg font-semibold text-gray-900">
              {formatCurrency(results.nssf)}
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">NHIF</p>
            <p className="text-lg font-semibold text-gray-900">
              {formatCurrency(results.nhif)}
            </p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Housing Levy</p>
            <p className="text-lg font-semibold text-gray-900">
              {formatCurrency(results.housingLevy)}
            </p>
          </div>
        </div>

        <Link
          href="/calculators"
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-secondary px-4 py-3 text-sm font-semibold text-white transition hover:bg-secondary-dark"
        >
          View detailed breakdown
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 px-4 py-12 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-block rounded-full bg-emerald-600 p-3">
            <Calculator className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">PAYE & Take-Home Calculator</h1>
          <p className="mt-2 text-lg text-gray-600">
            Calculate your exact take-home salary in Kenya (2025 Tax Rates)
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Powered by <strong>Avenue Tax Audit Associates</strong>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Your Salary Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Gross Monthly Salary (KES) *
                </label>
                <input
                  type="number"
                  value={grossSalary}
                  onChange={(event) => setGrossSalary(event.target.value)}
                  placeholder="e.g., 100000"
                  className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="border-t pt-4">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-700">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  Additional Benefits (Optional)
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      Housing Allowance/Benefit
                    </label>
                    <input
                      type="number"
                      value={benefits.housing}
                      onChange={(event) =>
                        setBenefits((prev) => ({ ...prev, housing: event.target.value }))
                      }
                      placeholder="0"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      Medical Allowance (Over KES 15,000 is taxable)
                    </label>
                    <input
                      type="number"
                      value={benefits.medical}
                      onChange={(event) =>
                        setBenefits((prev) => ({ ...prev, medical: event.target.value }))
                      }
                      placeholder="0"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm text-gray-600">
                      Other Taxable Benefits
                    </label>
                    <input
                      type="number"
                      value={benefits.other}
                      onChange={(event) =>
                        setBenefits((prev) => ({ ...prev, other: event.target.value }))
                      }
                      placeholder="0"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
              <strong>💡 Tip:</strong> Include all taxable benefits for accurate calculations.
              Avenue Tax Audit Associates can help you optimize your tax position legally.
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white shadow-xl">
              <h2 className="mb-2 text-xl font-semibold opacity-90">
                Your Monthly Take-Home
              </h2>
              <div className="mb-4 text-5xl font-bold">
                {formatCurrency(results.netPay)}
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <TrendingDown className="h-5 w-5" />
                <span>{results.deductionPercentage.toFixed(1)}% deducted from gross salary</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Deductions Breakdown
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between border-b py-2">
                  <span className="text-gray-600">Gross Salary</span>
                  <span className="font-semibold text-gray-800">
                    {formatCurrency(results.gross)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">PAYE (Income Tax)</span>
                  <span className="font-semibold text-red-600">
                    -{formatCurrency(results.paye)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">NSSF (Pension)</span>
                  <span className="font-semibold text-red-600">
                    -{formatCurrency(results.nssf)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">NHIF (Health Insurance)</span>
                  <span className="font-semibold text-red-600">
                    -{formatCurrency(results.nhif)}
                  </span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="text-gray-600">Housing Levy (1.5%)</span>
                  <span className="font-semibold text-red-600">
                    -{formatCurrency(results.housingLevy)}
                  </span>
                </div>
                <div className="flex justify-between rounded-lg bg-red-50 px-3 py-3">
                  <span className="font-semibold text-gray-800">Total Deductions</span>
                  <span className="font-bold text-red-600">
                    {formatCurrency(results.totalDeductions)}
                  </span>
                </div>
                <div className="flex justify-between rounded-lg bg-emerald-50 px-3 py-3">
                  <span className="font-semibold text-gray-800">Net Pay (Take-Home)</span>
                  <span className="text-xl font-bold text-emerald-600">
                    {formatCurrency(results.netPay)}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <h3 className="mb-4 text-xl font-bold text-gray-800">Annual Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-600">Annual Gross</p>
                  <p className="text-lg font-bold text-gray-800">
                    {formatCurrency(results.gross * 12)}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-600">Annual Take-Home</p>
                  <p className="text-lg font-bold text-emerald-600">
                    {formatCurrency(results.netPay * 12)}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-600">Total Annual Tax</p>
                  <p className="text-lg font-bold text-red-600">
                    {formatCurrency(results.paye * 12)}
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="mb-1 text-sm text-gray-600">Annual Deductions</p>
                  <p className="text-lg font-bold text-red-600">
                    {formatCurrency(results.totalDeductions * 12)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow-xl">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Want to Reduce Your Tax Burden Legally?
          </h3>
          <p className="mb-6 text-gray-600">
            Avenue Tax Audit Associates can help you optimize your tax position through pension contributions,
            insurance reliefs, and proper benefit structuring. Get personalized advice from Kenya's tax experts.
          </p>

          {!showEmailCapture ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => setShowEmailCapture(true)}
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
              >
                <Mail className="h-5 w-5" />
                Email Me Tax Saving Tips
              </button>
              <button
                type="button"
                onClick={() => typeof window !== 'undefined' && window.print()}
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-300"
              >
                <Download className="h-5 w-5" />
                Download Results
              </button>
            </div>
          ) : (
            <div className="mx-auto max-w-md">
              {!submitted ? (
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Send
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Avenue Tax Audit Associates respects your privacy. No spam, ever.
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50 py-3 text-emerald-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Tax tips sent! Check your email.</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            * Calculations are based on 2025 Kenya tax rates and statutory deductions.
            For personalized tax planning, consult Avenue Tax Audit Associates.
          </p>
          <p className="mt-2">
            📞 Contact: <a href="tel:+254711500451" className="font-semibold text-emerald-600 hover:underline">0711 500 451</a> |
            📧 <a href="mailto:info@avenuetaxaudit.co.ke" className="font-semibold text-emerald-600 hover:underline">info@avenuetaxaudit.co.ke</a> |
            🌐 <a
              href="https://avenuetaxaudit.co.ke"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-600 hover:underline"
            >
              avenuetaxaudit.co.ke
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PayeCalculator;

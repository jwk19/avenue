import Link from "next/link";
import {
  FaCalculator,
  FaFileSignature,
  FaSearchDollar,
  FaChartLine,
  FaBalanceScale,
  FaUserShield,
} from "react-icons/fa";

const services = [
  {
    title: "Tax Agency",
    description:
      "We take care of registrations, filings, reconciliations, and every touchpoint with KRA so you can focus on running the business.",
    icon: <FaCalculator className="h-7 w-7" />,
    href: "/services/tax-agency",
  },
  {
    title: "Taxation Advisory",
    description:
      "Advisory retainers that keep leadership informed on policy shifts, incentives, and structures for every growth stage.",
    icon: <FaFileSignature className="h-7 w-7" />,
    href: "/services/taxation-advisory",
  },
  {
    title: "Audit & Assurance",
    description:
      "Statutory, internal, and special audits delivered with polished reporting for boards, investors, and regulators.",
    icon: <FaBalanceScale className="h-7 w-7" />,
    href: "/services/auditing",
  },
  {
    title: "VAT Filing",
    description:
      "End-to-end VAT preparation, claim reviews, and reconciliations with automated reminders for every deadline.",
    icon: <FaSearchDollar className="h-7 w-7" />,
    href: "/services/vat-filing",
  },
  {
    title: "Bookkeeping",
    description:
      "Realtime books, management accounts, and dashboards that unlock cashflow clarity across all 47 counties.",
    icon: <FaChartLine className="h-7 w-7" />,
    href: "/services/book-keeping",
  },
  {
    title: "Risk & Compliance",
    description:
      "Risk diagnostics, policy design, and training that keep teams audit-ready and compliant year-round.",
    icon: <FaUserShield className="h-7 w-7" />,
    href: "/services/risk-compliance",
  },
];

function ServiceCard({
  title,
  description,
  icon,
  href,
}: (typeof services)[number]) {
  return (
    <div className="group relative flex h-full flex-col rounded-3xl border border-gray-200 bg-white text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary-light via-secondary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-6 top-6 h-32 rounded-3xl bg-[radial-gradient(circle,_rgba(7,20,39,0.08)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-60" />
      <div className="relative flex flex-1 flex-col p-8">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary transition group-hover:bg-[#071427] group-hover:text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-[#071427] group-hover:text-white">{title}</h3>
        <p className="mt-4 text-base text-gray-600 transition group-hover:text-white/90">
          {description}
        </p>
        <div className="mt-auto pt-8">
          <Link
            href={href}
            className="inline-flex items-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-primary transition-all group-hover:border-transparent group-hover:bg-[#071427] group-hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F4EF]">
      <section className="-mt-32 bg-gradient-to-br from-primary via-primary-dark to-[#071427] pt-32 text-white sm:-mt-36">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Our Services</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Comprehensive tax, audit, and advisory support for modern Kenyan businesses.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Tap into specialized teams covering every mandate—from day-to-day compliance to strategic board-level reporting.
          </p>
        </div>
      </section>

      <section className="-mt-10 pb-20 sm:-mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

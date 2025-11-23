"use client";

import { useMemo, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

type FaqCategory = {
  id: string;
  title: string;
  summary: string;
  subcategories: {
    id: string;
    title: string;
    description: string;
    faqs: {
      id: string;
      question: string;
      answer: string;
    }[];
  }[];
};

const faqCategories: FaqCategory[] = [
  {
    id: "tax-compliance",
    title: "Tax Compliance & Filing",
    summary: "Deadlines, registrations, and corrective filings for every Kenyan tax type.",
    subcategories: [
      {
        id: "tax-compliance-registrations",
        title: "Registrations & Deadlines",
        description:
          "PIN issuance, filing calendars, withholding rules, and managed submissions.",
        faqs: [
          {
            id: "tax-compliance-1",
            question: "How do I register for a KRA PIN?",
            answer:
              "Avenue Tax Audit Associates helps individuals and businesses obtain their KRA PIN through the iTax portal (https://itax.kra.go.ke). You need your ID/passport, email, and phone number. The process takes 1-3 days and we can complete it end-to-end on your behalf.",
          },
          {
            id: "tax-compliance-2",
            question: "When are tax return deadlines in Kenya?",
            answer:
              "Individual income tax returns fall due by 30 June annually, corporate returns are due six months after year-end, VAT returns are due on the 20th of the following month, and PAYE on the 9th of each month. We monitor all deadlines and share alerts using the latest KRA calendar.",
          },
          {
            id: "tax-compliance-3",
            question: "What happens if I miss a tax deadline?",
            answer:
              "Late filing attracts penalties of KES 10,000 or 5% of the tax due (whichever is higher). Avenue Tax Audit Associates offers penalty mitigation, prepares objections, and can request waivers from KRA where reasonable cause is demonstrated.",
          },
          {
            id: "tax-compliance-4",
            question: "Can Avenue Tax Audit Associates file returns on my behalf?",
            answer:
              "Yes. We file income tax, VAT, withholding tax, and PAYE returns through our authorized access on iTax, ensuring supporting schedules, reconciliations, and sign-offs are complete before submission.",
          },
          {
            id: "tax-compliance-5",
            question: "What is Withholding Tax (WHT) and when do I deduct it?",
            answer:
              "WHT is deducted at source on payments such as rent (10%), professional fees (5%), and dividends (5%). We help you apply the correct rate, issue certificates, and lodge the monthly WHT return to keep you compliant.",
          },
        ],
      },
      {
        id: "tax-compliance-amendments",
        title: "Adjustments, Transfer Pricing & Refunds",
        description:
          "Nil returns, amendments, TP documentation, and refund management.",
        faqs: [
          {
            id: "tax-compliance-6",
            question: "Do I need to file a nil return if I had no income?",
            answer:
              "Yes. All registered taxpayers must file returns even when there is no income. We file nil returns to keep your account in good standing and avoid KRA compliance notices.",
          },
          {
            id: "tax-compliance-7",
            question: "How do I amend a tax return I've already filed?",
            answer:
              "Amendments are done on iTax with supporting documents. Avenue Tax Audit Associates prepares the amendment letter, revised schedules, and liaises with KRA so the change is accepted without unnecessary audits.",
          },
          {
            id: "tax-compliance-8",
            question: "What is Transfer Pricing and does it affect my business?",
            answer:
              "Transfer Pricing governs transactions between related parties, especially cross-border dealings. We develop TP documentation and compliance reports for businesses with turnover above KES 1 billion or any group transactions flagged by KRA.",
          },
          {
            id: "tax-compliance-9",
            question: "Can I get a tax refund from KRA?",
            answer:
              "Yes. If you overpay or accumulate excess input VAT, we compile refund applications, upload evidence, and follow up with KRA until the payment is released.",
          },
          {
            id: "tax-compliance-10",
            question: "What's the difference between Turnover Tax and Income Tax?",
            answer:
              "Turnover Tax is 1.5% on gross sales for businesses earning KES 1-50 million annually, while Income Tax is based on profits. We analyze which regime yields better savings and handle the election process for you.",
          },
        ],
      },
    ],
  },
  {
    id: "business-registration",
    title: "Business Registration & Setup",
    summary: "Structures, costs, licensing, and conversions for Kenyan businesses.",
    subcategories: [
      {
        id: "business-start",
        title: "Choosing the Right Vehicle",
        description:
          "Business names vs limited companies, startup tax readiness, and budgeting.",
        faqs: [
          {
            id: "business-1",
            question: "Should I register a Business Name or Limited Company?",
            answer:
              "Business Names are simple but carry unlimited liability, while Limited Companies offer legal protection and easier financing. We assess your goals and register the best option through the eCitizen portal.",
          },
          {
            id: "business-2",
            question: "What are the tax obligations when starting a business in Kenya?",
            answer:
              "New businesses must obtain a KRA PIN and, depending on turnover, register for VAT. We deliver startup packages that include all registrations, compliance calendars, and initial bookkeeping setup.",
          },
          {
            id: "business-3",
            question: "How much does business registration cost?",
            answer:
              "Business Name registration is roughly KES 1,050 while Limited Companies range from KES 10,000-15,000 via the Business Registration Service. Avenue Tax Audit Associates provides full-service registration with transparent fees.",
          },
          {
            id: "business-4",
            question: "Do I need an accountant for a small business?",
            answer:
              "Not legally, but professional accounting prevents compliance errors and optimizes tax positions. Our small-business accounting retainers often cost less than the penalties they help you avoid.",
          },
          {
            id: "business-5",
            question: "What licenses do I need beyond business registration?",
            answer:
              "Depending on your sector you may need county trade licenses, professional permits, or sector approvals. We conduct compliance audits to list every license relevant to your operations.",
          },
        ],
      },
      {
        id: "business-growth",
        title: "Expansion, Foreign Ownership & Changes",
        description:
          "Foreign participation, incorporation docs, conversions, and restructuring.",
        faqs: [
          {
            id: "business-6",
            question: "Can a foreigner register a business in Kenya?",
            answer:
              "Yes. Foreigners can register companies with at least one local director for private entities. We manage immigration compliance, work permit support, and registration for international investors.",
          },
          {
            id: "business-7",
            question: "What is a Certificate of Incorporation?",
            answer:
              "It is the legal document confirming your company exists. We ensure you receive the certificate, CR12, and constitutional documents within 5-7 business days.",
          },
          {
            id: "business-8",
            question: "Do I need a physical office to register a business?",
            answer:
              "Not always, but KRA may request proof of premises for VAT registration. We can provide registered office services if you operate remotely or from home.",
          },
          {
            id: "business-9",
            question: "How do I change my business structure later?",
            answer:
              "Moving from a sole proprietorship to a limited company requires a new registration. We handle the conversion, transfer tax registrations, and notify authorities on your behalf.",
          },
          {
            id: "business-10",
            question: "What's the difference between LTD and PLC in Kenya?",
            answer:
              "Limited (Ltd) companies are private with share transfer restrictions, while PLCs can offer shares publicly. We advise on the ideal structure based on your funding and growth ambitions.",
          },
        ],
      },
    ],
  },
  {
    id: "vat",
    title: "VAT (Value Added Tax)",
    summary: "Registration thresholds, classifications, and monthly VAT obligations.",
    subcategories: [
      {
        id: "vat-registration",
        title: "Registration & Classification",
        description:
          "Thresholds, zero-rated vs exempt supplies, and voluntary registration decisions.",
        faqs: [
          {
            id: "vat-1",
            question: "When must I register for VAT?",
            answer:
              "Businesses with annual turnover above KES 5 million must register within 30 days. We review your forecasts and submit VAT registration in time to avoid penalties.",
          },
          {
            id: "vat-2",
            question: "What's the difference between zero-rated and exempt supplies?",
            answer:
              "Zero-rated supplies attract 0% VAT but allow input claims; exempt supplies have no VAT and no input recovery. We classify your products using the VAT Act so you apply the right treatment.",
          },
          {
            id: "vat-3",
            question: "Can I claim VAT on all business expenses?",
            answer:
              "Only expenses tied to taxable supplies qualify. We review your spend to maximize legitimate claims while remaining compliant.",
          },
          {
            id: "vat-4",
            question: "How does Avenue Tax Audit Associates help with VAT compliance?",
            answer:
              "We handle monthly VAT preparation, eTIMS integration, reconciliations, and represent you during KRA reviews.",
          },
          {
            id: "vat-5",
            question: "Can I voluntarily register for VAT below KES 5 million?",
            answer:
              "Yes. We evaluate whether voluntary registration benefits you, balancing input VAT recovery against compliance workload.",
          },
        ],
      },
      {
        id: "vat-operations",
        title: "Rates, Imports & Invoicing",
        description:
          "Standard rate application, import VAT, and invoicing obligations.",
        faqs: [
          {
            id: "vat-6",
            question: "What is the standard VAT rate in Kenya?",
            answer:
              "The standard rate is 16% on taxable supplies. We ensure correct application across every product or service.",
          },
          {
            id: "vat-7",
            question: "How do I handle VAT on imported goods?",
            answer:
              "Import VAT is paid at customs and can be claimed as input VAT. We reconcile customs data with your VAT return to capture the credit.",
          },
          {
            id: "vat-8",
            question: "What happens if I charge VAT but I'm not registered?",
            answer:
              "Charging VAT without registration is illegal and attracts penalties. We regularize your status through voluntary disclosure and immediate registration.",
          },
          {
            id: "vat-9",
            question: "Do I need to issue tax invoices for all sales?",
            answer:
              "Yes. VAT-registered businesses must issue KRA-compliant invoices. We implement eTIMS-ready templates and systems.",
          },
          {
            id: "vat-10",
            question: "How long does VAT refund processing take?",
            answer:
              "Refunds typically take 3-6 months. Avenue Tax Audit Associates compiles documentation and follows up with the KRA refund department to accelerate payment.",
          },
        ],
      },
    ],
  },
  {
    id: "employment-taxes",
    title: "Employment Taxes",
    summary: "PAYE, statutory deductions, payroll, and exits.",
    subcategories: [
      {
        id: "employment-paye",
        title: "PAYE & Statutory Deductions",
        description:
          "PAYE rates, NSSF/NHIF, housing levy, and taxable benefits.",
        faqs: [
          {
            id: "employment-1",
            question: "What is the current PAYE tax rate in Kenya?",
            answer:
              "PAYE ranges from 10% to 35% by income bracket with a monthly personal relief of KES 2,400. We calculate PAYE using the latest KRA tables.",
          },
          {
            id: "employment-2",
            question: "Are NSSF and NHIF contributions mandatory?",
            answer:
              "Yes. NSSF contributions go up to KES 2,160 and NHIF between KES 300-1,700 monthly. We handle calculations and remittances.",
          },
          {
            id: "employment-3",
            question: "What is the Affordable Housing Levy?",
            answer:
              "It is a 1.5% levy applied to gross salary for both employer and employee. We compute and file the levy together with other employment taxes.",
          },
          {
            id: "employment-4",
            question: "Can Avenue Tax Audit Associates handle payroll processing?",
            answer:
              "Yes, we offer full payroll outsourcing including calculations, deductions, payslips, and monthly filings with KRA, NSSF, and NHIF.",
          },
          {
            id: "employment-5",
            question: "What benefits are taxable for employees?",
            answer:
              "Housing, car benefits, medical benefits above KES 15,000 annually, and other perks can be taxable. We compute fringe benefits accurately to avoid liabilities.",
          },
        ],
      },
      {
        id: "employment-payroll",
        title: "Payroll Administration",
        description:
          "Registrations, record keeping, contractor status, and exits.",
        faqs: [
          {
            id: "employment-6",
            question: "Do I need to register employees with NSSF and NHIF?",
            answer:
              "Yes, within the first month of employment. We complete registrations and ensure monthly remittances.",
          },
          {
            id: "employment-7",
            question: "What records must I keep for payroll?",
            answer:
              "Maintain payroll registers, P9 forms, remittance receipts, and contracts for five years. We deploy digital payroll systems with automated retention.",
          },
          {
            id: "employment-8",
            question: "Can I classify workers as contractors instead of employees?",
            answer:
              "KRA tests control, exclusivity, and payment terms to determine status. We advise on proper classification to avoid reclassification penalties.",
          },
          {
            id: "employment-9",
            question: "What is a P9 form?",
            answer:
              "It summarizes annual tax deductions and is required for personal income tax filing. We issue compliant P9s for every employee by February.",
          },
          {
            id: "employment-10",
            question: "How do I handle tax for departing employees?",
            answer:
              "Final pay must cover all dues with correct PAYE. We prepare exit payrolls, remit taxes, and manage pension transfers.",
          },
        ],
      },
    ],
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping & Records",
    summary: "Record keeping standards, software, reconciliations, and clean-up projects.",
    subcategories: [
      {
        id: "bookkeeping-records",
        title: "Record Keeping Essentials",
        description:
          "Documents to retain, storage timelines, and software expectations.",
        faqs: [
          {
            id: "bookkeeping-1",
            question: "What financial records must I keep?",
            answer:
              "KRA requires invoices, receipts, bank statements, and accounting records for at least five years. We implement systems tailored to your size and industry.",
          },
          {
            id: "bookkeeping-2",
            question: "Do I need accounting software?",
            answer:
              "While not mandatory, KRA increasingly expects digital records. We recommend and implement software with user training.",
          },
          {
            id: "bookkeeping-3",
            question: "How long should I retain business documents?",
            answer:
              "Maintain tax records for a minimum of five years per KRA guidelines. We advise on policies and can host secure archives.",
          },
          {
            id: "bookkeeping-4",
            question: "What makes good bookkeeping?",
            answer:
              "Timely recording, proper classification, reconciliations, and supporting documents. We provide monthly bookkeeping that keeps you audit ready.",
          },
          {
            id: "bookkeeping-5",
            question: "Can I use manual books instead of software?",
            answer:
              "Manual books are allowed but error-prone. We transition businesses to digital tools with minimal disruption.",
          },
        ],
      },
      {
        id: "bookkeeping-best-practice",
        title: "Accounting Best Practices",
        description:
          "Trial balances, reconciliations, accounting methods, and clean-up support.",
        faqs: [
          {
            id: "bookkeeping-6",
            question: "What is a trial balance and why do I need it?",
            answer:
              "It lists account balances to confirm debits equal credits. We produce monthly trial balances to catch errors early.",
          },
          {
            id: "bookkeeping-7",
            question: "How often should I reconcile bank statements?",
            answer:
              "Reconciling monthly is essential. We perform reconciliations as part of our bookkeeping service and investigate discrepancies immediately.",
          },
          {
            id: "bookkeeping-8",
            question: "What's the difference between cash and accrual accounting?",
            answer:
              "Cash accounting records when cash changes hands; accrual matches income and expenses to when they are earned or incurred. We typically recommend accrual for a true financial picture.",
          },
          {
            id: "bookkeeping-9",
            question: "Do I need separate business and personal bank accounts?",
            answer:
              "Yes. Mixing funds complicates bookkeeping and raises KRA red flags. We help you open appropriate business accounts.",
          },
          {
            id: "bookkeeping-10",
            question: "Can Avenue Tax Audit Associates clean up messy books?",
            answer:
              "Absolutely. We specialize in reconstructing records, catching up backlogs, and putting controls in place to stay current.",
          },
        ],
      },
    ],
  },
  {
    id: "audits",
    title: "Audits & Compliance",
    summary: "Statutory audits, KRA examinations, and resolving audit findings.",
    subcategories: [
      {
        id: "audits-requirements",
        title: "Audit Requirements & Types",
        description:
          "When audits are mandatory and how they differ from tax audits.",
        faqs: [
          {
            id: "audits-1",
            question: "When is a statutory audit required in Kenya?",
            answer:
              "Companies with turnover above KES 5 million or assets above KES 2.5 million require statutory audits. We provide tailored audit engagements for every size of business.",
          },
          {
            id: "audits-2",
            question: "What's the difference between tax audit and statutory audit?",
            answer:
              "Statutory audits verify financial statements for stakeholders, while tax audits confirm compliance with KRA. We handle both streams cohesively.",
          },
          {
            id: "audits-3",
            question: "How do I prepare for a KRA tax audit?",
            answer:
              "Maintain organized records, reconcile accounts, and compile supporting documents. We provide representation and handle all KRA communication.",
          },
          {
            id: "audits-4",
            question: "Can Avenue Tax Audit Associates represent me during audits?",
            answer:
              "Yes, we regularly represent clients during KRA audits, objections, and appeals.",
          },
          {
            id: "audits-5",
            question: "What triggers a KRA tax audit?",
            answer:
              "Inconsistencies, large refunds, industry flags, or random selection. Our compliance reviews reduce these risks.",
          },
        ],
      },
      {
        id: "audits-management",
        title: "Managing Findings & Timelines",
        description:
          "Audit duration, opinions, disputes, and auditor changes.",
        faqs: [
          {
            id: "audits-6",
            question: "How long does a typical audit take?",
            answer:
              "Statutory audits take 2-4 weeks depending on size; KRA audits can last weeks to months. We plan efficiently to minimize disruption.",
          },
          {
            id: "audits-7",
            question: "What is an audit opinion and why does it matter?",
            answer:
              "Audit opinions (unqualified, qualified, adverse, disclaimer) indicate financial statement reliability. We work toward clean opinions that boost credibility.",
          },
          {
            id: "audits-8",
            question: "Do small businesses need audits?",
            answer:
              "Not always legally, but audits help when seeking funding. We offer scaled solutions for SMEs.",
          },
          {
            id: "audits-9",
            question: "What happens if I disagree with audit findings?",
            answer:
              "Issues can be discussed during closing meetings. We mediate between auditors and management to resolve matters before final reports.",
          },
          {
            id: "audits-10",
            question: "Can I change auditors?",
            answer:
              "Yes. We manage the transition, including communications with the outgoing auditor per professional standards.",
          },
        ],
      },
    ],
  },
  {
    id: "penalties",
    title: "Common Penalties & How to Avoid Them",
    summary: "Penalty types, waivers, objections, and appeals.",
    subcategories: [
      {
        id: "penalties-overview",
        title: "Penalty Landscape",
        description:
          "Common infractions, amnesties, and payment plans.",
        faqs: [
          {
            id: "penalties-1",
            question: "What are the most common tax penalties in Kenya?",
            answer:
              "Late filing (KES 10,000+), late payment interest at 1% per month, and non-filing penalties. We run compliance calendars to keep you penalty free.",
          },
          {
            id: "penalties-2",
            question: "Can tax penalties be waived?",
            answer:
              "Yes. With strong justification, KRA may waive penalties. We prepare documentation and negotiate reductions on your behalf.",
          },
          {
            id: "penalties-3",
            question: "What is a tax amnesty program?",
            answer:
              "KRA occasionally offers amnesties that waive penalties/interest for voluntary disclosure. We monitor announcements and help clients seize the opportunity.",
          },
          {
            id: "penalties-4",
            question: "How do I file an objection with KRA?",
            answer:
              "Objections must be lodged within 30 days of assessment. We draft objection letters with evidence to overturn incorrect assessments.",
          },
          {
            id: "penalties-5",
            question: "What happens if I can't pay my tax on time?",
            answer:
              "Contact KRA for a payment plan before defaulting. We negotiate instalment plans to avoid enforcement actions such as bank attachments.",
          },
        ],
      },
      {
        id: "penalties-appeals",
        title: "Objections, Appeals & Specific Penalties",
        description:
          "Enforcement scenarios, appeal routes, and penalty calculations.",
        faqs: [
          {
            id: "penalties-6",
            question: "Can KRA close my business for non-compliance?",
            answer:
              "Yes. Persistent non-compliance can lead to court orders. We regularize your affairs long before it escalates.",
          },
          {
            id: "penalties-7",
            question: "What is the penalty for not registering for VAT on time?",
            answer:
              "KES 10,000 plus penalties on unfiled returns. We monitor your turnover and register you as soon as thresholds approach.",
          },
          {
            id: "penalties-8",
            question: "How does KRA calculate interest on late payments?",
            answer:
              "Interest accrues at 1% per month on unpaid principal. We calculate the full liability and advise on optimal settlement strategies.",
          },
          {
            id: "penalties-9",
            question: "Can I appeal a KRA decision?",
            answer:
              "Yes. After an objection decision, you have 30 days to escalate to the Tax Appeals Tribunal. We collaborate with legal partners to represent you.",
          },
          {
            id: "penalties-10",
            question: "What penalties apply to incorrect tax returns?",
            answer:
              "Understatement penalties are 5% of the shortfall and fraud penalties can reach 25%. Our review process catches errors before filing.",
          },
        ],
      },
    ],
  },
  {
    id: "digital-systems",
    title: "Digital Services & Systems",
    summary: "eTIMS, iTax, TCCs, and integrations that keep you compliant.",
    subcategories: [
      {
        id: "digital-etims",
        title: "eTIMS & Compliance Systems",
        description:
          "eTIMS requirements, troubleshooting, and compliance certificates.",
        faqs: [
          {
            id: "digital-1",
            question: "What is eTIMS and who needs it?",
            answer:
              "eTIMS is the Electronic Tax Invoice Management System and is mandatory for VAT-registered businesses. We procure devices, install, integrate, and train your staff.",
          },
          {
            id: "digital-2",
            question: "I'm having problems with iTax, can you help?",
            answer:
              "Yes. We troubleshoot login issues, submission errors, certificate renewals, and can file on your behalf to avoid deadline stress.",
          },
          {
            id: "digital-3",
            question: "Do I need a Tax Compliance Certificate?",
            answer:
              "TCCs are required for tenders, licenses, and many transactions. We ensure your taxes are up to date and obtain the certificate through iTax.",
          },
          {
            id: "digital-4",
            question: "How does Avenue Tax Audit Associates stay updated on tax changes?",
            answer:
              "We invest in continuous professional development, monitor KRA updates, and immediately brief clients on applicable regulatory changes.",
          },
          {
            id: "digital-5",
            question: "What is TIMS and how is it different from eTIMS?",
            answer:
              "TIMS was the earlier invoicing system; eTIMS is the new cloud-based platform. We transition businesses from TIMS to eTIMS with full technical support.",
          },
        ],
      },
      {
        id: "digital-integration",
        title: "Integration & Business Continuity",
        description:
          "Mobile invoicing, API integrations, downtime procedures, and invoice content.",
        faqs: [
          {
            id: "digital-6",
            question: "Can I use my smartphone for eTIMS?",
            answer:
              "Yes. KRA offers an eTIMS mobile app. We configure both physical and mobile solutions depending on your workflows.",
          },
          {
            id: "digital-7",
            question: "How do I integrate eTIMS with my accounting software?",
            answer:
              "Integration requires API connections. We connect popular platforms such as QuickBooks, Sage, and Zoho to eTIMS.",
          },
          {
            id: "digital-8",
            question: "What if my eTIMS device stops working?",
            answer:
              "Report failures to KRA immediately. We maintain backup procedures and expedite device replacement to keep you compliant.",
          },
          {
            id: "digital-9",
            question: "Can I issue manual invoices if eTIMS is down?",
            answer:
              "Yes, but they must be uploaded to eTIMS once systems are restored. We manage the reconciliation to ensure every sale is captured.",
          },
          {
            id: "digital-10",
            question: "What information must be on a KRA-compliant invoice?",
            answer:
              "Invoices need your PIN, customer PIN for B2B, serial number, VAT breakdown, and the eTIMS verification code. We design templates that meet these standards.",
          },
        ],
      },
    ],
  },
];

function QuestionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-[#071427]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <FaChevronDown
          className={`h-4 w-4 text-secondary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-base text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [mobileFilter, setMobileFilter] = useState<string>("all");
  const selectedCategory = faqCategories.find((category) => category.id === activeCategory);

  const flattenedFaqs = useMemo(
    () =>
      faqCategories.flatMap((category) =>
        category.subcategories.flatMap((subcategory) =>
          subcategory.faqs.map((faq) => ({
            ...faq,
            categoryId: category.id,
            categoryTitle: category.title,
            subcategoryTitle: subcategory.title,
          }))
        )
      ),
    []
  );

  const filteredMobileFaqs = useMemo(() => {
    if (mobileFilter === "all") return flattenedFaqs;
    return flattenedFaqs.filter((faq) => faq.categoryId === mobileFilter);
  }, [flattenedFaqs, mobileFilter]);

  const mobilePopularFaqs = filteredMobileFaqs.slice(0, 6);
  const mobileTabs = [{ id: "all", label: "All" }, ...faqCategories.map((category) => ({ id: category.id, label: category.title }))];

  return (
    <div className="bg-[#F7F9FC]">
      <section className="bg-white pt-32 pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary/70">Help Centre</p>
          <h1 className="mt-4 text-4xl font-semibold text-[#0B1C33] sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            Find answers to the most common questions about tax, audit, payroll, and digital compliance
            support delivered by Avenue Tax Audit Associates.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Mobile Experience */}
          <div className="md:hidden">
            <div className="flex flex-wrap gap-2">
              {mobileTabs.map((tab) => {
                const isActive = mobileFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setMobileFilter(tab.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive ? "bg-primary text-white" : "bg-white text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-gray-500 shadow-sm">
              <FaSearch className="h-4 w-4" />
              <span className="text-sm">Search for questions...</span>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Popular Questions</p>
              <div className="mt-3 space-y-3">
                {mobilePopularFaqs.map((faq) => (
                  <div key={faq.id} className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-base font-semibold text-[#0B1C33]">{faq.question}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {faq.answer.length > 140 ? `${faq.answer.slice(0, 137)}...` : faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Tabs */}
          <div className="hidden md:block">
            <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-2">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`relative pb-3 text-sm font-semibold transition-colors ${
                      isActive ? "text-primary" : "text-gray-500 hover:text-primary"
                    }`}
                  >
                    {category.title}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 -bottom-[2px] h-0.5 w-full rounded-full transition ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {selectedCategory && (
            <div className="mt-10 space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-secondary">{selectedCategory.title}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#071427]">{selectedCategory.summary}</h2>
              </div>

              <div className="space-y-4">
                {selectedCategory.subcategories.map((subcategory) => (
                  <div key={subcategory.id} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div>
                      <p className="text-sm font-semibold text-primary">{subcategory.title}</p>
                      <p className="text-base text-gray-600">{subcategory.description}</p>
                    </div>
                    <div className="mt-5 space-y-3">
                      {subcategory.faqs.length > 0 ? (
                        subcategory.faqs.map((faq) => (
                          <QuestionItem key={faq.id} question={faq.question} answer={faq.answer} />
                        ))
                      ) : (
                        <p className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-500">
                          Add FAQs for this subcategory by updating the data object.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

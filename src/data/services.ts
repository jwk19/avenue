import { IconType } from "react-icons";
import {
  FaBalanceScale,
  FaBook,
  FaBriefcase,
  FaCalculator,
  FaChartLine,
  FaFileInvoiceDollar,
  FaFileSignature,
  FaShieldAlt,
} from "react-icons/fa";

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: IconType;
  hero: {
    eyebrow: string;
    description: string;
    highlights: { value: string; label: string; detail?: string }[];
  };
  painPoints: string[];
  focusAreas: { title: string; description: string }[];
  deliverables: { title: string; description: string }[];
  process: { title: string; description: string }[];
  cta: {
    title: string;
    description: string;
  };
};

export const services: ServiceDetail[] = [
  {
    slug: "tax-agency",
    title: "Tax Agency",
    shortDescription:
      "Full-spectrum tax registration, filing, and KRA engagement handled by a dedicated partner.",
    icon: FaCalculator,
    hero: {
      eyebrow: "Managed Tax Agency",
      description:
        "We represent your business before KRA, keep every registration current, and submit filings on time so your team can stay focused on operations.",
      highlights: [
        { value: "1200+", label: "annual filings" },
        { value: "<24 hrs", label: "average KRA response" },
        { value: "18", label: "industries supported" },
      ],
    },
    painPoints: [
      "Recurring KRA notices create fire drills across finance teams.",
      "Deadlines live in spreadsheets, making it easy to miss critical dates.",
      "Approvals stall because supporting documents are scattered across systems.",
    ],
    focusAreas: [
      {
        title: "Registration & onboarding",
        description:
          "PIN, VAT, PAYE, and Excise registration plus iTax onboarding for new entities or reorganizations.",
      },
      {
        title: "Calendar & automation",
        description:
          "Centralized compliance calendar with automated reminders pushed to email and Slack or Teams.",
      },
      {
        title: "Filing execution",
        description:
          "Preparation, review, and submission of monthly, quarterly, and annual returns with documented approvals.",
      },
      {
        title: "Agency representation",
        description:
          "We respond to KRA follow-ups, clarifications, and audits on your behalf with pre-agreed SLAs.",
      },
    ],
    deliverables: [
      {
        title: "Compliance playbook",
        description: "A living guide outlining every obligation, owner, and due date across the entity.",
      },
      {
        title: "Document vault",
        description:
          "Secure workspace that stores supporting schedules, receipts, and approvals for every submitted return.",
      },
      {
        title: "Issue tracker",
        description:
          "Transparent log capturing KRA tickets, status, assigned owners, and next actions until closure.",
      },
      {
        title: "Quarterly insights",
        description: "Trend analysis on payments, refunds, and cash impact shared with leadership.",
      },
    ],
    process: [
      {
        title: "Diagnostic",
        description:
          "We review prior filings, compliance gaps, and stakeholder expectations to baseline current risk.",
      },
      {
        title: "Playbook design",
        description: "We map workflows, SLAs, and escalation paths so every filing has an owner and backup.",
      },
      {
        title: "Execution",
        description: "Our agency team handles registrations, filings, reconciliations, and KRA engagements end-to-end.",
      },
      {
        title: "Reporting",
        description: "Monthly dashboards summarize filings completed, cash paid, open notices, and next deadlines.",
      },
    ],
    cta: {
      title: "Ready to hand off tax agency work?",
      description:
        "Book a consultation and have our specialists manage every KRA interaction with transparent reporting.",
    },
  },
  {
    slug: "taxation-advisory",
    title: "Taxation Advisory",
    shortDescription:
      "Strategic tax planning, policy interpretation, and leadership briefings tailored to your growth stage.",
    icon: FaFileSignature,
    hero: {
      eyebrow: "Executive Tax Advisory",
      description:
        "Gain a partner who translates policy into action, structures transactions, and keeps leadership informed before reforms hit.",
      highlights: [
        { value: "25", label: "subject-matter experts" },
        { value: "48 hrs", label: "memo turnaround" },
        { value: "KSh 1B+", label: "transactions advised" },
      ],
    },
    painPoints: [
      "Policy changes land faster than internal teams can interpret.",
      "Board decisions lack quantified tax scenarios.",
      "Incentives and exemptions go untapped because nobody owns the research.",
    ],
    focusAreas: [
      {
        title: "Transaction support",
        description:
          "Restructuring, M&A, and cross-border engagements with modeled tax impact and documentation.",
      },
      {
        title: "Policy monitoring",
        description:
          "Proactive briefs on Finance Acts, tribunal decisions, and sector-specific incentives.",
      },
      {
        title: "Operating model design",
        description:
          "Guidance on entity structures, transfer pricing guardrails, and intercompany arrangements.",
      },
      {
        title: "Leadership enablement",
        description:
          "Quarterly board packs translating tax positions into cash, risk, and reputational impact.",
      },
    ],
    deliverables: [
      {
        title: "Advisory memos",
        description: "Clear guidance with citations, options, and recommended pathways for each scenario.",
      },
      {
        title: "Tax risk register",
        description: "Living document ranking exposures, mitigation owners, and timeline to close.",
      },
      {
        title: "Opportunity tracker",
        description: "Catalogue of incentives, exemptions, and savings captured or in-flight.",
      },
      {
        title: "Leadership briefings",
        description: "Facilitated sessions with scenarios, talking points, and decision-ready next steps.",
      },
    ],
    process: [
      {
        title: "Discovery",
        description: "Immersion workshops with finance, legal, and strategy teams to align on priorities.",
      },
      {
        title: "Research & modeling",
        description: "We run technical analysis, leverage industry benchmarks, and quantify every recommendation.",
      },
      {
        title: "Advisory delivery",
        description: "Memos, registers, and playbooks are delivered with review sessions to drive adoption.",
      },
      {
        title: "Steady-state support",
        description: "Retained advisors stay on-call for board questions, regulator engagements, and scenario planning.",
      },
    ],
    cta: {
      title: "Keep leadership ahead of policy shifts",
      description:
        "Engage our advisory desk for on-demand analysis, structured opinions, and confident board decisions.",
    },
  },
  {
    slug: "vat-filing",
    title: "VAT Filing",
    shortDescription:
      "Accurate VAT preparation, reconciliations, and claims processing with automated reminders.",
    icon: FaFileInvoiceDollar,
    hero: {
      eyebrow: "VAT Compliance",
      description:
        "Maintain spotless VAT records with reconciliations that stand up to audits and VAT refund claims that move faster.",
      highlights: [
        { value: "98%", label: "on-time submissions" },
        { value: "KSh 250M", label: "refunds processed" },
        { value: "3 yrs", label: "of digital archives" },
      ],
    },
    painPoints: [
      "Input paperwork arrives days before the deadline.",
      "Sales, procurement, and finance systems rarely balance on the first pass.",
      "Refund claims stall because supporting evidence is incomplete.",
    ],
    focusAreas: [
      {
        title: "Data hygiene",
        description:
          "Automated checks across ERPs, POS, and procurement tools to keep sales and purchase ledgers aligned.",
      },
      {
        title: "Claim optimization",
        description:
          "Validation of input tax, import declarations, and zero-rated sales for maximum recovery.",
      },
      {
        title: "Deadline management",
        description:
          "Automated reminders and approval workflows that keep every stakeholder accountable.",
      },
      {
        title: "Audit defence",
        description:
          "Comprehensive documentation and representation during KRA verifications and desk audits.",
      },
    ],
    deliverables: [
      {
        title: "Reconciliation pack",
        description: "Supporting schedules tying sales, purchases, and cash to the submitted return.",
      },
      {
        title: "Exception log",
        description: "Tracked variances with root cause, owner, and corrective action due dates.",
      },
      {
        title: "Refund dossier",
        description: "Complete documentation for each claim including customs entries and supplier confirmations.",
      },
      {
        title: "Regulator updates",
        description: "Monthly digest covering policy notices, eTIMS updates, and risk areas to watch.",
      },
    ],
    process: [
      {
        title: "Data extraction",
        description: "We connect to your accounting stack and clean sales/purchase data for the period.",
      },
      {
        title: "Review & approval",
        description: "Draft returns and reconciliations are shared for sign-off with clear commentary.",
      },
      {
        title: "Submission & acknowledgement",
        description: "Returns are filed, payments scheduled, and acknowledgements stored in the vault.",
      },
      {
        title: "Post-filing support",
        description: "We handle KRA queries, support refund follow-ups, and update controls based on findings.",
      },
    ],
    cta: {
      title: "Never miss another VAT deadline",
      description:
        "Let our specialists close your VAT reconciliations early and keep every claim audit-ready.",
    },
  },
  {
    slug: "auditing",
    title: "Audit & Assurance",
    shortDescription:
      "Independent statutory, internal, and special audits with actionable governance insights.",
    icon: FaBalanceScale,
    hero: {
      eyebrow: "Audit & Assurance",
      description:
        "We deliver polished audit reports, management letters, and board-ready insights covering financial, operational, and compliance controls.",
      highlights: [
        { value: "150+", label: "completed audits" },
        { value: "5", label: "industry-specialized pods" },
        { value: "IFRS", label: "and IPSAS expertise" },
      ],
    },
    painPoints: [
      "Audit cycles drag because evidence sits across departments.",
      "Management letters repeat the same issues year after year.",
      "Boards need visuals that translate findings into risk and investment conversations.",
    ],
    focusAreas: [
      {
        title: "Statutory audits",
        description: "Year-end engagements delivered in line with IFRS, IPSAS, and regulator expectations.",
      },
      {
        title: "Internal audits",
        description: "Deep dives into revenue assurance, procurement, inventory, and payroll cycles.",
      },
      {
        title: "Special purpose",
        description: "Donor-funded project audits, agreed-upon procedures, and forensic reviews.",
      },
      {
        title: "Governance coaching",
        description: "Workshops with management on remediation roadmaps and control ownership.",
      },
    ],
    deliverables: [
      {
        title: "Audit plan",
        description: "Scope, timelines, and stakeholder responsibilities agreed before fieldwork begins.",
      },
      {
        title: "Digital evidence room",
        description: "Secure workspace for uploading schedules, walkthroughs, and confirmations.",
      },
      {
        title: "Management letter",
        description: "Prioritized findings with root cause, impact, and recommended remediation.",
      },
      {
        title: "Board presentation",
        description: "Executive summary deck translating audit results into strategic insights.",
      },
    ],
    process: [
      {
        title: "Planning",
        description: "Risk assessment, materiality determination, and scheduling with stakeholders.",
      },
      {
        title: "Fieldwork",
        description: "Onsite and remote testing supported by collaboration tools for faster queries.",
      },
      {
        title: "Reporting",
        description: "Draft findings shared for management responses before final issue.",
      },
      {
        title: "Follow-up",
        description: "Action plan tracking and refresher workshops to embed new controls.",
      },
    ],
    cta: {
      title: "Make audits strategic",
      description:
        "Partner with an assurance team that aligns audit cycles with board reporting and regulator expectations.",
    },
  },
  {
    slug: "book-keeping",
    title: "Bookkeeping",
    shortDescription:
      "Realtime ledgers, management accounts, and dashboards that keep leadership close to the numbers.",
    icon: FaBook,
    hero: {
      eyebrow: "Managed Bookkeeping",
      description:
        "We operate your day-to-day accounting stack—capturing transactions, reconciling balances, and surfacing performance insights every month.",
      highlights: [
        { value: "Realtime", label: "cloud ledgers" },
        { value: "99.5%", label: "data accuracy" },
        { value: "47", label: "counties served" },
      ],
    },
    painPoints: [
      "Receipts pile up in WhatsApp chats and glove compartments.",
      "Bank, M-Pesa, and till balances never match accounting records.",
      "Leadership waits weeks for management accounts after month end.",
    ],
    focusAreas: [
      {
        title: "Transaction processing",
        description: "Daily capture of sales, purchases, payroll, and expenses directly into your ERP or ours.",
      },
      {
        title: "Account reconciliations",
        description: "Automated and manual reconciliations covering banks, mobile money, loans, and payables.",
      },
      {
        title: "Management reporting",
        description: "Custom dashboards, commentary, and KPIs delivered on a predictable cadence.",
      },
      {
        title: "Systems training",
        description: "Upskilling internal teams on workflows, approvals, and documentation discipline.",
      },
    ],
    deliverables: [
      {
        title: "Close checklist",
        description: "Month-end tasks assigned with status tracking and supporting evidence links.",
      },
      {
        title: "Management accounts",
        description: "Income statement, balance sheet, cash flow, and commentary in board-ready format.",
      },
      {
        title: "Cash visibility pack",
        description: "Rolling 13-week cash flow and working capital insights for decision-makers.",
      },
      {
        title: "Controls playbook",
        description: "Practical SOPs for approvals, documentation, and fraud prevention.",
      },
    ],
    process: [
      {
        title: "Onboarding",
        description: "Chart of accounts alignment, tech stack access, and workflow design.",
      },
      {
        title: "Run",
        description: "Daily processing, reconciliations, and approvals managed by a dedicated pod.",
      },
      {
        title: "Close",
        description: "Month-end reviews, accruals, and management accounts issued on agreed dates.",
      },
      {
        title: "Optimize",
        description: "Quarterly reviews to automate, streamline, and right-size controls as you scale.",
      },
    ],
    cta: {
      title: "Keep the books investor-ready",
      description:
        "Outsource bookkeeping to a pod that combines tech automation with Kenyan regulatory know-how.",
    },
  },
  {
    slug: "risk-compliance",
    title: "Risk & Compliance",
    shortDescription:
      "Enterprise risk diagnostics, policy design, and training that keep teams audit-ready year-round.",
    icon: FaShieldAlt,
    hero: {
      eyebrow: "Risk & Compliance",
      description:
        "We blend governance frameworks, internal controls, and staff enablement so regulators, donors, and boards trust your operations.",
      highlights: [
        { value: "60+", label: "policies delivered" },
        { value: "4 weeks", label: "typical rollout" },
        { value: "ISO", label: "and CBK alignment" },
      ],
    },
    painPoints: [
      "Policies exist on paper but staff still improvise processes.",
      "Audit recommendations lack owners and timelines.",
      "Regulators expect structured risk registers tied to strategy.",
    ],
    focusAreas: [
      {
        title: "Risk diagnostics",
        description: "Heat maps covering strategic, financial, operational, and compliance risks.",
      },
      {
        title: "Policy design",
        description: "Modern, visual policies and SOPs aligned to regulators and internal culture.",
      },
      {
        title: "Control implementation",
        description: "Embedding approvals, reconciliations, and monitoring steps into daily workflows.",
      },
      {
        title: "Training & drills",
        description: "Workshops and e-learning modules that bring policies to life for frontline teams.",
      },
    ],
    deliverables: [
      {
        title: "Enterprise risk register",
        description: "Prioritized log with risk ratings, mitigation plans, and KPI/KRI triggers.",
      },
      {
        title: "Policy suite",
        description: "Editable templates for finance, procurement, HR, IT, and information security.",
      },
      {
        title: "Control testing reports",
        description: "Evidence of walkthroughs, sampling, and remediation follow-up shared with leadership.",
      },
      {
        title: "Training analytics",
        description: "Attendance, assessment scores, and feedback to prove adoption.",
      },
    ],
    process: [
      {
        title: "Current-state review",
        description: "Stakeholder interviews and document reviews benchmark your maturity.",
      },
      {
        title: "Design",
        description: "We co-create policies, registers, and governance forums with your leadership.",
      },
      {
        title: "Enable",
        description: "Controls, tooling, and training are rolled out with change management support.",
      },
      {
        title: "Monitor",
        description: "Dashboards track remediation progress and readiness for audits or regulator visits.",
      },
    ],
    cta: {
      title: "Stay ahead of regulators",
      description:
        "Deploy a compliance framework that scales with your expansion and satisfies every audit committee.",
    },
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    shortDescription:
      "Growth, capital, and performance advisory that aligns finance strategy with ambitious expansion goals.",
    icon: FaBriefcase,
    hero: {
      eyebrow: "Strategic Advisory",
      description:
        "We guide CEOs and CFOs through expansion decisions with scenario modeling, capital planning, and go-to-market economics.",
      highlights: [
        { value: "KSh 5B", label: "capital raised" },
        { value: "30", label: "strategy engagements" },
        { value: "12", label: "African markets covered" },
      ],
    },
    painPoints: [
      "Growth plans lack a clear financing roadmap.",
      "Unit economics are buried deep inside spreadsheets nobody trusts.",
      "Boards look for data rooms that tell a convincing story to investors.",
    ],
    focusAreas: [
      {
        title: "Growth strategy",
        description: "Market sizing, geographic prioritization, and channel strategy grounded in data.",
      },
      {
        title: "Capital advisory",
        description: "Equity, debt, and grant pathways with assumptions, dilution, and covenant analysis.",
      },
      {
        title: "Performance dashboards",
        description: "North-star KPIs, scorecards, and OKR support for leadership teams.",
      },
      {
        title: "Investor readiness",
        description: "Pitch materials, data rooms, and financial models that withstand due diligence.",
      },
    ],
    deliverables: [
      {
        title: "Integrated financial model",
        description: "Driver-based model with scenarios, valuation outputs, and funding runway.",
      },
      {
        title: "Strategy blueprint",
        description: "Narrative deck outlining market opportunity, differentiators, and execution roadmap.",
      },
      {
        title: "KPI scorecard",
        description: "Live dashboard tracking growth, efficiency, and customer metrics.",
      },
      {
        title: "Investor collateral",
        description: "Pitch deck, one pager, and data room checklist aligned to target investors.",
      },
    ],
    process: [
      {
        title: "Insight sprint",
        description: "We synthesize data, stakeholder interviews, and market research into opportunity areas.",
      },
      {
        title: "Model & design",
        description: "Financial models and strategy blueprints are built collaboratively with your team.",
      },
      {
        title: "Activation",
        description: "We coach leadership through investor conversations, board sessions, and operating rhythm.",
      },
      {
        title: "Quarterly support",
        description: "Advisors stay engaged with performance reviews and scenario refreshes.",
      },
    ],
    cta: {
      title: "Translate ambition into numbers",
      description:
        "Work with advisors who connect commercial strategy, capital plans, and performance reporting.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

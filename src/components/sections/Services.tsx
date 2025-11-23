import { FaCalculator, FaFileInvoiceDollar, FaChartLine, FaSearchDollar, FaBook } from 'react-icons/fa';
import ServiceCard from '../services/ServiceCard';

export default function Services() {
  const services = [
    {
      title: 'Tax Agency',
      description: 'Comprehensive tax agency services including tax registration, filing, and compliance to ensure your business meets all KRA requirements.',
      icon: <FaCalculator className="w-6 h-6" />,
      href: '/services/tax-agency',
    },
    {
      title: 'Taxation Advisory',
      description: 'Expert guidance on tax planning, compliance, and optimization strategies tailored to your business needs in the Kenyan market.',
      icon: <FaFileInvoiceDollar className="w-6 h-6" />,
      href: '/services/taxation-advisory',
    },
    {
      title: 'VAT Filing',
      description: 'Accurate and timely VAT return preparation and submission to ensure compliance with KRA regulations and avoid penalties.',
      icon: <FaFileInvoiceDollar className="w-6 h-6" />,
      href: '/services/vat-filing',
    },
    {
      title: 'Auditing',
      description: 'Thorough financial statement audits, internal audits, and special purpose audits to ensure accuracy and regulatory compliance.',
      icon: <FaSearchDollar className="w-6 h-6" />,
      href: '/services/auditing',
    },
    {
      title: 'Book Keeping',
      description: 'Professional bookkeeping services to maintain accurate financial records and support your business growth in Kenya.',
      icon: <FaBook className="w-6 h-6" />,
      href: '/services/book-keeping',
    },
    {
      title: 'Business Advisory',
      description: 'Strategic financial and business advisory services to help your business grow and thrive in the Kenyan market.',
      icon: <FaChartLine className="w-6 h-6" />,
      href: '/services/business-advisory',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Tax & Financial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a full range of tax and financial services designed to meet the unique needs of businesses and individuals in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              className="h-full"
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All Services
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

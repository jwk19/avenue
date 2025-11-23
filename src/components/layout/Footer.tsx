import Link from 'next/link';
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowUpRight,
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactChannels = [
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: 'Call Us',
      value: '+254 711 500451',
      meta: 'Mon - Fri · 8:00 AM - 5:00 PM',
      href: 'tel:+254711500451',
      highlight: false,
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email Us',
      value: 'info@avenuetaxaudit.co.ke',
      meta: 'We reply within 1 business day',
      href: 'mailto:info@avenuetaxaudit.co.ke',
      highlight: false,
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: 'Visit Us',
      value: 'Sundial Plaza, Kamakis, Eastern Bypass',
      meta: 'Nairobi, Kenya',
      href: 'https://maps.app.goo.gl/Jiy3n4q6uQyY9FuF6',
      highlight: true,
    },
  ];

  const services = [
    { name: 'Tax Agency', href: '/services/tax-agency' },
    { name: 'Taxation Advisory', href: '/services/taxation-advisory' },
    { name: 'VAT Filing', href: '/services/vat-filing' },
    { name: 'Auditing', href: '/services/auditing' },
    { name: 'Book Keeping', href: '/services/book-keeping' },
  ];

  const resources = [
    { name: 'About Us', href: '/about' },
    { name: 'Success Stories', href: '/about#testimonials' },
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: 'https://www.facebook.com/avenuetaxauditassociates/', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#020b1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="rounded-3xl border border-white/5 bg-[#050f24] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className={`group relative overflow-hidden rounded-2xl border ${
                  channel.highlight ? 'border-secondary/70' : 'border-white/5'
                } bg-[#0d1c3a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/80`}
                target={channel.href?.startsWith('http') ? '_blank' : undefined}
                rel={channel.href?.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-secondary shadow-inner shadow-black/30 ${
                      channel.highlight ? 'bg-secondary/15 text-secondary' : 'bg-white/5 text-secondary'
                    }`}
                  >
                    {channel.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">{channel.label}</p>
                    <p
                      className={`font-semibold text-white ${
                        channel.label === 'Email Us'
                          ? 'text-base sm:text-lg md:text-xl whitespace-nowrap'
                          : 'text-2xl'
                      }`}
                    >
                      {channel.value}
                    </p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm text-white/70">{channel.meta}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">Services</h3>
                <ul className="space-y-2 text-white/70">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link className="transition hover:text-secondary" href={service.href}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">Pages</h3>
                <ul className="space-y-2 text-white/70">
                  {resources.map((link) => (
                    <li key={link.name}>
                      <Link className="transition hover:text-secondary" href={link.href}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">Newsletter</h3>
                <p className="text-sm text-white/70">
                  Monthly insights on tax, audit, and compliance trends across Kenya.
                </p>
                <form className="mt-4 space-y-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-secondary focus:outline-none"
                  />
                  <button
                    type="button"
                    className="w-full rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-[#0b1c33] shadow-lg shadow-secondary/40 hover:bg-secondary-dark"
                  >
                    Sign Up Now
                  </button>
                </form>
                <div className="mt-5 flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-secondary hover:text-secondary transition"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#182f63] via-primary-dark to-[#050b20] p-8 text-white shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Have a project in mind?</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Let our experts take the tax & audit load off your team.
            </h3>
            <p className="mt-4 text-white/80">
              Schedule a strategy session and discover fast, compliant paths to growth across all 47 counties.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white transition hover:bg-white/20"
              >
                Contact Us
                <FiArrowUpRight className="h-5 w-5" />
              </a>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80">
                <p className="font-semibold text-white">Hours</p>
                <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
                <p>Saturday: 9:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">&copy; {currentYear} Avenue Tax & Audit Associates. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <Link className="hover:text-secondary" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:text-secondary" href="/terms-of-service">
              Terms of Service
            </Link>
            <Link className="hover:text-secondary" href="/cookies">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

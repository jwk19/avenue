"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Calculators', href: '/calculators' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Tax Agency', href: '/services/tax-agency' },
    { name: 'Taxation Advisory', href: '/services/taxation-advisory' },
    { name: 'VAT Filing', href: '/services/vat-filing' },
    { name: 'Auditing', href: '/services/auditing' },
    { name: 'Book Keeping', href: '/services/book-keeping' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <a href="tel:+254711500451" className="hover:underline">+254 711 500451</a>
            </div>
            <div className="hidden md:flex items-center">
              <FiMail className="mr-2" />
              <a href="mailto:info@avenuetaxaudit.co.ke" className="hover:underline">info@avenuetaxaudit.co.ke</a>
            </div>
          </div>
          <div className="flex items-center">
            <FiMapPin className="mr-2" />
            <span>Sundial Plaza, Next to Galana Petrol Station, Kamakis, Eastern Bypass</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Avenue Tax & Audit
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </Link>
                {link.name === 'Services' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/calculators/paye" 
              className="bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              PAYE Calculator
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.name === 'Services' && isOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-3 pb-3">
              <Link
                href="/calculators/paye"
                className="block w-full rounded-md bg-secondary px-4 py-2 text-center text-white font-semibold"
                onClick={() => setIsOpen(false)}
              >
                PAYE Calculator
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

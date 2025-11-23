"use client";

import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Mwangi',
    role: 'CEO, Tech Solutions Ltd',
    content: 'Avenue Tax & Audit has been instrumental in helping us navigate complex tax regulations. Their expertise and attention to detail are unmatched in Kenya.',
    rating: 5,
    image: '/images/testimonials/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Sarah Wanjiku',
    role: 'Finance Director, Green Farms Ltd',
    content: 'The team at Avenue provided exceptional audit services that helped us identify cost-saving opportunities. Their professional approach and deep knowledge of Kenyan tax laws are impressive.',
    rating: 5,
    image: '/images/testimonials/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'David Ochieng',
    role: 'Small Business Owner',
    content: 'As a small business owner, tax compliance was overwhelming until I started working with Avenue. They made everything simple and saved me money in the process!',
    rating: 5,
    image: '/images/testimonials/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'Grace Atieno',
    role: 'CFO, Retail Chain Kenya',
    content: 'Their VAT filing service is exceptional. They handle all our filings on time and have significantly reduced our compliance burden. Highly recommended!',
    rating: 5,
    image: '/images/testimonials/testimonial-4.jpg'
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-64 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                  <div className="flex-1">
                    <FaQuoteLeft className="text-gray-200 text-4xl mb-4" />
                    <p className="text-gray-700 text-lg mb-6">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16">
          <p className="text-center text-gray-500 text-sm mb-6">TRUSTED BY LEADING COMPANIES IN KENYA</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {['/images/clients/client-1.svg', '/images/clients/client-2.svg', '/images/clients/client-3.svg', '/images/clients/client-4.svg', '/images/clients/client-5.svg'].map((logo, index) => (
              <div key={index} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

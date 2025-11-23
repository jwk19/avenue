import Image from 'next/image';
import { FaAward, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
import { Stat } from '../ui/Stats';

export default function AboutUs() {
  const stats = [
    {
      value: '2018',
      label: 'Year Established',
      icon: <FaAward className="text-yellow-500" />
    },
    {
      value: '500',
      label: 'Clients Served',
      icon: <FaUsers className="text-blue-500" />
    },
    {
      value: '98',
      label: 'Client Retention Rate',
      icon: <FaHandshake className="text-green-500" />
    },
    {
      value: '15',
      label: 'Years Combined Experience',
      icon: <FaChartLine className="text-red-500" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            <div className="relative h-full flex items-center justify-center p-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <p className="text-white/90 mb-6">
                  We combine expertise, integrity, and personalized service to deliver exceptional results for our clients.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    'Tax Compliance',
                    'Financial Expertise',
                    'Personalized Service',
                    'Timely Delivery'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for Tax & Audit Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, Avenue Tax & Audit Associates has been at the forefront of providing comprehensive tax and audit services to businesses and individuals across Kenya. Our team of certified professionals brings together years of experience and expertise to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We understand the complexities of the Kenyan tax system and are committed to helping our clients navigate the ever-changing regulatory landscape with confidence and peace of mind.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                    {typeof stat.value === 'number' && '+'}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Learn More About Us
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
        </div>
      </div>
    </section>
  );
}

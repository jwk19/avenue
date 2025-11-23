import Image from 'next/image';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Tax & Audit Services in Kenya
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Trusted by businesses across Kenya for comprehensive tax solutions, auditing, and financial advisory services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/contact" variant="secondary" size="lg">
                Get a Free Consultation
              </Button>
              <Button href="/services" variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-white/20">
                Our Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                      {i}+K
                    </div>
                  ))}
                </div>
                <span>Happy Clients</span>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Certified Experts</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-80 md:h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-white/10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-lg font-medium">Professional Tax & Audit Services</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-white/10 rounded-2xl overflow-hidden shadow-2xl -rotate-2 -translate-y-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💼</div>
                  <p className="text-lg font-medium">Business Advisory & Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12 md:h-20 lg:h-28" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}

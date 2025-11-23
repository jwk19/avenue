import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify Your Tax & Audit Needs?
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Get in touch with our team of experts today for a free consultation and discover how we can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Get a Free Consultation
            </Button>
            <Button 
              href="tel:+254711500451" 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white/30 hover:bg-white/10"
            >
              <span className="flex items-center">
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                +254 711 500451
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -mt-16 -mr-16 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -mb-32 -ml-32 opacity-10"></div>
    </section>
  );
}

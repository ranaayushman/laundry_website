import Carousel from '@/components/Carousel';
import ContactIcons from '@/components/ContactIcons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ScheduleSection from '@/components/ScheduleSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      
      {/* Main Content */}
      <main>
        {/* Hero Section with Carousel 
        <section id="home" className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto">
            <Carousel />
          </div>
        </section>
          */}
        {/* Schedule Section (Premium Contact/Schedule) */}
        <ScheduleSection />

        {/* Welcome Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Welcome to Daily Wear Laundry Service
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Your trusted partner for professional laundry and dry cleaning services. 
              We combine modern technology with traditional care to deliver exceptional results 
              for all your garment cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
              <div className="flex items-center space-x-2 text-blue-600">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-sm sm:text-base">Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-sm sm:text-base">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold text-sm sm:text-base">Eco-Friendly Products</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  About Daily Wear
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  With over 5 years of experience in the laundry and dry cleaning industry, 
                  Daily Wear has become a trusted name for quality garment care services.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quality Assurance</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Every garment is carefully inspected and treated with premium products</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Eco-Friendly Approach</h3>
                      <p className="text-gray-600 text-sm sm:text-base">We use environmentally safe cleaning products and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Customer Satisfaction</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Our priority is your satisfaction with every service we provide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700 text-sm sm:text-base">Professional Staff</span>
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700 text-sm sm:text-base">Modern Equipment</span>
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700 text-sm sm:text-base">Affordable Pricing</span>
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700 text-sm sm:text-base">Quick Turnaround</span>
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="text-gray-700 text-sm sm:text-base">24/7 Support</span>
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">10K+</div>
                <div className="text-blue-100 text-sm sm:text-base">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">50K+</div>
                <div className="text-blue-100 text-sm sm:text-base">Garments Cleaned</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">5+</div>
                <div className="text-blue-100 text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">24/7</div>
                <div className="text-blue-100 text-sm sm:text-base">Service Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Experience Premium Laundry Service?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust us with their laundry needs. 
              Contact us today to schedule your first pickup!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Schedule Pickup
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Icons - Fixed position */}
      <ContactIcons 
        whatsappNumber="+918340764782" 
        email="dailywearlaundry@gmail.com" 
      />

      {/* Footer */}
    </div>
  );
}

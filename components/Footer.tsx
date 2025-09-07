import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <Image
                  src="/img/dailywearLogo.png"
                  alt="Daily Wear Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Daily Wear</h3>
                <p className="text-blue-400 text-xs sm:text-sm">Laundry Service</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base leading-relaxed">
              Professional laundry and dry cleaning services with a commitment to quality, 
              convenience, and customer satisfaction. Your clothes, our care.
            </p>
            {/* Contact Info for Mobile */}
            <div className="sm:hidden space-y-2 mb-6">
              <a 
                href="tel:+918340764782" 
                className="flex items-center text-blue-400 hover:text-white transition-colors text-sm"
              >
                📱 +91 83407 64782
              </a>
              <a 
                href="mailto:dailywearlaundry@gmail.com" 
                className="flex items-center text-blue-400 hover:text-white transition-colors text-sm"
              >
                📧 dailywearlaundry@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm sm:text-base">Washing & Folding</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Dry Cleaning</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Ironing Service</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Pickup & Delivery</span></li>
            </ul>
            {/* Contact Info for Desktop */}
            <div className="hidden sm:block mt-4 space-y-2">
              <a 
                href="tel:+918340764782" 
                className="block text-blue-400 hover:text-white transition-colors text-sm"
              >
                📱 +91 83407 64782
              </a>
              <a 
                href="mailto:dailywearlaundry@gmail.com" 
                className="block text-blue-400 hover:text-white transition-colors text-sm"
              >
                📧 dailywearlaundry@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0">
            © 2025 Daily Wear Laundry Service. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

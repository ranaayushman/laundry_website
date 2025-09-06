'use client';

interface ContactIconsProps {
  whatsappNumber?: string;
  email?: string;
}

export default function ContactIcons({ 
  whatsappNumber = "+918340764782", 
  email = "dailywearlaundry@gmail.com" 
}: ContactIconsProps) {
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in Daily Wear laundry services. Could you please provide more information about your services and pricing?");
    window.open(`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}?subject=Daily Wear Laundry Service Inquiry`, '_blank');
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50">
      {/* WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.685"/>
        </svg>
      </button>

      {/* Email Icon */}
      <button
        onClick={handleEmailClick}
        className="group bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        aria-label="Send us an email"
        title="Send us an email"
      >
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
          />
        </svg>
      </button>

      {/* Contact Info Tooltip - Hidden on mobile for better UX */}
      <div className="hidden lg:group-hover:block absolute right-full mr-4 bottom-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
        <div className="flex flex-col gap-1">
          <span className="text-green-400">📱 {whatsappNumber}</span>
          <span className="text-blue-400">📧 {email}</span>
        </div>
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dhanraj Yadav",
    rating: 5,
    comment: "Excellent service! My clothes always come back fresh and perfectly cleaned. The pickup and delivery service is very convenient. Highly recommend Daily Wear for anyone looking for reliable laundry service.",
    location: "Sector 15, Noida",
    service: "Washing & Folding"
  },
  {
    id: 2,
    name: "Tanmay",
    rating: 5,
    comment: "Been using Daily Wear for over 6 months now. Their dry cleaning service is outstanding, especially for my formal shirts and suits. Professional staff and always on time with deliveries.",
    location: "Laxmi Nagar, Delhi",
    service: "Dry Cleaning"
  },
  {
    id: 3,
    name: "Rishu",
    rating: 5,
    comment: "Amazing quality and very affordable prices. The same-day service saved me multiple times when I needed clothes urgently. Great customer service and eco-friendly products. Will definitely continue using their service!",
    location: "Vaishali, Ghaziabad",
    service: "Express Service"
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about Daily Wear laundry service.
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 xl:p-8 border border-gray-100 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm xl:text-base">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile & Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ease-in-out ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute inset-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mx-auto max-w-2xl border border-gray-100">
                  {/* Stars */}
                  <div className="flex items-center justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-center text-base sm:text-lg">
                    "{testimonial.comment}"
                  </p>

                  {/* Customer Info */}
                  <div className="text-center border-t border-gray-100 pt-6">
                    <h4 className="font-semibold text-gray-900 text-xl mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 mb-3">{testimonial.location}</p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">4.9</div>
                <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">99%</div>
                <div className="text-sm sm:text-base text-gray-600">On-Time Delivery</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">24hr</div>
                <div className="text-sm sm:text-base text-gray-600">Express Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

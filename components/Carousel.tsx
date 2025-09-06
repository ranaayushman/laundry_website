'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Premium Laundry Service",
    subtitle: "Fresh & Clean Every Time",
    description: "Professional washing and cleaning services with eco-friendly products. Your clothes deserve the best care.",
    image: "/laundry-1.svg"
  },
  {
    id: 2,
    title: "Quick & Convenient",
    subtitle: "Same Day Service Available",
    description: "Get your laundry done fast with our efficient service. Pick up and delivery options available.",
    image: "/laundry-2.svg"
  },
  {
    id: 3,
    title: "Dry Cleaning Experts",
    subtitle: "Delicate Fabric Care",
    description: "Specialized dry cleaning for your delicate garments, suits, and formal wear with professional expertise.",
    image: "/laundry-3.svg"
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 sm:mb-6 text-blue-100">
                  {slide.subtitle}
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-blue-50 mb-6 sm:mb-8">
                  {slide.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 sm:p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-2 sm:p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2 border-white ${
              index === currentSlide 
                ? 'bg-white scale-110 shadow-lg' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-90 hover:scale-105'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

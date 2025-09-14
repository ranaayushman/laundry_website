"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="backdrop-blur-lg bg-white/70 border-b border-blue-100/60 shadow-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-3 sm:py-4">
          {/* Centered Logo Only */}
          <div className="flex items-start justify-start w-full">
            <div className=" p-2 sm:p-3">
              <Image
                src="/img/dailywearLogo.png"
                alt="Daily Wear Logo"
                width={68}
                height={68}
                className="w-16 h-16 sm:w-20 sm:h-14 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

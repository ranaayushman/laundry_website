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
        <div className="relative flex items-center py-3 sm:py-4">
          {/* Logo at the start */}
          <div className="flex items-center absolute left-0 top-1/2 -translate-y-1/2">
            <div className="p-2 sm:p-1">
              <Image
                src="/img/logo.png"
                alt="Daily Wear Logo"
                width={108}
                height={68}
                priority
              />
            </div>
          </div>
          {/* Centered Text */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Daily Wear
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Wear - Premium Laundry Service",
  description:
    "Professional laundry and dry cleaning services. Quick, convenient, and eco-friendly. Same day service available with free pickup and delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        <div className="w-full overflow-x-hidden">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

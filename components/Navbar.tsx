"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { title: "Technical Content", href: "/services/technical-content" },
    { title: "Content Strategy", href: "/services/content-strategy" },
    { title: "Content Distribution", href: "/services/content-distribution" },
    { title: "Technical SEO / GEO", href: "/services/technical-seo" },
  ];

  return (
    <>
      <nav className="relative z-50 flex justify-between items-center px-6 py-6 md:px-12 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
            D
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-950">
            DevContent
          </span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-blue-900/80">
          <Link
            href="/"
            className={`hover:text-blue-600 transition-colors ${
              pathname === "/"
                ? "text-blue-600 underline underline-offset-4 decoration-2"
                : ""
            }`}
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 hover:text-blue-600 transition-colors ${
                pathname.startsWith("/services")
                  ? "text-blue-600 font-bold underline underline-offset-4 decoration-2"
                  : ""
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 overflow-hidden py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-6 py-3 text-sm transition-colors font-medium ${
                        pathname === service.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-blue-900 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/company"
            className={`hover:text-blue-600 transition-colors ${
              pathname === "/company"
                ? "text-blue-600 underline underline-offset-4 decoration-2"
                : ""
            }`}
          >
            Company
          </Link>
          <Link
            href="/pilot"
            className={`hover:text-blue-600 transition-colors ${
              pathname === "/pilot"
                ? "text-blue-600 underline underline-offset-4 decoration-2"
                : ""
            }`}
          >
            Pilot
          </Link>
          <Link
            href="/blog"
            className={`hover:text-blue-600 transition-colors ${
              pathname.startsWith("/blog")
                ? "text-blue-600 underline underline-offset-4 decoration-2"
                : ""
            }`}
          >
            Blog
          </Link>
        </div>

        <Link
          href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-blue-200 rounded-full hover:bg-blue-100 hover:border-blue-300 transition-colors font-medium hidden md:block bg-white/50 backdrop-blur-sm text-blue-900"
        >
          Book a Call
        </Link>

        <button
          className="md:hidden p-2 text-blue-900 hover:bg-blue-100 rounded-lg transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden h-screen"
          >
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors ${
                pathname === "/"
                  ? "text-blue-600 underline underline-offset-4 decoration-2"
                  : "text-blue-900 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="flex flex-col items-center gap-4">
              <button
                className={`text-2xl font-bold transition-colors flex items-center gap-2 ${
                  pathname.startsWith("/services")
                    ? "text-blue-600 underline underline-offset-4 decoration-2"
                    : "text-blue-900 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col items-center gap-4 overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`text-lg font-medium transition-colors ${
                          pathname === service.href
                            ? "text-blue-600 underline underline-offset-4 decoration-2"
                            : "text-blue-800/80 hover:text-blue-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#case-studies"
              className="text-2xl font-bold text-blue-900 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/company"
              className={`text-2xl font-bold transition-colors ${
                pathname === "/company"
                  ? "text-blue-600 underline underline-offset-4 decoration-2"
                  : "text-blue-900 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Company
            </Link>
            <Link
              href="/pilot"
              className={`text-2xl font-bold transition-colors ${
                pathname === "/pilot"
                  ? "text-blue-600 underline underline-offset-4 decoration-2"
                  : "text-blue-900 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pilot
            </Link>
            <Link
              href="/blog"
              className={`text-2xl font-bold transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-blue-600 underline underline-offset-4 decoration-2"
                  : "text-blue-900 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

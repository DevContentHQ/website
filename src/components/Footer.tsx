import React from "react";
import { Github, Twitter, Linkedin, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const services = [
    { title: "Technical Content", href: "/services/technical-content" },
    { title: "Content Strategy", href: "/services/content-strategy" },
    { title: "Content Distribution", href: "/services/content-distribution" },
    { title: "Technical SEO / GEO", href: "/services/technical-seo" },
  ];

  const company = [
    { title: "Home", href: "/" },
    { title: "Company", href: "/company" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 text-blue-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
                D
              </div>
              <span className="text-xl font-bold tracking-tight">
                DevContent
              </span>
            </Link>
            <p className="text-blue-950/70 leading-relaxed max-w-sm">
              Technical content marketing for developer tools and
              engineering-led companies. We help you reach developers with
              accuracy and authority.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-blue-950/60 hover:bg-blue-50 hover:text-blue-600 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-blue-950/60 hover:bg-blue-50 hover:text-blue-600 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-blue-950/60 hover:bg-blue-50 hover:text-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-blue-950/60 hover:bg-blue-50 hover:text-blue-600 transition-all"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-blue-950">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-blue-950/70 hover:text-blue-600 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-blue-950">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-blue-950/70 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/CTA Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-blue-950">Ready to grow?</h3>
            <p className="text-blue-950/70 leading-relaxed">
              Book a discovery call to discuss your content strategy and
              technical marketing needs.
            </p>
            <Link
              href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-200/50 w-full sm:w-auto"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-950/60">
          <p>
            &copy; {new Date().getFullYear()} DevContent. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

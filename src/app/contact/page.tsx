"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  Mail,
  Calendar,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "#", // Replace with actual URL
      icon: Github,
      description: "Check out our open source contributions and code samples.",
    },
    {
      name: "Twitter",
      url: "#", // Replace with actual URL
      icon: Twitter,
      description: "Follow us for quick tips, industry news, and hot takes.",
    },
    {
      name: "LinkedIn",
      url: "#", // Replace with actual URL
      icon: Linkedin,
      description: "Connect with us and see our latest company updates.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-blue-950 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-12 md:pt-24 pb-20">
        {/* Header */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-32">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Get in touch
              </div>
            </Reveal>
            <Reveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-blue-950">
                Let&apos;s start a conversation
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-xl md:text-2xl text-blue-900/70 leading-relaxed max-w-2xl">
                We&apos;re always open to discussing new projects, technical
                challenges, or opportunities to help your team grow.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Options Grid */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Book a Call - Primary Option */}
            <Reveal>
              <div className="h-full bg-blue-600 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8 backdrop-blur-sm">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Book a discovery call
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-md">
                    The fastest way to get started. Schedule a 30-minute chat to
                    discuss your content needs and see if we&apos;re a good fit.
                  </p>
                </div>

                <div className="relative z-10">
                  <Link
                    href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20"
                  >
                    Find a time
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-8">
              {/* Email Option */}
              <Reveal>
                <div className="flex-1 bg-blue-50 rounded-[2.5rem] p-8 md:p-12 border border-blue-100 hover:border-blue-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-950">
                    Email us
                  </h3>
                  <p className="text-blue-900/70 mb-6">
                    Prefer to write it down? Send us a note about your project.
                  </p>
                  <a
                    href="mailto:hello@devcontent.com"
                    className="text-xl font-bold text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4 transition-colors"
                  >
                    hello@devcontent.com
                  </a>
                </div>
              </Reveal>

              {/* General Inquiries */}
              <Reveal>
                <div className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-12 border border-blue-100 hover:border-blue-200 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-950">
                    Quick questions?
                  </h3>
                  <p className="text-blue-900/70 mb-6">
                    Not ready for a call? We&apos;re happy to answer quick
                    questions via email or social DM.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <Reveal>
            <h2 className="text-2xl font-bold text-blue-950 mb-12 border-b border-blue-100 pb-6">
              Connect with us elsewhere
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <Reveal key={index}>
                <a
                  href={link.url}
                  className="group block p-8 rounded-3xl bg-white border border-blue-100 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-300 group-hover:text-blue-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-blue-900/60 leading-relaxed">
                    {link.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

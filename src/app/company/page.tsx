"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  Code2,
  Target,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle,
  Layout,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import {
  SiKubernetes,
  SiPython,
  SiGraphql,
  SiDocker,
  SiPostgresql,
  SiGo,
  SiTypescript,
  SiRedis,
  SiAmazonwebservices,
  SiTerraform,
  SiReact,
  SiMongodb,
} from "react-icons/si";
import { FaServer, FaCogs, FaNetworkWired, FaInfinity } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const priorities = [
    {
      title: "Real developer intent over abstract keywords",
      description:
        "We don't chase search volume. We identify what developers are actually trying to solve and write content that answers those specific questions.",
      icon: Target,
    },
    {
      title: "Accuracy and judgment over speed alone",
      description:
        "Fast content is useless if it's wrong. We prioritize technical correctness and sound engineering judgment in every piece.",
      icon: ShieldCheck,
    },
    {
      title: "Distribution as a requirement, not an afterthought",
      description:
        "Great content needs to be seen. We build distribution into the strategy from day one, targeting channels where developers actually hang out.",
      icon: TrendingUp,
    },
    {
      title: "Long-term usefulness over short-term spikes",
      description:
        "We build assets that compound. Our goal is to create content that remains relevant and valuable long after the initial publish date.",
      icon: Clock,
    },
  ];

  const standards = [
    "Technically correct and precise",
    "Clear about assumptions, limitations, and tradeoffs",
    "Useful to actual practitioners, not just demo environments",
    "Able to stand up to scrutiny from experienced engineers",
  ];

  const workflow = [
    {
      title: "Clear alignment early",
      icon: Layout,
    },
    {
      title: "Focused feedback cycles",
      icon: MessageSquare,
    },
    {
      title: "Respect for bandwidth",
      icon: Users,
    },
    {
      title: "Consistent quality",
      icon: CheckCircle,
    },
  ];

  const techStack = [
    { icon: SiKubernetes, color: "text-blue-600" },
    { icon: SiPython, color: "text-blue-500" },
    { icon: SiGraphql, color: "text-pink-600" },
    { icon: SiDocker, color: "text-blue-500" },
    { icon: SiPostgresql, color: "text-blue-400" },
    { icon: SiGo, color: "text-cyan-600" },
    { icon: SiTypescript, color: "text-blue-600" },
    { icon: SiRedis, color: "text-red-500" },
    { icon: SiAmazonwebservices, color: "text-orange-500" },
    { icon: SiTerraform, color: "text-purple-600" },
    { icon: SiReact, color: "text-cyan-400" },
    { icon: SiMongodb, color: "text-green-500" },
  ];

  const teamMembers = [
    {
      name: "Ayooluwa Isaiah",
      role: "Co-founder/CEO",
      image: "/company/001.png",
    },
    {
      name: "Abdulquadri Saka-Bolanta",
      role: "Co-founder / COO",
      image: "/company/002.png",
    },
    {
      name: "Abdul-Azeez Adeyiga",
      role: "Frontend Developer",
      image: "/company/003.png",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-blue-950 font-sans relative overflow-hidden">
      {/* Grid Background Pattern - Inspiration from Hero */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(48, 140, 230, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(48, 140, 230, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-12 md:pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center max-w-5xl mx-auto mb-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12 text-blue-950"
            >
              We help technical teams build authority through content
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-800/70 leading-relaxed font-medium max-w-3xl mx-auto"
            >
              We partner with technical teams to produce accurate, well-judged
              content that supports awareness, evaluation, and long-term growth.
              Our focus is on quality, distribution, and standards that hold up
              under real technical scrutiny.
            </motion.p>
          </section>

          {/* Who We Are + Tech Stack Marquee - Inspiration from Hero Pills */}
          <Reveal>
            <section className="mb-32">
              <div className="bg-white rounded-[2.5rem] overflow-hidden border border-blue-100 shadow-sm">
                <div className="p-8 md:p-16">
                  <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-950">
                      Who we are
                    </h3>
                    <p className="text-xl text-blue-900/70 leading-relaxed">
                      We are a team of engineers and technical writers who
                      understand that developer marketing is different.
                      We&apos;ve built products, managed infrastructure, and
                      written documentation for some of the most demanding
                      technical audiences.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="group bg-blue-50/50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-blue-100 w-full md:w-3/12 w-12/12"
                      >
                        <div className="aspect-square mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                          {/* <span className="text-4xl font-bold text-blue-400/50 group-hover:text-blue-500/80 transition-colors">
                            {member.initials} 
                          </span> */}
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={100}
                            height={100}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-blue-950 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-blue-600 font-medium text-sm mb-3">
                          {member.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Marquee */}
                <div className="bg-blue-50/50 py-6 border-t border-blue-100">
                  <p className="text-center text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">
                    We speak your language
                  </p>
                  <Marquee gradient={false} speed={30}>
                    {techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="mx-6 opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <tech.icon className={`w-8 h-8 ${tech.color}`} />
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Why We Exist - Inspiration from ContentResults Layout */}
          <Reveal>
            <section className="mb-32">
              <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-16 items-start">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight flex-1">
                  Why we exist
                </h2>
                <div className="flex-1 pt-2">
                  <p className="text-xl text-blue-900/70 leading-relaxed font-medium">
                    Technical content plays a real role in how developers learn,
                    evaluate tools, and make decisions. When it is inaccurate,
                    shallow, or disconnected from real usage, it does more harm
                    than good.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                <div className="flex-1 space-y-8 order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-blue-950">
                    Bridging the Gap
                  </h3>
                  <div className="space-y-6 text-lg text-blue-900/70 leading-relaxed">
                    <p>
                      We started this company to address the disconnect between
                      marketing goals and engineering reality.
                    </p>
                    <p>
                      Our goal is to help teams produce content that reflects
                      real technical understanding and supports awareness,
                      evaluation, and adoption without pulling engineers away
                      from building product.
                    </p>

                    <div className="pt-4">
                      <Link
                        href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                      >
                        Let&apos;s close the gap together{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-1 order-1 md:order-2 w-full">
                  <div className="relative aspect-[4/3] bg-blue-950 rounded-[2.5rem] overflow-hidden p-12 flex flex-col justify-between text-white shadow-xl shadow-blue-900/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                      <Code2 className="w-64 h-64" />
                    </div>
                    <div className="relative z-10">
                      <span className="text-blue-400 font-mono mb-4 block text-sm tracking-wider uppercase">
                        The Mission
                      </span>
                      <p className="text-3xl font-bold leading-tight">
                        &quot;To build the bridge between engineering reality
                        and marketing goals.&quot;
                      </p>
                    </div>
                    <div className="relative z-10 flex gap-4">
                      <div className="h-2 w-12 bg-blue-500 rounded-full"></div>
                      <div className="h-2 w-4 bg-blue-500/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Philosophy - Inspiration from HowWeHelp Cards */}
          <Reveal>
            <section className="mb-32">
              <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-16 items-start">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight flex-1">
                  How we think
                </h2>
                <div className="flex-1 pt-2">
                  <p className="text-xl text-blue-900/70 leading-relaxed font-medium">
                    We treat content as part of a system, not a campaign.
                    Performance comes from making good decisions upstream and
                    improving based on how content is actually used.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {priorities.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-[2rem] border border-blue-50 hover:border-blue-200 transition-all hover:shadow-lg group"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 mb-3 flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-900/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Credibility Standards */}
          <Reveal>
            <section className="mb-32 bg-blue-900 rounded-[2.5rem] p-8 md:p-20 text-white overflow-hidden relative shadow-2xl shadow-blue-900/30">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Built for <br /> technical credibility
                  </h2>
                  <p className="text-xl text-blue-200/80 leading-relaxed mb-8">
                    Credibility with technical audiences is earned slowly and
                    lost quickly. Our standards reflect that reality.
                  </p>
                </div>
                <div className="space-y-4">
                  {standards.map((standard, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-blue-800/50 border border-blue-700/50 hover:bg-blue-800 transition-colors"
                    >
                      <CheckCircle className="w-6 h-6 text-blue-400 shrink-0" />
                      <span className="text-lg font-medium text-blue-50">
                        {standard}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* Workflow */}
          <Reveal>
            <section className="mb-32">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-950 mb-6">
                  How we work with teams
                </h2>
                <p className="text-xl text-blue-900/70 leading-relaxed">
                  We are designed to integrate smoothly with existing teams and
                  workflows. Our process minimizes internal lift while ensuring
                  enough context to produce accurate and relevant content.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workflow.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-3xl border border-blue-100 text-center flex flex-col items-center gap-4 hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-blue-950">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Pilot CTA */}
          <Reveal>
            <section className="bg-white border-2 border-blue-100 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  Low Risk, High Signal
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-950">
                  Start with a pilot
                </h2>
                <p className="text-lg md:text-xl text-blue-900/70 leading-relaxed">
                  Choosing a technical content partner involves risk. That is
                  why we offer a pilot program that allows teams to validate
                  fit, quality, and working style before committing to a longer
                  engagement.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200/50"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border border-blue-200 text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
                  >
                    Learn about pilots
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>
        </main>

        <Footer />
      </div>
    </div>
  );
}

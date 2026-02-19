"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  MessageSquare,
  ShieldCheck,
  Target,
  ArrowRight,
  Zap,
  Layout,
  Users,
  Search,
  FileText,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function PilotPage() {
  const includes = [
    {
      title: "Discovery and context gathering",
      description:
        "We align on your goals, audience, and technical requirements.",
      icon: Search,
    },
    {
      title: "Topic selection and content planning",
      description:
        "We choose high-impact topics that demonstrate our approach.",
      icon: Target,
    },
    {
      title: "Writing and technical review",
      description:
        "Full drafting process with rigorous code testing and review.",
      icon: FileText,
    },
    {
      title: "Delivery and preparation for distribution",
      description: "Final polish and assets ready for your channels.",
      icon: Send,
    },
  ];

  const deliverables = [
    "Production-ready technical content written and reviewed to the same standard as any ongoing engagement",
    "Clear examples of how topics are scoped for awareness, evaluation, and authority",
    "Visibility into turnaround time, feedback loops, and collaboration style",
    "Content prepared for distribution across relevant developer channels",
  ];

  const validationPoints = [
    {
      title: "Technical accuracy and depth",
      icon: ShieldCheck,
    },
    {
      title: "Relevance of topics and framing",
      icon: Target,
    },
    {
      title: "Turnaround time and communication",
      icon: Clock,
    },
    {
      title: "How collaboration feels in practice",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-blue-950 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-12 md:pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            <div className="flex-1">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Pilot Program
                </div>
              </Reveal>
              <Reveal>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-blue-950">
                  Validate technical content quality before committing long term
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-xl md:text-2xl text-blue-900/70 leading-relaxed mb-10 max-w-2xl">
                  You want to invest in technical content, but need confidence
                  that the work will be accurate, credible, and aligned with
                  your product and audience. Our pilot program helps teams
                  validate fit and quality by running through the full process
                  on a limited scope.
                </p>
              </Reveal>
              <Reveal>
                <Link
                  href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-200/50"
                >
                  Let’s Talk
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <Reveal>
            <div className="bg-blue-50 rounded-[2.5rem] p-8 md:p-16 border border-blue-100">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-950">
                  Validate technical content before you scale it
                </h2>
                <p className="text-xl text-blue-900/70 leading-relaxed mb-8">
                  The pilot is designed to turn assumptions about technical
                  content into something concrete you can evaluate. Over a
                  short, focused engagement, we work through the full process
                  from context and planning to writing, review, and
                  distribution.
                </p>
                <p className="text-xl text-blue-900/70 leading-relaxed">
                  By the end of the pilot, you’ll have production-ready content
                  and a grounded understanding of whether the approach,
                  standards, and collaboration style are right for your team.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* What includes */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-950">
                What the pilot includes
              </h2>
              <p className="text-xl text-blue-900/70 max-w-3xl leading-relaxed">
                The pilot runs through our full process, end to end, on a
                limited and clearly defined scope. Nothing is treated as a
                sample—the content produced is yours to use regardless of next
                steps.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includes.map((item, index) => (
              <Reveal key={index}>
                <div className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-950">
                    {item.title}
                  </h3>
                  <p className="text-blue-900/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <Reveal>
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-950">
                  At the end of the pilot, you will have
                </h2>
                <div className="space-y-6">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-lg text-blue-900/80 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-blue-950 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  The same standards, no shortcuts
                </h3>
                <p className="text-blue-100/80 leading-relaxed mb-8 text-lg">
                  Pilot work follows the same technical standards, review
                  expectations, and quality bar as ongoing engagements. We do
                  not simplify scope, lower depth, or bypass review to make the
                  pilot easier.
                </p>
                <div className="p-6 bg-blue-900/50 rounded-xl border border-blue-800">
                  <p className="font-medium text-blue-200 italic">
                    &quot;The goal is to evaluate real working conditions, not a
                    polished preview.&quot;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Validation Points */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 bg-slate-50 py-24 rounded-[3rem]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-950">
                What the pilot helps you validate
              </h2>
              <p className="text-xl text-blue-900/70 leading-relaxed">
                By the end of the pilot, you’ll have clarity on key aspects of
                our partnership.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
            {validationPoints.map((point, index) => (
              <Reveal key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center flex flex-col items-center gap-4 border border-blue-100/50 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                    <point.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-blue-950">
                    {point.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Reveal>
              <p className="text-lg text-blue-900/60 max-w-2xl mx-auto">
                If the fit is strong, scaling the engagement is straightforward.
                If not, the pilot still delivers usable content and a clear
                signal without long-term obligation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Internal Lift & Next Steps */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <Reveal>
              <div className="h-full border border-blue-100 rounded-3xl p-8 md:p-12 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-8">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-950">
                  Designed to minimize internal lift
                </h3>
                <p className="text-lg text-blue-900/70 leading-relaxed mb-6">
                  The pilot is structured to respect engineering and product
                  bandwidth. We focus on gathering context early, keeping
                  feedback cycles focused, and avoiding unnecessary demands on
                  internal teams.
                </p>
                <p className="text-lg font-medium text-blue-950">
                  This allows teams to evaluate fit without disruption.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="h-full border border-blue-100 rounded-3xl p-8 md:p-12 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-950">
                  What happens after the pilot
                </h3>
                <p className="text-lg text-blue-900/70 leading-relaxed mb-6">
                  If the pilot confirms fit, teams can choose to scale scope,
                  cadence, or distribution support based on their goals. There
                  is no automatic continuation and no pressure to proceed.
                </p>
                <p className="text-lg font-medium text-blue-950">
                  The next step is always a deliberate decision.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <Reveal>
            <div className="bg-blue-600 rounded-[2.5rem] p-8 md:p-16 text-center text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                />
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Getting started
                </h2>
                <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                  Most teams begin with a pilot before deciding how to proceed.
                  Validate quality and fit before committing.
                </p>
                <Link
                  href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all"
                >
                  Start with a pilot
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ArrowRight, Code2, Cpu } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do you write for specific technical niches?",
    answer:
      "Yes. We specialize in DevOps, Cloud Native, Cybersecurity, and Frontend Infrastructure. Our team consists of engineers with diverse backgrounds.",
  },
  {
    question: "How do you ensure code accuracy?",
    answer:
      "Every piece of content goes through a technical review process where code snippets are tested in a real environment. We treat content bugs like production bugs.",
  },
  {
    question: "What is the typical turnaround time?",
    answer:
      "For a standard technical article (1500-2000 words), our typical turnaround is 5-7 business days from brief approval.",
  },
  {
    question: "Can you work with our existing content team?",
    answer:
      "Absolutely. We often plug into existing teams to handle the heavy technical lifting while your team focuses on brand and strategy.",
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-blue-100 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-blue-950 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-blue-900/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { servicesData } from "../[slug]/data";

export default function TechnicalContentPage() {
  const data = servicesData["technical-content"];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
                  Technical Content Service
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-blue-950 mb-6">
                  {data.hero.title}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl text-blue-900/70 leading-relaxed max-w-xl mb-8">
                  {data.hero.description}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                    target="_blank"
                    className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200/50 flex items-center gap-2 group"
                  >
                    {data.hero.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Abstract Tech Visual */}
            <div className="flex-1 w-full relative">
              <Reveal delay={0.4}>
                <div className="relative aspect-square md:aspect-4/3 bg-linear-to-br from-blue-950 to-blue-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl shadow-blue-900/20 flex flex-col justify-center">
                  {/* Decor elements */}
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Code2 className="w-64 h-64 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 opacity-5">
                    <Cpu className="w-48 h-48 text-white" />
                  </div>

                  {/* Code Window Mockup */}
                  <div className="relative z-10 bg-blue-950/80 backdrop-blur-md rounded-xl border border-blue-800/50 p-6 shadow-2xl font-mono text-sm md:text-base leading-relaxed">
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex gap-4">
                        <span className="text-blue-800 select-none">1</span>
                        <div className="flex-1">
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-300">createContent</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-purple-400">async</span> (
                          <span className="text-orange-300">topic</span>) =&gt;{" "}
                          <span className="text-yellow-400">{"{"}</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-blue-800 select-none">2</span>
                        <div className="flex-1 pl-4">
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-300">research</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-purple-400">await</span>{" "}
                          <span className="text-yellow-200">deepDive</span>(
                          <span className="text-orange-300">topic</span>);
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-blue-800 select-none">3</span>
                        <div className="flex-1 pl-4">
                          <span className="text-purple-400">if</span> (
                          <span className="text-white">!</span>
                          <span className="text-blue-300">research</span>.
                          <span className="text-sky-300">
                            isTechnicallyAccurate
                          </span>
                          ) <span className="text-yellow-400">{"{"}</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-blue-800 select-none">4</span>
                        <div className="flex-1 pl-8">
                          <span className="text-purple-400">throw</span>{" "}
                          <span className="text-purple-400">new</span>{" "}
                          <span className="text-emerald-300">Error</span>(
                          <span className="text-orange-300">
                            &quot;Must be accurate&quot;
                          </span>
                          );
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-blue-800 select-none">5</span>
                        <div className="flex-1 pl-4">
                          <span className="text-yellow-400">{"}"}</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-blue-800 select-none">6</span>
                        <div className="flex-1 pl-4">
                          <span className="text-purple-400">return</span>{" "}
                          <span className="text-yellow-200">write</span>(
                          <span className="text-blue-300">research</span>);
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-blue-800 select-none">7</span>
                        <div className="flex-1">
                          <span className="text-yellow-400">{"}"}</span>;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-950 tracking-tight">
                  {data.problem.title}
                </h2>
                <p className="text-xl text-blue-900/70 leading-relaxed">
                  {data.problem.description}
                </p>
                <div className="pt-8">
                  <p className="text-2xl font-serif italic text-blue-900/40">
                    &quot;{data.problem.summary}&quot;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-12">
                {data.problem.items.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12 group">
                    <span className="absolute left-0 top-0 text-xs font-mono text-blue-300 font-bold tracking-widest mt-2.5">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-950 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Solution Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32" id="process">
          <Reveal>
            <div className="mb-24 md:mb-32">
              <h2 className="text-4xl md:text-6xl font-bold text-blue-950 mb-8 tracking-tight">
                {data.solution.title}
              </h2>
              <p className="text-xl text-blue-900/60 max-w-3xl leading-relaxed">
                {data.solution.description}
              </p>
            </div>
          </Reveal>

          <div className="space-y-32">
            {data.solution.items.map((item, index) => (
              <Reveal key={index} delay={0.1}>
                <div className="group grid md:grid-cols-12 gap-12 md:gap-24 items-start pt-12 md:pt-0">
                  {/* Left Column: Identity */}
                  <div className="md:col-span-5 md:sticky md:top-32">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-950 mb-6">
                      {item.title}
                    </h3>
                    <p className="text-lg text-blue-900/70 leading-relaxed mb-8">
                      {item.description}
                    </p>
                    {item.subDescription && (
                      <div className="pl-6 border-l-2 border-blue-200">
                        <p className="text-blue-900/80 italic">
                          {item.subDescription}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Deliverables */}
                  <div className="md:col-span-7 pt-4">
                    <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest mb-8">
                      Deliverables
                    </span>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {item.formats.map((format, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-blue-100"
                        >
                          <div className="w-6 h-6 rounded-full bg-white border border-blue-100 flex items-center justify-center shrink-0 text-blue-500 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-blue-950/80 font-medium">
                            {format}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-32">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-12 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <Reveal>
            <div className="bg-blue-600 rounded-[2.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                  }}
                ></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Ready to scale your technical content?
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Stop wasting time with writers who don&apos;t understand your
                  product. Let&apos;s build content that developers actually
                  read.
                </p>
                <div className="pt-4">
                  <Link
                    href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                  >
                    Book a Discovery Call
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

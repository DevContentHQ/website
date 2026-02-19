import React from "react";
import { Megaphone, Scale, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowWeHelp() {
  const services = [
    {
      title: "Build brand awareness",
      description:
        "When a product enters a market, content needs to introduce the problem space while also demonstrating thought leadership.",
      details:
        "We help create content that explains core concepts, explores approaches, and surfaces tradeoffs in a way that attracts attention and establishes your brand as a credible technical voice.",
      icon: Megaphone,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Support product evaluation",
      description:
        "As developers begin comparing tools and approaches, content needs to answer deeper questions.",
      details:
        "We produce technically rigorous content that explains how systems work, where they fit, and what tradeoffs matter, helping developers move from understanding to confident evaluation.",
      icon: Scale,
      color: "from-indigo-500 to-violet-600",
    },
    {
      title: "Scale technical content",
      description:
        "As content programs grow, consistency and quality become harder to maintain.",
      details:
        "We help teams scale output, refresh underperforming content, and keep technical material accurate and relevant over time, without pulling engineers away from core product work.",
      icon: TrendingUp,
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section
      id="how-we-help"
      className="bg-blue-50 py-24 px-6 md:px-12 text-blue-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-24 items-start">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              How we help you
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-xl md:text-2xl mb-8 text-blue-950/70 leading-relaxed font-medium md:pt-2">
              We work with developer-focused teams at different stages of
              growth. Our offerings are structured around the problems content
              is meant to solve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h3 className="text-3xl md:text-3xl font-bold tracking-tight">
                {service.title}
              </h3>
              <div className="space-y-4">
                <p className="text-xl text-blue-900 font-medium leading-relaxed">
                  {service.description}
                </p>
                <p className="text-lg text-blue-900/60 leading-relaxed">
                  {service.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

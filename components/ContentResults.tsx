import React from "react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContentResults() {
  const points = [
    {
      title: "Topic selection tied to developer intent",
      description:
        "We focus on topics developers search as they move from early awareness to active evaluation. This brings in a broad technical audience while naturally filtering toward qualified leads who are actively assessing solutions.",
      bullets: [
        "Focus on developer search intent",
        "Explanations & implementation details",
        "Filter for qualified leads",
      ],
      image: "/placeholders/01.png",
    },
    {
      title: "Technical accuracy is paramount",
      description:
        "Every piece is reviewed for conceptual accuracy, sound implementation, and clear explanation of tradeoffs. This level of rigor supports credibility and positions your brand as a reliable reference.",
      bullets: [
        "Conceptual accuracy reviews",
        "Sound implementation examples",
        "Clear tradeoffs & limitations",
      ],
      image: "/placeholders/02.png",
    },
    {
      title: "Content built for evaluation, not clicks",
      description:
        "Effective technical content helps developers decide whether something fits their context. We structure content to explain how systems work, where they apply, and what tradeoffs to consider.",
      bullets: [
        "Context-aware technical content",
        "System architecture explanations",
        "Confident adoption decisions",
      ],
      image: "/placeholders/03.png",
    },
    {
      title: "Iteration based on real signals",
      description:
        "We focus on real usage signals over vanity metrics to guide how content evolves. This includes visibility for relevant technical queries, reader engagement, and signals of product interest.",
      bullets: [
        "Real usage signals over vanity metrics",
        "Reader engagement tracking",
        "Continuous content refinement",
      ],
      image: "/placeholders/04.png",
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-24 px-6 md:px-12 bg-white text-blue-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-2 items-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight flex-1">
            Explore our Content Strategy
          </h2>
          <div className="flex-1 space-y-8">
            <p className="text-xl md:text-2xl mb-8 text-blue-950/70 leading-relaxed font-medium md:pt-2">
              Technical content performs when it’s accurate, relevant, and
              written with a clear understanding of how developers evaluate
              tools.
            </p>
            <Link
              href="/services/content-strategy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-200/50 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          {points.map((point, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-24 items-center py-20 border-b border-gray-100 last:border-0`}
            >
              <div className="flex-1 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-950">
                  {point.title}
                </h3>
                <p className="text-lg text-blue-900/70 leading-relaxed">
                  {point.description}
                </p>
                <ul className="space-y-4">
                  {point.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check
                          className="w-5 h-5 text-blue-600"
                          strokeWidth={2}
                        />
                      </div>
                      <span className="text-blue-900 font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] bg-gray-50 rounded-[2.5rem] overflow-hidden relative">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

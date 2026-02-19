import React from "react";
import { ArrowRight, Handshake, ThumbsUp, Crosshair } from "lucide-react";
import Link from "next/link";

export default function Pilot() {
  const points = [
    {
      title: "Focused and low-risk",
      description:
        "The pilot starts with a small, clearly defined scope. We align on goals, topics, and expectations, then run through the full process from discovery to distribution. This gives you a concrete view into how we work and what the output looks like in practice.",
      icon: Crosshair,
    },
    {
      title: "The same high standards",
      description:
        "Pilot work follows the same technical standards, review process, and expectations as ongoing engagements. Nothing is simplified or treated as a sample. The goal is to evaluate real working conditions, not a polished demo.",
      icon: ThumbsUp,
    },
    {
      title: "Clear signal on fit",
      description:
        "By the end of the pilot, teams have a clear sense of content quality, turnaround, and collaboration style. If the fit is there, scaling is straightforward. If not, you leave with usable content and clarity, without long-term obligation.",
      icon: Handshake,
    },
  ];

  return (
    <section
      id="pilot"
      className="py-24 px-6 md:px-12 bg-white text-blue-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-24 items-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight flex-1">
            Try before you <br /> <span className="text-blue-600">commit</span>
          </h2>
          <p className="text-xl text-blue-950/70 leading-relaxed font-medium flex-1 md:pt-2">
            Choosing a technical content partner carries real risk. Accuracy,
            voice, and judgment matter, and those things are hard to assess
            upfront. That’s why we offer a pilot program designed to let teams
            validate fit and quality before making a longer-term commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <point.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-blue-950">
                  {point.title}
                </h3>
                <p className="text-lg text-blue-950/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">
              Most teams start with a pilot to confirm fit before deciding how
              to proceed.
            </h3>
          </div>
          <Link
            href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
            target="_blank"
            className="flex-shrink-0 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            Start with a pilot
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery and context",
      description:
        "We start by building a clear picture of your product, market, and audience. This includes understanding your positioning relative to competitors, how developers discover and evaluate similar tools, and where content fits within your marketing funnel. Alignment at this stage ensures that planning and execution are grounded in real competitive and product realities.",
      linkText: "Our discovery approach",
    },
    {
      number: "02",
      title: "Topic research and content planning",
      description:
        "Based on discovery, we identify topics that align with developer intent across awareness and evaluation stages. SEO and GEO research inform how topics are scoped, structured, and prioritized, including how content is likely to surface in search engines and AI-driven discovery. Each topic is defined for purpose, depth, and audience before writing begins.",
      linkText: "Download our content calendar template",
    },
    {
      number: "03",
      title: "Writing and technical review",
      description:
        "Content is written based on topics and scope defined during discovery and planning, ensuring each piece addresses relevant developer questions and search intent. Drafts move quickly while maintaining technical rigor through review for correctness, sound reasoning, and clear explanation of tradeoffs and assumptions. This allows for fast turnaround without compromising quality or credibility.",
      linkText: "Our technical review process",
    },
    {
      number: "04",
      title: "Content distribution",
      description:
        "Final content is delivered ready for publication, but it is not treated as complete until it is distributed. Each piece is prepared for channels where developers actively discover technical content, including newsletters, Reddit, LinkedIn, and relevant social platforms.",
      linkText: "Content distribution playbook",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 bg-blue-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-24 items-start">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight flex-1">
            Our process
          </h2>
          <p className="text-xl text-blue-200/80 leading-relaxed font-medium flex-1 md:pt-2">
            We follow a clear, repeatable process designed to minimize internal
            lift while ensuring technical accuracy and consistency from the
            first piece through ongoing iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-6 group">
              <span className="text-6xl md:text-8xl font-bold text-blue-900/50 group-hover:text-blue-800/50 transition-colors duration-300">
                {step.number}
              </span>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-blue-200/70 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-medium transition-colors"
                  >
                    {step.linkText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "./data";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    // if (["technical-seo"].includes(slug)) {
    //   return (
    //     <div className="min-h-screen bg-[#F0F4FF] text-blue-950 font-sans">
    //       <Navbar />
    //       <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
    //         <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 capitalize">
    //           {slug.replace("-", " ")}
    //         </h1>
    //         <p className="text-xl text-blue-800/70 max-w-2xl">
    //           This service page is coming soon.
    //         </p>
    //       </main>
    //       <Footer />
    //     </div>
    //   );
    // }
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white text-blue-950 font-sans selection:bg-blue-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-blue-950 mb-8 leading-[1.1]">
                {data.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-800/70 mb-10 leading-relaxed max-w-2xl">
                {data.hero.description}
              </p>
              <Link
                href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                {data.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-950 mb-6">
                  {data.problem.title}
                </h2>
                <p className="text-lg text-blue-800/70 leading-relaxed">
                  {data.problem.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
                <ul className="space-y-6">
                  {data.problem.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 min-w-6 min-h-6 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                        <span className="block w-2 h-2 rounded-full bg-red-500" />
                      </div>
                      <span className="text-lg text-blue-900 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-blue-200/50">
                  <p className="text-xl font-semibold text-blue-600">
                    {data.problem.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-950 mb-6">
                {data.solution.title}
              </h2>
              <p className="text-xl text-blue-800/70 leading-relaxed">
                {data.solution.description}
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {data.solution.items.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-100 h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-blue-800/70 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                  {item.subDescription && (
                    <p className="text-blue-800/70 mb-6 leading-relaxed italic">
                      {item.subDescription}
                    </p>
                  )}

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                      Typical formats:
                    </p>
                    <ul className="space-y-2">
                      {item.formats.map((format, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2 text-blue-900 text-sm font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                          {format}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-blue-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to build content that compounds?
            </h2>
            <Link
              href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-950 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
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
import Navbar from "./Navbar";

export default function Hero() {
  const pills = [
    { text: "Kubernetes", type: "light", icon: SiKubernetes },
    { text: "Python", type: "blue", icon: SiPython },
    { text: "GraphQL", type: "light", icon: SiGraphql },
    { text: "Docker", type: "light", icon: SiDocker },
    { text: "PostgreSQL", type: "light", icon: SiPostgresql },
    { text: "Go", type: "light", icon: SiGo },
    { text: "REST APIs", type: "blue", icon: FaServer },
    { text: "TypeScript", type: "light", icon: SiTypescript },
    { text: "CI/CD", type: "blue", icon: FaInfinity },
    { text: "Redis", type: "light", icon: SiRedis },
    { text: "AWS", type: "light", icon: SiAmazonwebservices },
    { text: "Microservices", type: "blue", icon: FaNetworkWired },
    { text: "Terraform", type: "light", icon: SiTerraform },
    { text: "React", type: "blue", icon: SiReact },
    { text: "MongoDB", type: "light", icon: SiMongodb },
    { text: "DevOps", type: "blue", icon: FaCogs },
  ];

  return (
    <div className="relative min-h-screen bg-blue-50 text-blue-950 font-sans overflow-hidden flex flex-col">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(48, 140, 230, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(48, 140, 230, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 mt-8 md:mt-0 mb-20 max-w-5xl mx-auto w-full gap-12 text-center">
        <div className="flex flex-col items-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-blue-950 drop-shadow-sm"
          >
            Technical content that drives traffic and adoption
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-blue-800/70 mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            We help developer-focused companies create high-quality content that
            educates technical buyers, supports evaluation, and compounds over
            time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Link
              href="https://calendar.app.google/z2hEK1wVLfEqbiuW9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200/50"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services/technical-content"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-900 rounded-full font-semibold text-lg hover:bg-white hover:border-blue-300 transition-all flex items-center justify-center shadow-sm"
            >
              Explore our services
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Bottom Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 bg-blue-900 text-blue-100 py-4 overflow-hidden mt-auto border-t-4 border-blue-800 flex"
      >
        <Marquee gradient={false} speed={40}>
          {pills.map((pill, i) => (
            <div
              key={i}
              className="flex items-center mx-6 gap-3 opacity-80 hover:opacity-100 transition-opacity"
            >
              <pill.icon
                className={`w-6 h-6 ${
                  pill.type === "blue" ? "text-blue-400" : "text-blue-300"
                }`}
              />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider text-blue-100">
                {pill.text}
              </span>
              <span className="text-blue-500/50 ml-6">✦</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
}

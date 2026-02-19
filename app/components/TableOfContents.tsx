"use client";

import React, { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";

interface TableOfContentsProps {
  headings: string[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  const generateId = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-100px 0px -60% 0px",
    });

    headings.forEach((heading) => {
      const id = generateId(heading);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header (approx 100px)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveId("");
  };

  return (
    <div className="sticky top-32 p-8 rounded-2xl bg-blue-50/50 border border-blue-100 backdrop-blur-sm">
      <h3 className="text-xs font-bold text-blue-900/40 uppercase tracking-widest mb-6 flex items-center gap-2">
        <Bookmark className="w-4 h-4" />
        Table of Contents
      </h3>
      <nav className="flex flex-col gap-4">
        {headings.map((heading, index) => {
          const id = generateId(heading);
          const isActive = activeId === id;

          return (
            <a
              key={index}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`text-sm transition-all flex items-start gap-3 group capitalize ${
                isActive
                  ? "text-blue-600 font-semibold translate-x-1"
                  : "text-blue-900/60 hover:text-blue-950 hover:translate-x-1"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors ${
                  isActive
                    ? "bg-blue-600"
                    : "bg-blue-200 group-hover:bg-blue-300"
                }`}
              />
              {heading}
            </a>
          );
        })}
        <a
          href="#"
          onClick={scrollToTop}
          className="text-sm text-blue-900/60 hover:text-blue-950 transition-all flex items-start gap-3 group hover:translate-x-1"
        >
          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-blue-200 group-hover:bg-blue-300 transition-colors" />
          Wrapping Up
        </a>
      </nav>
    </div>
  );
}

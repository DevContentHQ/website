"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Search, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./data";

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-blue-50 text-blue-950 font-sans selection:bg-blue-100">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-950 mb-6">
              Blogs
            </h1>
            <p className="text-xl text-blue-800/70 leading-relaxed max-w-2xl">
              Thoughts on developer marketing, technical content strategy, and
              building for engineering audiences.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-16 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Tags Widget */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === null
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-blue-600 hover:bg-blue-100 border border-blue-100"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "bg-white text-blue-600 hover:bg-blue-100 border border-blue-100"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search Widget */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-blue-100 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-blue-900 placeholder:text-blue-400 shadow-sm"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Content - Blog Grid */}
          <div className="w-full">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Reveal key={post.id} delay={index * 0.1}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block h-full"
                    >
                      <article className="bg-white rounded-3xl overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-blue-100/50">
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden bg-blue-100">
                          {/* Fallback if image fails or just use the placeholder div */}
                          {post.image && (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                            {post.tags[0]}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-sm text-blue-400 mb-3 font-medium">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h2 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-blue-900/60 leading-relaxed mb-6 line-clamp-3 flex-1">
                            {post.summary}
                          </p>
                          <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                            Read article &rarr;
                          </div>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-blue-100">
                <p className="text-xl text-blue-900/60">
                  No posts found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedTag(null);
                    setSearchQuery("");
                  }}
                  className="mt-4 text-blue-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "../data";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  // Read markdown file
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/blogs",
    post.fileName,
  );
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading markdown file for post ${slug}:`, error);
    return notFound();
  }

  const headings = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", ""));

  const generateId = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <div className="flex items-center justify-center gap-3 text-sm font-medium text-blue-900/60 mb-8 uppercase tracking-wide">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-blue-200"></span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-blue-950 mb-8 leading-[1.1]">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-blue-900/70 leading-relaxed mb-10 max-w-3xl mx-auto">
              {post.summary}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-900 border border-blue-100 hover:bg-blue-100 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ShareButtons title={post.title} />
          </div>

          <hr className="border-blue-100 max-w-7xl mx-auto mb-20" />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-1">
              <article className="max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-3xl font-bold text-blue-950 mb-8"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => {
                      const id = generateId(String(props.children));
                      return (
                        <h2
                          className="text-3xl md:text-4xl font-bold tracking-tight text-blue-950 mt-16 mb-8 leading-[1.1]"
                          id={id}
                          {...props}
                        />
                      );
                    },
                    h3: ({ node, ...props }) => {
                      const id = generateId(String(props.children));
                      return (
                        <h3
                          className="text-2xl md:text-3xl font-bold tracking-tight text-blue-950 mt-12 mb-6 leading-[1.1]"
                          id={id}
                          {...props}
                        />
                      );
                    },
                    h4: ({ node, ...props }) => (
                      <h4
                        className="text-xl font-bold text-blue-950 mt-8 mb-4"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-slate-700 leading-relaxed mb-8 text-lg"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="my-8 list-disc pl-8 marker:text-blue-600 space-y-2"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="my-8 list-decimal pl-8 marker:text-blue-600 space-y-2"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        className="text-slate-700 leading-relaxed pl-2"
                        {...props}
                      />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-blue-600 font-semibold no-underline hover:text-blue-700 hover:underline transition-colors"
                        {...props}
                      />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="border-l-4 border-blue-600 bg-blue-50 px-8 py-8 my-12 not-italic rounded-r-xl text-blue-900 font-medium shadow-sm text-xl leading-relaxed"
                        {...props}
                      />
                    ),
                    code: ({
                      node,
                      className,
                      ...props
                    }: React.ComponentPropsWithoutRef<"code"> & {
                      node?: unknown;
                    }) => {
                      const isInline =
                        !className && !String(props.children).includes("\n");
                      return isInline ? (
                        <code
                          className="text-blue-700 bg-blue-50 px-2 py-1 rounded-md font-mono font-medium text-[0.9em]"
                          {...props}
                        />
                      ) : (
                        <code className="block font-mono text-sm" {...props} />
                      );
                    },
                    pre: ({ node, ...props }) => (
                      <pre
                        className="bg-blue-950 shadow-2xl rounded-2xl border border-blue-900 p-6 my-12 overflow-x-auto text-blue-50"
                        {...props}
                      />
                    ),
                    img: ({ node, ...props }) => (
                      <img
                        className="rounded-2xl shadow-lg my-12 w-full border border-blue-100"
                        {...props}
                      />
                    ),
                    hr: ({ node, ...props }) => (
                      <hr className="border-blue-100 my-16" {...props} />
                    ),
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-12 rounded-xl border border-blue-100 shadow-sm">
                        <table
                          className="w-full text-left border-collapse"
                          {...props}
                        />
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead
                        className="bg-blue-50 border-b border-blue-100"
                        {...props}
                      />
                    ),
                    th: ({ node, ...props }) => (
                      <th
                        className="px-6 py-4 font-semibold text-blue-950 text-sm uppercase tracking-wider"
                        {...props}
                      />
                    ),
                    td: ({ node, ...props }) => (
                      <td
                        className="px-6 py-4 border-b border-blue-50 text-slate-700 last:border-0"
                        {...props}
                      />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </article>
            </div>

            {/* Sticky Sidebar (Table of Contents) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

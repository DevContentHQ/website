import {
  LucideIcon,
  FileText,
  PenTool,
  RefreshCw,
  Scale,
  Share2,
  Users,
  Layers,
  Map,
  Settings,
  Target,
  MessageSquare,
  Calendar,
  TrendingUp,
  Search,
  Compass,
  AlignLeft,
  Bot,
  History,
} from "lucide-react";

export interface ServiceContent {
  slug: string;
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  problem: {
    title: string;
    description: string;
    items: string[];
    summary: string;
  };
  solution: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      subDescription?: string;
      formats: string[];
      icon: LucideIcon;
    }[];
  };
}

export const servicesData: Record<string, ServiceContent> = {
  "technical-content": {
    slug: "technical-content",
    hero: {
      title: "Technical Content Production for Developer Teams",
      description:
        "We help developer-focused companies publish accurate, credible technical content without pulling engineers away from product work. Our content is written with engineers, reviewed for technical accuracy, and designed to build trust with developers over time—not chase short-term traffic spikes.",
      cta: "Book a Discovery Call",
    },
    problem: {
      title: "Why technical content fails for most teams",
      description:
        "Most developer content doesn’t fail because of effort—it fails because of incentives and constraints.",
      items: [
        "Content written by non-practitioners who don’t deeply understand the tools",
        "Engineers who want to help, but don’t have time to write consistently",
        "Blog posts optimized for SEO keywords, not developer trust",
        "Content that goes stale as versions, APIs, and best practices change",
        "A publishing cadence that starts strong and quietly dies",
      ],
      summary: "The result: content that exists, but doesn’t compound.",
    },
    solution: {
      title: "What we produce",
      description:
        "We produce a focused set of technical content designed to help developers understand workflows, evaluate tradeoffs, and trust your product over time. Every piece prioritizes accuracy, clarity, and long-term usefulness.",
      items: [
        {
          title: "Technical guides and explainers",
          description:
            "Our technical guides help developers understand how your solution fits into their real-world workflows. We create practical, implementation-focused guides that demonstrate how a tool is used in context and how to apply it effectively to solve a problem.",
          subDescription:
            "These guides are written for developers who want clear answers and usable examples that can be implemented in a production environment.",
          formats: [
            "Step-by-step tutorials and walkthroughs",
            "Setup, configuration, and integration guides",
            "Product and architecture explainers grounded in real workflows",
            "Problem–solution articles for common developer pain points",
          ],
          icon: FileText,
        },
        {
          title: "Thought leadership",
          description:
            "Thought leadership helps shape how developers and technical decision-makers think about your industry and where your product fits.",
          subDescription:
            "We create technically grounded opinion pieces that explore industry trends, architectural tradeoffs, and lessons learned from real-world experience. These pieces are often ghostwritten for founders, engineers, or technical leaders, and are written to sound like the people behind the product.",
          formats: [
            "Opinion pieces and essays",
            "Architecture and design perspective articles",
            "“Lessons learned” and experience-based posts",
          ],
          icon: PenTool,
        },
        {
          title: "Content refreshes and updates",
          description:
            "We don’t treat publishing as a one-and-done activity. For content we create, we plan for ongoing updates and refreshes to keep it accurate and useful over time. Refreshing existing content often delivers faster results than net-new posts, while requiring significantly less effort.",
          subDescription: "Our refresh work typically includes:",
          formats: [
            "Updating examples, APIs, and assumptions as products and tools evolve",
            "Revising workflows to reflect current best practices",
            "Improving structure and clarity as content ages",
            "Keeping high-performing content relevant as developer expectations change",
          ],
          icon: RefreshCw,
        },
        {
          title: "Product comparisons",
          description:
            "Product comparisons are marketing content, but they still need to respect how developers evaluate tools. We help you create comparison content that supports your positioning while remaining technically accurate and fair.",
          subDescription:
            "These pieces are designed to help developers understand tradeoffs, how different solutions fit into real workflows, and why your product makes sense in specific contexts without resorting to misleading claims or shallow feature checklists.",
          formats: [
            "Positioning-driven comparisons grounded in real workflows",
            "“When to choose X vs Y” decision guides",
            "Side-by-side evaluations focused on practical differences",
            "Comparisons that acknowledge limitations as well as strengths",
          ],
          icon: Scale,
        },
        {
          title: "Distribution posts for social media",
          description:
            "Content distribution posts extend the reach of technical content across channels where developers already spend time.",
          subDescription:
            "We create short-form social posts derived from longer technical pieces highlighting key ideas, workflows, or takeaways in a way that’s accurate and respectful of a developer audience. These posts are designed to support distribution and discovery and may include:",
          formats: [
            "Technical summaries and takeaways",
            "Workflow-focused posts derived from guides or comparisons",
            "Code snippets or excerpts adapted for social channels",
            "Announcement posts for newly published content",
          ],
          icon: Share2,
        },
      ],
    },
  },
  "content-strategy": {
    slug: "content-strategy",
    hero: {
      title: "Content Strategy for Developer Marketing",
      description:
        "We help developer-focused teams design content strategies that support real business goals—without guessing, chasing trends, or publishing content that goes nowhere. Our approach connects developer needs, product context, and long-term outcomes into a strategy your team can actually execute.",
      cta: "Book a Discovery Call",
    },
    problem: {
      title: "How strategy supports production",
      description:
        "Content strategy isn’t separate from execution—it’s what makes execution effective. A clear strategy helps you:",
      items: [
        "Produce content that fits together instead of competing with itself",
        "Reuse and refresh high-value content instead of starting from scratch",
        "Align content, product, and marketing teams around shared goals",
        "Build a content program that compounds over time",
      ],
      summary:
        "Many teams engage us for strategy first, then move into content production with a clear plan in place.",
    },
    solution: {
      title: "Our approach to content strategy",
      description:
        "We treat content strategy as a planning discipline, not a deck or a one-time exercise. Our goal is to give your team a clear, defensible plan for what to publish, how it supports developers, and how it ties back to your business over time.",
      items: [
        {
          title: "Audience & context alignment",
          description:
            "We clarify who you’re writing for, what problems they’re trying to solve, and how your product fits into their workflows. The goal is to ground the strategy in how developers actually evaluate and use your product.",
          formats: [
            "A clear description of your target developer audience and workflows",
          ],
          icon: Users,
        },
        {
          title: "Content pillars & priorities",
          description:
            "We define a small set of content themes that align with your product, audience needs, and positioning—so you’re not trying to cover everything at once. These pillars become the foundation for consistent, recognizable content over time.",
          formats: ["Defined content pillars and priorities"],
          icon: Layers,
        },
        {
          title: "Topic planning & roadmap",
          description:
            "We create a prioritized content roadmap that balances short-term wins with long-term value, including guidance on cadence and sequencing. A content calendar is provided as part of our engagement.",
          formats: ["A practical, prioritized content roadmap and calendar"],
          icon: Map,
        },
        {
          title: "Workflow & maintenance planning",
          description:
            "We plan not just what to publish, but how content gets reviewed, updated, and refreshed as products and ecosystems change.",
          formats: [
            "Guidance on content types, cadence, and maintenance",
            "A strategy your team can execute internally or with us",
          ],
          icon: Settings,
        },
      ],
    },
  },
  "content-distribution": {
    slug: "content-distribution",
    hero: {
      title: "Content Distribution for Developer Marketing",
      description:
        "Publishing technical content is only half the work. Content distribution ensures that the right people discover it—without distorting or oversimplifying the message. We help developer-focused teams distribute technical content in ways that respect developer expectations while increasing reach, engagement, and long-term visibility.",
      cta: "Book a Discovery Call",
    },
    problem: {
      title: "Why content distribution fails for developer teams",
      description:
        "Most content distribution breaks down for one of two reasons: It’s treated as an afterthought once content is published, or it relies on generic social tactics that don’t work for technical audiences.",
      items: [
        "High-quality content that never reaches its intended audience",
        "Social posts that oversimplify or misrepresent technical work",
        "Distribution plans disconnected from developer workflows",
        "One-off promotion instead of repeatable systems",
        "No plan for resurfacing or reusing evergreen content",
      ],
      summary: "The result: strong content with limited impact.",
    },
    solution: {
      title: "Our content distribution process",
      description:
        "We treat distribution as a supporting system for technical content, not a growth-hack exercise. Our goal is to extend the life and reach of your content while preserving accuracy, context, and credibility.",
      items: [
        {
          title: "Channel & audience alignment",
          description:
            "We identify where your target developers are most likely to discover and engage with content. The goal is focus, not spreading content everywhere.",
          formats: [
            "Relevant social and community channels",
            "How developers typically encounter content in your space",
            "Which channels support awareness vs deeper engagement",
          ],
          icon: Target,
        },
        {
          title: "Content extraction & adaptation",
          description:
            "We derive distribution assets directly from existing long-form content. Everything is adapted carefully to preserve technical meaning.",
          formats: [
            "Key takeaways and summaries",
            "Workflow-focused excerpts",
            "Quotes, snippets, or examples",
            "Announcement-style posts for new content",
          ],
          icon: MessageSquare,
        },
        {
          title: "Distribution planning & cadence",
          description:
            "We define a realistic plan for publishing and resurfacing content. Distribution becomes repeatable instead of reactive.",
          formats: [
            "Guidance on posting cadence",
            "Recommendations for sequencing and reuse",
            "Plans for re-sharing evergreen content over time",
          ],
          icon: Calendar,
        },
        {
          title: "Iteration & refinement",
          description:
            "We pay attention to what resonates and adjust accordingly without chasing vanity metrics. Distribution evolves based on actual performance.",
          formats: [
            "Engagement patterns",
            "Content type performance",
            "Audience response",
          ],
          icon: TrendingUp,
        },
      ],
    },
  },
  "technical-seo": {
    slug: "technical-seo",
    hero: {
      title: "Technical SEO & GEO for Developer Content",
      description:
        "We help developer-focused teams improve the discoverability of technical content across traditional search (SEO) and AI-driven discovery (GEO) without compromising accuracy, depth, or developer trust.",
      cta: "Book a Discovery Call",
    },
    problem: {
      title: "Why discoverability breaks down for technical content",
      description:
        "Developer content has unique challenges that traditional SEO approaches often miss.",
      items: [
        "SEO tactics that conflict with technical accuracy",
        "Content written for keywords instead of developer intent",
        "Documentation and blog content that search engines struggle to understand",
        "High-quality content that performs poorly in AI-assisted discovery",
        "No plan for keeping content discoverable as tools and models evolve",
      ],
      summary:
        "The result is content that may be technically strong but struggles to rank well.",
    },
    solution: {
      title: "Our Technical SEO & GEO process",
      description:
        "We treat discoverability as a technical problem, not a checklist. Our approach balances how developers search and evaluate tools, how search engines and AI systems interpret technical content, and the need for clarity, structure, and context.",
      items: [
        {
          title: "Technical content audit",
          description:
            "We review existing content to understand how it’s currently being interpreted.",
          formats: [
            "Content structure and hierarchy",
            "Internal linking and contextual signals",
            "Technical clarity and ambiguity",
            "Opportunities to improve discoverability without rewriting from scratch",
          ],
          icon: Search,
        },
        {
          title: "Intent and workflow alignment",
          description: "We align content with real developer intent.",
          formats: [
            "Mapping queries to developer workflows and use cases",
            "Identifying where content answers questions incompletely or unclearly",
            "Clarifying terminology and assumptions for both humans and machines",
          ],
          icon: Compass,
        },
        {
          title: "Structure and clarity improvements",
          description: "We improve how content is structured and presented.",
          formats: [
            "Refining headings and section hierarchy",
            "Improving summaries, introductions, and conclusions",
            "Making workflows, tradeoffs, and decisions more explicit",
            "Reducing ambiguity that confuses search engines or AI systems",
          ],
          icon: AlignLeft,
        },
        {
          title: "GEO-focused optimization",
          description:
            "We optimize content for AI-assisted discovery and retrieval.",
          formats: [
            "Making content easier for LLMs to parse and summarize",
            "Clarifying relationships between concepts",
            "Improving consistency across related content",
            "Supporting accurate citation and reuse in AI-generated responses",
          ],
          icon: Bot,
        },
        {
          title: "Ongoing iteration and maintenance",
          description: "Discoverability isn’t static.",
          formats: [
            "Re-evaluating content as products and ecosystems change",
            "Updating content to maintain visibility over time",
            "Aligning SEO and GEO efforts with content refresh cycles",
          ],
          icon: History,
        },
      ],
    },
  },
};

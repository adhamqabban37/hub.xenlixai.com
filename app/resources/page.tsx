import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Lightbulb,
  FileText,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — AI Guides, Learning Materials & Documentation",
  description:
    "Access XenlixAI resources: AI learning guides, platform documentation, technology insights, and educational materials about artificial intelligence and automation.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources — XenlixAI",
    description:
      "AI learning guides, platform documentation, and educational materials about artificial intelligence and automation.",
    url: "https://hub.xenlixai.com/resources",
  },
};

const resources = [
  {
    category: "Learning & Education",
    icon: <BookOpen size={24} className="text-cyan-400" />,
    items: [
      {
        title: "Introduction to AI for Business",
        description:
          "An overview of how artificial intelligence is transforming business operations, from customer service automation to data-driven decision making.",
        type: "Guide",
      },
      {
        title: "Understanding Machine Learning",
        description:
          "A foundational guide to machine learning concepts, including supervised learning, unsupervised learning, and neural networks.",
        type: "Guide",
      },
      {
        title: "XAI Learn Platform",
        description:
          "Interactive educational environment for exploring AI and machine learning through hands-on demonstrations and experiments.",
        type: "Platform",
        link: "https://xailearn.onrender.com/",
      },
    ],
  },
  {
    category: "AI Tools & Automation",
    icon: <Lightbulb size={24} className="text-blue-400" />,
    items: [
      {
        title: "How AI Chatbots Work",
        description:
          "A step-by-step explanation of natural language processing, intent recognition, and response generation in modern AI chatbot systems.",
        type: "Article",
      },
      {
        title: "Voice AI Technology Explained",
        description:
          "Understanding the technology behind AI voice agents: speech recognition, context engines, and natural voice synthesis.",
        type: "Article",
      },
      {
        title: "Autonomous AI Agents Guide",
        description:
          "How autonomous agents browse, analyze, and execute complex tasks — from research automation to report generation.",
        type: "Article",
      },
    ],
  },
  {
    category: "Platform Documentation",
    icon: <FileText size={24} className="text-orange-400" />,
    items: [
      {
        title: "XenlixAI Core Documentation",
        description:
          "Technical documentation for the XenlixAI Core platform — website analysis methodology, scoring systems, and insight generation.",
        type: "Documentation",
        link: "https://www.xenlixai.com/",
      },
      {
        title: "XenlixAI Agency Overview",
        description:
          "Platform overview and feature guide for XenlixAI Agency — marketing automation, digital performance, and workflow tools.",
        type: "Documentation",
        link: "https://agency.xenlixai.com/",
      },
      {
        title: "Ecosystem Architecture",
        description:
          "Technical overview of how XenlixAI platforms connect, communicate, and operate within the broader technology ecosystem.",
        type: "Documentation",
      },
    ],
  },
];

const glossary = [
  {
    term: "Artificial Intelligence (AI)",
    definition:
      "Technology that enables machines to simulate human intelligence, including learning, reasoning, perception, and decision-making.",
  },
  {
    term: "Natural Language Processing (NLP)",
    definition:
      "A branch of AI that enables computers to understand, interpret, and generate human language in text and speech.",
  },
  {
    term: "Machine Learning (ML)",
    definition:
      "A subset of AI where systems learn and improve from experience and data without being explicitly programmed for every scenario.",
  },
  {
    term: "Neural Network",
    definition:
      "A computing system inspired by biological neural networks that processes information through interconnected layers of nodes.",
  },
  {
    term: "Automation",
    definition:
      "The use of technology to perform tasks with minimal human intervention, often powered by AI for intelligent decision-making.",
  },
  {
    term: "Voice Synthesis",
    definition:
      "The artificial production of human speech using AI to convert text or intent into natural-sounding spoken language.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] mb-4 text-center">
          Knowledge Base
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-center italic tracking-tighter uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Resources
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed font-medium">
          Access guides, documentation, and educational materials to deepen your
          understanding of artificial intelligence, automation technology, and
          the XenlixAI platform ecosystem.
        </p>
      </section>

      {/* Resource Categories */}
      {resources.map((category, idx) => (
        <section
          key={idx}
          className={`py-16 ${idx % 2 === 0 ? "bg-[#030306]" : ""} ${idx < resources.length - 1 ? "border-b border-white/5" : ""}`}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-10">
              {category.icon}
              <h2 className="text-2xl font-black italic tracking-tight uppercase">
                {category.category}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <article
                  key={i}
                  className="p-6 rounded-2xl bg-[#050508] border border-white/10 hover:border-white/20 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-cyan-400 border border-cyan-400/20 bg-cyan-400/5">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Visit Resource <ArrowUpRight size={14} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* AI Glossary */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
          AI Glossary
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {glossary.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#050508] border border-white/10"
            >
              <dt className="font-bold mb-2">{item.term}</dt>
              <dd className="text-gray-500 text-sm leading-relaxed">
                {item.definition}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase mb-6">
          Explore the Ecosystem
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/platforms"
            className="group px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(6,182,212,0.4)]"
          >
            View Platforms
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/ai-tools"
            className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-gray-300"
          >
            Explore AI Tools
          </Link>
        </div>
      </section>
    </div>
  );
}

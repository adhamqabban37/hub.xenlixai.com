import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Zap,
  Database,
  Globe,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology — AI Architecture, Machine Learning & Neural Systems",
  description:
    "Learn about XenlixAI's technology stack: neural systems architecture, AI automation engines, data flow pipelines, and the digital ecosystem powering intelligent platforms.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology — XenlixAI",
    description:
      "Neural systems, AI engines, data pipelines, and the architecture behind XenlixAI intelligent platforms.",
    url: "https://hub.xenlixai.com/technology",
  },
};

const techPillars = [
  {
    label: "Neural Systems",
    value: "Circuit-Level AI",
    description:
      "Our neural systems architecture processes complex data patterns using advanced machine learning models. Built for speed and accuracy, these systems form the core intelligence layer behind every XenlixAI platform — enabling real-time analysis, pattern recognition, and intelligent decision-making.",
    capabilities: [
      "Deep learning model architecture",
      "Real-time pattern recognition",
      "Adaptive neural network training",
      "High-throughput inference engines",
    ],
    icon: <Cpu size={28} className="text-cyan-400" />,
  },
  {
    label: "Automation Engines",
    value: "Fluid Intelligence",
    description:
      "XenlixAI automation engines transform manual workflows into seamless intelligent processes. Using AI-driven decision trees, conditional logic, and natural language understanding, these engines handle repetitive tasks, route information, and execute complex multi-step operations without human intervention.",
    capabilities: [
      "AI-powered workflow automation",
      "Natural language processing pipelines",
      "Intelligent task routing and execution",
      "Conditional logic and decision trees",
    ],
    icon: <Zap size={28} className="text-blue-500" />,
  },
  {
    label: "Data Flow Systems",
    value: "Infinite Node Analysis",
    description:
      "Our data flow infrastructure handles the ingestion, processing, and analysis of information at scale. Designed for reliability and performance, these systems ensure that every AI decision is based on accurate, timely, and structured data — from initial collection through to actionable insights.",
    capabilities: [
      "Scalable data ingestion pipelines",
      "Real-time data processing",
      "Structured analytics and reporting",
      "Cross-platform data integration",
    ],
    icon: <Database size={28} className="text-indigo-500" />,
  },
  {
    label: "Ecosystem Architecture",
    value: "Digital Synapse Network",
    description:
      "The XenlixAI ecosystem is built on a modular architecture where each platform, tool, and service connects through standardized interfaces. This approach enables rapid development, seamless integration, and the ability to evolve individual components without disrupting the broader system.",
    capabilities: [
      "Modular microservice architecture",
      "Standardized API interfaces",
      "Cross-platform communication protocols",
      "Scalable cloud infrastructure",
    ],
    icon: <Globe size={28} className="text-orange-500" />,
  },
];

const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      "Natural Language Processing (NLP)",
      "Speech Recognition & Synthesis",
      "Deep Learning & Neural Networks",
      "Computer Vision",
      "Reinforcement Learning",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Cloud-native architecture",
      "Edge computing capabilities",
      "High-availability systems",
      "Auto-scaling infrastructure",
      "Global CDN distribution",
    ],
  },
  {
    category: "Integration",
    items: [
      "RESTful & GraphQL APIs",
      "Webhook event systems",
      "CRM & helpdesk connectors",
      "VoIP & telephony integration",
      "Third-party platform bridges",
    ],
  },
  {
    category: "Security",
    items: [
      "End-to-end encryption",
      "Data privacy compliance",
      "Role-based access control",
      "Audit logging",
      "Regular security assessments",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] mb-4 text-center">
          Technical Foundation
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-center italic tracking-tighter uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Technology
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed font-medium">
          XenlixAI is built on a foundation of advanced artificial intelligence,
          scalable infrastructure, and modular architecture. Our technology
          stack powers every platform, tool, and service in the ecosystem —
          designed for performance, reliability, and continuous evolution.
        </p>
      </section>

      {/* Core Pillars */}
      <section className="container mx-auto px-6 mb-32">
        <h2 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em] mb-10 text-center">
          Core Technology Pillars
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {techPillars.map((pillar, idx) => (
            <article
              key={idx}
              className="group p-8 md:p-10 rounded-[24px] bg-[#050508] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="drop-shadow-[0_0_8px_currentColor]">
                  {pillar.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase">
                    {pillar.label}
                  </p>
                  <h3 className="text-xl font-bold tracking-tight">
                    {pillar.value}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-[#030306] border-y border-white/5 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
            Technology Stack
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {techStack.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase mb-6">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-gray-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
          Architecture Principles
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: <Shield size={24} className="text-cyan-400" />,
              title: "Security First",
              desc: "Every system is designed with end-to-end encryption, data privacy compliance, and regular security audits.",
            },
            {
              icon: <Layers size={24} className="text-blue-400" />,
              title: "Modular Design",
              desc: "Components are built as independent modules that can be updated, replaced, or scaled without system disruption.",
            },
            {
              icon: <Zap size={24} className="text-orange-400" />,
              title: "Performance Optimized",
              desc: "Infrastructure is optimized for low-latency responses, high throughput, and consistent reliability under load.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#050508] border border-white/10 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase mb-6">
          Explore What We Build
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

import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Layers,
  Zap,
  Shield,
  Lightbulb,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Platforms — Intelligent Tools & Digital Ecosystems",
  description:
    "Explore the XenlixAI platform ecosystem: AI-powered website analysis, marketing automation, productivity tools, and machine learning education platforms.",
  alternates: { canonical: "/platforms" },
  openGraph: {
    title: "AI Platforms — XenlixAI Ecosystem",
    description:
      "Discover AI-powered platforms for website analysis, marketing automation, productivity, and machine learning education.",
    url: "https://hub.xenlixai.com/platforms",
  },
};

const platforms = [
  {
    name: "XenlixAI Core",
    link: "https://www.xenlixai.com/",
    status: "Active",
    description:
      "The flagship intelligence engine — AI-powered website analysis and actionable digital insights.",
    details:
      "XenlixAI Core evaluates websites across structural performance, content quality, search optimization signals, and digital visibility. By combining automated analysis with AI-driven interpretation, it helps individuals and organizations understand how their platforms perform within modern search environments and emerging AI-driven discovery systems.",
    capabilities: [
      "AI-powered website analysis",
      "Structured insight generation",
      "Digital performance evaluation",
      "Intelligent optimization recommendations",
    ],
    useCases: [
      "Website SEO audit and optimization",
      "Content quality assessment",
      "Digital visibility benchmarking",
      "Performance monitoring for web properties",
    ],
    color: "from-cyan-400 to-blue-600",
    icon: <Activity size={22} />,
  },
  {
    name: "XenlixAI Agency",
    link: "https://agency.xenlixai.com/",
    status: "Active",
    description:
      "AI-powered tools for modern digital marketing, automation, and strategic growth.",
    details:
      "XenlixAI Agency provides intelligent tools aimed at improving marketing operations and digital strategy. The platform helps businesses automate repetitive tasks, streamline campaign analysis, and make informed decisions through AI-assisted insights — designed for entrepreneurs, agencies, and organizations seeking to scale their workflows.",
    capabilities: [
      "Marketing automation",
      "Digital performance insights",
      "Workflow optimization",
      "AI-assisted strategy support",
    ],
    useCases: [
      "Automated marketing campaign management",
      "Social media strategy optimization",
      "Lead generation and qualification",
      "Agency workflow automation",
    ],
    color: "from-blue-600 to-indigo-600",
    icon: <Layers size={22} />,
  },
  {
    name: "Still Time",
    link: "https://still-time-website.vercel.app/",
    status: "Active",
    description:
      "A productivity platform built to enhance focus, organization, and cognitive efficiency.",
    details:
      "Still Time helps users structure their time and maintain productivity through clarity and simplicity. Built around the idea that effective tools should reduce friction rather than create complexity, the streamlined interface and thoughtful task features help users maintain control of their schedules and workflows.",
    capabilities: [
      "Task organization",
      "Structured time management",
      "Focus-oriented productivity tools",
      "Simplified workflow planning",
    ],
    useCases: [
      "Personal productivity management",
      "Team task coordination",
      "Daily schedule optimization",
      "Focus session tracking",
    ],
    color: "from-indigo-600 to-orange-500",
    icon: <Zap size={22} />,
  },
  {
    name: "NPlusPro",
    link: "https://npluspro.vercel.app/",
    status: "Experimental",
    description:
      "Improving digital workflows and productivity systems through flexible experimentation.",
    details:
      "NPlusPro focuses on building tools that enhance how individuals interact with digital workflows. Rather than targeting a single task, it serves as a flexible environment for experimentation with productivity frameworks, optimization strategies, and digital resource management.",
    capabilities: [
      "Digital workflow optimization",
      "Productivity framework experimentation",
      "Resource organization tools",
      "Systemized task management",
    ],
    useCases: [
      "Workflow efficiency testing",
      "Productivity method experimentation",
      "Digital resource management",
      "Organizational tool prototyping",
    ],
    color: "from-orange-500 to-red-600",
    icon: <Shield size={22} />,
  },
  {
    name: "XAI Learn",
    link: "https://xailearn.onrender.com/",
    status: "Active",
    description:
      "An educational initiative exploring artificial intelligence and machine learning.",
    details:
      "XAI Learn serves as a learning and experimentation environment dedicated to understanding modern AI systems. Through educational resources, demonstrations, and exploratory tools, it encourages curiosity and practical application of machine learning — designed for learners, developers, and anyone interested in AI.",
    capabilities: [
      "Artificial intelligence education",
      "Machine learning exploration",
      "Interactive learning tools",
      "Experimental AI demonstrations",
    ],
    useCases: [
      "AI and machine learning education",
      "Hands-on ML experimentation",
      "Developer skill development",
      "AI concept visualization",
    ],
    color: "from-red-500 to-pink-600",
    icon: <Lightbulb size={22} />,
  },
];

const faqItems = [
  {
    question: "What platforms does XenlixAI offer?",
    answer:
      "XenlixAI offers five core platforms: XenlixAI Core for AI-powered website analysis, XenlixAI Agency for marketing automation, Still Time for productivity management, NPlusPro for workflow optimization, and XAI Learn for AI education and machine learning exploration.",
  },
  {
    question: "Are XenlixAI platforms free to use?",
    answer:
      "Each platform operates independently with its own access model. Visit the individual platform pages for specific details on availability and features.",
  },
  {
    question: "How do the platforms work together?",
    answer:
      "While each platform operates independently, they are part of a broader XenlixAI ecosystem designed to cover different aspects of artificial intelligence, digital productivity, and technological innovation.",
  },
  {
    question: "Who can benefit from XenlixAI platforms?",
    answer:
      "XenlixAI platforms serve entrepreneurs, businesses, agencies, developers, learners, and anyone looking to leverage AI for productivity, marketing, education, or digital performance improvement.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function PlatformsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen pt-32 pb-20 relative">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] mb-4 text-center">
            Ecosystem Overview
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-center italic tracking-tighter uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            AI Platforms
          </h1>
          <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed font-medium">
            The XenlixAI ecosystem is composed of multiple platforms designed to
            explore different aspects of artificial intelligence, digital
            productivity, and technological innovation. Each system operates
            independently while contributing to a broader vision of building
            intelligent tools that enhance how individuals and organizations
            interact with technology.
          </p>
        </section>

        {/* Platforms Grid */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => (
              <article
                key={idx}
                className="group relative rounded-[24px] p-8 md:p-10 bg-[#050508] border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col overflow-hidden shadow-2xl"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`}
                />

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-[20px] bg-gradient-to-br ${platform.color} flex items-center justify-center text-white shadow-xl shadow-black`}
                  >
                    {platform.icon}
                  </div>
                  <span
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest border ${
                      platform.status === "Experimental"
                        ? "text-purple-400 border-purple-400/20 bg-purple-400/5"
                        : "text-cyan-400 border-cyan-400/20 bg-cyan-400/5"
                    }`}
                  >
                    {platform.status}
                  </span>
                </div>

                <h2 className="text-2xl font-black mb-3 italic tracking-tight relative z-10 uppercase">
                  {platform.name}
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-4 relative z-10 font-medium">
                  {platform.description}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                  {platform.details}
                </p>

                <div className="mb-6 relative z-10">
                  <h3 className="text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase mb-3">
                    Key Capabilities
                  </h3>
                  <ul className="space-y-2">
                    {platform.capabilities.map((cap, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.color} shrink-0`}
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 relative z-10">
                  <h3 className="text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase mb-3">
                    Use Cases
                  </h3>
                  <ul className="space-y-2">
                    {platform.useCases.map((uc, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-500"
                      >
                        <span className="text-cyan-500">•</span>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto relative z-10">
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/10 transition-all font-black text-xs uppercase tracking-[0.3em]"
                  >
                    Visit Platform
                    <ArrowUpRight
                      size={18}
                      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform text-cyan-400"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#050508] border border-white/10"
              >
                <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase mb-6">
            Ready to Explore?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg mb-10 font-medium">
            Discover how intelligent platforms can transform your workflow and
            business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/ai-tools"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(6,182,212,0.4)]"
            >
              Explore AI Tools
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-gray-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About XenlixAI — AI Technology Ecosystem by QAB Global LLC",
  description:
    "Learn about XenlixAI, an artificial intelligence technology ecosystem developed by QAB Global LLC. Our mission is to make enterprise-grade AI accessible to every business.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About XenlixAI — AI Technology Ecosystem",
    description:
      "Our mission is to make enterprise-grade AI accessible to every business through intelligent platforms and automation systems.",
    url: "https://hub.xenlixai.com/about",
  },
};

const milestones = [
  {
    phase: "Foundation",
    description:
      "XenlixAI began as a vision to build accessible AI-powered tools that bridge the gap between enterprise-grade technology and everyday business needs.",
  },
  {
    phase: "Core Platform",
    description:
      "Development of XenlixAI Core — the flagship AI-powered website analysis engine that evaluates digital performance and generates actionable insights.",
  },
  {
    phase: "Ecosystem Expansion",
    description:
      "Launch of XenlixAI Agency, Still Time, NPlusPro, and XAI Learn — expanding the ecosystem across marketing automation, productivity, workflow optimization, and AI education.",
  },
  {
    phase: "AI Tools Suite",
    description:
      "Introduction of business-focused AI tools including intelligent chatbots, voice agents, and autonomous AI agents for enterprise automation.",
  },
  {
    phase: "Continuous Innovation",
    description:
      "Ongoing development of new AI capabilities, platform improvements, and expanded integrations across the XenlixAI technology ecosystem.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We build technology that pushes boundaries, creating AI systems that don't just automate tasks but fundamentally improve how businesses operate.",
  },
  {
    title: "Accessibility",
    description:
      "Enterprise-grade AI should be available to every business, regardless of size. Our tools are designed to be powerful yet approachable.",
  },
  {
    title: "Integrity",
    description:
      "We build transparent, reliable systems. Every AI decision is traceable, every recommendation is evidence-based, and every system is secure.",
  },
  {
    title: "Impact",
    description:
      "We measure success by the tangible improvements our technology creates — saved time, better decisions, stronger customer relationships.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.6em] mb-4 text-center">
          Our Identity
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-center italic tracking-tighter uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          About XenlixAI
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed font-medium">
          XenlixAI is an artificial intelligence technology ecosystem that
          develops AI-powered tools, automation systems, and digital platforms.
          Operated and developed by QAB Global LLC, our mission is to make
          enterprise-grade AI accessible to every business.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#030306] border-y border-white/5 mb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full max-w-sm mx-auto aspect-square border border-white/10 rounded-[40px] p-4 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-orange-500/20" />
                <div className="w-full h-full border border-white/10 rounded-[36px] flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="XenlixAI Logo"
                    width={180}
                    height={180}
                    className="object-contain opacity-60 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 font-black">
                    M
                  </div>
                  <div>
                    <h2 className="font-black text-lg uppercase tracking-wide mb-3">
                      Our Mission
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      To put the power of enterprise-grade AI into the hands of
                      every business — no matter the size. We build systems that
                      replace complexity with clarity, turning months of manual
                      work into seconds of intelligent execution.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center text-orange-400 font-black">
                    V
                  </div>
                  <div>
                    <h2 className="font-black text-lg uppercase tracking-wide mb-3">
                      Our Vision
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      A future where AI isn&apos;t a luxury — it&apos;s
                      infrastructure. We&apos;re building the neural backbone of
                      tomorrow&apos;s industries — where every customer
                      interaction, every decision, and every workflow is
                      amplified by intelligence that never sleeps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
          Our Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#050508] border border-white/10"
            >
              <h3 className="font-bold text-lg mb-3">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-[#030306] border-y border-white/5 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-black text-white shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-[1px] flex-1 bg-white/10 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-lg mb-2">{milestone.phase}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[24px] bg-[#050508] border border-white/10">
          <h2 className="text-2xl font-black italic tracking-tighter uppercase mb-6">
            Company Information
          </h2>
          <div className="space-y-4 text-gray-400">
            <div className="flex gap-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase w-32 shrink-0 pt-1">
                Brand
              </span>
              <span>XenlixAI</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase w-32 shrink-0 pt-1">
                Operated By
              </span>
              <span>QAB Global LLC</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase w-32 shrink-0 pt-1">
                Focus
              </span>
              <span>
                Artificial Intelligence, Automation, Digital Platforms
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase w-32 shrink-0 pt-1">
                Website
              </span>
              <a
                href="https://hub.xenlixai.com"
                className="text-cyan-400 hover:underline"
              >
                hub.xenlixai.com
              </a>
            </div>
            <div className="flex gap-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase w-32 shrink-0 pt-1">
                Contact
              </span>
              <a
                href="mailto:support@xenlixai.com"
                className="text-cyan-400 hover:underline"
              >
                support@xenlixai.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase mb-6">
          Explore Our Ecosystem
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
            href="/technology"
            className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-gray-300"
          >
            Our Technology
          </Link>
        </div>
      </section>
    </div>
  );
}

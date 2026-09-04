import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Workflow, MessageSquare, Mic, Database, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Consulting — Strategy, Automation and Deployment",
  description:
    "XenlixAI consulting turns AI ambition into working systems. We audit your workflows, design the right automation architecture, and deploy chatbots, voice agents and AI-powered tools that pay for themselves.",
  alternates: { canonical: "/consulting" },
  openGraph: {
    title: "AI Consulting — XenlixAI",
    description:
      "From AI readiness audits to production deployment of chatbots, voice agents and workflow automation — XenlixAI consulting builds AI that works for your business.",
    url: "https://hub.xenlixai.com/consulting",
  },
};

const services = [
  {
    icon: BrainCircuit,
    title: "AI Strategy & Readiness Audit",
    description:
      "We map your operations, identify the highest-ROI automation opportunities, and deliver a concrete roadmap — models, budget, timeline and measurable success criteria. No hype, just an honest assessment of where AI moves your numbers.",
    points: ["Workflow and data audit", "ROI-ranked opportunity map", "90-day execution roadmap"],
  },
  {
    icon: MessageSquare,
    title: "Conversational AI & Chatbots",
    description:
      "Custom chatbots trained on your knowledge base that answer customers, qualify leads and route conversations 24/7. Built on the same technology that powers our XenlixAI Core platform.",
    points: ["Brand-tuned responses", "Website, WhatsApp and social channels", "Human handoff escalation"],
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "Natural-sounding voice agents that handle inbound calls, appointment booking and outbound follow-ups — so no lead waits on hold and no customer reaches voicemail.",
    points: ["Inbound & outbound calling", "CRM and calendar integration", "Multi-language support"],
  },
  {
    icon: Workflow,
    title: "Workflow & Process Automation",
    description:
      "We connect your tools — CRM, email, spreadsheets, ticketing — into automated pipelines that eliminate copy-paste work and keep data moving without manual touchpoints.",
    points: ["CRM & marketing automation", "Document and data pipelines", "Third-party API integrations"],
  },
  {
    icon: Database,
    title: "Custom AI Tool Development",
    description:
      "When off-the-shelf tools fall short, we design and build bespoke AI applications — internal copilots, analysis engines, content systems — engineered for your exact workflow.",
    points: ["Discovery to deployment", "Scalable cloud architecture", "Full source ownership"],
  },
  {
    icon: ShieldCheck,
    title: "Deployment Support & Team Enablement",
    description:
      "Launch is the start, not the finish. We monitor performance in production, retrain models as your data grows, and train your team to own and operate the systems we build.",
    points: ["Production monitoring", "Model iteration & tuning", "Team training sessions"],
  },
];

const process = [
  {
    phase: "Discover",
    description:
      "A structured audit of your workflows, data and tooling. We interview your team, quantify time spent on repetitive work, and identify where AI delivers measurable value.",
  },
  {
    phase: "Design",
    description:
      "We translate findings into a concrete solution architecture — which models, which integrations, what it costs, and the metrics that define success. You approve before we build.",
  },
  {
    phase: "Build",
    description:
      "Rapid, iterative development with weekly demos. You see the system working on real data throughout — not a big reveal at the end.",
  },
  {
    phase: "Deploy & Scale",
    description:
      "Production launch with monitoring, fallbacks and security review. Then continuous tuning, retraining and support as usage grows.",
  },
];

const outcomes = [
  "A prioritized AI roadmap grounded in your actual operations — not generic best practices",
  "Working automation in production, integrated with the tools your team already uses",
  "Documented systems your team is trained to operate and extend independently",
  "Reduced manual workload and faster response times, measured against baseline metrics",
  "Clear ownership of data, code and credentials — no vendor lock-in",
  "Ongoing access to the XenlixAI ecosystem as your AI footprint expands",
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.6em] mb-4 text-center">
          Advisory &amp; Implementation
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-center italic tracking-tighter uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          AI Consulting
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed font-medium">
          Most businesses know AI matters — few know where to start. XenlixAI
          consulting bridges that gap: we audit your operations, design the
          right automation architecture, and deploy intelligent systems that
          pay for themselves in saved hours and captured leads.
        </p>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
          What We Deliver
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#050508] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col"
            >
              <div className="w-12 h-12 mb-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <service.icon size={22} />
              </div>
              <h3 className="font-black uppercase tracking-wide text-base mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2">
                {service.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-xs text-gray-400 font-medium flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-orange-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#030306] border-y border-white/5 mb-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
            How We Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-orange-500 flex items-center justify-center text-xs font-black text-white shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="font-black uppercase tracking-wide">{step.phase}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl sm:text-4xl font-black text-center italic tracking-tighter uppercase mb-12">
          What You Get
        </h2>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-12 gap-y-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-6 h-6 mt-0.5 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-black">
                {"\u2713"}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto p-8 md:p-14 rounded-[24px] bg-[#050508] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter uppercase mb-6">
              Ready to Put AI to Work?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a discovery call. We&apos;ll review your current workflows,
              identify your two or three highest-impact automation
              opportunities, and give you a straight answer on cost, timeline
              and expected return.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-wider text-sm hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-cyan-500/50"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

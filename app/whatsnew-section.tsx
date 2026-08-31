import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Phone, Layers, ArrowRight } from "lucide-react";

const updates = [
  {
    icon: <Activity size={20} />,
    color: "from-cyan-400 to-blue-600",
    date: "Aug 2026",
    title: "XenlixAI Core v2.0",
    description:
      "Major platform update with enhanced AI analysis engine and new reporting dashboards.",
  },
  {
    icon: <Phone size={20} />,
    color: "from-indigo-500 to-purple-600",
    date: "Jul 2026",
    title: "Voice Agent Launch",
    description:
      "AI-powered voice agents now available for automated phone conversations in 30+ languages.",
  },
  {
    icon: <Layers size={20} />,
    color: "from-blue-600 to-indigo-600",
    date: "Jun 2026",
    title: "Agency Platform Beta",
    description:
      "XenlixAI Agency enters beta with marketing automation and workflow optimization tools.",
  },
];

const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    {children}
  </motion.div>
);

export default function WhatsNewSection() {
  return (
    <section className="py-16 md:py-28 bg-[#010103] relative z-10 border-y border-white/5">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <FadeInSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.6em]">
              Updates
            </span>
            <div className="h-px w-12 bg-cyan-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic tracking-tight uppercase mb-8 md:mb-12">
            What&apos;s New
          </h2>
        </FadeInSection>

        {/* Update cards grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {updates.map((update, idx) => (
            <FadeInSection key={idx} delay={idx * 0.1}>
              <div className="group relative rounded-2xl p-6 md:p-8 bg-[#050508] border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.02] shadow-2xl">
                {/* Card glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br bg-[length:80px_80px] bg-no-repeat bg-[right_0_bottom_0] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" style={{ backgroundImage: `linear-gradient(135deg, ${update.color.replace("from-", "").replace("to-", "")}22, transparent)` }} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${update.color} flex items-center justify-center text-white shadow-xl mb-6 group-hover:-rotate-3 transition-transform`}>
                  {update.icon}
                </div>

                {/* Date */}
                <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-3">
                  {update.date}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black italic tracking-tighter mb-4">
                  {update.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-medium italic">
                  {update.description}
                </p>

                {/* View All card border glow */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${update.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* View All Updates link */}
        <FadeInSection delay={0.3}>
          <div className="flex justify-center">
            <Link
              href="/resources"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all font-black text-xs uppercase tracking-[0.4em] overflow-hidden relative"
            >
              <span>View All Updates</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

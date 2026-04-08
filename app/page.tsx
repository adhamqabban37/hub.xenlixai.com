"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Cpu,
  Zap,
  Database,
  Globe,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Activity,
  Shield,
  Lightbulb,
  ChevronDown,
  MessageSquare,
  Phone,
  Bot,
  X,
  Check,
} from "lucide-react";

/* -- Fade-in on scroll ---------------------------------- */
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* -- Data ----------------------------------------------- */
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
    color: "from-red-500 to-pink-600",
    icon: <Lightbulb size={22} />,
  },
];

const brandPillars = [
  {
    label: "NEURAL SYSTEMS",
    value: "Circuit-Level AI",
    icon: <Cpu className="text-cyan-400" />,
  },
  {
    label: "AUTOMATION",
    value: "Fluid Intelligence",
    icon: <Zap className="text-blue-500" />,
  },
  {
    label: "DATA FLOW",
    value: "Infinite Node Analysis",
    icon: <Database className="text-indigo-500" />,
  },
  {
    label: "ECOSYSTEM",
    value: "Digital Synapse Network",
    icon: <Globe className="text-orange-500" />,
  },
];

/* -- AI Tools Data -------------------------------------- */
const aiTools = [
  {
    name: "AI Customer Chatbots",
    short:
      "Intelligent conversational assistants designed to handle customer interactions, answer questions, and automate support.",
    icon: <MessageSquare size={26} />,
    color: "from-cyan-400 to-blue-600",
    overview:
      "AI chatbots simulate human-like conversations to assist users in real time. These systems can answer common questions, guide users through services, and reduce the workload on human support teams.",
    steps: [
      { label: "User Message", desc: "User sends a message" },
      {
        label: "NLP Engine",
        desc: "AI interprets the request using natural language processing",
      },
      {
        label: "Knowledge Retrieval",
        desc: "System retrieves knowledge or generates a response",
      },
      {
        label: "Response",
        desc: "User receives an accurate, contextual reply",
      },
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification",
      "Website engagement",
      "Knowledge base assistance",
    ],
  },
  {
    name: "AI Voice Agents",
    short:
      "Conversational AI systems capable of handling phone calls, responding to customers, and performing automated voice interactions.",
    icon: <Phone size={26} />,
    color: "from-indigo-500 to-purple-600",
    overview:
      "AI voice agents enable businesses to automate phone conversations while maintaining natural and engaging interactions with callers.",
    steps: [
      { label: "Incoming Call", desc: "Call received by the system" },
      { label: "Speech Recognition", desc: "AI processes spoken language" },
      { label: "Context Engine", desc: "AI generates contextual responses" },
      { label: "Voice Synthesis", desc: "Natural voice delivers the response" },
    ],
    useCases: [
      "Appointment scheduling",
      "Customer service calls",
      "Sales call automation",
      "Information hotlines",
    ],
  },
  {
    name: "Autonomous AI Agents",
    short:
      "Advanced AI agents capable of performing complex tasks, analyzing information, and assisting with workflows.",
    icon: <Bot size={26} />,
    color: "from-orange-500 to-red-600",
    overview:
      "Autonomous AI agents act as intelligent assistants capable of reasoning through tasks, analyzing data, and executing multi-step processes.",
    steps: [
      { label: "Task Input", desc: "User provides a task or objective" },
      { label: "Analysis", desc: "AI agent analyzes requirements" },
      { label: "Data Gathering", desc: "System gathers relevant data" },
      { label: "Execution", desc: "AI completes or assists with the task" },
    ],
    useCases: [
      "Research automation",
      "Workflow assistance",
      "Report generation",
      "Business data analysis",
    ],
  },
];

/* -- AI Tools Section Component ------------------------- */
function AIToolsSection() {
  const [activeTool, setActiveTool] = useState<number | null>(null);
  const [simTab, setSimTab] = useState<"workflow" | "demo">("workflow");
  // Chatbot demo state
  const [demoMessages, setDemoMessages] = useState<
    { from: "user" | "ai"; text: string }[]
  >([]);
  const [demoInput, setDemoInput] = useState("");
  const demoRef = useRef<HTMLDivElement>(null);
  // Voice demo state (Retell)
  const [callActive, setCallActive] = useState(false);
  const [callConnecting, setCallConnecting] = useState(false);
  const [callSeconds, setCallSeconds] = useState(0);
  const [callTranscript, setCallTranscript] = useState<
    { speaker: "agent" | "user"; text: string }[]
  >([]);
  const [agentTalking, setAgentTalking] = useState(false);
  const callTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const retellClientRef = useRef<ReturnType<typeof Object> | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  // Agent demo state
  const [agentRunning, setAgentRunning] = useState(false);
  const [agentStep, setAgentStep] = useState(0);
  const [agentLogs, setAgentLogs] = useState<string[]>([]);
  const agentTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const agentLogsRef = useRef<HTMLDivElement>(null);

  const demoResponses = [
    "Thanks for reaching out! I can help you explore our AI solutions. What area are you interested in?",
    "Great question. Our chatbot systems use advanced NLP to understand context and deliver accurate responses 24/7.",
    "We offer customizable solutions for customer support, lead generation, and internal workflow automation.",
    "I'd recommend starting with a consultation. Would you like me to connect you with our team?",
    "Our AI voice agents can handle up to 500 concurrent calls with natural-sounding speech synthesis.",
    "Absolutely -- all our systems integrate with existing CRM, helpdesk, and telephony platforms.",
  ];

  const handleDemoSend = () => {
    if (!demoInput.trim()) return;
    const userMsg = demoInput.trim();
    setDemoInput("");
    setDemoMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setTimeout(
      () => {
        setDemoMessages((prev) => [
          ...prev,
          {
            from: "ai",
            text: demoResponses[
              prev.filter((m) => m.from === "ai").length % demoResponses.length
            ],
          },
        ]);
        setTimeout(
          () => demoRef.current?.scrollTo({ top: 9999, behavior: "smooth" }),
          50,
        );
      },
      800 + Math.random() * 600,
    );
  };

  // Retell voice call
  const startCall = async () => {
    setCallConnecting(true);
    setCallTranscript([]);
    setCallSeconds(0);
    try {
      const res = await fetch("/api/retell", { method: "POST" });
      if (!res.ok) throw new Error("Failed to create call");
      const { access_token } = await res.json();

      const { RetellWebClient } = await import("retell-client-js-sdk");
      const client = new RetellWebClient();
      retellClientRef.current = client;

      client.on("call_started", () => {
        setCallConnecting(false);
        setCallActive(true);
        callTimerRef.current = setInterval(
          () => setCallSeconds((s) => s + 1),
          1000,
        );
      });

      client.on("call_ended", () => {
        endCall();
      });

      client.on("agent_start_talking", () => {
        setAgentTalking(true);
      });

      client.on("agent_stop_talking", () => {
        setAgentTalking(false);
      });

      client.on(
        "update",
        (update: { transcript?: { role: string; content: string }[] }) => {
          if (update.transcript) {
            setCallTranscript(
              update.transcript.map((t: { role: string; content: string }) => ({
                speaker:
                  t.role === "agent" ? ("agent" as const) : ("user" as const),
                text: t.content,
              })),
            );
            setTimeout(
              () =>
                transcriptRef.current?.scrollTo({
                  top: 9999,
                  behavior: "smooth",
                }),
              50,
            );
          }
        },
      );

      client.on("error", (err: unknown) => {
        console.error("Retell error:", err);
        endCall();
      });

      await client.startCall({ accessToken: access_token });
    } catch (err) {
      console.error("Failed to start Retell call:", err);
      setCallConnecting(false);
    }
  };

  const endCall = () => {
    setCallActive(false);
    setCallConnecting(false);
    setAgentTalking(false);
    if (callTimerRef.current) clearInterval(callTimerRef.current);
    if (retellClientRef.current) {
      (retellClientRef.current as { stopCall: () => void }).stopCall();
      retellClientRef.current = null;
    }
  };

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  // Agent browser simulation
  const agentScript = [
    {
      url: "google.com",
      action: "Navigating to Google...",
      log: "[Agent] Opening browser -> google.com",
    },
    {
      url: "google.com",
      action: "Typing search query...",
      log: '[Agent] Typing: "best CRM software for startups 2026"',
    },
    {
      url: "google.com/search?q=best+CRM+software",
      action: "Analyzing search results...",
      log: "[Agent] Found 12 results. Analyzing top 5 for relevance...",
    },
    {
      url: "techcrunch.com/best-crm-2026",
      action: "Clicking top result...",
      log: "[Agent] Navigating to TechCrunch article -> extracting data",
    },
    {
      url: "techcrunch.com/best-crm-2026",
      action: "Extracting pricing data...",
      log: "[Agent] Extracted: HubSpot ($45/mo), Salesforce ($25/mo), Pipedrive ($15/mo)",
    },
    {
      url: "g2.com/categories/crm",
      action: "Cross-referencing reviews...",
      log: "[Agent] Opening G2 reviews -> comparing user ratings",
    },
    {
      url: "g2.com/categories/crm",
      action: "Compiling comparison table...",
      log: "[Agent] Generated comparison: 5 CRMs, 8 criteria scored",
    },
    {
      url: "docs.google.com/spreadsheet",
      action: "Creating report...",
      log: "[Agent] Opening Google Sheets -> writing report with findings",
    },
    {
      url: "docs.google.com/spreadsheet",
      action: "Finalizing report...",
      log: "[Agent] Report complete. 3 pages, 2 charts, executive summary included.",
    },
    {
      url: "docs.google.com/spreadsheet",
      action: "Task complete.",
      log: "[Agent] Task finished. Report saved and ready for review.",
    },
  ];

  const startAgent = () => {
    setAgentRunning(true);
    setAgentStep(0);
    setAgentLogs([]);
    let step = 0;
    agentTimerRef.current = setInterval(() => {
      if (step < agentScript.length) {
        setAgentStep(step);
        setAgentLogs((prev) => [...prev, agentScript[step].log]);
        setTimeout(
          () =>
            agentLogsRef.current?.scrollTo({ top: 9999, behavior: "smooth" }),
          50,
        );
        step++;
      } else {
        setAgentRunning(false);
        if (agentTimerRef.current) clearInterval(agentTimerRef.current);
      }
    }, 2200);
  };

  const stopAgent = () => {
    setAgentRunning(false);
    if (agentTimerRef.current) clearInterval(agentTimerRef.current);
    setAgentLogs((prev) => [...prev, "[Agent] Task interrupted by user."]);
  };

  return (
    <section
      id="ai-tools"
      className="py-16 md:py-32 bg-[#030306] relative z-10 border-y border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] mb-4">
              Intelligence Suite
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              AI Tools for Business
            </h3>
            <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed font-medium italic">
              Explore intelligent systems designed to automate communication,
              streamline operations, and enhance customer engagement through
              advanced artificial intelligence.
            </p>
          </div>
        </FadeIn>

        {/* Tool Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-10">
          {aiTools.map((tool, idx) => {
            const isActive = activeTool === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div
                  className={`group relative rounded-[24px] md:rounded-[36px] p-6 sm:p-8 md:p-10 bg-[#050508] border transition-all duration-500 flex flex-col cursor-pointer overflow-hidden shadow-2xl ${
                    isActive
                      ? "border-cyan-500/40 shadow-cyan-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setActiveTool(isActive ? null : idx)}
                >
                  {/* Internal Glow */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-[20px] bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-xl shadow-black mb-8 group-hover:-rotate-6 transition-transform`}
                  >
                    {tool.icon}
                  </div>

                  <h4 className="text-2xl font-black mb-4 italic tracking-tight uppercase">
                    {tool.name}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium italic">
                    {tool.short}
                  </p>

                  <div className="flex items-center justify-between text-[10px] font-black tracking-[0.3em] uppercase text-cyan-400">
                    <span>{isActive ? "Close" : "Explore Tool"}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                    />
                  </div>

                  {/* Border Glow */}
                  <div
                    className={`absolute -inset-px rounded-[36px] bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Expanded Tool Panel */}
        <AnimatePresence mode="wait">
          {activeTool !== null && (
            <motion.div
              key={activeTool}
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-br from-cyan-600/20 via-indigo-600/10 to-orange-600/20 rounded-[48px] p-[1px] mb-16">
                <div className="bg-[#050508] rounded-[47px] p-6 sm:p-10 md:p-16 relative overflow-hidden">
                  {/* Close button */}
                  <button
                    onClick={() => setActiveTool(null)}
                    className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white cursor-pointer z-20"
                  >
                    <X size={18} />
                  </button>

                  {/* Tool Header */}
                  <div className="flex items-center gap-6 mb-12">
                    <div
                      className={`w-14 h-14 rounded-[18px] bg-gradient-to-br ${aiTools[activeTool].color} flex items-center justify-center text-white shadow-xl`}
                    >
                      {aiTools[activeTool].icon}
                    </div>
                    <div>
                      <h4 className="text-3xl font-black italic tracking-tight uppercase">
                        {aiTools[activeTool].name}
                      </h4>
                      <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase mt-1">
                        Detailed Overview
                      </p>
                    </div>
                  </div>

                  {/* Tab Switcher */}
                  <div className="flex gap-2 mb-12 bg-white/[0.03] rounded-2xl p-1.5 w-fit border border-white/5">
                    {(["workflow", "demo"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setSimTab(tab);
                          if (tab === "demo" && demoMessages.length === 0) {
                            setDemoMessages([
                              {
                                from: "ai",
                                text: "Hello! I'm a simulated XenlixAI assistant. Ask me anything about our AI tools.",
                              },
                            ]);
                          }
                        }}
                        className={`px-6 py-3 rounded-xl text-[10px] font-black tracking-[0.3em] uppercase transition-all cursor-pointer ${
                          simTab === tab
                            ? "bg-white/10 text-white shadow-lg"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                      >
                        {tab === "workflow" ? "How It Works" : "Live AI Demo"}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {simTab === "workflow" ? (
                      <motion.div
                        key="workflow"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Overview */}
                        <p className="text-gray-400 text-lg leading-relaxed mb-14 font-medium italic max-w-3xl">
                          {aiTools[activeTool].overview}
                        </p>

                        {/* Animated Workflow Diagram */}
                        <div className="mb-14">
                          <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase mb-8">
                            System Workflow
                          </p>
                          <div className="flex flex-col md:flex-row items-stretch gap-0">
                            {aiTools[activeTool].steps.map((step, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="flex-1 flex items-stretch"
                              >
                                <div className="relative flex-1">
                                  <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-full hover:bg-white/[0.06] hover:border-white/20 transition-all group/step">
                                    {/* Step Number */}
                                    <div
                                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${aiTools[activeTool].color} flex items-center justify-center text-white text-xs font-black mb-4 group-hover/step:scale-110 transition-transform`}
                                    >
                                      {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <h6 className="font-black text-sm uppercase tracking-wide mb-2">
                                      {step.label}
                                    </h6>
                                    <p className="text-gray-500 text-xs leading-relaxed italic">
                                      {step.desc}
                                    </p>
                                  </div>
                                </div>
                                {/* Connector Arrow */}
                                {i < aiTools[activeTool].steps.length - 1 && (
                                  <div className="hidden md:flex items-center px-2">
                                    <motion.div
                                      initial={{ scaleX: 0 }}
                                      animate={{ scaleX: 1 }}
                                      transition={{
                                        delay: i * 0.15 + 0.3,
                                        duration: 0.4,
                                      }}
                                      className="origin-left"
                                    >
                                      <ArrowRight
                                        size={18}
                                        className="text-cyan-500/40"
                                      />
                                    </motion.div>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </div>

                          {/* Flow Summary */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8 flex items-center justify-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-gray-600"
                          >
                            <span className="text-cyan-400">User</span>
                            <span>→</span>
                            <span className="text-blue-400">AI Engine</span>
                            <span>→</span>
                            <span className="text-indigo-400">Processing</span>
                            <span>→</span>
                            <span className="text-orange-400">Result</span>
                          </motion.div>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase mb-6">
                            Use Cases
                          </p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {aiTools[activeTool].useCases.map((uc, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all"
                              >
                                <span
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${aiTools[activeTool].color} shrink-0`}
                                />
                                <span className="text-sm text-gray-400 font-medium">
                                  {uc}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="demo"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* ===== CHATBOT DEMO (Tool 0) ===== */}
                        {activeTool === 0 && (
                          <div className="max-w-2xl mx-auto">
                            <div className="bg-black/40 rounded-[32px] border border-white/10 overflow-hidden">
                              <div className="px-8 py-5 border-b border-white/5 flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">
                                  XenlixAI Chatbot Simulation
                                </span>
                              </div>
                              <div
                                ref={demoRef}
                                className="h-80 overflow-y-auto p-6 space-y-4 scrollbar-thin"
                              >
                                {demoMessages.map((msg, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                                  >
                                    <div
                                      className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                                        msg.from === "user"
                                          ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-br-md"
                                          : "bg-white/[0.06] text-gray-300 border border-white/10 rounded-bl-md"
                                      }`}
                                    >
                                      {msg.text}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                              <div className="px-6 py-4 border-t border-white/5">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    handleDemoSend();
                                  }}
                                  className="flex gap-3"
                                >
                                  <input
                                    type="text"
                                    value={demoInput}
                                    onChange={(e) =>
                                      setDemoInput(e.target.value)
                                    }
                                    placeholder="Type a message..."
                                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-gray-700"
                                  />
                                  <button
                                    type="submit"
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                                  >
                                    Send
                                  </button>
                                </form>
                              </div>
                            </div>
                            <p className="text-center text-[10px] tracking-[0.3em] text-gray-600 mt-4 uppercase font-black">
                              Simulated Chatbot -- Not Connected to Live AI
                            </p>
                          </div>
                        )}

                        {/* ===== VOICE AGENT DEMO (Tool 1) ===== */}
                        {activeTool === 1 && (
                          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Left — Live Call */}
                            <div>
                              <div className="bg-black/40 rounded-[32px] border border-white/10 overflow-hidden">
                                {/* Call Header */}
                                <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div
                                      className={`w-3 h-3 rounded-full ${callActive ? "bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.6)]" : callConnecting ? "bg-yellow-400 animate-pulse" : "bg-gray-600"}`}
                                    />
                                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">
                                      {callActive
                                        ? "Live Call In Progress"
                                        : callConnecting
                                          ? "Connecting..."
                                          : "Voice Agent Ready"}
                                    </span>
                                  </div>
                                  {callActive && (
                                    <span className="text-[10px] font-black tracking-[0.2em] text-green-400 tabular-nums">
                                      {formatTime(callSeconds)}
                                    </span>
                                  )}
                                </div>

                                {/* Call Visual */}
                                <div className="p-8">
                                  {!callActive &&
                                  !callConnecting &&
                                  callTranscript.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-12">
                                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                                        <Phone
                                          size={36}
                                          className="text-white"
                                        />
                                      </div>
                                      <p className="text-gray-400 text-sm italic mb-2">
                                        XenlixAI Voice Agent
                                      </p>
                                      <p className="text-gray-600 text-xs mb-2">
                                        Powered by Retell AI
                                      </p>
                                      <p className="text-gray-700 text-[10px] mb-8 max-w-xs text-center">
                                        Talk to our AI voice agent live.
                                        Microphone access required.
                                      </p>
                                      <button
                                        onClick={startCall}
                                        className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase text-white hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)] cursor-pointer flex items-center gap-3"
                                      >
                                        <Phone size={16} />
                                        Start Live Call
                                      </button>
                                    </div>
                                  ) : callConnecting && !callActive ? (
                                    <div className="flex flex-col items-center justify-center py-16">
                                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-6 animate-pulse">
                                        <Phone
                                          size={36}
                                          className="text-white"
                                        />
                                      </div>
                                      <p className="text-gray-400 text-sm italic">
                                        Connecting to voice agent...
                                      </p>
                                    </div>
                                  ) : (
                                    <>
                                      {/* Waveform Visualization */}
                                      {callActive && (
                                        <div className="flex items-center justify-center gap-[3px] h-16 mb-6">
                                          {Array.from({ length: 40 }).map(
                                            (_, i) => (
                                              <motion.div
                                                key={i}
                                                className="w-[3px] bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full"
                                                animate={{
                                                  height: [
                                                    8,
                                                    20 + Math.random() * 30,
                                                    8,
                                                  ],
                                                }}
                                                transition={{
                                                  duration:
                                                    0.4 + Math.random() * 0.6,
                                                  repeat: Infinity,
                                                  repeatType: "reverse",
                                                  delay: i * 0.03,
                                                }}
                                              />
                                            ),
                                          )}
                                        </div>
                                      )}

                                      {/* Live Transcript */}
                                      <div
                                        ref={transcriptRef}
                                        className="h-64 overflow-y-auto space-y-4 scrollbar-thin"
                                      >
                                        {callTranscript.map((line, i) => (
                                          <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex gap-4"
                                          >
                                            <div
                                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-black ${
                                                line.speaker === "agent"
                                                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                                                  : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                                              }`}
                                            >
                                              {line.speaker === "agent"
                                                ? "AI"
                                                : "U"}
                                            </div>
                                            <div>
                                              <p className="text-[9px] font-black tracking-[0.3em] uppercase text-gray-600 mb-1">
                                                {line.speaker === "agent"
                                                  ? "Voice Agent"
                                                  : "You"}
                                              </p>
                                              <p className="text-sm text-gray-300 leading-relaxed">
                                                {line.text}
                                              </p>
                                            </div>
                                          </motion.div>
                                        ))}
                                        {callActive && (
                                          <motion.div
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{
                                              duration: 1.5,
                                              repeat: Infinity,
                                            }}
                                            className="flex items-center gap-2 text-gray-600 text-xs italic"
                                          >
                                            <div
                                              className={`w-1.5 h-1.5 rounded-full ${agentTalking ? "bg-indigo-400" : "bg-green-400"}`}
                                            />
                                            {agentTalking
                                              ? "Agent speaking..."
                                              : "Listening..."}
                                          </motion.div>
                                        )}
                                      </div>

                                      {/* Call Controls */}
                                      <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/5">
                                        {callActive ? (
                                          <button
                                            onClick={endCall}
                                            className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase text-white hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                                          >
                                            <Phone
                                              size={14}
                                              className="rotate-[135deg]"
                                            />
                                            End Call
                                          </button>
                                        ) : (
                                          <button
                                            onClick={startCall}
                                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-[10px] font-black tracking-[0.2em] uppercase text-white hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                                          >
                                            <Phone size={14} />
                                            Call Again
                                          </button>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                              <p className="text-center text-[10px] tracking-[0.3em] text-gray-600 mt-4 uppercase font-black">
                                Live AI Voice Agent — Powered by Retell AI
                              </p>
                            </div>

                            {/* Right — How It Works */}
                            <div className="space-y-6">
                              <div className="bg-black/40 rounded-[32px] border border-white/10 p-8">
                                <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-indigo-400 mb-4">
                                  How This AI Voice Agent Works
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                  This is a live AI voice assistant demonstrating how businesses can automate customer phone interactions 24/7 — no human staff needed.
                                </p>

                                <div className="space-y-3 mb-6">
                                  <p className="text-[9px] font-black tracking-[0.3em] uppercase text-gray-500">
                                    Capabilities
                                  </p>
                                  {[
                                    "Answer common business questions",
                                    "Book appointments",
                                    "Collect customer information",
                                    "Provide hours & services",
                                    "Qualify potential leads",
                                    "Route calls or take messages",
                                  ].map((cap, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-3 text-sm text-gray-300"
                                    >
                                      <Check size={14} className="text-indigo-400 shrink-0" />
                                      <span>{cap}</span>
                                    </div>
                                  ))}
                                </div>

                                <div className="space-y-3">
                                  <p className="text-[9px] font-black tracking-[0.3em] uppercase text-gray-500">
                                    Try Asking
                                  </p>
                                  {[
                                    "I'd like to book an appointment",
                                    "What services do you offer?",
                                    "What are your business hours?",
                                    "Can I leave a message?",
                                    "How much does it cost?",
                                  ].map((scenario, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-gray-400"
                                    >
                                      <span className="text-indigo-400 text-xs font-black">{i + 1}</span>
                                      <span>&ldquo;{scenario}&rdquo;</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ===== AUTONOMOUS AGENT DEMO (Tool 2) ===== */}
                        {activeTool === 2 && (
                          <div className="max-w-3xl mx-auto">
                            <div className="bg-black/40 rounded-[32px] border border-white/10 overflow-hidden">
                              {/* Browser Chrome */}
                              <div className="px-6 py-4 border-b border-white/5 flex items-center gap-4">
                                <div className="flex gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                </div>
                                <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3">
                                  <div className="w-3 h-3 rounded-full bg-green-400/60 shrink-0" />
                                  <span className="text-xs text-gray-400 font-mono truncate">
                                    {agentRunning || agentLogs.length > 0
                                      ? `https://${agentScript[Math.min(agentStep, agentScript.length - 1)].url}`
                                      : "https://..."}
                                  </span>
                                </div>
                                <div
                                  className={`flex items-center gap-2 ${agentRunning ? "text-orange-400" : "text-gray-600"}`}
                                >
                                  <Bot size={14} />
                                  <span className="text-[9px] font-black tracking-[0.2em] uppercase">
                                    {agentRunning
                                      ? "Agent Active"
                                      : "Agent Idle"}
                                  </span>
                                </div>
                              </div>

                              {/* Browser Viewport */}
                              <div className="relative h-72 bg-[#0a0a0f] overflow-hidden">
                                {!agentRunning && agentLogs.length === 0 ? (
                                  <div className="flex flex-col items-center justify-center h-full">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                                      <Bot size={32} className="text-white" />
                                    </div>
                                    <p className="text-gray-400 text-sm italic mb-2">
                                      Autonomous AI Agent
                                    </p>
                                    <p className="text-gray-600 text-xs mb-6 text-center max-w-sm">
                                      Watch the agent browse the web, analyze
                                      data, and compile a research report --
                                      autonomously.
                                    </p>
                                    <button
                                      onClick={startAgent}
                                      className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase text-white hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(249,115,22,0.5)] cursor-pointer flex items-center gap-3"
                                    >
                                      <Activity size={16} />
                                      Launch Agent
                                    </button>
                                  </div>
                                ) : (
                                  <>
                                    {/* Simulated Page Content */}
                                    <div className="p-6 h-full flex flex-col">
                                      {/* Fake Page Blocks */}
                                      <div className="flex-1 space-y-3">
                                        <motion.div
                                          key={agentStep}
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          className="space-y-3"
                                        >
                                          <div className="h-4 bg-white/[0.08] rounded-md w-3/4" />
                                          <div className="h-3 bg-white/[0.04] rounded-md w-full" />
                                          <div className="h-3 bg-white/[0.04] rounded-md w-5/6" />
                                          <div className="h-3 bg-white/[0.04] rounded-md w-2/3" />
                                          <div className="mt-4 grid grid-cols-3 gap-3">
                                            <div className="h-16 bg-white/[0.03] rounded-lg border border-white/5" />
                                            <div className="h-16 bg-white/[0.03] rounded-lg border border-white/5" />
                                            <div className="h-16 bg-white/[0.03] rounded-lg border border-white/5" />
                                          </div>
                                          <div className="h-3 bg-white/[0.04] rounded-md w-4/5 mt-3" />
                                          <div className="h-3 bg-white/[0.04] rounded-md w-full" />
                                        </motion.div>
                                      </div>

                                      {/* Agent Action Overlay */}
                                      {agentRunning && (
                                        <motion.div
                                          key={`action-${agentStep}`}
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          className="absolute bottom-4 left-4 right-4 bg-orange-500/10 border border-orange-500/30 backdrop-blur-md rounded-xl px-5 py-3 flex items-center gap-3"
                                        >
                                          <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                              duration: 1.5,
                                              repeat: Infinity,
                                              ease: "linear",
                                            }}
                                          >
                                            <Cpu
                                              size={14}
                                              className="text-orange-400"
                                            />
                                          </motion.div>
                                          <span className="text-xs text-orange-300 font-medium">
                                            {
                                              agentScript[
                                                Math.min(
                                                  agentStep,
                                                  agentScript.length - 1,
                                                )
                                              ].action
                                            }
                                          </span>
                                        </motion.div>
                                      )}

                                      {/* Simulated Cursor */}
                                      {agentRunning && (
                                        <motion.div
                                          className="absolute w-4 h-4 pointer-events-none z-30"
                                          animate={{
                                            x: [100, 200, 300, 150, 250],
                                            y: [80, 120, 60, 140, 100],
                                          }}
                                          transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                          }}
                                        >
                                          <svg
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className="w-4 h-4 drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]"
                                          >
                                            <path
                                              d="M1 1L6.5 14L8.5 8.5L14 6.5L1 1Z"
                                              fill="#f97316"
                                              stroke="#fff"
                                              strokeWidth="0.5"
                                            />
                                          </svg>
                                        </motion.div>
                                      )}
                                    </div>
                                  </>
                                )}
                              </div>

                              {/* Agent Console */}
                              <div className="border-t border-white/5">
                                <div className="px-6 py-3 flex items-center justify-between border-b border-white/5">
                                  <span className="text-[9px] font-black tracking-[0.3em] uppercase text-gray-500">
                                    Agent Console
                                  </span>
                                  <div className="flex gap-3">
                                    {agentRunning ? (
                                      <button
                                        onClick={stopAgent}
                                        className="px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-lg text-[9px] font-black tracking-[0.2em] uppercase text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer"
                                      >
                                        Stop
                                      </button>
                                    ) : agentLogs.length > 0 ? (
                                      <button
                                        onClick={startAgent}
                                        className="px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-lg text-[9px] font-black tracking-[0.2em] uppercase text-orange-400 hover:bg-orange-500/20 transition-colors cursor-pointer"
                                      >
                                        Restart
                                      </button>
                                    ) : null}
                                  </div>
                                </div>
                                <div
                                  ref={agentLogsRef}
                                  className="h-36 overflow-y-auto p-4 space-y-1.5 font-mono scrollbar-thin"
                                >
                                  {agentLogs.length === 0 ? (
                                    <p className="text-gray-700 text-xs">
                                      Awaiting agent task...
                                    </p>
                                  ) : (
                                    agentLogs.map((log, i) => (
                                      <motion.p
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={`text-xs ${log.includes("finished") || log.includes("complete") ? "text-green-400" : log.includes("interrupted") ? "text-red-400" : "text-gray-400"}`}
                                      >
                                        <span className="text-gray-600 mr-2">
                                          {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {log}
                                      </motion.p>
                                    ))
                                  )}
                                </div>
                              </div>
                            </div>
                            <p className="text-center text-[10px] tracking-[0.3em] text-gray-600 mt-4 uppercase font-black">
                              Simulated Autonomous Agent -- Not Connected to
                              Live Systems
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <FadeIn>
          <div className="text-center mt-10">
            <h4 className="text-2xl sm:text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-6">
              Bring AI Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
                Your Business
              </span>
            </h4>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg mb-12 font-medium italic leading-relaxed">
              Discover how intelligent automation can transform customer
              interactions, streamline operations, and unlock new levels of
              efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#platforms"
                className="group px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(6,182,212,0.4)]"
              >
                Explore Solutions
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-all active:scale-95 text-gray-300"
              >
                Contact XenlixAI
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ==========================================================
   HOME PAGE
   ========================================================== */
export default function Home() {
  const [expandedPlatform, setExpandedPlatform] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">(
    "idle",
  );
  const [xBurst, setXBurst] = useState(false);
  const [burstPos, setBurstPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [particles, setParticles] = useState<
    {
      id: number;
      x: number;
      y: number;
      angle: number;
      distance: number;
      size: number;
      color: string;
      delay: number;
    }[]
  >([]);

  const triggerXBurst = useCallback(
    (pageX?: number, pageY?: number) => {
      if (xBurst) return;
      if (pageX !== undefined && pageY !== undefined) {
        setBurstPos({ x: pageX, y: pageY });
      }
      setXBurst(true);
      const colors = [
        "bg-cyan-400",
        "bg-blue-500",
        "bg-indigo-500",
        "bg-purple-500",
        "bg-orange-400",
        "bg-cyan-300",
        "bg-blue-400",
      ];
      const newParticles = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: 0,
        y: 0,
        angle: (i / 40) * 360 + Math.random() * 20 - 10,
        distance: 120 + Math.random() * 280,
        size: 3 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.15,
      }));
      setParticles(newParticles);
      setTimeout(() => {
        setXBurst(false);
        setParticles([]);
      }, 2000);
    },
    [xBurst],
  );

  // Global click listener: triggers burst on any X character click or data-x-burst element
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // Check for data-x-burst attribute (logo button, etc.)
      const xBurstEl = (e.target as HTMLElement).closest("[data-x-burst]");
      if (xBurstEl) {
        triggerXBurst(e.clientX, e.clientY);
        return;
      }

      // Only trigger on elements with data-x-burst, not every X character
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [triggerXBurst]);

  return (
    <div className="min-h-screen relative">
      {/* ===== PAGE-LEVEL X BURST EFFECTS ===== */}
      <AnimatePresence>
        {xBurst && (
          <>
            {/* Screen flash */}
            <motion.div
              className="fixed inset-0 z-[100] pointer-events-none bg-gradient-to-br from-cyan-500/15 via-transparent to-orange-500/15"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, times: [0, 0.1, 1] }}
            />

            {/* Burst origin container */}
            <div
              className="fixed z-[100] pointer-events-none"
              style={{ left: burstPos.x, top: burstPos.y }}
            >
              {/* Expanding rings */}
              {[0, 0.1, 0.2].map((delay, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    border: `${2 - i * 0.5}px solid`,
                    borderColor:
                      i === 0
                        ? "rgba(6,182,212,0.6)"
                        : i === 1
                          ? "rgba(99,102,241,0.5)"
                          : "rgba(249,115,22,0.4)",
                  }}
                  initial={{ width: 0, height: 0, opacity: 1 }}
                  animate={{
                    width: [0, 600 + i * 200],
                    height: [0, 600 + i * 200],
                    opacity: [1, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                />
              ))}

              {/* Circuit line streaks */}
              {[45, 135, 225, 315, 0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute origin-left"
                  style={{
                    rotate: `${angle}deg`,
                    height: "1px",
                  }}
                  initial={{ width: 0, opacity: 0.8 }}
                  animate={{
                    width: [0, 300, 0],
                    opacity: [0.8, 0.6, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.03,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={`h-full ${i % 2 === 0 ? "bg-gradient-to-r from-cyan-400 to-transparent" : "bg-gradient-to-r from-orange-400 to-transparent"}`}
                  />
                </motion.div>
              ))}

              {/* Particles */}
              {particles.map((p) => (
                <motion.div
                  key={`p-${p.id}`}
                  className={`absolute rounded-full ${p.color}`}
                  style={{
                    width: p.size,
                    height: p.size,
                    boxShadow: `0 0 ${p.size * 3}px currentColor`,
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
                    y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
                    opacity: [1, 1, 0],
                    scale: [1, 1.5, 0],
                  }}
                  transition={{
                    duration: 1 + Math.random() * 0.5,
                    delay: p.delay,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                />
              ))}
            </div>
          </>
        )}
      </AnimatePresence>

      {/* -- Circuit Pattern Background ------------------- */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="circuit-grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
              fill="none"
              stroke="rgba(6, 182, 212, 0.1)"
              strokeWidth="0.5"
            />
            <circle cx="10" cy="10" r="1" fill="rgba(6, 182, 212, 0.3)" />
            <circle cx="90" cy="10" r="1" fill="rgba(249, 115, 22, 0.3)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-grid)" />
        </svg>
      </div>

      {/* -- Dynamic Background Glows --------------------- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-orange-600/10 rounded-full blur-[160px] animate-pulse-delayed" />
      </div>

      {/* ===================================================
          HERO
          =================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 overflow-hidden"
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center z-10">
          <FadeIn>
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black tracking-widest mb-10 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                SYSTEM STATUS: OPERATIONAL
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black mb-8 leading-[0.85] tracking-tighter italic uppercase">
                Circuit <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-orange-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  Intelligence
                </span>
              </h1>

              <p className="max-w-xl text-gray-400 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-medium italic">
                XenlixAI architects the future of neural productivity. We
                develop platforms that fuse human creativity with raw circuit
                intelligence.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6">
                <a
                  href="#platforms"
                  className="group px-6 py-4 md:px-10 md:py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(6,182,212,0.4)]"
                >
                  Explore Core{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#about"
                  className="px-6 py-4 md:px-10 md:py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-all active:scale-95 text-gray-300"
                >
                  Documentation
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Hero visual */}
          <FadeIn delay={0.3} className="hidden lg:block">
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Massive Logo Glow */}
              <div className="absolute w-[90%] h-[90%] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-orange-500/20 rounded-full blur-[120px] animate-pulse" />

              <button
                data-x-burst
                className="relative z-10 w-80 h-80 border border-white/10 rounded-[60px] flex items-center justify-center overflow-visible bg-black shadow-[0_0_50px_rgba(0,0,0,1)] cursor-pointer hover:scale-[1.03] active:scale-95 transition-transform duration-300 focus:outline-none group/logo"
                aria-label="Trigger burst animation"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 rounded-[60px]" />
                {/* Hover glow ring */}
                <div className="absolute -inset-2 rounded-[68px] bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-orange-500/0 group-hover/logo:from-cyan-500/20 group-hover/logo:via-purple-500/10 group-hover/logo:to-orange-500/20 blur-xl transition-all duration-500 pointer-events-none" />
                <Image
                  src="/logo.png"
                  alt="XenlixAI"
                  width={220}
                  height={220}
                  className="relative z-10 object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                />
              </button>

              {/* Neural Paths */}
              <div className="absolute w-[110%] h-[110%] border-t border-cyan-500/20 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[120%] h-[120%] border-b border-orange-500/20 rounded-full animate-[spin_60s_linear_infinite_reverse]" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===================================================
          BRAND PILLARS / TECH
          =================================================== */}
      <section id="tech" className="py-16 md:py-32 bg-[#030306] relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
            {brandPillars.map((pill, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group p-8 border-l border-white/5 hover:border-cyan-500 transition-all bg-white/[0.01] hover:bg-white/[0.03]">
                  <div className="mb-6 drop-shadow-[0_0_8px_currentColor]">
                    {pill.icon}
                  </div>
                  <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 mb-3 uppercase">
                    {pill.label}
                  </p>
                  <h4 className="text-xl font-bold tracking-tight">
                    {pill.value}
                  </h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          ECOSYSTEM / PLATFORMS
          =================================================== */}
      <section id="platforms" className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-6 mb-10 md:mb-16">
          <FadeIn>
            <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] mb-4 text-center">
              Neural Inventory
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-center italic tracking-tighter uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6 md:mb-10">
              The Ecosystem
            </h3>
            <p className="max-w-3xl mx-auto text-center text-gray-500 text-lg leading-relaxed font-medium italic">
              The XenlixAI ecosystem is composed of multiple platforms designed
              to explore different aspects of artificial intelligence, digital
              productivity, and technological innovation. Each system operates
              independently while contributing to a broader vision of building
              intelligent tools that enhance how individuals and organizations
              interact with technology.
            </p>
          </FadeIn>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {platforms.map((platform, idx) => {
            const isExpanded = expandedPlatform === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="group relative rounded-[24px] md:rounded-[40px] p-6 sm:p-8 md:p-12 bg-[#050508] border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col overflow-hidden shadow-2xl">
                  {/* Internal Glow */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`}
                  />

                  <div className="flex justify-between items-start mb-12 relative z-10">
                    <div
                      className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${platform.color} flex items-center justify-center text-white shadow-xl shadow-black group-hover:-rotate-6 transition-transform`}
                    >
                      {platform.icon}
                    </div>
                    <div
                      className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest border backdrop-blur-md ${
                        platform.status === "Restructuring"
                          ? "text-yellow-400 border-yellow-400/20 bg-yellow-400/5"
                          : platform.status === "Experimental"
                            ? "text-purple-400 border-purple-400/20 bg-purple-400/5"
                            : "text-cyan-400 border-cyan-400/20 bg-cyan-400/5"
                      }`}
                    >
                      {platform.status}
                    </div>
                  </div>

                  <h4 className="text-3xl font-black mb-4 italic tracking-tight relative z-10 uppercase">
                    {platform.name}
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6 relative z-10 font-medium italic">
                    {platform.description}
                  </p>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpandedPlatform(isExpanded ? null : idx)}
                    className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-400 hover:text-cyan-300 transition-colors relative z-10 mb-8 cursor-pointer"
                  >
                    {isExpanded ? "Collapse" : "Learn More"}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.25, 0.4, 0.25, 1],
                        }}
                        className="overflow-hidden relative z-10"
                      >
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                          {platform.details}
                        </p>
                        <div className="mb-8">
                          <p className="text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase mb-4">
                            Key Capabilities
                          </p>
                          <ul className="space-y-2">
                            {platform.capabilities.map((cap, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-3 text-sm text-gray-400 font-medium"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.color} shrink-0`}
                                />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto">
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/10 transition-all font-black text-xs uppercase tracking-[0.3em] relative z-10 overflow-hidden"
                    >
                      Access Node
                      <ArrowUpRight
                        size={22}
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform text-cyan-400"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover/link:opacity-10 transition-opacity`}
                      />
                    </a>
                  </div>

                  {/* Dynamic Border Glow */}
                  <div
                    className={`absolute -inset-px rounded-[40px] bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ===================================================
          AI TOOLS FOR BUSINESS
          =================================================== */}
      <AIToolsSection />

      {/* ===================================================
          ABOUT
          =================================================== */}
      <section
        id="about"
        className="py-20 md:py-40 relative bg-[#010103] border-y border-white/5 z-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <FadeIn>
              <div className="relative">
                <div className="w-full max-w-sm mx-auto lg:max-w-none aspect-square border border-white/10 rounded-[40px] md:rounded-[80px] p-4 rotate-3 group overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-orange-500/20" />
                  <div className="w-full h-full border border-white/10 rounded-[64px] flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="XenlixAI"
                      width={180}
                      height={180}
                      className="object-contain opacity-60 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-600/20 rounded-full blur-[80px]" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.6em] mb-6">
                  Xenlix Identity
                </h2>
                <h3 className="text-3xl sm:text-5xl font-black mb-6 md:mb-10 italic leading-tight uppercase tracking-tighter">
                  Purpose Built <br /> Intelligence.
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-loose mb-8 md:mb-12 font-medium italic">
                  Xenlix wasn&apos;t built to follow — it was built to redefine.
                  We engineer AI systems that don&apos;t just automate tasks —
                  they think, adapt, and evolve alongside the businesses they
                  power. Every product we ship is a living system — designed to
                  learn from the world it operates in and reshape it.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 shrink-0 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 italic font-black">
                      M
                    </div>
                    <div>
                      <h6 className="font-black text-xs uppercase tracking-widest mb-2">
                        Our Mission
                      </h6>
                      <p className="text-gray-500 text-sm italic">
                        To put the power of enterprise-grade AI into the hands
                        of every business — no matter the size. We build systems
                        that replace complexity with clarity, turning months of
                        manual work into seconds of intelligent execution.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 shrink-0 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center text-orange-400 italic font-black">
                      V
                    </div>
                    <div>
                      <h6 className="font-black text-xs uppercase tracking-widest mb-2">
                        Our Vision
                      </h6>
                      <p className="text-gray-500 text-sm italic">
                        A future where AI isn&apos;t a luxury — it&apos;s
                        infrastructure. We&apos;re building the neural backbone
                        of tomorrow&apos;s industries — where every customer
                        interaction, every decision, and every workflow is
                        amplified by intelligence that never sleeps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTACT
          =================================================== */}
      <section id="contact" className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-cyan-600 via-indigo-600 to-orange-600 rounded-[28px] md:rounded-[60px] p-[1px] shadow-2xl">
            <div className="bg-[#030306] rounded-[27px] md:rounded-[59px] p-6 sm:p-10 md:p-16 lg:p-24 relative overflow-hidden">
              {/* Background Abstract X */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[600px] font-black italic pointer-events-none select-none z-0 leading-none">
                X
              </div>

              <div className="grid lg:grid-cols-2 gap-12 md:gap-24 relative z-10 items-center">
                <FadeIn>
                  <div>
                    <h3 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 italic tracking-tighter uppercase leading-none">
                      Sync with <br />
                      <span className="text-cyan-400">The Network.</span>
                    </h3>
                    <p className="text-gray-400 text-base md:text-xl mb-10 md:mb-16 italic font-medium">
                      Ready to deploy? Contact our engineering team for
                      partnerships or platform inquiries.
                    </p>

                    <div className="space-y-10">
                      <a
                        href="mailto:xenlixai@gmail.com"
                        className="flex items-center gap-8 group"
                      >
                        <div className="w-16 h-16 bg-white/[0.03] rounded-3xl flex items-center justify-center text-cyan-400 border border-white/10 shadow-xl group-hover:border-cyan-500/30 transition-colors">
                          <Mail size={28} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 mb-2 uppercase">
                            Official Support
                          </p>
                          <p className="text-lg sm:text-2xl font-black tracking-tight italic">
                            support@xenlixai.com
                          </p>
                        </div>
                      </a>
                      <a
                        href="mailto:xenlixai@gmail.com"
                        className="flex items-center gap-8 group"
                      >
                        <div className="w-16 h-16 bg-white/[0.03] rounded-3xl flex items-center justify-center text-orange-500 border border-white/10 shadow-xl group-hover:border-orange-500/30 transition-colors">
                          <Globe size={28} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black tracking-[0.4em] text-gray-500 mb-2 uppercase">
                            Corporate Inquiries
                          </p>
                          <p className="text-lg sm:text-2xl font-black tracking-tight italic">
                            contact@xenlixai.com
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="bg-white/[0.03] p-6 sm:p-10 md:p-14 rounded-[24px] md:rounded-[50px] border border-white/10 backdrop-blur-3xl shadow-black shadow-2xl">
                    <AnimatePresence mode="wait">
                      {formStatus === "success" ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="flex flex-col items-center justify-center py-16 space-y-8"
                        >
                          {/* Animated check circle */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.2,
                              type: "spring",
                              stiffness: 200,
                              damping: 12,
                            }}
                            className="relative"
                          >
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 0.6, 0] }}
                              transition={{
                                delay: 0.3,
                                duration: 1.5,
                                repeat: 2,
                              }}
                              className="absolute inset-0 w-28 h-28 rounded-full bg-cyan-400/30 blur-xl"
                            />
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 0.4, 0] }}
                              transition={{
                                delay: 0.5,
                                duration: 2,
                                repeat: 2,
                              }}
                              className="absolute -inset-4 w-36 h-36 rounded-full bg-cyan-500/20 blur-2xl"
                            />
                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30 relative">
                              <motion.div
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                  delay: 0.5,
                                  duration: 0.6,
                                  ease: "easeOut",
                                }}
                              >
                                <Check
                                  size={48}
                                  strokeWidth={3}
                                  className="text-white"
                                />
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Success text */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="text-center space-y-3"
                          >
                            <h3 className="text-2xl sm:text-3xl font-black tracking-tight italic uppercase">
                              Transmission Received
                            </h3>
                            <p className="text-sm font-black tracking-[0.3em] text-gray-400 uppercase">
                              Neural link established successfully
                            </p>
                          </motion.div>

                          {/* Animated circuit lines */}
                          <div className="flex gap-3">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <motion.div
                                key={i}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                  delay: 0.8 + i * 0.1,
                                  duration: 0.4,
                                }}
                                className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
                              />
                            ))}
                          </div>

                          {/* Back to main button */}
                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            onClick={() => {
                              setFormStatus("idle");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="px-10 py-4 bg-white/[0.05] border border-white/10 text-white font-black text-xs tracking-[0.4em] uppercase rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all active:scale-[0.97]"
                          >
                            Return to Hub
                          </motion.button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 1 }}
                          exit={{
                            opacity: 0,
                            y: -20,
                            transition: { duration: 0.3 },
                          }}
                          onSubmit={async (e) => {
                            e.preventDefault();
                            setFormStatus("sending");
                            const form = e.currentTarget;
                            try {
                              const res = await fetch(
                                "https://formspree.io/f/mkopkbbz",
                                {
                                  method: "POST",
                                  body: new FormData(form),
                                  headers: { Accept: "application/json" },
                                },
                              );
                              if (res.ok) {
                                setFormStatus("success");
                              } else {
                                setFormStatus("idle");
                              }
                            } catch {
                              setFormStatus("idle");
                            }
                          }}
                          className="space-y-8"
                        >
                          <div className="grid gap-8">
                            <div className="relative group">
                              <input
                                type="text"
                                name="name"
                                placeholder="NAME"
                                required
                                disabled={formStatus === "sending"}
                                className="w-full bg-transparent border-b border-white/10 py-5 focus:outline-none focus:border-cyan-500 transition-all font-black text-xs tracking-[0.3em] uppercase placeholder:text-gray-700 disabled:opacity-50"
                              />
                            </div>
                            <div className="relative group">
                              <input
                                type="email"
                                name="email"
                                placeholder="EMAIL NODE"
                                required
                                disabled={formStatus === "sending"}
                                className="w-full bg-transparent border-b border-white/10 py-5 focus:outline-none focus:border-cyan-500 transition-all font-black text-xs tracking-[0.3em] uppercase placeholder:text-gray-700 disabled:opacity-50"
                              />
                            </div>
                          </div>
                          <div className="relative group">
                            <textarea
                              name="message"
                              placeholder="PROJECT SYNAPSE"
                              rows={4}
                              required
                              disabled={formStatus === "sending"}
                              className="w-full bg-transparent border-b border-white/10 py-5 focus:outline-none focus:border-cyan-500 transition-all font-black text-xs tracking-[0.3em] uppercase placeholder:text-gray-700 resize-none disabled:opacity-50"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={formStatus === "sending"}
                            className="w-full py-6 bg-white text-black font-black text-sm tracking-[0.4em] uppercase rounded-3xl hover:bg-cyan-400 transition-all shadow-xl active:scale-[0.98] mt-6 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                          >
                            {formStatus === "sending" ? (
                              <span className="flex items-center justify-center gap-3">
                                <motion.span
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                  className="inline-block w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                                />
                                Transmitting...
                              </span>
                            ) : (
                              "Initialize Contact"
                            )}
                          </button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

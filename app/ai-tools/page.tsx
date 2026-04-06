import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Phone,
  Bot,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Tools for Business — Chatbots, Voice Agents & Automation",
  description:
    "Explore XenlixAI's intelligent AI tools: customer chatbots, voice agents, and autonomous AI agents designed to automate communication, streamline operations, and enhance business efficiency.",
  alternates: { canonical: "/ai-tools" },
  openGraph: {
    title: "AI Tools for Business — XenlixAI",
    description:
      "Customer chatbots, voice agents, and autonomous AI agents to automate and enhance business operations.",
    url: "https://hub.xenlixai.com/ai-tools",
  },
};

const tools = [
  {
    name: "AI Customer Chatbots",
    slug: "ai-chatbots",
    description:
      "Intelligent conversational assistants designed to handle customer interactions, answer questions, and automate support.",
    icon: <MessageSquare size={28} />,
    color: "from-cyan-400 to-blue-600",
    overview:
      "AI chatbots simulate human-like conversations to assist users in real time. These systems can answer common questions, guide users through services, and reduce the workload on human support teams. By leveraging natural language processing and machine learning, chatbots understand context, learn from interactions, and deliver increasingly accurate responses over time.",
    howItWorks: [
      {
        step: "User Message",
        detail: "A customer sends a message through the chat interface.",
      },
      {
        step: "NLP Processing",
        detail:
          "The AI interprets the request using natural language processing to understand intent and context.",
      },
      {
        step: "Knowledge Retrieval",
        detail:
          "The system searches its knowledge base or generates a contextual response based on training data.",
      },
      {
        step: "Response Delivery",
        detail:
          "The customer receives an accurate, contextual reply within seconds.",
      },
    ],
    benefits: [
      "24/7 automated customer support without staff overhead",
      "Instant response times improving customer satisfaction",
      "Consistent answers across all customer interactions",
      "Scalable to handle thousands of simultaneous conversations",
      "Integration with existing CRM and helpdesk systems",
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification and generation",
      "Website visitor engagement",
      "Knowledge base assistance",
      "Appointment scheduling",
      "Order tracking and updates",
    ],
  },
  {
    name: "AI Voice Agents",
    slug: "ai-voice-agents",
    description:
      "Conversational AI systems capable of handling phone calls, responding to customers, and performing automated voice interactions.",
    icon: <Phone size={28} />,
    color: "from-indigo-500 to-purple-600",
    overview:
      "AI voice agents enable businesses to automate phone conversations while maintaining natural and engaging interactions with callers. Using advanced speech recognition and natural language understanding, voice agents handle inbound and outbound calls, schedule appointments, qualify leads, and provide information — all with human-like speech synthesis.",
    howItWorks: [
      {
        step: "Incoming Call",
        detail:
          "A call is received by the AI voice agent through the phone system.",
      },
      {
        step: "Speech Recognition",
        detail:
          "The AI processes spoken language in real-time, converting speech to text.",
      },
      {
        step: "Context Engine",
        detail:
          "The AI understands the caller's intent and generates an appropriate contextual response.",
      },
      {
        step: "Voice Synthesis",
        detail:
          "A natural-sounding voice delivers the response back to the caller.",
      },
    ],
    benefits: [
      "Handle hundreds of concurrent calls simultaneously",
      "Natural-sounding speech in 30+ languages",
      "Reduce call center costs by up to 80%",
      "No wait times for customers",
      "Seamless integration with SIP, Twilio, and VoIP platforms",
    ],
    useCases: [
      "Appointment scheduling",
      "Customer service call handling",
      "Sales call automation",
      "Information hotlines",
      "Survey collection",
      "Outbound notification calls",
    ],
  },
  {
    name: "Autonomous AI Agents",
    slug: "autonomous-ai-agents",
    description:
      "Advanced AI agents capable of performing complex tasks, analyzing information, and assisting with workflows independently.",
    icon: <Bot size={28} />,
    color: "from-orange-500 to-red-600",
    overview:
      "Autonomous AI agents act as intelligent assistants capable of reasoning through tasks, analyzing data, and executing multi-step processes. These agents can browse the web, gather research, compile reports, and complete complex workflows — operating independently while keeping humans informed of progress and results.",
    howItWorks: [
      {
        step: "Task Input",
        detail: "The user provides a task objective or research question.",
      },
      {
        step: "Analysis & Planning",
        detail:
          "The AI agent analyzes requirements and creates an execution plan.",
      },
      {
        step: "Data Gathering",
        detail:
          "The system browses sources, gathers relevant data, and cross-references information.",
      },
      {
        step: "Execution & Reporting",
        detail:
          "The AI completes the task and delivers organized results or reports.",
      },
    ],
    benefits: [
      "Automate hours of research into minutes",
      "Reduce human error in data gathering and analysis",
      "Handle complex multi-step workflows autonomously",
      "Generate structured reports with citations",
      "Scale task execution across multiple processes simultaneously",
    ],
    useCases: [
      "Market research automation",
      "Competitive analysis",
      "Report and document generation",
      "Business data analysis",
      "Content research and compilation",
      "Workflow process automation",
    ],
  },
];

const faqItems = [
  {
    question: "What types of AI tools does XenlixAI offer?",
    answer:
      "XenlixAI offers three core AI tool categories: AI Customer Chatbots for automated text-based support, AI Voice Agents for intelligent phone call handling, and Autonomous AI Agents for complex task automation and research.",
  },
  {
    question: "How do AI chatbots improve customer support?",
    answer:
      "AI chatbots provide 24/7 instant responses to customer inquiries, handle thousands of simultaneous conversations, deliver consistent answers, and integrate with existing CRM systems — reducing support costs while improving customer satisfaction.",
  },
  {
    question: "Can AI voice agents handle calls in multiple languages?",
    answer:
      "Yes, XenlixAI voice agents support 30+ languages with real-time translation and natural-sounding speech synthesis, allowing callers to communicate in their preferred language.",
  },
  {
    question: "What can autonomous AI agents do for businesses?",
    answer:
      "Autonomous AI agents can perform market research, compile competitive analysis reports, automate data gathering, generate structured documents, and execute complex multi-step workflows — saving hours of manual work.",
  },
  {
    question: "How do AI tools integrate with existing business systems?",
    answer:
      "XenlixAI tools integrate with popular platforms including CRM systems, helpdesk software, VoIP/telephony platforms (SIP, Twilio), and standard business APIs for seamless workflow integration.",
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

const softwareSchemas = tools.map((tool) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: tool.name,
  description: tool.description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for pricing",
  },
  creator: {
    "@type": "Organization",
    name: "XenlixAI",
  },
}));

export default function AIToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {softwareSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen pt-32 pb-20 relative">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] mb-4 text-center">
            Intelligence Suite
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-center italic tracking-tighter uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            AI Tools for Business
          </h1>
          <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed font-medium">
            Explore intelligent systems designed to automate communication,
            streamline operations, and enhance customer engagement through
            advanced artificial intelligence. Each tool is built to solve
            specific business challenges with measurable results.
          </p>
        </section>

        {/* Tools */}
        {tools.map((tool, idx) => (
          <section
            key={idx}
            id={tool.slug}
            className={`py-20 ${idx % 2 === 0 ? "bg-[#030306]" : ""} border-y border-white/5`}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                {/* Tool Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div
                    className={`w-16 h-16 rounded-[20px] bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-xl`}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black italic tracking-tight uppercase">
                      {tool.name}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-4">Overview</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {tool.overview}
                  </p>
                </div>

                {/* How It Works */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">How It Works</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tool.howItWorks.map((step, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white/[0.03] border border-white/10"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white text-xs font-black mb-4`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h4 className="font-bold text-sm uppercase tracking-wide mb-2">
                          {step.step}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits & Use Cases  */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {tool.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-400"
                        >
                          <CheckCircle
                            size={16}
                            className="text-cyan-400 shrink-0 mt-1"
                          />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Use Cases</h3>
                    <ul className="space-y-3">
                      {tool.useCases.map((uc, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-400"
                        >
                          <span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color} shrink-0`}
                          />
                          <span className="text-sm">{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="container mx-auto px-6 py-20">
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
            Bring AI Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
              Your Business
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg mb-10 font-medium leading-relaxed">
            Discover how intelligent automation can transform customer
            interactions, streamline operations, and unlock new levels of
            efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/platforms"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_-15px_rgba(6,182,212,0.4)]"
            >
              Explore Platforms
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all text-gray-300"
            >
              Contact XenlixAI
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

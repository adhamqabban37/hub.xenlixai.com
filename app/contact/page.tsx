"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { Mail, Globe, ArrowRight, Check } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/mkopkbbz", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("idle");
      }
    } catch {
      setFormStatus("idle");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20">
        <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em] mb-4 text-center">
          Get In Touch
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-center italic tracking-tighter uppercase mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Contact Us
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-400 text-lg leading-relaxed font-medium">
          Ready to explore how AI can transform your business? Contact our team
          for partnerships, platform inquiries, or to learn more about the
          XenlixAI ecosystem.
        </p>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-600 via-indigo-600 to-orange-600 rounded-[28px] md:rounded-[48px] p-[1px]">
          <div className="bg-[#030306] rounded-[27px] md:rounded-[47px] p-6 sm:p-10 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl sm:text-5xl font-black mb-6 italic tracking-tighter uppercase leading-none">
                  Connect with <span className="text-cyan-400">XenlixAI</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 font-medium">
                  Whether you have questions about our platforms, need AI
                  consultation, or want to discuss partnership opportunities —
                  we&apos;re here to help.
                </p>

                <div className="space-y-8">
                  <a
                    href="mailto:support@xenlixai.com"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center text-cyan-400 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.4em] text-gray-600 mb-1 uppercase">
                        Support
                      </p>
                      <p className="text-lg font-bold tracking-tight">
                        support@xenlixai.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@xenlixai.com"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white/[0.03] rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 group-hover:border-orange-500/30 transition-colors">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black tracking-[0.4em] text-gray-600 mb-1 uppercase">
                        Corporate
                      </p>
                      <p className="text-lg font-bold tracking-tight">
                        contact@xenlixai.com
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-3">
                    What to expect
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-500">•</span> Response within
                      24-48 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-500">•</span> Personalized
                      consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-500">•</span> No-obligation
                      discussion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-500">•</span> Partnership
                      opportunities available
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/[0.03] p-6 sm:p-10 rounded-[24px] border border-white/10">
                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 space-y-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                      <Check size={40} strokeWidth={3} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight italic uppercase">
                      Message Sent
                    </h3>
                    <p className="text-gray-400 text-center">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="px-8 py-3 bg-white/[0.05] border border-white/10 text-white font-black text-xs tracking-[0.3em] uppercase rounded-xl hover:bg-white/10 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        disabled={formStatus === "sending"}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all text-sm placeholder:text-gray-700 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        disabled={formStatus === "sending"}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all text-sm placeholder:text-gray-700 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help?"
                        rows={4}
                        required
                        disabled={formStatus === "sending"}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-cyan-500 transition-all text-sm placeholder:text-gray-700 resize-none disabled:opacity-50"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full py-5 bg-white text-black font-black text-sm tracking-[0.3em] uppercase rounded-2xl hover:bg-cyan-400 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formStatus === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-black italic tracking-tighter uppercase mb-6">
          Explore Before You Connect
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
            AI Tools
          </Link>
        </div>
      </section>
    </div>
  );
}

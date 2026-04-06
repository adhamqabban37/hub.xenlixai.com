"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Platforms", "AI Tools", "Tech", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl py-4 border-b border-white/5 shadow-2xl shadow-cyan-900/10"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-indigo-500/30 to-orange-500/30 opacity-40 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/logo.png"
                alt="XenlixAI"
                width={36}
                height={36}
                className="relative z-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none italic">
                XENLIX AI
              </span>
              <div className="flex items-center gap-1 mt-1">
                <span className="h-[1px] w-4 bg-cyan-500" />
                <span className="text-[9px] text-cyan-400 font-black tracking-[0.4em] uppercase">
                  Intelligence Node
                </span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-white transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="https://www.xenlixai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2.5 rounded-lg font-black hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-cyan-500/50"
            >
              X-CORE
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 text-4xl font-black italic tracking-tighter">
              {navItems.map((item, idx) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className={`hover:text-cyan-400 transition-colors ${
                    idx % 2 === 0 ? "text-white" : "text-orange-400"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;

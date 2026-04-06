import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-16 md:pt-40 pb-12 md:pb-20 border-t border-white/5 bg-[#010102] relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-32">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-10 group">
              <div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="XenlixAI"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-black italic tracking-tighter uppercase leading-none">
                Xenlix <br />
                <span className="text-xs tracking-[0.5em] text-cyan-500 not-italic uppercase font-black">
                  AI Systems
                </span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium italic">
              Engineering the synaptic link between raw circuit potential and
              fluid human productivity.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h6 className="text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase">
              System Nav
            </h6>
            <div className="flex flex-col gap-5 text-xs font-black text-gray-400 tracking-[0.2em] uppercase">
              <Link href="#home" className="hover:text-white transition-colors">
                01 / Home
              </Link>
              <Link
                href="#platforms"
                className="hover:text-white transition-colors"
              >
                02 / Platforms
              </Link>
              <Link href="#tech" className="hover:text-white transition-colors">
                03 / Tech
              </Link>
              <Link
                href="#about"
                className="hover:text-white transition-colors"
              >
                04 / About
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h6 className="text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase">
              Ecosystem
            </h6>
            <div className="flex flex-col gap-5 text-xs font-black text-gray-400 tracking-[0.2em] uppercase">
              <a
                href="https://www.xenlixai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                Core Node <ArrowUpRight size={14} />
              </a>
              <a
                href="https://agency.xenlixai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                Agency Lab <ArrowUpRight size={14} />
              </a>
              <a
                href="https://still-time-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                Still Time <ArrowUpRight size={14} />
              </a>
              <a
                href="https://npluspro.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                NPlusPro <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h6 className="text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase">
              Compliance
            </h6>
            <div className="flex flex-col gap-5 text-xs font-black text-gray-400 tracking-[0.2em] uppercase">
              <Link href="#" className="hover:text-white transition-colors">
                Security Protocol
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Node
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Neural
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-[10px] font-black tracking-[0.4em] text-gray-700 uppercase">
              © 2026 XenlixAI — Neural Authorization Confirmed
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <p className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase italic">
              Architected and Powered by{" "}
              <span className="text-white font-black hover:text-cyan-400 transition-colors cursor-pointer not-italic">
                QAB GLOBAL LLC
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

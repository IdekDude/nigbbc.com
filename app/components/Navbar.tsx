"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Collection", href: "#cigars" },
  { label: "Heritage",   href: "#heritage" },
  { label: "Process",    href: "#process" },
  { label: "Shop",       href: "#shop" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#070502]/96 backdrop-blur-md border-b border-[#c9a84c]/10" : ""
    }`}>
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <a href="#" className="select-none group">
          <span className="text-xl font-bold tracking-[0.2em] text-[#c9a84c] group-hover:text-[#e8c96a] transition-colors duration-300">
            NIGBBC
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="overline text-[#ede8df]/55 hover:text-[#c9a84c] transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a href="#shop" className="hidden lg:inline-flex btn-gold px-5 py-2 text-[10px] tracking-[0.2em] uppercase rounded-full">
            Order Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span className={`block h-px w-full bg-[#c9a84c] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px w-full bg-[#c9a84c] transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px w-full bg-[#c9a84c] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden transition-all duration-400 overflow-hidden bg-[#070502]/98 backdrop-blur-md border-b border-[#c9a84c]/10 ${open ? "max-h-80" : "max-h-0"}`}>
        <ul className="flex flex-col px-6 py-6 gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="overline text-[#ede8df]/60 hover:text-[#c9a84c] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#shop" onClick={() => setOpen(false)} className="btn-gold inline-flex px-6 py-3 text-[10px] tracking-[0.2em] uppercase rounded-full">
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

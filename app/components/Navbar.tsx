"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Our Cigars", href: "#cigars" },
  { label: "Heritage", href: "#heritage" },
  { label: "Process", href: "#process" },
  { label: "Shop", href: "#shop" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0e0700]/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none select-none">
          <span className="text-2xl font-bold tracking-widest text-[#c9a84c]">NIGBBC</span>
          <span className="text-[10px] tracking-[0.3em] text-[#9e9e8e] uppercase">
            Nicaraguan Great Big Brown Cigars
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-widest uppercase text-[#f5f0e8]/70 hover:text-[#c9a84c] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#shop"
          className="hidden md:inline-flex btn-gold px-6 py-2 text-xs tracking-widest uppercase rounded-full"
        >
          Order Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#c9a84c] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#c9a84c] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#c9a84c] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        } bg-[#0e0700]/98 backdrop-blur-sm`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-widest uppercase text-[#f5f0e8]/70 hover:text-[#c9a84c] transition-colors py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="inline-flex btn-gold px-6 py-2 text-xs tracking-widest uppercase rounded-full mt-2"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

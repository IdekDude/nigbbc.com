const navCols = [
  {
    heading: "Shop",
    links: ["Sampler Box", "Connoisseur's Box", "Gran Reserva Cabinet", "All Cigars"],
  },
  {
    heading: "Company",
    links: ["Our Heritage", "The Process", "Master Blender", "Careers"],
  },
  {
    heading: "Support",
    links: ["Shipping & Returns", "Age Verification", "Wholesale", "Contact Us"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#070400] px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* Top: brand + nav */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-widest text-[#c9a84c] mb-1">NIGBBC</div>
            <div className="text-[9px] tracking-[0.35em] text-[#9e9e8e] uppercase mb-5">
              Nicaraguan Great Big Brown Cigars
            </div>
            <p className="text-[#f5f0e8]/35 text-xs leading-relaxed">
              Handrolled in Estelí, Nicaragua.<br />
              Aged 3+ years in Spanish cedar.<br />
              Est. 1987.
            </p>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <p className="text-[#c9a84c]/60 text-[10px] tracking-[0.4em] uppercase mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[#f5f0e8]/35 text-sm hover:text-[#c9a84c] transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.2), transparent)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f5f0e8]/20">
          <p>© {new Date().getFullYear()} NIGBBC. All rights reserved. Handcrafted in Estelí, Nicaragua.</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Age Verification"].map((l) => (
              <a key={l} href="#" className="hover:text-[#c9a84c] transition-colors tracking-wider uppercase text-[10px]">
                {l}
              </a>
            ))}
          </div>
          <p className="italic text-[#f5f0e8]/18">You must be 21 or older to purchase.</p>
        </div>

      </div>
    </footer>
  );
}

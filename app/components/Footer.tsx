const cols = [
  {
    heading: "Shop",
    links: [
      { label: "Sampler Box",          href: "#shop" },
      { label: "Connoisseur's Box",    href: "#shop" },
      { label: "Gran Reserva Cabinet", href: "#shop" },
      { label: "All Cigars",           href: "#cigars" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Heritage",      href: "#heritage" },
      { label: "The Process",   href: "#process" },
      { label: "Master Blender", href: "#heritage" },
      { label: "Contact Us",    href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",    href: "#" },
      { label: "Terms of Service",  href: "#" },
      { label: "Age Verification",  href: "#" },
      { label: "Shipping Policy",   href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#040301] border-t border-[#c9a84c]/8 px-6 pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand — takes 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-2xl font-bold tracking-[0.2em] text-[#c9a84c] mb-1">NIGBBC</p>
            <p className="overline text-[#9e9e8e]/70 mb-6">Nicaraguan Great Big Brown Cigars</p>
            <p className="text-[#ede8df]/30 text-xs leading-relaxed max-w-xs">
              Handrolled in Estelí, Nicaragua by master torcedores.
              Aged 3+ years in Spanish cedar. Est. 1987.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {["IG", "FB", "X"].map(s => (
                <a key={s} href="#" className="w-8 h-8 rounded-full border border-[#c9a84c]/15 flex items-center justify-center overline text-[#ede8df]/30 hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all duration-200" style={{ fontSize: "0.5rem" }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="overline text-[#c9a84c]/45 mb-6">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[#ede8df]/30 text-xs hover:text-[#c9a84c] transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#c9a84c]/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#ede8df]/18 text-[10px]">
          <p>© {new Date().getFullYear()} NIGBBC. All rights reserved. Handcrafted in Estelí, Nicaragua.</p>
          <p className="italic">You must be 21 or older to purchase tobacco products.</p>
        </div>

      </div>
    </footer>
  );
}

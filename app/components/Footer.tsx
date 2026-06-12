export default function Footer() {
  return (
    <footer className="border-t border-[#c9a84c]/10 bg-[#070400] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-widest text-[#c9a84c] mb-1">NIGBBC</div>
            <div className="text-[9px] tracking-[0.35em] text-[#9e9e8e] uppercase">
              Nicaraguan Great Big Brown Cigars
            </div>
          </div>

          <div className="flex gap-8 text-xs tracking-widest uppercase text-[#f5f0e8]/30">
            {["Privacy", "Terms", "Age Verification"].map((l) => (
              <a key={l} href="#" className="hover:text-[#c9a84c] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="section-divider w-full h-px my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f5f0e8]/25">
          <p>© {new Date().getFullYear()} NIGBBC. All rights reserved. Handcrafted in Estelí, Nicaragua.</p>
          <p className="italic">You must be 21 or older to purchase. Smoke responsibly.</p>
        </div>
      </div>
    </footer>
  );
}

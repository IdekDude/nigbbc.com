export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0e0700]" />
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(61,31,0,0.55) 0%, transparent 70%)",
        }}
      />

      {/* Atmospheric rings — purely decorative */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-[#c9a84c]/5" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-[#c9a84c]/4" />
        <div className="absolute w-[1100px] h-[1100px] rounded-full border border-[#c9a84c]/3" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-16 text-center">
        {/* Founding note */}
        <p className="text-[#c9a84c]/60 text-[11px] tracking-[0.55em] uppercase mb-10">
          Est. 1987 &nbsp;·&nbsp; Estelí, Nicaragua
        </p>

        {/* Wordmark */}
        <h1 className="text-[clamp(4.5rem,14vw,9rem)] font-bold tracking-[0.12em] leading-none text-[#f5f0e8] mb-4">
          NIGBBC
        </h1>

        {/* Rule */}
        <div className="w-40 h-px mb-5" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

        <p className="text-[#c9a84c] text-[11px] tracking-[0.55em] uppercase mb-12">
          Nicaraguan Great Big Brown Cigars
        </p>

        {/* Cigar illustration */}
        <div className="mb-14 w-full max-w-sm mx-auto">
          <svg viewBox="0 0 400 80" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="28" width="320" height="24" rx="12" fill="url(#hcigarGrad)" />
            <line x1="80"  y1="28" x2="90"  y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.4" />
            <line x1="140" y1="28" x2="150" y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.4" />
            <line x1="200" y1="28" x2="210" y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.4" />
            <line x1="260" y1="28" x2="270" y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.4" />
            <rect x="100" y="26" width="60" height="28" rx="2" fill="url(#hbandGrad)" />
            <text x="130" y="44" textAnchor="middle" fill="#0e0700" fontSize="7" fontFamily="Georgia" fontWeight="bold" letterSpacing="2">NIGBBC</text>
            <ellipse cx="340" cy="40" rx="18" ry="12" fill="url(#hcapGrad)" />
            <ellipse cx="20"  cy="40" rx="10" ry="10" fill="#ff6b1a" opacity="0.75" />
            <ellipse cx="20"  cy="40" rx="6"  ry="6"  fill="#ffaa44" opacity="0.9" />
            <ellipse cx="20"  cy="40" rx="3"  ry="3"  fill="#fff"    opacity="0.55" />
            <rect x="3" y="34" width="15" height="12" rx="6" fill="url(#hashGrad)" />
            <defs>
              <linearGradient id="hcigarGrad" x1="0" y1="28" x2="0" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#8B5C2A" />
                <stop offset="40%"  stopColor="#6b3a1f" />
                <stop offset="100%" stopColor="#3d1f00" />
              </linearGradient>
              <linearGradient id="hbandGrad" x1="100" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#b8892a" />
                <stop offset="50%"  stopColor="#e8c96a" />
                <stop offset="100%" stopColor="#b8892a" />
              </linearGradient>
              <linearGradient id="hcapGrad" x1="322" y1="28" x2="358" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#8B5C2A" />
                <stop offset="100%" stopColor="#4a2a0a" />
              </linearGradient>
              <linearGradient id="hashGrad" x1="3" y1="34" x2="18" y2="46" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#ccc8c0" />
                <stop offset="100%" stopColor="#8a8880" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Tagline */}
        <p className="text-[#f5f0e8]/50 text-base max-w-md mx-auto leading-relaxed mb-12 italic">
          Born from volcanic soil. Rolled by master torcedores.
          Finished for those who demand the extraordinary.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#cigars" className="btn-gold px-10 py-4 text-xs tracking-[0.2em] uppercase rounded-full">
            Explore Collection
          </a>
          <a href="#heritage" className="px-10 py-4 text-xs tracking-[0.2em] uppercase rounded-full border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors duration-300">
            Our Story
          </a>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center md:justify-between gap-4 text-[10px] tracking-[0.35em] uppercase text-[#f5f0e8]/30">
          <span>100% Handmade</span>
          <span className="hidden md:block text-[#c9a84c]/20">·</span>
          <span>Aged 3+ Years in Spanish Cedar</span>
          <span className="hidden md:block text-[#c9a84c]/20">·</span>
          <span>Rated 98 — Gran Reserva Oscuro</span>
          <span className="hidden md:block text-[#c9a84c]/20">·</span>
          <span>Free Shipping over $150</span>
        </div>
      </div>
    </section>
  );
}

const ticker = [
  "100% Handmade",
  "Aged 3+ Years",
  "Estelí, Nicaragua",
  "Gran Reserva — 98 pts",
  "Est. 1987",
  "Master Torcedores",
  "Free Shipping over $150",
  "Four Generations",
];

export default function Hero() {
  const track = [...ticker, ...ticker];

  return (
    <section className="relative min-h-screen flex flex-col bg-[#070502] overflow-hidden">
      {/* Radial warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(50,22,0,0.7) 0%, transparent 70%)" }}
      />

      {/* Top meta bar */}
      <div className="relative z-10 border-b border-[#c9a84c]/8 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3 flex justify-between items-center">
          <span className="overline text-[#c9a84c]/40">Est. 1987</span>
          <span className="overline text-[#c9a84c]/40 hidden sm:block">Estelí · Nicaragua · 13°N 86°W</span>
          <span className="overline text-[#c9a84c]/40">nigbbc.com</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 md:px-10 py-16">

        {/* Overline */}
        <p className="overline text-[#c9a84c]/60 mb-8">
          Nicaraguan Great Big Brown Cigars
        </p>

        {/* Giant wordmark — fills width */}
        <h1
          className="font-bold leading-none text-[#ede8df] mb-6 tracking-tight"
          style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
        >
          NIGBBC
        </h1>

        {/* Gold rule under wordmark */}
        <div className="rule-gold w-full mb-10" />

        {/* Two-column bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">
          {/* Left: cigar illustration */}
          <div>
            <svg viewBox="0 0 420 90" className="w-full max-w-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="28" width="348" height="34" rx="17" fill="url(#hGradBody)" />
              {[75,140,205,270,335].map(x => (
                <line key={x} x1={x} y1="28" x2={x+12} y2="62" stroke="#8B5C2A" strokeWidth="0.6" opacity="0.4" />
              ))}
              <rect x="104" y="25" width="65" height="40" rx="2" fill="url(#hGradBand)" />
              <text x="136" y="50" textAnchor="middle" fill="#07050 2" fontSize="7" fontFamily="Georgia" fontWeight="bold" letterSpacing="2">NIGBBC</text>
              <ellipse cx="366" cy="45" rx="21" ry="17" fill="url(#hGradCap)" />
              <ellipse cx="18"  cy="45" rx="11" ry="11" fill="#ff6b1a" opacity="0.8" />
              <ellipse cx="18"  cy="45" rx="6"  ry="6"  fill="#ffaa44" opacity="0.9" />
              <ellipse cx="18"  cy="45" rx="3"  ry="3"  fill="#fff"    opacity="0.5" />
              <rect x="2" y="37" width="14" height="16" rx="7" fill="url(#hGradAsh)" />
              <defs>
                <linearGradient id="hGradBody" x1="0" y1="28" x2="0" y2="62" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#9B6C3A" />
                  <stop offset="45%"  stopColor="#7B4A25" />
                  <stop offset="100%" stopColor="#3d1f00" />
                </linearGradient>
                <linearGradient id="hGradBand" x1="104" y1="0" x2="169" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#9b7022" />
                  <stop offset="50%"  stopColor="#e8c96a" />
                  <stop offset="100%" stopColor="#9b7022" />
                </linearGradient>
                <linearGradient id="hGradCap" x1="345" y1="28" x2="387" y2="62" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#8B5C2A" />
                  <stop offset="100%" stopColor="#3a1a00" />
                </linearGradient>
                <linearGradient id="hGradAsh" x1="2" y1="37" x2="16" y2="53" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#c8c4bc" />
                  <stop offset="100%" stopColor="#888480" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right: tagline + CTAs */}
          <div>
            <p className="text-[#ede8df]/50 text-base leading-relaxed mb-8 max-w-sm italic">
              Born from volcanic soil. Finished by master torcedores. For those who demand the extraordinary.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cigars" className="btn-gold px-8 py-3 text-[10px] tracking-[0.2em] uppercase rounded-full">
                Explore Collection
              </a>
              <a href="#heritage" className="btn-outline-gold px-8 py-3 text-[10px] tracking-[0.2em] uppercase rounded-full">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-[#c9a84c]/10 py-3 overflow-hidden">
        <div className="ticker-track">
          {track.map((item, i) => (
            <span key={i} className="overline text-[#c9a84c]/35 whitespace-nowrap px-8">
              {item}
              <span className="mx-8 text-[#c9a84c]/20">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

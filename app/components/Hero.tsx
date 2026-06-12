export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0700] via-[#1a0d00] to-[#0e0700]" />

      {/* Atmospheric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-[#c9a84c]/5 animate-pulse" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-[#c9a84c]/5" style={{ animationDelay: "1s" }} />
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-[#c9a84c]/3" />
      </div>

      {/* Smoke particles */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="smoke-particle w-8 h-8 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(200,180,140,0.15) 0%, transparent 70%)",
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-in-up animate-delay-100">
          <span className="section-divider w-12 h-px block" />
          <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
            Est. Nicaragua
          </span>
          <span className="section-divider w-12 h-px block" />
        </div>

        {/* Main headline */}
        <h1 className="opacity-0 animate-fade-in-up animate-delay-200">
          <span className="block text-[clamp(3rem,10vw,7rem)] font-bold tracking-[0.15em] leading-none text-[#f5f0e8]">
            NIGBBC
          </span>
          <span className="block text-[clamp(0.9rem,2.5vw,1.5rem)] tracking-[0.5em] uppercase text-[#c9a84c] mt-4 font-light">
            Nicaraguan Great Big Brown Cigars
          </span>
        </h1>

        {/* Cigar illustration — ASCII-style SVG */}
        <div className="my-12 flex justify-center opacity-0 animate-fade-in-up animate-delay-300">
          <svg
            viewBox="0 0 400 80"
            className="w-full max-w-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cigar body */}
            <rect x="20" y="28" width="320" height="24" rx="12" fill="url(#cigarGrad)" />
            {/* Wrapper leaf veins */}
            <line x1="80" y1="28" x2="90" y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.5" />
            <line x1="140" y1="28" x2="150" y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.5" />
            <line x1="200" y1="28" x2="210" y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.5" />
            <line x1="260" y1="28" x2="270" y2="52" stroke="#b8892a" strokeWidth="0.5" opacity="0.5" />
            {/* Band */}
            <rect x="100" y="26" width="60" height="28" rx="2" fill="url(#bandGrad)" />
            <text x="130" y="44" textAnchor="middle" fill="#0e0700" fontSize="7" fontFamily="Georgia" fontWeight="bold" letterSpacing="2">NIGBBC</text>
            {/* Cap */}
            <ellipse cx="340" cy="40" rx="18" ry="12" fill="url(#capGrad)" />
            {/* Foot / lit end */}
            <ellipse cx="20" cy="40" rx="10" ry="10" fill="#ff6b1a" opacity="0.8" />
            <ellipse cx="20" cy="40" rx="6" ry="6" fill="#ffaa44" opacity="0.9" />
            <ellipse cx="20" cy="40" rx="3" ry="3" fill="#ffffff" opacity="0.6" />
            {/* Ash */}
            <rect x="3" y="34" width="15" height="12" rx="6" fill="url(#ashGrad)" />

            <defs>
              <linearGradient id="cigarGrad" x1="0" y1="28" x2="0" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8B5C2A" />
                <stop offset="40%" stopColor="#6b3a1f" />
                <stop offset="100%" stopColor="#3d1f00" />
              </linearGradient>
              <linearGradient id="bandGrad" x1="100" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#b8892a" />
                <stop offset="50%" stopColor="#e8c96a" />
                <stop offset="100%" stopColor="#b8892a" />
              </linearGradient>
              <linearGradient id="capGrad" x1="322" y1="28" x2="358" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8B5C2A" />
                <stop offset="100%" stopColor="#4a2a0a" />
              </linearGradient>
              <linearGradient id="ashGrad" x1="3" y1="34" x2="18" y2="46" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ccc8c0" />
                <stop offset="100%" stopColor="#8a8880" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Tagline */}
        <p className="text-[#f5f0e8]/60 text-lg max-w-xl mx-auto leading-relaxed mb-10 opacity-0 animate-fade-in-up animate-delay-500 italic">
          &ldquo;Born from volcanic soil. Rolled by master torcedores.
          Finished for those who demand the extraordinary.&rdquo;
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#cigars"
            className="btn-gold px-10 py-4 text-sm tracking-[0.2em] uppercase rounded-full inline-block"
          >
            Explore Collection
          </a>
          <a
            href="#heritage"
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase rounded-full border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-colors duration-300 inline-block"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>
    </section>
  );
}

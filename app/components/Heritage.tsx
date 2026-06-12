const stats = [
  { value: "1987", label: "Founded" },
  { value: "3+", label: "Years Aged" },
  { value: "100%", label: "Handmade" },
  { value: "28", label: "Blenders" },
];

export default function Heritage() {
  return (
    <section id="heritage" className="py-28 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[#0a0600]" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(201,168,76,0.03) 40px,
            rgba(201,168,76,0.03) 80px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="section-divider w-16 h-px block" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">Our Heritage</span>
            <span className="section-divider w-16 h-px block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-[#f5f0e8] mb-6">
            Born from Volcanic Earth
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-[#f5f0e8]/70 text-lg leading-relaxed">
              In the fertile valleys between Estelí and Jalapa, where the mineral-rich volcanic
              soil meets the perfect blend of humidity and altitude, the NIGBBC legacy was born.
              Our family has cultivated tobacco on the same land for four generations.
            </p>
            <p className="text-[#f5f0e8]/70 leading-relaxed">
              Every leaf is hand-selected by our master blender, Don Carlos Ruiz, who learned the
              craft from his grandfather. We age our fillers and binders a minimum of three years
              in Spanish cedar rooms before they ever meet a torcedor&apos;s hands.
            </p>
            <p className="text-[#f5f0e8]/70 leading-relaxed">
              The result is a smoke that can&apos;t be hurried, can&apos;t be faked, and can&apos;t be
              forgotten — a true Nicaraguan great big brown cigar.
            </p>
            <div className="pt-4">
              <a
                href="#process"
                className="inline-flex items-center gap-3 text-[#c9a84c] text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300"
              >
                See the Process
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Map / Illustration */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl border border-[#c9a84c]/20 bg-gradient-to-br from-[#1a0d00] to-[#0a0500] flex items-center justify-center p-8">
              <svg viewBox="0 0 300 300" className="w-full opacity-80" fill="none">
                {/* Nicaragua silhouette (stylized) */}
                <path
                  d="M80 80 Q100 60 130 65 Q160 55 190 70 Q220 80 230 100 Q240 130 225 155 Q210 180 200 200 Q185 220 165 230 Q140 240 120 225 Q95 215 85 195 Q65 170 70 145 Q60 120 80 80Z"
                  fill="rgba(107,58,31,0.3)"
                  stroke="rgba(201,168,76,0.4)"
                  strokeWidth="1.5"
                />
                {/* Estelí marker */}
                <circle cx="150" cy="130" r="6" fill="#c9a84c" />
                <circle cx="150" cy="130" r="12" fill="rgba(201,168,76,0.2)" />
                <circle cx="150" cy="130" r="18" fill="rgba(201,168,76,0.1)" />
                <text x="165" y="125" fill="#c9a84c" fontSize="10" fontFamily="Georgia">Estelí</text>
                <text x="165" y="137" fill="rgba(201,168,76,0.6)" fontSize="7" fontFamily="Georgia">Cigar Capital</text>

                {/* Jalapa marker */}
                <circle cx="180" cy="100" r="4" fill="#b8892a" opacity="0.7" />
                <text x="188" y="100" fill="rgba(201,168,76,0.6)" fontSize="8" fontFamily="Georgia">Jalapa</text>

                {/* Decorative compass */}
                <g transform="translate(240, 240)">
                  <circle r="20" fill="none" stroke="rgba(201,168,76,0.2)" />
                  <line x1="0" y1="-15" x2="0" y2="15" stroke="rgba(201,168,76,0.4)" />
                  <line x1="-15" y1="0" x2="15" y2="0" stroke="rgba(201,168,76,0.4)" />
                  <text x="-3" y="-18" fill="rgba(201,168,76,0.6)" fontSize="8">N</text>
                </g>
              </svg>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 -right-4 bg-[#c9a84c] text-[#0e0700] px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase">
              Estelí, Nicaragua
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[#c9a84c]/10 rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#0e0700]/80 px-8 py-10 text-center hover:bg-[#1a0d00]/80 transition-colors"
            >
              <div className="text-4xl font-bold text-[#c9a84c] mb-2">{s.value}</div>
              <div className="text-[#f5f0e8]/40 text-xs tracking-[0.3em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

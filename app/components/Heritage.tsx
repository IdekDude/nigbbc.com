export default function Heritage() {
  return (
    <section id="heritage" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0600]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Top: split layout — big number left, intro text right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-4">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-6">Our Heritage</p>
            <div className="text-[11rem] leading-none font-bold text-[#c9a84c]/10 select-none -ml-2">
              1987
            </div>
          </div>
          <div className="lg:col-span-8 pb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] leading-tight mb-8">
              Born from volcanic earth,<br />
              finished by steady hands.
            </h2>
            <p className="text-[#f5f0e8]/60 text-lg leading-relaxed max-w-xl">
              In the fertile valleys between Estelí and Jalapa, where mineral-rich volcanic
              soil meets the perfect blend of humidity and altitude, the NIGBBC legacy took root.
              Our family has cultivated tobacco on the same land for four generations.
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="border-l-2 border-[#c9a84c]/40 pl-8 mb-24 max-w-3xl">
          <blockquote className="text-2xl md:text-3xl font-light italic text-[#f5f0e8]/65 leading-relaxed">
            &ldquo;Every leaf is hand-selected by our master blender, Don Carlos Ruiz —
            who learned the craft from his grandfather. We age our fillers and binders
            a minimum of three years in Spanish cedar rooms before they ever meet
            a torcedor&apos;s hands.&rdquo;
          </blockquote>
        </div>

        {/* Two-column: map + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Map */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl border border-[#c9a84c]/15 bg-gradient-to-br from-[#1a0d00] to-[#0a0500] flex items-center justify-center p-8">
              <svg viewBox="0 0 300 300" className="w-full opacity-80" fill="none">
                <path
                  d="M80 80 Q100 60 130 65 Q160 55 190 70 Q220 80 230 100 Q240 130 225 155 Q210 180 200 200 Q185 220 165 230 Q140 240 120 225 Q95 215 85 195 Q65 170 70 145 Q60 120 80 80Z"
                  fill="rgba(107,58,31,0.25)"
                  stroke="rgba(201,168,76,0.35)"
                  strokeWidth="1.5"
                />
                <circle cx="150" cy="130" r="5"  fill="#c9a84c" />
                <circle cx="150" cy="130" r="12" fill="rgba(201,168,76,0.15)" />
                <circle cx="150" cy="130" r="20" fill="rgba(201,168,76,0.07)" />
                <text x="165" y="125" fill="#c9a84c"              fontSize="10" fontFamily="Georgia">Estelí</text>
                <text x="165" y="138" fill="rgba(201,168,76,0.5)" fontSize="7"  fontFamily="Georgia">Cigar Capital</text>
                <circle cx="178" cy="98" r="3" fill="#b8892a" opacity="0.6" />
                <text x="185" y="100" fill="rgba(201,168,76,0.5)" fontSize="7" fontFamily="Georgia">Jalapa</text>
                <g transform="translate(242, 242)">
                  <circle r="18" fill="none" stroke="rgba(201,168,76,0.18)" />
                  <line x1="0" y1="-13" x2="0" y2="13" stroke="rgba(201,168,76,0.35)" />
                  <line x1="-13" y1="0" x2="13" y2="0" stroke="rgba(201,168,76,0.35)" />
                  <text x="-3" y="-16" fill="rgba(201,168,76,0.5)" fontSize="8">N</text>
                </g>
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#c9a84c] text-[#0e0700] px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase">
              Estelí, Nicaragua
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-[#f5f0e8]/65 leading-relaxed">
              The result is a smoke that can&apos;t be hurried, can&apos;t be faked, and can&apos;t be
              forgotten. A true Nicaraguan great big brown cigar.
            </p>
            <p className="text-[#f5f0e8]/65 leading-relaxed">
              At 900 meters elevation, the alternating dry and rainy seasons create a natural
              stress in the plant that concentrates flavor. Our volcanic soils carry minerals
              that no other region on earth can replicate.
            </p>
            <a
              href="#process"
              className="inline-flex items-center gap-3 text-[#c9a84c] text-sm tracking-widest uppercase hover:gap-5 transition-all duration-300"
            >
              See the Process
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Stats — horizontal rule style, not card grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c9a84c]/10 border border-[#c9a84c]/10 rounded-2xl overflow-hidden">
          {[
            { value: "1987", label: "Founded" },
            { value: "3+",   label: "Years Aged" },
            { value: "100%", label: "Handmade" },
            { value: "28",   label: "Blenders" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0e0700]/70 px-8 py-10 text-center">
              <div className="text-4xl font-bold text-[#c9a84c] mb-2">{s.value}</div>
              <div className="text-[#f5f0e8]/35 text-[10px] tracking-[0.35em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

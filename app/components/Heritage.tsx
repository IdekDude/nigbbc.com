export default function Heritage() {
  return (
    <section id="heritage" className="bg-[#070502] py-28 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Chapter opener — massive number, full bleed */}
        <div className="relative mb-20 pb-16 border-b border-[#c9a84c]/10">
          {/* Huge watermark number */}
          <div
            className="absolute -top-6 -left-4 select-none pointer-events-none font-bold text-[#c9a84c]/[0.04] leading-none"
            style={{ fontSize: "clamp(8rem, 28vw, 22rem)" }}
            aria-hidden="true"
          >
            IV
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="overline text-[#c9a84c]/55 mb-6">Our Heritage</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ede8df] leading-[1.05]">
                Four generations.<br />
                One obsession.
              </h2>
            </div>
            <div className="flex flex-col justify-end pb-1">
              <p className="text-[#ede8df]/50 leading-relaxed">
                In the fertile valleys between Estelí and Jalapa, where mineral-rich volcanic
                soil meets the precise blend of humidity and altitude that no other region
                on earth can replicate — this is where NIGBBC was born in 1987.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column feature: map + story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Map */}
          <div className="lg:col-span-5">
            <div className="aspect-square rounded-2xl border border-[#c9a84c]/12 bg-[#0e0900] flex items-center justify-center p-8 relative">
              <svg viewBox="0 0 300 300" className="w-full" fill="none">
                <path
                  d="M80 80 Q100 60 130 65 Q160 55 190 70 Q220 80 230 100 Q240 130 225 155 Q210 180 200 200 Q185 220 165 230 Q140 240 120 225 Q95 215 85 195 Q65 170 70 145 Q60 120 80 80Z"
                  fill="rgba(107,58,31,0.18)"
                  stroke="rgba(201,168,76,0.28)"
                  strokeWidth="1.5"
                />
                <circle cx="150" cy="130" r="4"  fill="#c9a84c" />
                <circle cx="150" cy="130" r="10" fill="rgba(201,168,76,0.12)" />
                <circle cx="150" cy="130" r="18" fill="rgba(201,168,76,0.06)" />
                <text x="162" y="126" fill="#c9a84c"              fontSize="10" fontFamily="Georgia">Estelí</text>
                <text x="162" y="139" fill="rgba(201,168,76,0.45)" fontSize="7"  fontFamily="Georgia">Cigar Capital</text>
                <circle cx="178" cy="97" r="3" fill="#b8892a" opacity="0.55" />
                <text x="185" y="99" fill="rgba(201,168,76,0.45)" fontSize="7" fontFamily="Georgia">Jalapa</text>
                <g transform="translate(245, 245)">
                  <circle r="17" fill="none" stroke="rgba(201,168,76,0.15)" />
                  <line x1="0" y1="-12" x2="0" y2="12" stroke="rgba(201,168,76,0.3)" />
                  <line x1="-12" y1="0" x2="12" y2="0" stroke="rgba(201,168,76,0.3)" />
                  <text x="-3" y="-15" fill="rgba(201,168,76,0.45)" fontSize="8">N</text>
                </g>
              </svg>
              <div className="absolute -bottom-4 right-6 bg-[#c9a84c] text-[#07050 2] px-4 py-1.5 rounded-lg overline font-bold">
                Estelí, Nicaragua
              </div>
            </div>

            {/* Stats beside map */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { v: "1987", l: "Founded" },
                { v: "3+",   l: "Years Aged" },
                { v: "100%", l: "Handmade" },
                { v: "28",   l: "Blenders" },
              ].map(s => (
                <div key={s.l} className="bg-[#0e0900] rounded-xl border border-[#c9a84c]/8 p-5">
                  <p className="text-3xl font-bold text-[#c9a84c] mb-1">{s.v}</p>
                  <p className="overline text-[#ede8df]/30">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-7">
              <p className="text-xl md:text-2xl font-light italic text-[#ede8df]/65 leading-relaxed">
                &ldquo;Every leaf is hand-selected by Don Carlos Ruiz — who learned the craft
                from his grandfather. We age our fillers a minimum of three years in Spanish
                cedar rooms before they ever meet a torcedor&apos;s hands.&rdquo;
              </p>
            </blockquote>

            <p className="text-[#ede8df]/55 leading-relaxed">
              At 900 meters elevation, the alternating dry and wet seasons create natural stress
              in the plant that concentrates flavor. Our volcanic soils carry minerals no other
              region can replicate.
            </p>
            <p className="text-[#ede8df]/55 leading-relaxed">
              The result is a smoke that can&apos;t be hurried, can&apos;t be faked, and can&apos;t be
              forgotten — a true Nicaraguan great big brown cigar.
            </p>

            <div className="pt-4">
              <a href="#process" className="inline-flex items-center gap-3 text-[#c9a84c] overline hover:gap-5 transition-all duration-300">
                See the Process <span className="text-base">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

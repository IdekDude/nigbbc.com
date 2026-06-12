const cigars = [
  {
    name: "The Managua Maduro",
    vitola: "Toro · 6 × 52",
    wrapper: "Nicaraguan Maduro",
    strength: "Full",
    notes: "Dark chocolate, espresso, cedar, leather — long, sweet finish",
    price: "$24",
    accent: "#8B5C2A",
    rating: "96",
  },
  {
    name: "Volcán Colorado",
    vitola: "Robusto · 5 × 50",
    wrapper: "Colorado Claro",
    strength: "Medium-Full",
    notes: "Toasted nuts, black pepper, honey, aged tobacco with earthy complexity",
    price: "$19",
    accent: "#a0723a",
    rating: "94",
  },
  {
    name: "Plata Natural",
    vitola: "Corona · 5.5 × 44",
    wrapper: "Natural Habano",
    strength: "Medium",
    notes: "Cream, almond, dried fruit, white pepper — elegant and balanced",
    price: "$16",
    accent: "#b8892a",
    rating: "92",
  },
];

const featured = {
  name: "Gran Reserva Oscuro",
  vitola: "Churchill · 7 × 48",
  wrapper: "Oscuro Ligero",
  strength: "Full",
  notes: "Dark fruit, molasses, smoked oak, clove. A monument of Nicaraguan craft — complex from the first inch to the last.",
  price: "$32",
  accent: "#6b3a1f",
  rating: "98",
  year: "2019 Harvest",
};

function StrengthBar({ level }: { level: string }) {
  const map: Record<string, number> = { Mild: 1, Medium: 2, "Medium-Full": 3, Full: 4 };
  const filled = map[level] ?? 2;
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-5 h-0.5 ${i <= filled ? "bg-[#c9a84c]" : "bg-[#c9a84c]/20"}`} />
        ))}
      </div>
      <span className="text-[10px] tracking-widest uppercase text-[#f5f0e8]/40">{level}</span>
    </div>
  );
}

export default function CigarCollection() {
  return (
    <section id="cigars" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section label — left-aligned, no centered divider pattern */}
        <div className="mb-16">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-4">The Collection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-wide leading-tight max-w-xl">
            Four blends.<br />One standard.
          </h2>
        </div>

        {/* Featured cigar — full width */}
        <div className="mb-6 rounded-2xl border border-[#c9a84c]/25 bg-gradient-to-r from-[#1a0d00] to-[#0a0500] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: info */}
            <div className="p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/60">{featured.year}</span>
                  <span className="w-px h-3 bg-[#c9a84c]/30" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/60">Rated {featured.rating}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#f5f0e8] mb-2">{featured.name}</h3>
                <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-8">{featured.vitola}</p>

                <p className="text-[#f5f0e8]/60 leading-relaxed mb-8 max-w-md">
                  {featured.notes}
                </p>

                <div className="flex flex-col gap-3 text-sm mb-10">
                  <div className="flex gap-6">
                    <span className="text-[#f5f0e8]/35 w-20">Wrapper</span>
                    <span className="text-[#f5f0e8]/70">{featured.wrapper}</span>
                  </div>
                  <div className="flex gap-6 items-center">
                    <span className="text-[#f5f0e8]/35 w-20">Strength</span>
                    <StrengthBar level={featured.strength} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold text-[#c9a84c]">{featured.price}</span>
                <a href="#shop" className="btn-gold px-8 py-3 text-xs tracking-[0.2em] uppercase rounded-full">
                  Order Now
                </a>
              </div>
            </div>

            {/* Right: visual */}
            <div className="relative flex items-center justify-center p-10 lg:p-14 bg-gradient-to-br from-[#110800] to-[#060300]">
              {/* Rating stamp */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-[#c9a84c]/40 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-[#c9a84c] leading-none">{featured.rating}</span>
                <span className="text-[8px] tracking-widest uppercase text-[#c9a84c]/50 mt-0.5">Pts</span>
              </div>

              <svg viewBox="0 0 300 80" className="w-full max-w-xs" fill="none">
                <rect x="10" y="22" width="260" height="36" rx="18" fill="url(#featCigar)" />
                <line x1="70"  y1="22" x2="82"  y2="58" stroke="#6b3a1f" strokeWidth="0.8" opacity="0.6" />
                <line x1="130" y1="22" x2="142" y2="58" stroke="#6b3a1f" strokeWidth="0.8" opacity="0.6" />
                <line x1="190" y1="22" x2="202" y2="58" stroke="#6b3a1f" strokeWidth="0.8" opacity="0.6" />
                <rect x="80" y="20" width="50" height="40" rx="2" fill="url(#featBand)" />
                <text x="105" y="44" textAnchor="middle" fill="#0e0700" fontSize="6" fontFamily="Georgia" fontWeight="bold" letterSpacing="1.5">NIGBBC</text>
                <ellipse cx="270" cy="40" rx="18" ry="18" fill="url(#featCap)" />
                <ellipse cx="10"  cy="40" rx="10" ry="10" fill="#ff6b1a" opacity="0.8" />
                <ellipse cx="10"  cy="40" rx="5"  ry="5"  fill="#ffaa44" opacity="0.9" />
                <ellipse cx="10"  cy="40" rx="2.5" ry="2.5" fill="#fff" opacity="0.55" />
                <rect x="0" y="32" width="9" height="16" rx="5" fill="url(#featAsh)" />
                <defs>
                  <linearGradient id="featCigar" x1="0" y1="22" x2="0" y2="58" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#6b3a1f" />
                    <stop offset="50%"  stopColor="#4a2510" />
                    <stop offset="100%" stopColor="#2a1200" />
                  </linearGradient>
                  <linearGradient id="featBand" x1="80" y1="0" x2="130" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#8b6520" />
                    <stop offset="50%"  stopColor="#c9a84c" />
                    <stop offset="100%" stopColor="#8b6520" />
                  </linearGradient>
                  <linearGradient id="featCap" x1="252" y1="22" x2="288" y2="58" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#5a3015" />
                    <stop offset="100%" stopColor="#2a1200" />
                  </linearGradient>
                  <linearGradient id="featAsh" x1="0" y1="32" x2="9" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#c0bcb5" />
                    <stop offset="100%" stopColor="#7a7870" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="absolute bottom-8 left-10 right-10 text-center text-[10px] tracking-[0.3em] uppercase text-[#c9a84c]/35">
                Our Finest Blend
              </p>
            </div>
          </div>
        </div>

        {/* Three remaining cigars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cigars.map((cigar) => (
            <div
              key={cigar.name}
              className="card-hover relative bg-[#0e0700] rounded-2xl p-7 border border-[#c9a84c]/12 flex flex-col group"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-lg font-bold text-[#f5f0e8] mb-1">{cigar.name}</h3>
                  <p className="text-[#c9a84c] text-[10px] tracking-widest uppercase">{cigar.vitola}</p>
                </div>
                <span className="text-[#c9a84c]/50 text-sm font-bold">{cigar.rating}</span>
              </div>

              <p className="text-[#f5f0e8]/45 text-xs leading-relaxed mb-5 flex-1 italic">
                {cigar.notes}
              </p>

              <div className="mb-5">
                <StrengthBar level={cigar.strength} />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#c9a84c]/10">
                <span className="text-xl font-bold text-[#c9a84c]">{cigar.price}</span>
                <a
                  href="#shop"
                  className="text-[10px] tracking-widest uppercase text-[#f5f0e8]/40 group-hover:text-[#c9a84c] transition-colors duration-200"
                >
                  Add to Cart →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

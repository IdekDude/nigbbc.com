const cigars = [
  {
    name: "The Managua Maduro",
    vitola: "Toro | 6 × 52",
    wrapper: "Nicaraguan Maduro",
    strength: "Full",
    notes: "Dark chocolate, espresso, cedar, leather with a long, sweet finish",
    price: "$24",
    color: "from-[#1a0d00] to-[#0a0500]",
    accent: "#8B5C2A",
    rating: "96",
  },
  {
    name: "Volcán Colorado",
    vitola: "Robusto | 5 × 50",
    wrapper: "Colorado Claro",
    strength: "Medium-Full",
    notes: "Toasted nuts, black pepper, honey, aged tobacco with earthy complexity",
    price: "$19",
    color: "from-[#1f0e00] to-[#100800]",
    accent: "#a0723a",
    rating: "94",
  },
  {
    name: "Gran Reserva Oscuro",
    vitola: "Churchill | 7 × 48",
    wrapper: "Oscuro Ligero",
    strength: "Full",
    notes: "Dark fruit, molasses, smoked oak, clove — a monument of Nicaraguan craft",
    price: "$32",
    color: "from-[#110800] to-[#060300]",
    accent: "#6b3a1f",
    rating: "98",
  },
  {
    name: "Plata Natural",
    vitola: "Corona | 5.5 × 44",
    wrapper: "Natural Habano",
    strength: "Medium",
    notes: "Cream, almond, dried fruit, white pepper — elegant and balanced",
    price: "$16",
    color: "from-[#1e1000] to-[#0f0800]",
    accent: "#b8892a",
    rating: "92",
  },
];

function StrengthDots({ level }: { level: string }) {
  const map: Record<string, number> = { "Mild": 1, "Medium": 2, "Medium-Full": 3, "Full": 4 };
  const filled = map[level] ?? 2;
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= filled ? "bg-[#c9a84c]" : "bg-[#c9a84c]/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function CigarCollection() {
  return (
    <section id="cigars" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="section-divider w-16 h-px block" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">The Collection</span>
            <span className="section-divider w-16 h-px block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-[#f5f0e8] mb-6">
            Our Finest Cigars
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-2xl mx-auto leading-relaxed">
            Each NIGBBC cigar is rolled by hand in Estelí, Nicaragua — the cigar capital of the world.
            Aged for a minimum of three years in premium Spanish cedar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cigars.map((cigar) => (
            <div
              key={cigar.name}
              className={`card-hover relative bg-gradient-to-b ${cigar.color} rounded-2xl p-6 border border-[#c9a84c]/15 flex flex-col`}
            >
              {/* Rating badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#c9a84c]/40 flex items-center justify-center">
                <span className="text-[#c9a84c] text-xs font-bold">{cigar.rating}</span>
              </div>

              {/* Cigar SVG mini */}
              <div className="mb-6 flex justify-center">
                <svg viewBox="0 0 120 30" className="w-32" fill="none">
                  <rect x="5" y="8" width="100" height="14" rx="7" fill={cigar.accent} opacity="0.8" />
                  <rect x="30" y="7" width="22" height="16" rx="1" fill="url(#miniband)" />
                  <ellipse cx="105" cy="15" rx="8" ry="7" fill={cigar.accent} opacity="0.5" />
                  <ellipse cx="5" cy="15" rx="5" ry="5" fill="#ff6b1a" opacity="0.7" />
                  <ellipse cx="5" cy="15" rx="2.5" ry="2.5" fill="#ffaa44" opacity="0.9" />
                  <defs>
                    <linearGradient id="miniband" x1="30" y1="7" x2="52" y2="7" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#b8892a" />
                      <stop offset="0.5" stopColor="#e8c96a" />
                      <stop offset="1" stopColor="#b8892a" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-[#f5f0e8] mb-1">{cigar.name}</h3>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">{cigar.vitola}</p>

              <div className="flex flex-col gap-2 text-sm text-[#f5f0e8]/60 mb-5 flex-1">
                <div className="flex justify-between">
                  <span>Wrapper</span>
                  <span className="text-[#f5f0e8]/80">{cigar.wrapper}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Strength</span>
                  <StrengthDots level={cigar.strength} />
                </div>
              </div>

              <p className="text-[#f5f0e8]/50 text-xs italic leading-relaxed mb-6 border-t border-[#c9a84c]/10 pt-4">
                {cigar.notes}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold text-[#c9a84c]">{cigar.price}</span>
                <a
                  href="#shop"
                  className="btn-gold px-4 py-2 text-xs tracking-widest uppercase rounded-full"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cigars = [
  {
    no: "No. 01",
    name: "Gran Reserva Oscuro",
    vitola: "Churchill",
    size: "7 × 48",
    wrapper: "Oscuro Ligero",
    strength: "Full",
    rating: "98",
    price: "$32",
    year: "2019 Harvest",
    notes: "Dark fruit, molasses, smoked oak, clove — a monument of Nicaraguan craft. Complex from the first inch to the last nub.",
    featured: true,
  },
  {
    no: "No. 02",
    name: "The Managua Maduro",
    vitola: "Toro",
    size: "6 × 52",
    wrapper: "Nicaraguan Maduro",
    strength: "Full",
    rating: "96",
    price: "$24",
    year: "2020 Harvest",
    notes: "Dark chocolate, espresso, cedar, leather — long, sweet finish.",
    featured: false,
  },
  {
    no: "No. 03",
    name: "Volcán Colorado",
    vitola: "Robusto",
    size: "5 × 50",
    wrapper: "Colorado Claro",
    strength: "Medium-Full",
    rating: "94",
    price: "$19",
    year: "2021 Harvest",
    notes: "Toasted nuts, black pepper, honey, aged tobacco with earthy complexity.",
    featured: false,
  },
  {
    no: "No. 04",
    name: "Plata Natural",
    vitola: "Corona",
    size: "5.5 × 44",
    wrapper: "Natural Habano",
    strength: "Medium",
    rating: "92",
    price: "$16",
    year: "2022 Harvest",
    notes: "Cream, almond, dried fruit, white pepper — elegant and balanced.",
    featured: false,
  },
];

function Bar({ level }: { level: string }) {
  const map: Record<string, number> = { Mild: 1, Medium: 2, "Medium-Full": 3, Full: 4 };
  const n = map[level] ?? 2;
  return (
    <div className="flex gap-1 items-center">
      {[1,2,3,4].map(i => (
        <span key={i} className={`block h-0.5 w-4 ${i <= n ? "bg-[#8b6520]" : "bg-[#c9a84c]/20"}`} />
      ))}
    </div>
  );
}

export default function CigarCollection() {
  return (
    /* ── Parchment section — completely different from all-dark page ── */
    <section id="cigars" className="bg-[#f4ede0] py-24 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 items-end">
          <div className="md:col-span-6">
            <p className="overline text-[#8b6520]/70 mb-4">The Collection</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a0d00] leading-tight">
              Four blends.<br />One standard.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[#6b5a40] leading-relaxed text-sm">
              Each NIGBBC cigar is rolled by hand in Estelí — the cigar capital of the world.
              Aged a minimum of three years in premium Spanish cedar. No shortcuts. No exceptions.
            </p>
          </div>
        </div>

        {/* Featured cigar — full-width hero entry */}
        <div className="mb-2 rounded-2xl overflow-hidden border border-[#c9a84c]/25 bg-[#1a0d00] group">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Info */}
            <div className="p-10 lg:p-14">
              <div className="flex items-center gap-4 mb-6">
                <span className="overline text-[#c9a84c]/60">{cigars[0].no}</span>
                <span className="w-px h-3 bg-[#c9a84c]/25" />
                <span className="overline text-[#c9a84c]/60">{cigars[0].year}</span>
                <span className="w-px h-3 bg-[#c9a84c]/25" />
                <span className="overline text-[#c9a84c]/60">{cigars[0].rating} pts</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#ede8df] mb-1">{cigars[0].name}</h3>
              <p className="overline text-[#c9a84c] mb-8">{cigars[0].vitola} · {cigars[0].size}</p>

              <p className="text-[#ede8df]/55 leading-relaxed mb-10 max-w-md">{cigars[0].notes}</p>

              <div className="grid grid-cols-2 gap-4 text-sm mb-10">
                <div>
                  <p className="overline text-[#ede8df]/30 mb-1">Wrapper</p>
                  <p className="text-[#ede8df]/70">{cigars[0].wrapper}</p>
                </div>
                <div>
                  <p className="overline text-[#ede8df]/30 mb-2">Strength</p>
                  <Bar level={cigars[0].strength} />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold text-[#c9a84c]">{cigars[0].price}</span>
                <a href="#shop" className="btn-gold px-8 py-3 text-[10px] tracking-[0.2em] uppercase rounded-full">
                  Order Now
                </a>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative flex flex-col items-center justify-center bg-[#110900] p-10 lg:p-14 min-h-[320px]">
              <div className="absolute top-8 right-8 w-14 h-14 rounded-full border border-[#c9a84c]/35 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-[#c9a84c] leading-none">{cigars[0].rating}</span>
                <span className="overline text-[#c9a84c]/45" style={{ fontSize: "0.5rem" }}>PTS</span>
              </div>

              <svg viewBox="0 0 300 80" className="w-full max-w-[280px] mb-8" fill="none">
                <rect x="8" y="20" width="262" height="40" rx="20" fill="url(#fGrad)" />
                {[68,128,188].map(x => (
                  <line key={x} x1={x} y1="20" x2={x+10} y2="60" stroke="#4a2510" strokeWidth="0.7" opacity="0.5" />
                ))}
                <rect x="78" y="17" width="55" height="46" rx="2" fill="url(#fBand)" />
                <text x="105" y="45" textAnchor="middle" fill="#07050 2" fontSize="5.5" fontFamily="Georgia" fontWeight="bold" letterSpacing="1.5">NIGBBC</text>
                <ellipse cx="270" cy="40" rx="20" ry="20" fill="url(#fCap)" />
                <ellipse cx="8"  cy="40" rx="9"  ry="9"  fill="#ff6b1a" opacity="0.8" />
                <ellipse cx="8"  cy="40" rx="5"  ry="5"  fill="#ffaa44" opacity="0.9" />
                <ellipse cx="8"  cy="40" rx="2"  ry="2"  fill="#fff"    opacity="0.5" />
                <rect x="0" y="32" width="8" height="16" rx="5" fill="url(#fAsh)" />
                <defs>
                  <linearGradient id="fGrad" x1="0" y1="20" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#6b3a1f" />
                    <stop offset="50%"  stopColor="#4a2510" />
                    <stop offset="100%" stopColor="#2a1200" />
                  </linearGradient>
                  <linearGradient id="fBand" x1="78" y1="0" x2="133" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#8b6520" />
                    <stop offset="50%"  stopColor="#c9a84c" />
                    <stop offset="100%" stopColor="#8b6520" />
                  </linearGradient>
                  <linearGradient id="fCap" x1="250" y1="20" x2="290" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#5a3015" />
                    <stop offset="100%" stopColor="#2a1200" />
                  </linearGradient>
                  <linearGradient id="fAsh" x1="0" y1="32" x2="8" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#c0bcb5" />
                    <stop offset="100%" stopColor="#7a7870" />
                  </linearGradient>
                </defs>
              </svg>

              <p className="overline text-[#c9a84c]/30" style={{ fontSize: "0.55rem" }}>Our Finest Blend</p>
            </div>
          </div>
        </div>

        {/* Remaining three — catalog rows on parchment */}
        <div className="divide-y divide-[#c9a84c]/15">
          {cigars.slice(1).map(c => (
            <div key={c.name} className="group grid grid-cols-12 gap-4 py-7 items-center cursor-default hover:bg-[#ede0cc]/50 px-4 -mx-4 rounded-xl transition-colors duration-200">

              <div className="col-span-1 hidden md:block">
                <span className="overline text-[#8b6520]/50">{c.no}</span>
              </div>

              <div className="col-span-12 md:col-span-4">
                <h3 className="text-xl font-bold text-[#1a0d00] mb-0.5">{c.name}</h3>
                <p className="overline text-[#8b6520]/70">{c.vitola} · {c.size}</p>
              </div>

              <div className="col-span-6 md:col-span-2">
                <p className="overline text-[#6b5a40]/55 mb-1">Wrapper</p>
                <p className="text-sm text-[#3a2810]">{c.wrapper}</p>
              </div>

              <div className="col-span-6 md:col-span-2">
                <p className="overline text-[#6b5a40]/55 mb-2">Strength</p>
                <Bar level={c.strength} />
              </div>

              <div className="col-span-12 md:col-span-2 text-[#1a0d00]/50 text-xs italic leading-relaxed group-hover:text-[#3a2810] transition-colors duration-200 hidden lg:block">
                {c.notes}
              </div>

              <div className="col-span-12 md:col-span-1 flex items-center justify-between md:justify-end gap-4">
                <span className="text-xl font-bold text-[#8b6520]">{c.price}</span>
                <a href="#shop" className="overline text-[#8b6520]/60 hover:text-[#8b6520] transition-colors hidden md:block" style={{ fontSize: "0.55rem" }}>
                  Order →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rating footnote */}
        <p className="mt-8 text-[#8b6520]/45 text-xs italic ml-4">
          Ratings by Cigar Aficionado. All blends available while stock lasts.
        </p>
      </div>
    </section>
  );
}

const tiers = [
  {
    name: "Sampler Box",
    count: "5 Cigars",
    desc: "One of each vitola — the right introduction to the NIGBBC lineup.",
    price: "$89",
    per: "$17.80 / cigar",
    tag: null,
    featured: false,
    items: ["Gran Reserva Oscuro × 1", "The Managua Maduro × 1", "Volcán Colorado × 1", "Plata Natural × 2"],
  },
  {
    name: "Connoisseur's Box",
    count: "20 Cigars",
    desc: "A curated reserve selection, gift-wrapped in hand-finished Spanish cedar.",
    price: "$340",
    per: "$17.00 / cigar",
    tag: "Most Popular",
    featured: true,
    items: ["Gran Reserva Oscuro × 5", "The Managua Maduro × 5", "Volcán Colorado × 5", "Plata Natural × 5"],
  },
  {
    name: "Gran Reserva Cabinet",
    count: "50 Cigars",
    desc: "Aged lot numbers, all Gran Reserva grade, in a hand-lacquered cedar cabinet.",
    price: "$795",
    per: "$15.90 / cigar",
    tag: "Collector's Edition",
    featured: false,
    items: ["Gran Reserva Oscuro × 50", "Individually numbered", "Cedar cabinet included", "White glove delivery"],
  },
];

export default function Shop() {
  return (
    <section id="shop" className="bg-[#070502] py-28 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-10 border-b border-[#c9a84c]/10">
          <div>
            <p className="overline text-[#c9a84c]/55 mb-4">Reserve Your Smokes</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#ede8df] leading-tight">Shop NIGBBC</h2>
          </div>
          <p className="text-[#ede8df]/35 text-sm max-w-xs leading-relaxed md:text-right">
            Humidity-controlled packaging.<br />Free shipping on orders over $150.
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`card-lift relative flex flex-col rounded-2xl border overflow-hidden ${
                t.featured
                  ? "border-[#c9a84c]/40 bg-[#180d02]"
                  : "border-[#c9a84c]/10 bg-[#0e0900]"
              }`}
            >
              {t.tag && (
                <div className={`absolute -top-px left-0 right-0 text-center py-1.5 overline ${
                  t.featured ? "bg-[#c9a84c] text-[#07050 2]" : "bg-[#1a0d00] text-[#c9a84c]"
                }`}>
                  {t.tag}
                </div>
              )}

              <div className={`p-8 flex flex-col flex-1 ${t.tag ? "pt-10" : ""}`}>
                {/* Count badge */}
                <p className="overline text-[#c9a84c]/50 mb-3">{t.count}</p>
                <h3 className="text-xl font-bold text-[#ede8df] mb-3">{t.name}</h3>
                <p className="text-[#ede8df]/45 text-sm leading-relaxed mb-6">{t.desc}</p>

                {/* What's inside */}
                <ul className="space-y-2 mb-8 flex-1">
                  {t.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#ede8df]/40">
                      <span className="w-1 h-1 rounded-full bg-[#c9a84c]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#c9a84c]/8 pt-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-[#c9a84c]">{t.price}</span>
                  </div>
                  <p className="text-[#ede8df]/20 text-xs mb-5">{t.per}</p>
                  <button className={`w-full py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all ${
                    t.featured ? "btn-gold" : "btn-outline-gold"
                  }`}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust — text only */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 pt-8 border-t border-[#c9a84c]/8">
          {["100% Authentic", "Humidity-Controlled Shipping", "30-Day Returns", "Secure Checkout"].map(t => (
            <span key={t} className="overline text-[#ede8df]/20">{t}</span>
          ))}
        </div>

      </div>
    </section>
  );
}

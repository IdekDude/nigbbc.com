const bundles = [
  {
    name: "Sampler Box",
    count: "5 Cigars",
    desc: "One of each vitola — the right introduction to the NIGBBC lineup.",
    price: "$89",
    per: "$17.80 / cigar",
    tag: "For First-Timers",
    featured: false,
  },
  {
    name: "Connoisseur's Box",
    count: "20 Cigars",
    desc: "A curated selection of our reserve blends, gift-wrapped in Spanish cedar.",
    price: "$340",
    per: "$17.00 / cigar",
    tag: "Most Popular",
    featured: true,
  },
  {
    name: "Gran Reserva Cabinet",
    count: "50 Cigars",
    desc: "Aged lot numbers, all Gran Reserva, in a hand-lacquered Honduran cedar cabinet.",
    price: "$795",
    per: "$15.90 / cigar",
    tag: "Collector's Edition",
    featured: false,
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0700] via-[#0a0500] to-[#0e0700]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-4">Reserve Your Smokes</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-wide">Shop NIGBBC</h2>
          </div>
          <p className="text-[#f5f0e8]/40 text-sm max-w-xs leading-relaxed md:text-right">
            Shipped in humidity-controlled packaging.<br />
            Free shipping on orders over $150.
          </p>
        </div>

        {/* Bundles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {bundles.map((b) => (
            <div
              key={b.name}
              className={`card-hover relative rounded-2xl p-8 border flex flex-col ${
                b.featured
                  ? "bg-gradient-to-b from-[#2a1500] to-[#1a0d00] border-[#c9a84c]/45"
                  : "bg-gradient-to-b from-[#1a0d00] to-[#0a0500] border-[#c9a84c]/12"
              }`}
            >
              {b.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 btn-gold px-5 py-1 rounded-full text-[10px] tracking-wider uppercase whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mt-3 mb-6">
                <p className="text-[#c9a84c]/55 text-[10px] tracking-[0.4em] uppercase mb-2">{b.count}</p>
                <h3 className="text-xl font-bold text-[#f5f0e8]">{b.name}</h3>
              </div>

              <p className="text-[#f5f0e8]/50 text-sm leading-relaxed flex-1 mb-8">{b.desc}</p>

              <div className="border-t border-[#c9a84c]/10 pt-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-bold text-[#c9a84c]">{b.price}</span>
                </div>
                <p className="text-[#f5f0e8]/25 text-xs mb-5">{b.per}</p>
                <button className={`w-full py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all ${
                  b.featured
                    ? "btn-gold"
                    : "border border-[#c9a84c]/35 text-[#c9a84c] hover:bg-[#c9a84c]/8"
                }`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line — text only, no emojis */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[#f5f0e8]/25 text-[11px] tracking-[0.3em] uppercase border-t border-[#c9a84c]/10 pt-8">
          <span>100% Authentic</span>
          <span>Humidity-Controlled Shipping</span>
          <span>30-Day Returns</span>
          <span>Secure Checkout</span>
        </div>

      </div>
    </section>
  );
}

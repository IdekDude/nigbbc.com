const bundles = [
  {
    name: "Sampler Box",
    count: "5 Cigars",
    desc: "One of each vitola — the perfect introduction to the NIGBBC lineup.",
    price: "$89",
    tag: "Best for Beginners",
  },
  {
    name: "Connoisseur's Box",
    count: "20 Cigars",
    desc: "A curated selection of our reserve blends, gift-wrapped in Spanish cedar.",
    price: "$340",
    tag: "Most Popular",
    featured: true,
  },
  {
    name: "Gran Reserva Cabinet",
    count: "50 Cigars",
    desc: "The ultimate collection — aged lot numbers, all Gran Reserva, in a hand-lacquered cabinet.",
    price: "$795",
    tag: "Collector's Edition",
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0700] via-[#0a0500] to-[#0e0700]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="section-divider w-16 h-px block" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">Reserve Your Smokes</span>
            <span className="section-divider w-16 h-px block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-[#f5f0e8] mb-6">
            Shop NIGBBC
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-xl mx-auto leading-relaxed">
            Shipped in humidity-controlled packaging. Free shipping on orders over $150.
          </p>
        </div>

        {/* Bundles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {bundles.map((b) => (
            <div
              key={b.name}
              className={`card-hover relative rounded-2xl p-8 border flex flex-col ${
                b.featured
                  ? "bg-gradient-to-b from-[#2a1500] to-[#1a0d00] border-[#c9a84c]/50 scale-[1.02]"
                  : "bg-gradient-to-b from-[#1a0d00] to-[#0a0500] border-[#c9a84c]/15"
              }`}
            >
              {/* Tag */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs tracking-wider uppercase whitespace-nowrap ${
                  b.featured
                    ? "btn-gold"
                    : "bg-[#0e0700] border border-[#c9a84c]/30 text-[#c9a84c]"
                }`}
              >
                {b.tag}
              </div>

              <div className="mt-4 text-center mb-6">
                <h3 className="text-2xl font-bold text-[#f5f0e8] mb-1">{b.name}</h3>
                <p className="text-[#c9a84c] text-sm tracking-widest uppercase">{b.count}</p>
              </div>

              <p className="text-[#f5f0e8]/55 text-sm leading-relaxed text-center mb-8 flex-1">
                {b.desc}
              </p>

              <div className="text-center">
                <div className="text-4xl font-bold text-[#c9a84c] mb-6">{b.price}</div>
                <button className={`w-full py-3 rounded-full text-sm tracking-widest uppercase font-bold transition-all ${
                  b.featured
                    ? "btn-gold"
                    : "border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10"
                }`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: "🛡️", label: "100% Authentic" },
            { icon: "📦", label: "Humidity-Controlled Shipping" },
            { icon: "↩️", label: "30-Day Returns" },
            { icon: "🔒", label: "Secure Checkout" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-[#f5f0e8]/40 text-sm">
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

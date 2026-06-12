const steps = [
  {
    number: "01",
    title: "Seed to Seedling",
    desc: "Heirloom criollo seeds are germinated in shaded nurseries. Each seedling is selected by hand at 45 days — only the strongest survive.",
    icon: "🌱",
  },
  {
    number: "02",
    title: "Field Cultivation",
    desc: "Planted in rows on volcanic hillsides at 900m elevation. The alternating dry and wet seasons create the natural stress that concentrates flavor.",
    icon: "🌾",
  },
  {
    number: "03",
    title: "Harvesting",
    desc: "Leaves are primed — harvested from bottom to top over eight weeks. Each primings yields a different flavor profile: ligero, seco, volado.",
    icon: "✂️",
  },
  {
    number: "04",
    title: "Fermentation",
    desc: "Sorted leaves are bundled into pilones where natural heat reaches 42°C, expelling ammonia and transforming raw tobacco into complex flavor.",
    icon: "🔥",
  },
  {
    number: "05",
    title: "Aging",
    desc: "Bales rest in cedar-lined rooms for a minimum of three years. Time is the final ingredient — it cannot be rushed or substituted.",
    icon: "⏳",
  },
  {
    number: "06",
    title: "Rolling",
    desc: "Master torcedores hand-roll each cigar using time-honored Cuban techniques. A skilled roller produces 150–200 cigars per day — no more.",
    icon: "👐",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="section-divider w-16 h-px block" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">The Craft</span>
            <span className="section-divider w-16 h-px block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-[#f5f0e8] mb-6">
            From Seed to Smoke
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-xl mx-auto leading-relaxed">
            Six steps. Five years minimum. One extraordinary cigar.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="card-hover relative bg-gradient-to-br from-[#1a0d00]/80 to-[#0a0500]/80 rounded-2xl p-8 border border-[#c9a84c]/10"
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-6 text-6xl font-bold text-[#c9a84c]/8 select-none">
                {step.number}
              </span>

              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-[#f5f0e8] mb-3">{step.title}</h3>
              <p className="text-[#f5f0e8]/55 leading-relaxed text-sm">{step.desc}</p>

              {/* Connector line for non-last items */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-[#c9a84c]/20" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <blockquote className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-light italic text-[#f5f0e8]/60 leading-relaxed">
            &ldquo;A great cigar is not made. It is <em className="text-[#c9a84c] not-italic font-normal">grown, tended, aged,
            and earned</em> — one harvest at a time.&rdquo;
          </p>
          <footer className="mt-6 text-[#c9a84c] text-sm tracking-widest uppercase">
            — Don Carlos Ruiz, Master Blender
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

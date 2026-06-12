const steps = [
  {
    n: "01",
    title: "Seed to Seedling",
    desc: "Heirloom criollo seeds are germinated in shaded nurseries. Each seedling is selected by hand at 45 days — only the strongest survive.",
  },
  {
    n: "02",
    title: "Field Cultivation",
    desc: "Planted on volcanic hillsides at 900m elevation. The alternating dry and wet seasons create natural stress that concentrates flavor.",
  },
  {
    n: "03",
    title: "Harvesting",
    desc: "Leaves are primed — harvested bottom to top over eight weeks. Each priming yields a different profile: ligero, seco, volado.",
  },
  {
    n: "04",
    title: "Fermentation",
    desc: "Sorted leaves are bundled into pilones where natural heat reaches 42°C, expelling ammonia and transforming raw leaf into complex flavor.",
  },
  {
    n: "05",
    title: "Aging",
    desc: "Bales rest in cedar-lined rooms for a minimum of three years. Time is the final ingredient. It cannot be rushed or substituted.",
  },
  {
    n: "06",
    title: "Rolling",
    desc: "Master torcedores hand-roll each cigar using time-honored Cuban technique. A skilled roller produces 150–200 cigars per day — no more.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header — not centered this time */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-4">The Craft</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] leading-tight">
              From Seed<br />to Smoke
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-[#f5f0e8]/45 leading-relaxed">
              Six steps. Five years minimum. One extraordinary cigar. There are no
              shortcuts in this building — and there never will be.
            </p>
          </div>
        </div>

        {/* Steps — ruled list, no cards, no emojis */}
        <div className="mb-20">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`grid grid-cols-12 gap-6 py-8 ${i < steps.length - 1 ? "border-b border-[#c9a84c]/10" : ""}`}
            >
              {/* Step number */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-[#c9a84c]/30 text-sm font-bold tracking-widest">{step.n}</span>
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-3">
                <h3 className="text-[#f5f0e8] font-bold text-lg leading-snug">{step.title}</h3>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-8">
                <p className="text-[#f5f0e8]/50 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="max-w-3xl">
          <div className="w-16 h-px mb-8" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          <p className="text-2xl md:text-3xl font-light italic text-[#f5f0e8]/55 leading-relaxed mb-6">
            &ldquo;A great cigar is not made. It is <em className="text-[#c9a84c] not-italic">grown, tended, aged,
            and earned</em> — one harvest at a time.&rdquo;
          </p>
          <footer className="text-[#c9a84c]/60 text-xs tracking-[0.35em] uppercase">
            Don Carlos Ruiz &nbsp;—&nbsp; Master Blender
          </footer>
        </div>

      </div>
    </section>
  );
}

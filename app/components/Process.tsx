const steps = [
  { n: "01", title: "Seed to Seedling",   desc: "Heirloom criollo seeds are germinated in shaded nurseries at low altitude. Each seedling is hand-selected at 45 days — only the strongest reach the field." },
  { n: "02", title: "Field Cultivation",   desc: "Planted on volcanic hillsides at 900m. The alternating dry and wet seasons stress the plant naturally, concentrating oils and intensifying flavor complexity." },
  { n: "03", title: "Harvesting",          desc: "Leaves are primed — harvested bottom to top over eight weeks. Each priming produces a different leaf grade: ligero for strength, seco for combustion, volado for burn." },
  { n: "04", title: "Fermentation",        desc: "Sorted leaves are bundled into pilones. Natural heat reaches 42°C, expelling ammonia and bitterness, transforming raw tobacco into complex, ready-to-age leaf." },
  { n: "05", title: "Aging",               desc: "Bales rest in Spanish cedar rooms for a minimum of three years. Time is the final ingredient — it cannot be rushed, faked, or substituted." },
  { n: "06", title: "Rolling",             desc: "Master torcedores hand-roll each cigar using Cuban prensado technique. A skilled roller produces 150–200 cigars per day, and not a single one more." },
];

export default function Process() {
  return (
    /* ── Second parchment section — alternates with dark heritage ── */
    <section id="process" className="bg-[#f4ede0] py-28 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Header — asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <p className="overline text-[#8b6520]/70 mb-4">The Craft</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a0d00] leading-tight">
              From seed<br />to smoke.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[#6b5a40] text-sm leading-relaxed">
              Six steps. Five years minimum. One extraordinary cigar.
              There are no shortcuts in this building — and there never will be.
            </p>
          </div>
        </div>

        {/* Steps — ruled editorial list */}
        <div className="border-t border-[#c9a84c]/20">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="grid grid-cols-12 gap-4 md:gap-8 py-8 border-b border-[#c9a84c]/15 group hover:bg-[#ede0cc]/40 px-2 -mx-2 rounded-lg transition-colors duration-200"
            >
              {/* Step number */}
              <div className="col-span-2 md:col-span-1 pt-0.5">
                <span className="overline text-[#c9a84c]/50 group-hover:text-[#8b6520] transition-colors">{s.n}</span>
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-3 lg:col-span-2">
                <h3 className="text-lg font-bold text-[#1a0d00] leading-snug">{s.title}</h3>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-8 lg:col-span-8 md:col-start-5">
                <p className="text-[#6b5a40] leading-relaxed text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-20 max-w-3xl">
          <div className="rule-gold w-16 mb-8" />
          <p className="text-2xl md:text-3xl font-light italic text-[#3a2810]/60 leading-relaxed mb-6">
            &ldquo;A great cigar is not made. It is{" "}
            <em className="text-[#8b6520] not-italic font-normal">grown, tended, aged, and earned</em>
            {" "}— one harvest at a time.&rdquo;
          </p>
          <footer className="overline text-[#8b6520]/60">
            Don Carlos Ruiz &nbsp;—&nbsp; Master Blender
          </footer>
        </div>

      </div>
    </section>
  );
}

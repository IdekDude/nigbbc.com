export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#070400]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header — full width, left-aligned */}
        <div className="mb-16">
          <p className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] leading-tight">
            Talk to us.
          </h2>
          <p className="text-[#f5f0e8]/45 mt-4 max-w-md leading-relaxed">
            Wholesale inquiries, private label, or just want to talk cigars — we&apos;re here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Form */}
          <form className="lg:col-span-6 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/18 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/25 focus:outline-none focus:border-[#c9a84c]/55 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/18 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/25 focus:outline-none focus:border-[#c9a84c]/55 transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 mb-2">Inquiry</label>
              <select className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/18 rounded-xl px-4 py-3 text-[#f5f0e8]/65 focus:outline-none focus:border-[#c9a84c]/55 transition-colors text-sm appearance-none">
                <option value="">Select inquiry type</option>
                <option>Retail Order</option>
                <option>Wholesale / Distributor</option>
                <option>Private Label</option>
                <option>Press &amp; Media</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us what you're looking for..."
                className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/18 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/25 focus:outline-none focus:border-[#c9a84c]/55 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-gold w-full py-4 rounded-xl text-xs tracking-[0.25em] uppercase font-bold"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="lg:col-span-5 lg:col-start-8 space-y-10">
            <div>
              <p className="text-[#c9a84c]/55 text-[10px] tracking-[0.4em] uppercase mb-3">Factory</p>
              <p className="text-[#f5f0e8]/55 leading-relaxed text-sm">
                Zona Franca Las Mercedes<br />
                Estelí, Nicaragua<br />
                Central America
              </p>
            </div>

            <div className="w-full h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.2), transparent)" }} />

            <div>
              <p className="text-[#c9a84c]/55 text-[10px] tracking-[0.4em] uppercase mb-3">US Office</p>
              <p className="text-[#f5f0e8]/55 leading-relaxed text-sm">
                Miami, FL 33131<br />
                United States
              </p>
              <a href="mailto:hello@nigbbc.com" className="text-[#c9a84c] text-sm mt-2 block hover:text-[#e8c96a] transition-colors">
                hello@nigbbc.com
              </a>
            </div>

            <div className="w-full h-px" style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.2), transparent)" }} />

            <div>
              <p className="text-[#c9a84c]/55 text-[10px] tracking-[0.4em] uppercase mb-4">Follow the Smoke</p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "X"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[10px] tracking-widest uppercase text-[#f5f0e8]/35 hover:text-[#c9a84c] transition-colors border border-[#c9a84c]/15 hover:border-[#c9a84c]/45 px-3 py-2 rounded-lg"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-[#f5f0e8]/70 font-bold mb-1 text-sm">The Smoke Signal</p>
              <p className="text-[#f5f0e8]/40 text-xs leading-relaxed mb-4">
                New releases, limited runs, cigar culture — delivered monthly.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-[#0e0700] border border-[#c9a84c]/18 rounded-xl px-3 py-2.5 text-[#f5f0e8] placeholder-[#f5f0e8]/25 focus:outline-none focus:border-[#c9a84c]/55 text-xs"
                />
                <button className="btn-gold px-4 py-2.5 rounded-xl text-[10px] tracking-wider uppercase whitespace-nowrap font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

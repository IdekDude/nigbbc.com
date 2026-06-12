export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#070400]" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="section-divider w-16 h-px block" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">Get in Touch</span>
            <span className="section-divider w-16 h-px block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-[#f5f0e8] mb-6">
            Join the NIGBBC Circle
          </h2>
          <p className="text-[#f5f0e8]/50 max-w-xl mx-auto leading-relaxed">
            Wholesale inquiries, private label, or just want to talk cigars — we&apos;re here.
          </p>
        </div>

        {/* Form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#c9a84c] mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#c9a84c] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#c9a84c] mb-2">
                Inquiry Type
              </label>
              <select className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-[#f5f0e8]/70 focus:outline-none focus:border-[#c9a84c]/60 transition-colors text-sm appearance-none">
                <option value="">Select inquiry type</option>
                <option>Retail Order</option>
                <option>Wholesale / Distributor</option>
                <option>Private Label</option>
                <option>Press &amp; Media</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-[#c9a84c] mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what you're looking for..."
                className="w-full bg-[#1a0d00]/60 border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c]/60 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-gold w-full py-4 rounded-xl text-sm tracking-[0.2em] uppercase font-bold"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">Factory Address</h3>
              <p className="text-[#f5f0e8]/60 leading-relaxed text-sm">
                Zona Franca Las Mercedes<br />
                Estelí, Nicaragua<br />
                Central America
              </p>
            </div>
            <div className="section-divider w-full h-px" />
            <div>
              <h3 className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">US Office</h3>
              <p className="text-[#f5f0e8]/60 leading-relaxed text-sm">
                Miami, FL 33131<br />
                United States<br />
                <span className="text-[#c9a84c]">hello@nigbbc.com</span>
              </p>
            </div>
            <div className="section-divider w-full h-px" />
            <div>
              <h3 className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">Follow the Smoke</h3>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "X"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs tracking-widest uppercase text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 px-3 py-2 rounded-lg"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#1a0d00]/60 rounded-2xl p-6 border border-[#c9a84c]/15">
              <h3 className="text-[#f5f0e8] font-bold mb-2">The Smoke Signal</h3>
              <p className="text-[#f5f0e8]/50 text-xs leading-relaxed mb-4">
                New releases, limited runs, and cigar culture — delivered monthly.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-[#0e0700] border border-[#c9a84c]/20 rounded-xl px-3 py-2 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a84c]/60 text-xs"
                />
                <button className="btn-gold px-4 py-2 rounded-xl text-xs tracking-wider uppercase whitespace-nowrap">
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

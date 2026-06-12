export default function Contact() {
  return (
    <section id="contact" className="bg-[#0a0702] py-28 px-6">
      <div className="max-w-[1400px] mx-auto">

        {/* Full-width header */}
        <div className="mb-20 pb-16 border-b border-[#c9a84c]/10">
          <p className="overline text-[#c9a84c]/55 mb-5">Get in Touch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <h2 className="text-5xl md:text-6xl font-bold text-[#ede8df] leading-tight">
              Talk to us.
            </h2>
            <p className="text-[#ede8df]/40 leading-relaxed max-w-sm md:text-right md:ml-auto">
              Wholesale inquiries, private label, or just want to talk cigars.
              We&apos;re a small team and we answer every message.
            </p>
          </div>
        </div>

        {/* Form + details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Form */}
          <form className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Name",  type: "text",  placeholder: "Your full name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block overline text-[#c9a84c]/55 mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-[#0e0900] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-[#ede8df] placeholder-[#ede8df]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors text-sm"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block overline text-[#c9a84c]/55 mb-2">Inquiry Type</label>
              <select className="w-full bg-[#0e0900] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-[#ede8df]/60 focus:outline-none focus:border-[#c9a84c]/50 transition-colors text-sm appearance-none">
                <option value="">Select an inquiry type</option>
                <option>Retail Order</option>
                <option>Wholesale / Distributor</option>
                <option>Private Label</option>
                <option>Press &amp; Media</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block overline text-[#c9a84c]/55 mb-2">Message</label>
              <textarea
                rows={6}
                placeholder="Tell us what you're looking for..."
                className="w-full bg-[#0e0900] border border-[#c9a84c]/15 rounded-xl px-4 py-3 text-[#ede8df] placeholder-[#ede8df]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors text-sm resize-none"
              />
            </div>

            <button type="submit" className="btn-gold w-full py-4 rounded-xl text-[10px] tracking-[0.25em] uppercase font-bold">
              Send Message
            </button>
          </form>

          {/* Contact details */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div>
              <p className="overline text-[#c9a84c]/45 mb-3">Factory</p>
              <p className="text-[#ede8df]/50 text-sm leading-relaxed">
                Zona Franca Las Mercedes<br />
                Estelí, Nicaragua
              </p>
            </div>

            <div className="rule-gold w-full" />

            <div>
              <p className="overline text-[#c9a84c]/45 mb-3">US Office</p>
              <p className="text-[#ede8df]/50 text-sm leading-relaxed mb-2">Miami, FL 33131</p>
              <a href="mailto:hello@nigbbc.com" className="text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors">
                hello@nigbbc.com
              </a>
            </div>

            <div className="rule-gold w-full" />

            <div>
              <p className="overline text-[#c9a84c]/45 mb-4">Follow</p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "X"].map(s => (
                  <a key={s} href="#" className="overline text-[#ede8df]/30 hover:text-[#c9a84c] border border-[#c9a84c]/12 hover:border-[#c9a84c]/40 px-3 py-2 rounded-lg transition-all duration-200">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="rule-gold w-full" />

            {/* Newsletter */}
            <div>
              <p className="text-[#ede8df]/70 text-sm font-bold mb-1">The Smoke Signal</p>
              <p className="text-[#ede8df]/35 text-xs leading-relaxed mb-4">
                New releases, limited runs, cigar culture — monthly.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-[#0e0900] border border-[#c9a84c]/15 rounded-xl px-3 py-2.5 text-[#ede8df] placeholder-[#ede8df]/20 focus:outline-none focus:border-[#c9a84c]/50 text-xs"
                />
                <button className="btn-gold px-4 py-2.5 rounded-xl text-[10px] tracking-wider uppercase font-bold whitespace-nowrap">
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

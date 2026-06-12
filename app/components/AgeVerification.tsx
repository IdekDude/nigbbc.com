"use client";

import { useEffect, useState } from "react";

export default function AgeVerification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("age_verified")) {
      setVisible(true);
    }
  }, []);

  function confirm() {
    sessionStorage.setItem("age_verified", "1");
    setVisible(false);
  }

  function deny() {
    window.location.href = "https://www.responsibility.org";
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(8,4,0,0.97)", backdropFilter: "blur(8px)" }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(61,31,0,0.5) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative w-full max-w-md text-center">
        {/* Double border frame */}
        <div className="absolute inset-0 rounded-2xl"
          style={{ border: "1px solid rgba(201,168,76,0.3)" }}
        />
        <div className="absolute inset-2 rounded-xl"
          style={{ border: "1px solid rgba(201,168,76,0.1)" }}
        />

        <div className="relative px-10 py-12" style={{ background: "linear-gradient(160deg, #120800 0%, #1a0d00 60%, #0e0700 100%)", borderRadius: "16px" }}>
          {/* Top rule */}
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="section-divider w-10 h-px block" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.5em] uppercase">Est. Nicaragua</span>
            <span className="section-divider w-10 h-px block" />
          </div>

          {/* Wordmark */}
          <div className="text-5xl font-bold tracking-[0.18em] text-[#f5f0e8] mb-1" style={{ fontFamily: "Georgia, serif" }}>
            NIGBBC
          </div>
          <div className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase mb-8">
            Nicaraguan Great Big Brown Cigars
          </div>

          {/* Gold rule */}
          <div className="section-divider h-px w-32 mx-auto mb-8" />

          {/* Copy */}
          <p className="text-[#f5f0e8]/70 text-sm leading-relaxed mb-2">
            This website contains tobacco products intended for adults only.
          </p>
          <p className="text-[#f5f0e8]/50 text-xs leading-relaxed mb-10">
            You must be <span className="text-[#c9a84c]">21 years of age or older</span> to enter.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={confirm}
              className="btn-gold w-full py-4 text-xs tracking-[0.25em] uppercase rounded-full font-bold"
            >
              I am 21 or older — Enter
            </button>
            <button
              onClick={deny}
              className="w-full py-3 text-xs tracking-[0.2em] uppercase text-[#f5f0e8]/40 hover:text-[#f5f0e8]/60 transition-colors duration-200"
            >
              I am under 21 — Exit
            </button>
          </div>

          {/* Legal */}
          <p className="text-[#f5f0e8]/25 text-[10px] mt-8 leading-relaxed">
            By entering you confirm you are of legal smoking age in your jurisdiction
            and agree to our terms of use.
          </p>
        </div>
      </div>
    </div>
  );
}

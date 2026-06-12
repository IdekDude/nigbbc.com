"use client";

import { useEffect, useState } from "react";

export default function AgeVerification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("age_verified")) setVisible(true);
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
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(4,3,1,0.97)", backdropFilter: "blur(12px)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(50,22,0,0.5) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Border frames */}
        <div className="absolute inset-0 rounded-2xl" style={{ border: "1px solid rgba(201,168,76,0.28)" }} />
        <div className="absolute inset-2 rounded-xl"  style={{ border: "1px solid rgba(201,168,76,0.08)" }} />

        <div
          className="relative px-10 py-12 rounded-2xl"
          style={{ background: "linear-gradient(160deg, #120900 0%, #1a0d00 60%, #0a0600 100%)" }}
        >
          {/* Overline */}
          <p className="overline text-[#c9a84c]/45 text-center mb-8">Est. 1987 · Nicaragua</p>

          {/* Wordmark */}
          <p className="text-5xl font-bold tracking-[0.18em] text-[#ede8df] text-center mb-1">NIGBBC</p>
          <p className="overline text-[#c9a84c]/55 text-center mb-8" style={{ letterSpacing: "0.35em" }}>
            Nicaraguan Great Big Brown Cigars
          </p>

          {/* Rule */}
          <div className="rule-gold-center w-28 mx-auto mb-8" />

          {/* Copy */}
          <p className="text-[#ede8df]/55 text-sm leading-relaxed text-center mb-2">
            This website contains tobacco products for adults only.
          </p>
          <p className="text-[#ede8df]/35 text-xs leading-relaxed text-center mb-10">
            You must be <span className="text-[#c9a84c]">21 years or older</span> to enter.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button onClick={confirm} className="btn-gold w-full py-4 text-[10px] tracking-[0.25em] uppercase rounded-full font-bold">
              I am 21 or older — Enter
            </button>
            <button onClick={deny} className="w-full py-3 text-[10px] tracking-[0.2em] uppercase text-[#ede8df]/30 hover:text-[#ede8df]/55 transition-colors duration-200">
              I am under 21 — Exit
            </button>
          </div>

          {/* Legal */}
          <p className="text-[#ede8df]/18 text-[9px] mt-8 leading-relaxed text-center">
            By entering you confirm you are of legal smoking age in your jurisdiction and agree to our terms.
          </p>
        </div>
      </div>
    </div>
  );
}

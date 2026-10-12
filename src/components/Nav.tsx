"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { useLang } from "@/lib/lang";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid || open
            ? "border-b border-line/80 bg-ink/92 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1360px] items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-baseline gap-3"
            aria-label={site.name}
          >
            <span className="font-display text-[1.45rem] leading-none tracking-[0.2em] text-bone transition-colors group-hover:text-gold-2">
              KŌGEN
            </span>
            <span className="ja text-sm leading-none text-gold-3 transition-colors group-hover:text-gold">
              {site.kanji}
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="relative text-[0.78rem] tracking-[0.16em] text-ash uppercase transition-colors hover:text-bone after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {t(item.label)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="text-[0.72rem] tracking-[0.2em] text-gold uppercase transition-opacity hover:opacity-70"
              aria-label={t(site.langAria)}
            >
              {t(site.langSwitch)}
            </button>

            <button
              onClick={() => go("reserva")}
              className="hidden border border-gold-3 px-5 py-2.5 text-[0.7rem] tracking-[0.22em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink sm:block"
            >
              {t(site.reserveNav)}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label={open ? t(site.closeBtn) : t(site.menuBtn)}
              aria-expanded={open}
            >
              <span
                className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-ink/98 backdrop-blur-2xl transition-opacity duration-400 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8 pt-[74px]">
          <nav className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                className={`flex items-baseline gap-4 border-b border-line/60 py-4 text-left transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="font-display text-xs text-gold-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.7rem] text-bone">{t(item.label)}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("reserva")}
            className={`mt-9 border border-gold px-6 py-4 text-[0.72rem] tracking-[0.24em] text-gold uppercase transition-all duration-500 ${
              open ? "translate-y-0 opacity-100 delay-450" : "translate-y-4 opacity-0"
            }`}
          >
            {t(site.reserveNav)}
          </button>
        </div>
      </div>
    </>
  );
}

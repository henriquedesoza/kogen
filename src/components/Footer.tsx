"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { useLang } from "@/lib/lang";

export function Footer() {
  const { t } = useLang();
  const f = site.footer;
  const [year, setYear] = useState("");

  useEffect(() => setYear(String(new Date().getFullYear())), []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="relative border-t border-line bg-ink-2 pt-16 pb-9">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-baseline gap-3"
            >
              <span className="font-display text-3xl tracking-[0.2em] text-bone">
                KŌGEN
              </span>
              <span className="ja text-lg text-gold-3">{site.kanji}</span>
            </button>
            <p className="mt-5 max-w-sm text-[0.93rem] leading-relaxed text-ash-2">
              {t(site.hero.sub)}
            </p>
            <p className="mt-6 text-[0.68rem] tracking-[0.2em] text-gold-3 uppercase">
              {t(site.hero.eyebrow)}
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
              {t(f.links)}
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className="text-[0.93rem] text-ash transition-colors hover:text-gold-2"
                  >
                    {t(item.label)}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("reserva")}
                  className="text-[0.93rem] text-ash transition-colors hover:text-gold-2"
                >
                  {t(site.reserveNav)}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
              {t(f.hours)}
            </p>
            <ul className="mt-5 space-y-3">
              {site.contact.hours.map((h, i) => (
                <li key={i} className="flex flex-col">
                  <span className="text-[0.85rem] text-ash-2">{t(h.d)}</span>
                  <span className="font-display text-[0.98rem] text-bone">
                    {typeof h.h === "string" ? h.h : t(h.h)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-ash-2">
            © {year || "2026"} {site.name} {site.kanji} — {t(f.rights)}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[0.7rem] tracking-[0.18em] text-ash-2 uppercase">
              {t(f.made)}
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[0.7rem] tracking-[0.18em] text-gold uppercase transition-opacity hover:opacity-70"
            >
              ↑ {t(f.backTop)}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

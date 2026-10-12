"use client";

import { useState } from "react";
import { menu, site } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function MenuSection() {
  const { t } = useLang();
  const m = site.menu;
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];

  const goReserve = () =>
    document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="cardapio" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold-3" />
            <span className="label">{t(m.label)}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] text-bone">
              {t(m.title)}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-ash-2">{t(m.note)}</p>
          </div>
        </Reveal>

        {/* category tabs */}
        <Reveal delay={140}>
          <div className="mt-12 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <div className="flex min-w-max items-center gap-2 border-b border-line pb-px">
              {menu.map((cat) => {
                const on = cat.id === active;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`group relative flex items-baseline gap-2 px-4 py-3.5 transition-colors duration-300 ${
                      on ? "text-gold" : "text-ash-2 hover:text-bone"
                    }`}
                  >
                    <span className="ja text-[0.7rem] tracking-widest">
                      {cat.jp}
                    </span>
                    <span className="text-[0.74rem] tracking-[0.16em] uppercase">
                      {t(cat.title)}
                    </span>
                    <span
                      className={`absolute inset-x-0 -bottom-px h-px origin-left bg-gold transition-transform duration-400 ${
                        on ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* items */}
        <div className="mt-10 grid gap-x-16 gap-y-1 md:grid-cols-2">
          {current.note && (
            <p className="col-span-full mb-4 font-display text-base text-gold-2 italic">
              {t(current.note)}
            </p>
          )}

          {current.items.map((item, i) => (
            <article
              key={`${current.id}-${i}`}
              className="group animate-[fadeUp_.5s_ease-out_both] border-b border-line/70 py-6"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-[1.32rem] leading-tight text-bone transition-colors duration-300 group-hover:text-gold-2">
                  {t(item.name)}
                </h3>
                <span className="ja text-sm text-gold-3">{item.jp}</span>
                <span className="mx-1 hidden h-px flex-1 self-baseline border-b border-dotted border-line-2 sm:block" />
                <span className="ml-auto shrink-0 font-display text-[1.15rem] text-gold sm:ml-0">
                  <span className="text-[0.7em] text-gold-3">R$ </span>
                  {item.price}
                </span>
              </div>
              <p className="mt-2 max-w-prose text-[0.92rem] leading-relaxed text-ash-2">
                {t(item.desc)}
              </p>
            </article>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-start gap-5 border border-line bg-ink-2 px-7 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[0.95rem] leading-relaxed text-ash">
              {t(m.omakaseNote)}
            </p>
            <button
              onClick={goReserve}
              className="shrink-0 border border-gold px-8 py-4 text-[0.72rem] tracking-[0.24em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              {t(m.reserve)}
            </button>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}

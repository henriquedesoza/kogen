"use client";

import { press, site } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function Press() {
  const { t } = useLang();
  const s = site.press;

  return (
    <section
      id="imprensa"
      className="relative scroll-mt-20 overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(200,162,74,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="label">{t(s.label)}</span>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] text-bone">
              {t(s.title)}
            </h2>
            <span className="mt-6 block text-6xl leading-none text-gold-3/70">”</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {press.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 130}
              as="figure"
              className="flex flex-col justify-between border border-line bg-ink-2/70 p-8 transition-colors duration-500 hover:border-gold-3"
            >
              <blockquote className="font-display text-[1.12rem] leading-[1.75] text-bone/90 italic">
                {t(p.quote)}
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="text-[0.72rem] tracking-[0.2em] text-gold uppercase">
                  {t(p.author)}
                </p>
                <p className="mt-1.5 text-[0.82rem] text-ash-2">{t(p.source)}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

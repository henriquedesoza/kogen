"use client";

import Image from "next/image";
import { IMG, site } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLang();
  const a = site.about;

  return (
    <section id="sobre" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-line">
            <Image
              src={IMG.about}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden border border-gold-3 bg-ink px-7 py-5 sm:block lg:-right-8">
            <p className="ja text-[1.7rem] leading-none text-gold">光玄</p>
            <p className="mt-2 text-[0.6rem] tracking-[0.28em] text-ash-2 uppercase">
              kō · gen
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold-3" />
              <span className="label">{t(a.label)}</span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] text-bone">
              {t(a.title)}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-[1.02rem] leading-[1.85] text-ash">{t(a.p1)}</p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 text-[1.02rem] leading-[1.85] text-ash">{t(a.p2)}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-11 grid grid-cols-3 gap-4 border-y border-line py-7">
              {a.stats.map((s) => (
                <div key={s.n}>
                  <p className="font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-none text-gold">
                    {s.n}
                  </p>
                  <p className="mt-2 text-[0.62rem] tracking-[0.26em] text-ash-2 uppercase">
                    {t(s.l)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-7 font-display text-lg text-gold-2 italic">{t(a.signature)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

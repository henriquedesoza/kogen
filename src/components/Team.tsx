"use client";

import Image from "next/image";
import { IMG, site, team, teamAlts } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

export function Team() {
  const { t } = useLang();
  const s = site.team;

  return (
    <section id="equipe" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold-3" />
            <span className="label">{t(s.label)}</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] text-bone">
              {t(s.title)}
            </h2>
            <p className="ja text-[1.6rem] text-gold-3">職人</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {team.map((member, i) => (
            <Reveal key={member.jp} delay={i * 120} as="article" className="group">
              <div className="relative aspect-[4/5] overflow-hidden border border-line">
                <Image
                  src={IMG.team[i]}
                  alt={t(teamAlts[i])}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-all duration-[1.1s] ease-out group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="ja absolute right-4 top-3 text-xl text-gold/70">
                  {member.jp}
                </div>
              </div>

              <div className="mt-5 border-t border-line pt-5">
                <h3 className="font-display text-[1.35rem] text-bone transition-colors group-hover:text-gold-2">
                  {t(member.name)}
                </h3>
                <p className="mt-1.5 text-[0.63rem] tracking-[0.26em] text-gold uppercase">
                  {t(member.role)}
                </p>
                <p className="mt-4 text-[0.93rem] leading-relaxed text-ash-2">
                  {t(member.bio)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

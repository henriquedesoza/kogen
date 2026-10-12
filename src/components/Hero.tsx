"use client";

import Image from "next/image";
import { IMG, site } from "@/lib/content";
import { useLang } from "@/lib/lang";

export function Hero() {
  const { t } = useLang();
  const h = site.hero;

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="topo" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <Image
        src={IMG.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, var(--color-ink), transparent)" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-gold-3 sm:w-16" />
          <span className="label">{t(h.eyebrow)}</span>
        </div>

        <h1 className="mt-7 font-display leading-[0.86] text-bone">
          <span className="block text-[clamp(3.6rem,15vw,11rem)] tracking-[0.06em]">
            {h.title.toUpperCase()}
          </span>
          <span className="mt-4 block text-[clamp(1.35rem,4.2vw,3rem)] font-normal tracking-[0.02em] text-gold-2">
            {t(h.line1)}
            <span className="mx-2 text-gold-3">·</span>
            {t(h.line2)}
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-lg text-[0.98rem] leading-relaxed text-ash sm:text-[1.05rem]">
            {t(h.sub)}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => go("reserva")}
              className="w-full border border-gold bg-gold px-8 py-4 text-[0.72rem] font-medium tracking-[0.24em] text-ink uppercase transition-colors duration-300 hover:bg-transparent hover:text-gold sm:w-auto"
            >
              {t(h.cta1)}
            </button>
            <button
              onClick={() => go("cardapio")}
              className="w-full border border-line-2 px-8 py-4 text-[0.72rem] tracking-[0.24em] text-bone uppercase transition-colors duration-300 hover:border-gold hover:text-gold sm:w-auto"
            >
              {t(h.cta2)}
            </button>
          </div>
        </div>

        <div className="mt-14 hidden items-center gap-4 sm:flex">
          <span className="text-[0.62rem] tracking-[0.3em] text-ash-2 uppercase">
            {t(h.scroll)}
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-line-2">
            <span className="absolute inset-x-0 top-0 h-4 animate-[drop_2.4s_ease-in-out_infinite] bg-gold" />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes drop {
          0% { transform: translateY(-100%); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

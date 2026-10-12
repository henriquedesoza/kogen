"use client";

import { site } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-46.6675%2C-23.5672%2C-46.6530%2C-23.5562&layer=mapnik&marker=-23.5618%2C-46.6604";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua+Haddock+Lobo+1626%2C+S%C3%A3o+Paulo";

export function Contact() {
  const { t } = useLang();
  const c = site.contact;

  return (
    <section id="local" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold-3" />
            <span className="label">{t(c.label)}</span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal delay={70}>
              <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.1rem)] leading-[1.1] text-bone">
                {t(c.title)}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ash">{t(c.addr)}</p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 border-t border-line pt-8">
                <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                  {t(c.hoursTitle)}
                </p>
                <dl className="mt-5 space-y-3.5">
                  {c.hours.map((h, i) => (
                    <div key={i} className="flex items-baseline gap-4">
                      <dt className="text-[0.95rem] text-ash">{t(h.d)}</dt>
                      <span className="h-px flex-1 self-center border-b border-dotted border-line-2" />
                      <dd
                        className={`font-display text-[1.02rem] ${
                          typeof h.h === "string" ? "text-bone" : "text-ash-2 italic"
                        }`}
                      >
                        {typeof h.h === "string" ? h.h : t(h.h)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                    {t(c.phoneTitle)}
                  </p>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="mt-2 block font-display text-xl text-bone transition-colors hover:text-gold-2"
                  >
                    {c.phone}
                  </a>
                </div>
                <div>
                  <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                    {t(c.mailTitle)}
                  </p>
                  <a
                    href={`mailto:${c.mail}`}
                    className="mt-2 block font-display text-xl text-bone transition-colors hover:text-gold-2"
                  >
                    {c.mail}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={270}>
              <p className="mt-8 border-l border-gold-3 pl-5 text-[0.9rem] leading-relaxed text-ash-2">
                {t(c.dress)}
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <div className="relative h-[340px] overflow-hidden border border-line sm:h-[460px] lg:h-full lg:min-h-[520px]">
              <iframe
                title={t(c.mapAria)}
                src={MAP_SRC}
                loading="lazy"
                className="map-dark absolute inset-0 h-full w-full border-0"
              />
              <div className="pointer-events-none absolute inset-0 border border-gold-3/30" />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 text-[0.7rem] tracking-[0.22em] text-gold uppercase transition-opacity hover:opacity-70"
            >
              {t(c.openMap)}
              <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

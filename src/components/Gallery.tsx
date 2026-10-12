"use client";

import Image from "next/image";
import { IMG, galleryAlts, galleryCaptions, site } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

const spans = [
  "h-[78vw] sm:h-[400px] lg:h-[500px] sm:col-span-2 lg:col-span-7",
  "h-[78vw] sm:h-[340px] lg:h-[500px] lg:col-span-5",
  "h-[78vw] sm:h-[340px] lg:h-[420px] lg:col-span-4",
  "h-[78vw] sm:h-[340px] lg:h-[420px] lg:col-span-4",
  "h-[78vw] sm:h-[340px] lg:h-[420px] lg:col-span-4",
  "h-[78vw] sm:h-[340px] lg:h-[560px] lg:col-span-5",
  "h-[78vw] sm:h-[340px] lg:h-[560px] lg:col-span-3",
  "h-[78vw] sm:h-[340px] lg:h-[560px] lg:col-span-4",
];

export function Gallery() {
  const { t } = useLang();
  const g = site.gallery;

  return (
    <section id="galeria" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-gold-3" />
                <span className="label">{t(g.label)}</span>
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] text-bone">
                {t(g.title)}
              </h2>
            </div>
            <p className="ja text-[1.6rem] text-gold-3">写真</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {IMG.gallery.map((src, i) => (
            <Reveal
              key={src}
              as="figure"
              delay={(i % 3) * 90}
              className={`group relative overflow-hidden border border-line ${spans[i]}`}
            >
              <Image
                src={src}
                alt={t(galleryAlts[i])}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block h-px w-8 bg-gold" />
                <span className="mt-3 block font-display text-[0.98rem] text-bone">
                  {t(galleryCaptions[i])}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

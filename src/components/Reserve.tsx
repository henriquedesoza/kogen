"use client";

import { useEffect, useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "phone" | "date" | "time", string>>;

const field =
  "w-full border border-line bg-ink/60 px-4 py-3.5 text-[0.95rem] text-bone placeholder:text-ash-2/70 transition-colors duration-300 focus:border-gold focus:outline-none";
const legend = "mb-2 block text-[0.62rem] tracking-[0.24em] text-ash uppercase";

export function Reserve() {
  const { t, lang } = useLang();
  const r = site.reserve;
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "ok">("idle");
  const [minDate, setMinDate] = useState("");

  useEffect(() => setMinDate(new Date().toISOString().slice(0, 10)), []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const today = new Date().toISOString().slice(0, 10);
    const next: Errors = {};

    const req = (key: keyof Errors) => {
      const v = String(data.get(key) ?? "").trim();
      if (!v) next[key] = t(r.errors.required);
      return v;
    };

    req("name");
    const email = req("email");
    const phone = req("phone");
    const date = req("date");
    const time = req("time");

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = t(r.errors.email);
    }
    if (date && date < today) next.date = t(r.errors.past);

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState("sending");
    window.setTimeout(() => setState("ok"), 900);
  };

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <span className="mt-1.5 block text-[0.75rem] text-red-400">{errors[k]}</span>
    ) : null;

  return (
    <section
      id="reserva"
      className="relative scroll-mt-20 border-t border-line bg-ink-2 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          background:
            "radial-gradient(45% 60% at 85% 50%, rgba(200,162,74,0.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1360px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold-3" />
              <span className="label">{t(r.label)}</span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.08] text-bone">
              {t(r.title)}
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-[1rem] leading-[1.8] text-ash">{t(r.sub)}</p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-10 space-y-5 border-t border-line pt-8">
              <div>
                <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                  {t(site.contact.phoneTitle)}
                </p>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="mt-1.5 block font-display text-xl text-bone transition-colors hover:text-gold-2"
                >
                  {site.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                  {t(site.contact.mailTitle)}
                </p>
                <a
                  href={`mailto:${site.contact.mail}`}
                  className="mt-1.5 block font-display text-xl text-bone transition-colors hover:text-gold-2"
                >
                  {site.contact.mail}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="border border-line bg-ink/70 p-6 sm:p-9">
            {state === "ok" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-2xl text-gold">
                  ✓
                </span>
                <h3 className="mt-7 font-display text-[1.8rem] text-bone">{t(r.okTitle)}</h3>
                <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ash">
                  {t(r.okBody)}
                </p>
                <button
                  onClick={() => {
                    setState("idle");
                    setErrors({});
                    (document.getElementById("res-form") as HTMLFormElement | null)?.reset();
                  }}
                  className="mt-8 border border-line-2 px-7 py-3.5 text-[0.7rem] tracking-[0.22em] text-bone uppercase transition-colors hover:border-gold hover:text-gold"
                >
                  {t(r.okAgain)}
                </button>
              </div>
            ) : (
              <form id="res-form" onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={legend} htmlFor="name">
                      {t(r.fields.name)} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={lang === "pt" ? "Maria Alencar" : "Jane Doe"}
                      className={`${field} ${errors.name ? "border-red-500/70" : ""}`}
                    />
                    {err("name")}
                  </div>

                  <div>
                    <label className={legend} htmlFor="email">
                      {t(r.fields.email)} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="voce@email.com"
                      className={`${field} ${errors.email ? "border-red-500/70" : ""}`}
                    />
                    {err("email")}
                  </div>

                  <div>
                    <label className={legend} htmlFor="phone">
                      {t(r.fields.phone)} *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(11) 90000-0000"
                      className={`${field} ${errors.phone ? "border-red-500/70" : ""}`}
                    />
                    {err("phone")}
                  </div>

                  <div>
                    <label className={legend} htmlFor="date">
                      {t(r.fields.date)} *
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={minDate}
                      className={`${field} ${errors.date ? "border-red-500/70" : ""} [color-scheme:dark]`}
                    />
                    {err("date")}
                  </div>

                  <div>
                    <label className={legend} htmlFor="time">
                      {t(r.fields.time)} *
                    </label>
                    <select
                      id="time"
                      name="time"
                      defaultValue=""
                      className={`${field} ${errors.time ? "border-red-500/70" : ""}`}
                    >
                      <option value="" disabled>
                        —
                      </option>
                      {r.times.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                    {err("time")}
                  </div>

                  <div>
                    <label className={legend} htmlFor="guests">
                      {t(r.fields.guests)}
                    </label>
                    <select id="guests" name="guests" defaultValue="2" className={field}>
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={legend} htmlFor="occasion">
                      {t(r.fields.occasion)}
                    </label>
                    <select id="occasion" name="occasion" defaultValue="" className={field}>
                      <option value="">{t(r.occasions.none)}</option>
                      <option value="bday">{t(r.occasions.bday)}</option>
                      <option value="anniv">{t(r.occasions.anniv)}</option>
                      <option value="business">{t(r.occasions.business)}</option>
                      <option value="other">{t(r.occasions.other)}</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={legend} htmlFor="notes">
                      {t(r.fields.notes)}
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder={lang === "pt" ? "Alergias, vegetariano, celebração…" : "Allergies, vegetarian, celebration…"}
                      className={`${field} resize-none`}
                    />
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.7rem] tracking-[0.14em] text-ash-2 uppercase">
                    {t(r.legend)}
                  </p>
                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="border border-gold bg-gold px-9 py-4 text-[0.72rem] font-medium tracking-[0.24em] text-ink uppercase transition-colors duration-300 hover:bg-transparent hover:text-gold disabled:cursor-wait disabled:opacity-60"
                  >
                    {state === "sending" ? t(r.sending) : t(r.submit)}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

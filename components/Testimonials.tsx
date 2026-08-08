import { testimonials } from "@/lib/data";
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo">From the L&amp;D desk</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-700 tracking-tight text-navy md:text-4xl">
          What changes after the last cohort session.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between rounded-2xl bg-navy p-8 text-white">
              <blockquote className="font-display text-lg leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-8 text-sm text-white/60">
                <span className="font-semibold text-white">{t.name}</span>
                <br />
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


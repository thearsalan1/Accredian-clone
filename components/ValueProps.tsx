import { valueProps } from "@/lib/data";
export default function ValueProps() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo">Why enterprise teams choose us</p>
          <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-navy md:text-4xl">
            Training that starts with your gaps, not our catalog.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {valueProps.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-mist bg-white p-8">
              <span className="font-mono text-xs text-amber-600">0{i + 1}</span>
              <h3 className="mt-4 font-display text-lg font-600 text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


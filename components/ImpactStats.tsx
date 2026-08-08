import { impact } from "@/lib/data";
export default function ImpactStats() {
  return (
    <section id="impact" className="border-y border-mist bg-white py-20">
      <div className="mx-auto max-w-content px-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo">By the numbers</p>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {impact.map((stat) => (
            <div key={stat.label} className="border-l-2 border-amber pl-5">
              <p className="font-display text-3xl font-700 text-navy md:text-4xl">{stat.number}</p>
              <p className="mt-2 text-sm text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


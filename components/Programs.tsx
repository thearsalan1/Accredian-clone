import { programs } from "@/lib/data";
export default function Programs() {
  return (
    <section id="programs" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-indigo">Program tracks</p>
            <h2 className="mt-4 font-display text-3xl font-700 tracking-tight text-navy md:text-4xl">
              Four domains. Every track built around live projects.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate">
            Tracks combine into a custom cohort for your org — pick one domain or blend two for cross-functional teams.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.domain}
              className="group rounded-2xl border border-mist bg-white p-8 transition-colors hover:border-indigo"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-600 text-navy">{program.domain}</h3>
                <span className="rounded-full bg-paper px-3 py-1 font-mono text-[11px] text-slate">
                  {program.tag}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-sm text-slate">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


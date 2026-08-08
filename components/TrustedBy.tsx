import { partners } from "@/lib/data";
export default function TrustedBy() {
  return (
    <section className="border-b border-mist bg-white py-10">
      <div className="mx-auto max-w-content px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-slate/70">
          Trusted by L&amp;D teams at
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((name) => (
            <li
              key={name}
              className="font-display text-sm font-600 text-navy/40 transition-colors hover:text-navy"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


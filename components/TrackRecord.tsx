"use client";
import { stats } from "@/lib/data";
export default function TrackRecord() {
  return (
    <section id="stats" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[1300px] px-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Our <span className="text-blue-600">Track Record</span>
        </h2>
        <p className="mt-4 text-base text-slate md:text-lg">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>
        <div className="mt-16 grid gap-0 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-6 py-12 px-10">
              <span className="inline-block rounded-full bg-blue-100 px-10 py-4 font-display text-4xl font-bold text-blue-600 tracking-tight">
                {stat.value}
              </span>
              <p className="mx-auto max-w-[260px] text-base font-semibold text-navy leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


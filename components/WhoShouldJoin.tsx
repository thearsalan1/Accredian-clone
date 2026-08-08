"use client";
import { personas } from "@/lib/data";
const personaIcons: Record<string, JSX.Element> = {
  "Tech Professionals": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden>
      <rect x="4" y="5" width="24" height="17" rx="3" stroke="white" strokeWidth="2"/>
      <path d="M10 28h12M16 22v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 15l3-3 2 2 4-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Non-Tech Professionals": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden>
      <rect x="4" y="5" width="24" height="17" rx="3" stroke="white" strokeWidth="2"/>
      <path d="M10 28h12M16 22v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M11 11l10 10M21 11L11 21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  "Emerging Professionals": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden>
      <path d="M16 4L4 10v2c0 7.18 5.16 13.9 12 15.93C23.84 25.9 29 19.18 29 12v-2L16 4Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M11 16l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Senior Professionals": (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden>
      <rect x="3" y="10" width="11" height="15" rx="2" stroke="white" strokeWidth="2"/>
      <rect x="18" y="4" width="11" height="21" rx="2" stroke="white" strokeWidth="2"/>
      <line x1="6" y1="28" x2="26" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};
export default function WhoShouldJoin() {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-[1300px] px-8">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-10 py-14 md:px-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.8fr] items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-blue-200">
                Who Should Join?
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white leading-snug md:text-4xl">
                Strategic Skill<br/>Enhancement
              </h2>
              <div className="mt-8 flex items-end justify-center gap-2 h-40 select-none pointer-events-none" aria-hidden>
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-300 border-2 border-blue-200"/>
                  <div className="w-16 h-24 rounded-t-3xl bg-blue-400 mt-1 flex items-center justify-center">
                    <div className="w-10 h-10 rounded bg-blue-300 opacity-60 mt-4"/>
                  </div>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-blue-200 border-2 border-blue-100"/>
                  <div className="w-16 h-28 rounded-t-3xl bg-blue-500 mt-1 flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-blue-300 opacity-50 mt-6"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {personas.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 border border-white/30">
                    {personaIcons[p.title]}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-blue-100 leading-snug">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-white/5" />
        </div>
      </div>
    </section>
  );
}


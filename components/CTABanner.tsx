"use client";
export default function CTABanner() {
  return (
    <section className="px-8 pb-16">
      <div className="relative mx-auto overflow-hidden max-w-[1300px] rounded-2xl bg-blue-600 px-10 py-10 md:px-16">
        <svg
          className="pointer-events-none absolute right-0 top-0 h-full opacity-20"
          viewBox="0 0 300 120"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden
        >
          <circle cx="300" cy="60" r="60" fill="none" stroke="white" strokeWidth="1.5"/>
          <circle cx="300" cy="60" r="90" fill="none" stroke="white" strokeWidth="1.5"/>
          <circle cx="300" cy="60" r="120" fill="none" stroke="white" strokeWidth="1.5"/>
          <circle cx="300" cy="60" r="150" fill="none" stroke="white" strokeWidth="1.5"/>
        </svg>
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/20 border border-white/30">
              <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" aria-hidden>
                <path d="M6 16a10 10 0 0 1 20 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <rect x="4" y="15" width="5" height="8" rx="2.5" fill="white"/>
                <rect x="23" y="15" width="5" height="8" rx="2.5" fill="white"/>
                <path d="M28 23v1a4 4 0 0 1-4 4h-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white md:text-2xl leading-snug">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="mt-1 text-sm text-blue-100">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>
          <a
            href="#lead-form"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border-2 border-white bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-blue-600"
          >
            Contact Us
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M4 10h12M11 6l5 4-5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


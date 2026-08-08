"use client";
import { useState } from "react";
import { testimonials } from "@/lib/data";
const partnerLogos: Record<string, JSX.Element> = {
  ADP: (
    <span
      className="font-black text-3xl"
      style={{ color: "#D0021B", fontFamily: "Arial Black, sans-serif" }}
    >
      ADP
    </span>
  ),
  Bayer: (
    <svg viewBox="0 0 60 60" className="h-14 w-14" aria-label="Bayer" role="img">
      <circle cx="30" cy="30" r="29" fill="white" stroke="#00A550" strokeWidth="2"/>
      <path d="M30 1 A29 29 0 0 1 59 30 L30 30 Z" fill="#009FE3"/>
      <path d="M59 30 A29 29 0 0 1 30 59 L30 30 Z" fill="#00A550"/>
      <path d="M30 59 A29 29 0 0 1 1 30 L30 30 Z" fill="#009FE3"/>
      <path d="M1 30 A29 29 0 0 1 30 1 L30 30 Z" fill="#00A550"/>
      <circle cx="30" cy="30" r="18" fill="white"/>
      <text x="50%" y="46%" dominantBaseline="middle" textAnchor="middle"
        fill="#003087" fontSize="10" fontWeight="900" fontFamily="Arial,sans-serif"
        letterSpacing="1">BAYER</text>
      <line x1="30" y1="12" x2="30" y2="48" stroke="#003087" strokeWidth="1.5"/>
      <line x1="12" y1="30" x2="48" y2="30" stroke="#003087" strokeWidth="1.5"/>
    </svg>
  ),
};
export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const pages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1300px] px-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>
        <p className="mt-4 text-base text-slate md:text-lg">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>
        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {visible.map((t) => (
            <figure
              key={t.partner}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex items-center">
                {partnerLogos[t.partner] ?? (
                  <span className="font-bold text-lg text-navy">{t.partner}</span>
                )}
              </div>
              <blockquote className="text-sm leading-relaxed text-slate">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
        {pages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  page === i ? "bg-blue-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


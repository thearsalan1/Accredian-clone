"use client";
import { edgeItems } from "@/lib/data";
const icons = [
  <svg key="bulb" viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
    <path d="M20 6a10 10 0 0 1 5 18.66V28H15v-3.34A10 10 0 0 1 20 6Z" stroke="#1E40AF" strokeWidth="2" fill="#DBEAFE"/>
    <rect x="15" y="29" width="10" height="2" rx="1" fill="#1E40AF"/>
    <rect x="16" y="32" width="8" height="2" rx="1" fill="#1E40AF"/>
  </svg>,
  <svg key="mentor" viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
    <circle cx="20" cy="14" r="6" stroke="#1E40AF" strokeWidth="2" fill="#DBEAFE"/>
    <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round"/>
    <polygon points="28,6 29.2,9.2 32.5,9.5 30,11.7 30.8,15 28,13.2 25.2,15 26,11.7 23.5,9.5 26.8,9.2" fill="#1E40AF"/>
  </svg>,
  <svg key="gear" viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
    <circle cx="20" cy="20" r="5" stroke="#1E40AF" strokeWidth="2" fill="#DBEAFE"/>
    <path d="M20 4v4M20 32v4M4 20h4M32 20h4M7.03 7.03l2.83 2.83M30.14 30.14l2.83 2.83M30.14 7.03l-2.83 2.83M7.03 30.14l2.83 2.83" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 20l3 3 5-6" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="globe" viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
    <circle cx="20" cy="20" r="14" stroke="#1E40AF" strokeWidth="2" fill="#DBEAFE"/>
    <ellipse cx="20" cy="20" rx="6" ry="14" stroke="#1E40AF" strokeWidth="1.5"/>
    <line x1="6" y1="20" x2="34" y2="20" stroke="#1E40AF" strokeWidth="1.5"/>
    <line x1="8" y1="13" x2="32" y2="13" stroke="#1E40AF" strokeWidth="1"/>
    <line x1="8" y1="27" x2="32" y2="27" stroke="#1E40AF" strokeWidth="1"/>
  </svg>,
  <svg key="trend" viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
    <rect x="4" y="4" width="32" height="32" rx="6" fill="#DBEAFE"/>
    <path d="M10 28l7-8 5 4 8-12" stroke="#1E40AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="25,12 30,12 30,17" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="target" viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
    <circle cx="20" cy="20" r="14" stroke="#1E40AF" strokeWidth="2" fill="#DBEAFE"/>
    <circle cx="20" cy="20" r="9" stroke="#1E40AF" strokeWidth="1.5" fill="white"/>
    <circle cx="20" cy="20" r="4" fill="#1E40AF"/>
  </svg>,
  <svg key="box" viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
    <path d="M20 6l14 7v14L20 34 6 27V13L20 6Z" stroke="#1E40AF" strokeWidth="2" fill="#DBEAFE"/>
    <path d="M20 6l14 7M20 6 6 13M20 34V20M34 13l-14 7L6 13" stroke="#1E40AF" strokeWidth="1.5"/>
  </svg>,
];
function Chevron() {
  return (
    <div className="flex-shrink-0 flex items-center self-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-200" fill="none" aria-hidden>
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    </div>
  );
}
export default function AccredianEdge() {
  return (
    <section id="edge" className="py-20 md:py-28 bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="mt-4 text-base text-slate md:text-lg">
            Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
          </p>
        </div>
        <div className="flex w-full items-start justify-between">
          {edgeItems.map((item, i) => {
            const isTop = i % 2 === 0;
            return (
              <div key={item.title} className="flex items-center flex-1 min-w-0">
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <div className="h-24 flex flex-col justify-end items-center text-center px-1 mb-3">
                    {isTop && (
                      <>
                        <p className="text-[11px] leading-tight font-bold text-navy mb-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-0.5 align-middle" />
                          {item.title}
                        </p>
                        <p className="text-[10px] text-slate leading-tight">{item.detail}</p>
                      </>
                    )}
                  </div>
                  <div className="relative flex items-center justify-center w-[min(10vw,88px)] aspect-square">
                    <div
                      className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200"
                      style={{ margin: "-10px" }}
                    />
                    <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-100 flex items-center justify-center">
                      <div
                        className="rounded-full bg-white flex items-center justify-center"
                        style={{ width: "78%", height: "78%", padding: "14%" }}
                      >
                        {icons[i]}
                      </div>
                    </div>
                  </div>
                  <div className="h-24 flex flex-col justify-start items-center text-center px-1 mt-3">
                    {!isTop && (
                      <>
                        <p className="text-[11px] leading-tight font-bold text-navy mb-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-0.5 align-middle" />
                          {item.title}
                        </p>
                        <p className="text-[10px] text-slate leading-tight">{item.detail}</p>
                      </>
                    )}
                  </div>
                </div>
                {i < edgeItems.length - 1 && (
                  <div className="flex-shrink-0 self-center" style={{ marginTop: "calc(-2rem)" }}>
                    <Chevron />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


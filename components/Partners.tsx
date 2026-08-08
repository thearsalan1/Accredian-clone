"use client";
const partnerLogos = [
  {
    name: "Reliance Industries Limited",
    logo: (
      <div className="flex flex-col items-center gap-2">
        <svg viewBox="0 0 56 56" className="h-16 w-16" aria-hidden>
          <circle cx="28" cy="28" r="27" fill="#F5F0E8" stroke="#C8A96E" strokeWidth="1.5"/>
          <path d="M28 14c0 0-6 5-6 11a6 6 0 0012 0c0-6-6-11-6-11Z" fill="#C8A96E"/>
          <path d="M24 30c0 0-3 2.5-3 5a7 7 0 0014 0c0-2.5-3-5-3-5" fill="none" stroke="#C8A96E" strokeWidth="1"/>
        </svg>
        <span className="text-xs font-semibold text-gray-700 leading-tight text-center w-20">
          Reliance<br/>Industries<br/>Limited
        </span>
      </div>
    ),
  },
  {
    name: "HCL",
    logo: (
      <span
        className="font-black tracking-widest text-5xl"
        style={{ color: "#0066CC", fontFamily: "Arial Black, sans-serif", letterSpacing: "0.05em" }}
      >
        HCL
      </span>
    ),
  },
  {
    name: "IBM",
    logo: (
      <svg viewBox="0 0 80 32" className="h-12 w-28" aria-label="IBM" role="img">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
          <rect
            key={row}
            x={0}
            y={row * 4}
            width={80}
            height={2}
            fill="#006FBB"
            rx={1}
          />
        ))}
        <rect x={0} y={0} width={80} height={32} fill="white" opacity={0}/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          fill="#006FBB" fontSize="22" fontWeight="900" fontFamily="Arial Black,sans-serif"
          style={{ letterSpacing: "2px" }}>
          IBM
        </text>
      </svg>
    ),
  },
  {
    name: "CRIF",
    logo: (
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 20 20" className="h-7 w-7" aria-hidden>
            <polygon points="0,20 10,0 20,20" fill="#F5A623"/>
          </svg>
          <span
            className="font-black text-4xl"
            style={{ color: "#003087", fontFamily: "Arial Black, sans-serif" }}
          >
            CRIF
          </span>
        </div>
        <span className="text-xs text-gray-500 tracking-wide mt-0.5">Together to the next level</span>
      </div>
    ),
  },
  {
    name: "ADP",
    logo: (
      <span
        className="font-black text-5xl tracking-wider"
        style={{ color: "#D0021B", fontFamily: "Arial Black, sans-serif" }}
      >
        ADP
      </span>
    ),
  },
  {
    name: "Bayer",
    logo: (
      <svg viewBox="0 0 60 60" className="h-20 w-20" aria-label="Bayer" role="img">
        <circle cx="30" cy="30" r="29" fill="white" stroke="#00A550" strokeWidth="2"/>
        <path d="M30 1 A29 29 0 0 1 59 30 L30 30 Z" fill="#009FE3"/>
        <path d="M59 30 A29 29 0 0 1 30 59 L30 30 Z" fill="#00A550"/>
        <path d="M30 59 A29 29 0 0 1 1 30 L30 30 Z" fill="#009FE3"/>
        <path d="M1 30 A29 29 0 0 1 30 1 L30 30 Z" fill="#00A550"/>
        <circle cx="30" cy="30" r="18" fill="white"/>
        <text x="50%" y="46%" dominantBaseline="middle" textAnchor="middle"
          fill="#003087" fontSize="10" fontWeight="900" fontFamily="Arial,sans-serif"
          letterSpacing="1">
          BAYER
        </text>
        <line x1="30" y1="12" x2="30" y2="48" stroke="#003087" strokeWidth="1.5"/>
        <line x1="12" y1="30" x2="48" y2="30" stroke="#003087" strokeWidth="1.5"/>
      </svg>
    ),
  },
];
export default function Partners() {
  return (
    <section id="clients" className="border-t border-slate-100 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1300px] px-8 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>
        <p className="mt-4 text-base text-slate md:text-lg">
          Successful Collaborations With the{" "}
          <span className="text-blue-600">Industry&apos;s Best</span>
        </p>
        <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-20 gap-y-12">
          {partnerLogos.map(({ name, logo }) => (
            <li
              key={name}
              className="flex items-center justify-center min-w-[100px] opacity-80 hover:opacity-100 transition-opacity duration-200"
              aria-label={name}
            >
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


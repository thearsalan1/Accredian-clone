"use client";
const socialIcons = [
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2ZM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2Z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58ZM10 15V9l5.2 3-5.2 3Z"/>
      </svg>
    ),
  },
];
export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1300px] px-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-bold text-blue-600 tracking-tight">
              accredian
            </p>
            <p className="-mt-0.5 text-[10px] text-gray-500 tracking-widest uppercase">
              credentials that matter
            </p>
            <ul className="mt-5 flex items-center gap-5">
              {socialIcons.map((s) => (
                <li key={s.name}>
                  <a
                    href="#"
                    aria-label={s.name}
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <a
              href="#lead-form"
              className="inline-block rounded-lg bg-blue-600 px-7 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:-translate-y-0.5"
            >
              Enquire Now
            </a>
            <p className="mt-1 text-xs text-gray-700 font-medium">Speak with our Advisor</p>
          </div>
        </div>
        <div className="my-8 border-t border-gray-400" />
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-[15px] font-bold text-black">Accredian</p>
            <ul className="mt-4 space-y-3 text-[15px] text-gray-700">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Why Accredian</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[15px] font-bold text-black">Contact Us</p>
            <p className="mt-4 text-[15px] text-gray-700">
              Email us:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-blue-600 hover:underline"
              >
                enterprise@accredian.com
              </a>
            </p>
            <p className="mt-3 text-[15px] text-gray-700 leading-relaxed">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,<br/>
              Gurugram, Haryana
            </p>
          </div>
        </div>
        <div className="my-8 border-t border-gray-400" />
        <p className="text-center text-[13px] font-medium text-gray-700 pb-4">
          © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}


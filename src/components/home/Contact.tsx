"use client";

import { CONTACT_INFO } from "@/src/lib/data";


const inputClass =
  "w-full rounded-[11px] border border-slate-300 bg-transparent p-[16px_18px] text-sm text-slate-800 outline-none transition-colors duration-200 focus:border-accent";

export function Contact() {

  return (
    <section
      id="contact"
      className="scroll-mt-23.5 rounded-[20px] border border-border p-[54px_48px]"
    >
      <h2 className="mb-10 text-[clamp(28px,3.2vw,42px)] font-extrabold text-accent">
        Let&rsquo;s connect
      </h2>

      <div className="grid grid-cols-1 items-start gap-11.5 lg:grid-cols-2">
        <form noValidate className="flex flex-col gap-4.5">
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
            <div>
              <input
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <input
              className={inputClass}
              placeholder="Phone"
            />
          </div>
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
            <div>
              <input
                type="email"
                className={inputClass}
                placeholder="Email"
              />
            </div>
            <input
              className={inputClass}
              placeholder="Subject"
            />
          </div>
          <div>
            <textarea
              rows={6}
              className={`${inputClass} min-h-37.5`}
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2.5 self-start text-[15px] font-bold text-text transition-all"
          >
          </button>
        </form>

        <div className="flex flex-col gap-4.5">
          {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4.5">
              <span className="flex h-13 w-13 flex-none items-center justify-center rounded-[13px] border border-border bg-[#dff5eb] text-accent">
                <Icon size={20} />
              </span>
              <div>
                <div className="text-[15px] text-slate-700">{label}</div>
                <div className="text-base font-bold text-slate-600">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

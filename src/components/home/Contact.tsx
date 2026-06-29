"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { CONTACT_INFO } from "@/src/lib/data";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const inputClass =
  "w-full rounded-[11px] border border-border bg-transparent p-[16px_18px] text-sm text-text outline-none transition-colors duration-200 focus:border-accent";

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f) => ({ ...f, [key]: e.target.value }));
        setErrors((prev) => ({ ...prev, [key]: undefined }));
      };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Wire up to a real endpoint / server action here.
    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-[94px] rounded-[20px] border border-border bg-card p-[54px_48px]"
    >
      <h2 className="mb-10 text-[clamp(28px,3.2vw,42px)] font-extrabold text-accent">
        Let&rsquo;s connect
      </h2>

      <div className="grid grid-cols-1 items-start gap-[46px] lg:grid-cols-2">
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-[18px]">
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
            <div>
              <input
                className={inputClass}
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-pink">{errors.name}</p>
              )}
            </div>
            <input
              className={inputClass}
              placeholder="Phone"
              value={form.phone}
              onChange={update("phone")}
            />
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
            <div>
              <input
                type="email"
                className={inputClass}
                placeholder="Email"
                value={form.email}
                onChange={update("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-pink">{errors.email}</p>
              )}
            </div>
            <input
              className={inputClass}
              placeholder="Subject"
              value={form.subject}
              onChange={update("subject")}
            />
          </div>
          <div>
            <textarea
              rows={6}
              className={`${inputClass} min-h-[150px]`}
              placeholder="Message"
              value={form.message}
              onChange={update("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-pink">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-[10px] self-start text-[15px] font-bold text-text transition-all"
          >
            {sent ? (
              <span className="text-accent">Message sent ✓</span>
            ) : (
              <span className="inline-flex items-center gap-[10px] transition-all group-hover:gap-[15px]">
                Send Message <Send size={17} />
              </span>
            )}
          </button>
        </form>

        <div className="flex flex-col gap-[18px]">
          {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-[18px]">
              <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[13px] border border-border bg-inner text-accent">
                <Icon size={20} />
              </span>
              <div>
                <div className="text-[13px] text-muted">{label}</div>
                <div className="text-base font-bold text-text">{value}</div>
              </div>
            </div>
          ))}

          <a
            href="#"
            className="mt-2 inline-flex w-fit items-center gap-2 text-sm text-accent transition-all hover:gap-3"
          >
            Open in Maps <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

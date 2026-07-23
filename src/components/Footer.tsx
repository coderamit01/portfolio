import { Code2 } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/src/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-15 border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-325 flex-col items-center gap-5.5">
        <Link
          href="#top"
          className="flex items-center gap-2.25 text-xl font-bold"
        >
          <Code2 className="text-accent" size={24} />
          <span className="text-slate-900">Amit</span>          
        </Link>

        <div className="flex gap-5">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="transition-colors duration-200 hover:text-accent"
            >
              <Icon className="text-slate-600" size={17} />
            </Link>
          ))}
        </div>

        <p className="text-base text-slate-500">
          © {new Date().getFullYear()} Amit — All rights reserved.
        </p>
      </div>
    </footer>
  );
}

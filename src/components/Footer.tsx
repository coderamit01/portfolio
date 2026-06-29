import { Code2 } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/src/lib/data";

export function Footer() {
  return (
    <footer className="mt-[60px] border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-[22px]">
        <a
          href="#top"
          className="flex items-center gap-[9px] text-xl font-bold"
        >
          <Code2 className="text-accent" size={24} />
          Amit<span className="text-muted">.dev</span>
        </a>

        <div className="flex gap-5">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted transition-colors duration-200 hover:text-accent"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <nav className="flex flex-wrap justify-center gap-[26px] text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Amit.dev — All rights reserved.
        </p>
      </div>
    </footer>
  );
}

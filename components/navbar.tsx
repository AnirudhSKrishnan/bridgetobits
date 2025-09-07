"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/universities", label: "Universities" },
  { href: "/stories", label: "Stories" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50" style={{ backdropFilter: "blur(8px)", background: "rgba(26,27,38,0.65)", borderBottom: "1px solid var(--tn-border)" }}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/B2B-Logo.svg"
            alt="Bridge to BITS Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-lg" style={{ color: "var(--tn-text)" }}>
            Bridge to BITS
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center px-3 py-2 text-sm"
          style={{ borderRadius: 8, border: "1px solid var(--tn-border)", color: "var(--tn-text)" }}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div style={{ borderTop: "1px solid var(--tn-border)", background: "rgba(22,22,30,0.95)" }}>
          <div className="container py-3 flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

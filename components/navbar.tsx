"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHome, FaInfoCircle, FaBookOpen, FaUniversity, FaRegCommentDots, FaBook, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const links = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/about", label: "About", icon: <FaInfoCircle /> },
  { href: "/programs", label: "Programs", icon: <FaBookOpen /> },
  { href: "/universities", label: "Universities", icon: <FaUniversity /> },
  { href: "/stories", label: "Stories", icon: <FaRegCommentDots /> },
  { href: "/resources", label: "Resources", icon: <FaBook /> },
  { href: "/faq", label: "FAQ", icon: <FaQuestionCircle /> },
  { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const yellow = "#fac203";
  const black = "#111";

  return (
    <header
      className="fixed top-8 left-1/2 z-50 flex justify-center pointer-events-none"
      style={{ background: "none", transform: "translateX(-50%)", fontFamily: 'Montserrat, Inter, ui-sans-serif' }}
    >
      <div
        className="flex w-full max-w-4xl items-center px-8 py-5 rounded-2xl shadow-2xl pointer-events-auto"
        style={{
          borderRadius: '2rem',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          border: 'none',
          minWidth: '600px',
          width: '1000px',
          height: '80px',
          background: black,
          fontFamily: 'Montserrat, Inter, ui-sans-serif',
        }}
      >
        {/* Logo removed from navbar as per request */}
        <nav className="hidden md:flex gap-8 flex-1 justify-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link flex flex-col items-center px-3 py-1 rounded-lg transition-colors ${pathname === l.href ? 'font-bold' : ''}`}
              aria-current={pathname === l.href ? "page" : undefined}
              title={l.label}
              style={{
                color: pathname === l.href ? yellow : '#fff',
                background: pathname === l.href ? 'rgba(250,194,3,0.10)' : 'transparent',
                fontFamily: 'Montserrat, Inter, ui-sans-serif',
                transition: 'color 0.18s, background 0.18s',
              }}
            >
              <span className="text-2xl mb-0.5" style={{ color: pathname === l.href ? yellow : '#fff', opacity: 0.92 }}>{l.icon}</span>
              <span className="text-xs font-medium tracking-wide capitalize" style={{ color: pathname === l.href ? yellow : '#fff', opacity: 0.85 }}>{l.label}</span>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center px-3 py-2 text-sm border-0 rounded-xl ml-2"
          style={{ background: black, color: yellow, fontFamily: 'Montserrat, Inter, ui-sans-serif' }}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-2xl rounded-2xl shadow-2xl py-4 px-6 flex flex-col gap-3 z-50 pointer-events-auto"
          style={{ background: black, border: 'none' }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link px-3 py-2 rounded-lg text-lg ${pathname === l.href ? 'font-bold' : ''}`}
              style={{
                color: pathname === l.href ? yellow : '#fff',
                background: pathname === l.href ? 'rgba(250,194,3,0.10)' : 'transparent',
                fontFamily: 'Montserrat, Inter, ui-sans-serif',
                transition: 'color 0.18s, background 0.18s',
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

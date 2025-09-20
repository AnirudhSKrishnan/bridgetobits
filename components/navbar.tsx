"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-4 sm:top-8 left-1/2 z-50 flex justify-center pointer-events-none px-4"
        style={{ background: "none", transform: "translateX(-50%)", fontFamily: 'Montserrat, Inter, ui-sans-serif' }}
      >
        <div
          className="flex w-full max-w-4xl items-center px-4 sm:px-8 py-3 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl pointer-events-auto"
          style={{
            borderRadius: '1rem',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            border: 'none',
            minWidth: '280px',
            width: '100%',
            height: '60px',
            background: black,
            fontFamily: 'Montserrat, Inter, ui-sans-serif',
          }}
        >
          {/* Logo for mobile */}
          <div className="md:hidden flex-shrink-0">
            <Link href="/">
              <Image
                src="/logos/b2b_logo.svg"
                alt="Bridge to BITS Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-8 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link flex flex-col items-center px-2 lg:px-3 py-1 rounded-lg transition-colors ${pathname === l.href ? 'font-bold' : ''}`}
                aria-current={pathname === l.href ? "page" : undefined}
                title={l.label}
                style={{
                  color: pathname === l.href ? yellow : '#fff',
                  background: pathname === l.href ? 'rgba(250,194,3,0.10)' : 'transparent',
                  fontFamily: 'Montserrat, Inter, ui-sans-serif',
                  transition: 'color 0.18s, background 0.18s',
                }}
              >
                <span className="text-lg lg:text-2xl mb-0.5" style={{ color: pathname === l.href ? yellow : '#fff', opacity: 0.92 }}>{l.icon}</span>
                <span className="text-xs font-medium tracking-wide capitalize" style={{ color: pathname === l.href ? yellow : '#fff', opacity: 0.85 }}>{l.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center px-3 py-2 text-sm border-0 rounded-xl ml-auto min-h-[44px] min-w-[60px] relative z-50"
            style={{ 
              background: open ? 'rgba(250,194,3,0.1)' : 'transparent', 
              color: yellow, 
              fontFamily: 'Montserrat, Inter, ui-sans-serif',
              border: 'none',
              outline: 'none'
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Menu button clicked, open:', !open);
              setOpen((s) => !s);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            aria-label="Toggle menu"
            aria-expanded={open}
            type="button"
          >
            <div className="flex flex-col gap-1 transition-all duration-300">
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
            onClick={(e) => {
              e.preventDefault();
              console.log('Backdrop clicked');
              setOpen(false);
            }}
            style={{ touchAction: 'none' }}
          />
          
          {/* Mobile Menu */}
          <div
            className="fixed top-16 sm:top-20 left-2 right-2 sm:left-4 sm:right-4 rounded-2xl shadow-2xl py-4 px-4 flex flex-col gap-1 z-50 md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            style={{ 
              background: black, 
              border: '1px solid rgba(250,194,3,0.3)',
              touchAction: 'pan-y',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-2 border-b border-yellow-400/20 mb-2">
              <h3 className="text-yellow-400 font-semibold text-center text-sm">Navigation</h3>
            </div>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-all min-h-[48px] hover:bg-yellow-400/10 active:bg-yellow-400/20 ${pathname === l.href ? 'font-bold' : ''}`}
                style={{
                  color: pathname === l.href ? yellow : '#fff',
                  background: pathname === l.href ? 'rgba(250,194,3,0.15)' : 'transparent',
                  fontFamily: 'Montserrat, Inter, ui-sans-serif',
                  transition: 'color 0.18s, background 0.18s',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent'
                }}
                onClick={(e) => {
                  console.log('Menu item clicked:', l.label);
                  setOpen(false);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="text-xl flex-shrink-0" style={{ color: pathname === l.href ? yellow : '#fff', opacity: 0.9 }}>
                  {l.icon}
                </span>
                <span className="flex-1">{l.label}</span>
                {pathname === l.href && <span className="text-yellow-400">•</span>}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}

import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-32 min-h-screen" style={{ background: '#111', color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
      <div className="fixed top-[-16px] left-6 z-50 hidden md:block">
        <Link href="/">
          <Image
            src="/logos/b2b_logo.svg"
            alt="Bridge to BITS Logo"
            width={180}
            height={180}
            className="w-44 h-44 drop-shadow-2xl"
            priority
            style={{ background: '#111', borderRadius: '1.5rem', border: '2px solid #fac203' }}
          />
        </Link>
      </div>
      <Section>
        <div className="text-center">
          <h1 className="h2 yellow-gradient text-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Resources</h1>
          <p className="muted mt-2 mb-4 text-center" style={{ color: '#fff', opacity: 0.85, fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>Guides, videos, and useful links.</p>
        </div>
      </Section>
    </div>
  );
}

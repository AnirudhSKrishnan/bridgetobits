import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--tn-border)" }} className="mt-12">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-bold text-lg" style={{ color: "var(--tn-text)" }}>BITS-AC</div>
          <p className="muted mt-2"> Bridge to Bits</p>
        </div>
        <div>
          <div className="font-semibold mb-2" style={{ color: "var(--tn-text)" }}>Pages</div>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/programs" className="nav-link">Programs</Link></li>
            <li><Link href="/universities" className="nav-link">Universities</Link></li>
            <li><Link href="/stories" className="nav-link">Stories</Link></li>
            <li><Link href="/resources" className="nav-link">Resources</Link></li>
            <li><Link href="/faq" className="nav-link">FAQ</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2" style={{ color: "var(--tn-text)" }}>Built by Bitsians for Bitsians</div>
          <ul className="space-y-1 text-sm" style={{ color: "var(--tn-muted)" }}>
           
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-sm" style={{ color: "var(--tn-muted)", borderTop: "1px solid var(--tn-border)" }}>
        © {new Date().getFullYear()} BITS-AC TN
      </div>
    </footer>
  );
}

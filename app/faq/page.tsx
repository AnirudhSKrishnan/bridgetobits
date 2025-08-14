import Section from "@/components/section";

const faqs = [
  { q: "Is this production-ready?", a: "It’s a solid starting point; plug in your data and go." },
  { q: "Can I deploy on Vercel?", a: "Yes. `vercel --prod` after linking the project." },
  { q: "Where is the data stored?", a: "Static JSON/TS for now; swap to a CMS later." },
];

export default function FAQ() {
  return (
    <Section>
      <h1 className="h2" style={{ color: "var(--tn-text)" }}>FAQ</h1>
      <div className="grid gap-4 mt-8">
        {faqs.map((f) => (
          <details key={f.q} className="card">
            <summary className="font-medium cursor-pointer" style={{ color: "var(--tn-text)" }}>{f.q}</summary>
            <p className="muted mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

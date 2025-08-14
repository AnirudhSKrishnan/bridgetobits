const items = [
  { name: "A.S.", text: "Clear guidance and practical tips—exactly what I needed." },
  { name: "P.P.", text: "Made the process simple and stress-free." },
  { name: "R.K.", text: "Actionable advice that actually works." },
  { name: "T.M.", text: "Great clarity on timelines and paperwork." },
  { name: "S.K.", text: "The university shortlist was spot-on." },
];

export default function TestimonialMarquee() {
  const row = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="marquee" aria-label="Student testimonials">
      <div className="marquee__track">
        {row.map((t, i) => (
          <div key={i} className="card card-focusable testimonial-card" tabIndex={0}>
            <div className="font-semibold" style={{ color: "var(--tn-text)" }}>{t.name}</div>
            <p className="muted mt-2">“{t.text}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

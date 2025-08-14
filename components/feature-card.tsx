export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card card-focusable" tabIndex={0}>
      <div className="font-semibold text-lg" style={{ color: "var(--tn-text)" }}>{title}</div>
      <p className="muted mt-2">{desc}</p>
    </div>
  );
}

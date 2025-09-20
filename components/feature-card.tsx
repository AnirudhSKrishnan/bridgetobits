export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card card-focusable p-6 h-auto min-h-[240px] flex flex-col justify-between" tabIndex={0}>
      <div className="font-semibold text-lg break-words" style={{ color: "var(--tn-text)", wordBreak: 'break-word' }}>{title}</div>
      <p className="muted mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

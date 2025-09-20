export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card tint-on-focus p-4 sm:p-6 min-h-[120px] sm:min-h-[140px]" tabIndex={0}>
      <div className="font-semibold text-base sm:text-lg mb-2" style={{ color: "var(--tn-text)" }}>
        {title}
      </div>
      <p className="muted text-sm sm:text-base leading-relaxed">{desc}</p>
    </div>
  );
}

export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card tint-on-focus p-4 sm:p-6 h-auto min-h-[140px] flex flex-col justify-between" tabIndex={0}>
      <div className="font-semibold text-base sm:text-lg mb-2 break-words" style={{ color: "var(--tn-text)", wordBreak: 'break-word' }}>
        {title}
      </div>
      <p className="muted text-sm sm:text-base leading-relaxed">{desc}</p>
    </div>
  );
}

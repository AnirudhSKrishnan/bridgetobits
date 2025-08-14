export default function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`section ${className ?? ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}

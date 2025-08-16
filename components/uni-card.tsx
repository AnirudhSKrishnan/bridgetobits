// components/uni-card.tsx
import React from "react";

export type Uni = {
  name: string;
  country: string;
  city?: string;
  programs: string[];       // e.g. ["2+2", "3+1"]
  website?: string;         // e.g. "https://example.edu"
  badge?: string;           // optional small tag like "Top Choice"
};

export default function UniCard({ uni }: { uni: Uni }) {
  const Wrapper = uni.website ? "a" : "div";
  const props = uni.website
    ? { href: uni.website, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...(props as any)}
      className="card card-focusable group block"
      style={{ padding: "1.25rem" }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-xl font-semibold leading-tight"
          style={{ color: "var(--tn-text)" }}
        >
          {uni.name}
        </h3>

        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{
            border: "1px solid var(--tn-border)",
            color: "var(--tn-muted)",
            background: "rgba(255,255,255,0.02)",
            whiteSpace: "nowrap",
          }}
        >
          {uni.country}
        </span>
      </div>

      {(uni.city || uni.badge) && (
        <div className="mt-1 flex items-center gap-2 text-sm">
          {uni.city && (
            <span className="muted" style={{ color: "var(--tn-muted)" }}>
              {uni.city}
            </span>
          )}
          {uni.badge && (
            <span
              className="text-xs px-1.5 py-0.5 rounded-md"
              style={{
                border: "1px solid var(--tn-border)",
                color: "var(--tn-text)",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              }}
            >
              {uni.badge}
            </span>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {uni.programs.map((p) => (
          <span
            key={p}
            className="text-xs px-2 py-1 rounded-md"
            style={{
              border: "1px solid var(--tn-border)",
              color: "var(--tn-text)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {p}
          </span>
        ))}
      </div>

      {/* subtle hover affordance */}
      <div
        className="mt-4 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: "var(--tn-muted)" }}
      >
        {uni.website ? "Open website ↗" : "\u00A0"}
      </div>
    </Wrapper>
  );
}

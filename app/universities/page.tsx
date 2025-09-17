"use client";

import Section from "@/components/section";
import UniCard, { type Uni } from "@/components/uni-card";
import data from "@/data/universities.json";
import { useMemo, useState } from "react";

// Normalize JSON to ensure deadlines are strictly Record<string, string>
// This avoids TS issues when some JSON objects have optional keys (e.g., fall/spring vs semester1/semester2)
const allUnis: Uni[] = (data as unknown as Array<Record<string, any>>).map((uni) => {
  const normalizedDeadlines = Object.fromEntries(
    Object.entries(uni.deadlines ?? {}).filter(([, v]) => typeof v === "string" && v)
  ) as Record<string, string>;

  return {
    ...(uni as Omit<Uni, "deadlines">),
    deadlines: normalizedDeadlines,
  } as Uni;
});

const countries = Array.from(new Set(allUnis.map((u) => u.country))).sort();
const programs = Array.from(
  new Set(allUnis.flatMap((u) => u.programs))
).sort();

export default function Universities() {
  const [country, setCountry] = useState<string>("All");
  const [program, setProgram] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allUnis.filter((u) => {
      const countryOk = country === "All" || u.country === country;
      const programOk = program === "All" || u.programs.includes(program);
      const queryOk =
        !q ||
        u.name.toLowerCase().includes(q) ||
        (u.city && u.city.toLowerCase().includes(q)) ||
        u.programs.some((p) => p.toLowerCase().includes(q));
      return countryOk && programOk && queryOk;
    });
  }, [country, program, query]);

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="h2" style={{ color: "var(--tn-text)" }}>
            Universities
          </h1>
          <p className="muted mt-2">
            Client-side filters by country and program.
          </p>
        </div>

        {/* controls */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          <select
            className="input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Filter by country"
          >
            <option>All</option>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            className="input"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            aria-label="Filter by program"
          >
            <option>All</option>
            {programs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <input
            className="input col-span-2 sm:col-span-1"
            placeholder="Search by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search by name"
          />
        </div>
      </div>

      {/* results */}
      {filtered.length === 0 ? (
        <div
          className="mt-10 text-center"
          style={{ color: "var(--tn-muted)" }}
        >
          No matches. Try clearing filters.
        </div>
      ) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((u) => (
            <UniCard key={`${u.name}-${u.country}`} uni={u} />
          ))}
        </div>
      )}
    </Section>
  );
}

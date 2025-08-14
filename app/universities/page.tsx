"use client";

import Section from "@/components/section";
import UniCard, { type Uni } from "@/components/uni-card";
import data from "@/data/universities.json";
import { useMemo, useState } from "react";

const countries = Array.from(new Set((data as Uni[]).map(u => u.country))).sort();
const programs = Array.from(new Set((data as Uni[]).flatMap(u => u.programs))).sort();

export default function Universities() {
  const [country, setCountry] = useState<string>("All");
  const [program, setProgram] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    return (data as Uni[]).filter(u => {
      const countryOk = country === "All" || u.country === country;
      const programOk = program === "All" || u.programs.includes(program);
      const queryOk = !query || u.name.toLowerCase().includes(query.toLowerCase());
      return countryOk && programOk && queryOk;
    });
  }, [country, program, query]);

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="h2" style={{ color: "var(--tn-text)" }}>Universities</h1>
          <p className="muted mt-2">Client-side filters by country and program.</p>
        </div>
        <div className="grid grid-cols-2 md:flex gap-3">
          <select className="input" value={country} onChange={e => setCountry(e.target.value)}>
            <option>All</option>
            {countries.map(c => <option key={c}>{c}</option>)}
          </select>
          <select className="input" value={program} onChange={e => setProgram(e.target.value)}>
            <option>All</option>
            {programs.map(p => <option key={p}>{p}</option>)}
          </select>
          <input
            className="input col-span-2 md:col-span-1"
            placeholder="Search by name..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((u) => <UniCard key={u.name} uni={u} />)}
      </div>
    </Section>
  );
}

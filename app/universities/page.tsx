"use client";

import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
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
    <div className="mt-20 sm:mt-32 min-h-screen px-4 sm:px-6" style={{ background: '#111', color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
      <div className="fixed top-[-16px] left-4 sm:left-6 z-50 hidden md:block">
        <Link href="/">
          <Image
            src="/logos/b2b_logo.svg"
            alt="Bridge to BITS Logo"
            width={180}
            height={180}
            className="w-32 h-32 sm:w-44 sm:h-44 drop-shadow-2xl"
            priority
            style={{ background: '#111', borderRadius: '1.5rem', border: '2px solid #fac203' }}
          />
        </Link>
      </div>
      <Section>
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold yellow-gradient text-center mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Universities
          </h1>
        </div>
        <div className="w-full text-center">
        <p className="mt-4 sm:mt-6 mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif', opacity: 0.85 }}>
         Browse your dream universities and their application details.
        </p>
        {/* controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 items-center max-w-4xl mx-auto">
          <select
            className="input border-2 border-yellow-400 bg-black text-white min-h-[48px] px-3 py-2 text-sm sm:text-base"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            aria-label="Filter by country"
            style={{ color: '#fff', background: '#111', borderColor: '#fac203' }}
          >
            <option>All</option>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            className="input border-2 border-yellow-400 bg-black text-white min-h-[48px] px-3 py-2 text-sm sm:text-base"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            aria-label="Filter by program"
            style={{ color: '#fff', background: '#111', borderColor: '#fac203' }}
          >
            <option>All</option>
            {programs.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <input
            className="input col-span-2 sm:col-span-1 border-2 border-yellow-400 bg-black text-white"
            placeholder="Search by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search by name"
            style={{ color: '#fff', background: '#111', borderColor: '#fac203' }}
          />
        </div>
        {/* results */}
        {filtered.length === 0 ? (
          <div
            className="mt-10 text-center"
            style={{ color: '#fac203', fontWeight: 600 }}
          >
            No matches. Try clearing filters.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filtered.map((u) => (
              <UniCard key={`${u.name}-${u.country}`} uni={u} />
            ))}
          </div>
        )}
        </div>
      </Section>
    </div>
  );
}

"use client";

import Section from "@/components/section";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <Section>
      <h1 className="h2" style={{ color: "var(--tn-text)" }}>Contact</h1>
      <p className="muted mt-2 mb-8">This demo form just simulates a send.</p>
      <form
        onSubmit={(e) => { e.preventDefault(); setStatus("sent"); }}
        className="card grid gap-4 max-w-lg"
      >
        <label className="grid gap-2">
          <span className="text-sm font-medium" style={{ color: "var(--tn-text)" }}>Name</span>
          <input required className="input" placeholder="Your name" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium" style={{ color: "var(--tn-text)" }}>Email</span>
          <input type="email" required className="input" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium" style={{ color: "var(--tn-text)" }}>Message</span>
          <textarea required className="input" rows={5} placeholder="How can we help?" />
        </label>
        <button className="btn btn-primary w-fit">Send</button>
        {status === "sent" && <p style={{ color: "#9ece6a" }}>Thanks! We’ll get back to you.</p>}
      </form>
    </Section>
  );
}

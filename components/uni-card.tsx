// components/uni-card.tsx
import React from "react";
import Image from "next/image";

export type Uni = {
  name: string;
  country: string;
  city?: string;
  programs: string[];
  requirements?: string[];
  deadlines: {
    [key: string]: string;
  };
  gpa?: string;
  toefl?: string;
  ielts?: string;
  website?: string;
  badge?: string;
  description?: string;
  logo?: string;
  ranking?: string;
  video?: string;
};

import { useState } from "react";

export default function UniCard({ uni }: { uni: Uni }) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="card card-focusable">
      {uni.badge && (
        <div className="absolute -top-3 left-6 z-10">
          <span
            className="text-xs px-3 py-1 rounded-full font-semibold"
            style={{
              background: "linear-gradient(135deg, var(--tn-accent), var(--tn-accent-2))",
              color: "#0d1726"
            }}
          >
            {uni.badge}
          </span>
        </div>
      )}

      {/* Header with Logo */}
      <div className="flex items-start gap-4 mb-4">
        <div 
          className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.9)" }}
        >
          {uni.logo ? (
            <Image
              src={uni.logo}
              alt={`${uni.name} logo`}
              width={48}
              height={48}
              className="object-contain"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--tn-text)" }}>
                {uni.name}
              </h3>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" style={{ color: "var(--tn-muted)" }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ color: "var(--tn-muted)" }}>{uni.country}</span>
                </span>
                {uni.ranking && (
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(136,192,208,0.2)",
                      color: "var(--tn-accent)"
                    }}
                  >
                    {uni.ranking}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {uni.description && (
            <p className="text-sm mb-4" style={{ color: "var(--tn-muted)" }}>
              {uni.description}
            </p>
          )}
        </div>
      </div>

      {/* Available Programs */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4" style={{ color: "var(--tn-accent)" }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6.5A1.5 1.5 0 0116.5 16H3.5A1.5 1.5 0 012 14.5V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zM8 8a1 1 0 00-1 1v.5a.5.5 0 01-1 0V9a2 2 0 112 2H6.5a.5.5 0 010-1H8a1 1 0 100-2z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold text-sm" style={{ color: "var(--tn-text)" }}>
            Available Programs
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {uni.programs.map((program) => (
            <span
              key={program}
              className="text-xs px-2 py-1 rounded-md"
              style={{
                border: "1px solid var(--tn-border)",
                color: "var(--tn-text)",
                background: "rgba(255,255,255,0.05)"
              }}
            >
              {program}
            </span>
          ))}
        </div>
      </div>

      {/* Requirements and Deadlines Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Requirements */}
        <div>
          <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--tn-text)" }}>
            Requirements
          </h4>
          <div className="space-y-1 text-sm">
            {uni.requirements && uni.requirements.length > 0 ? (
              uni.requirements.map((req, idx) => (
                <div key={idx} style={{ color: "var(--tn-muted)" }}>{req}</div>
              ))
            ) : (
              <>
                {uni.gpa && (
                  <div style={{ color: "var(--tn-muted)" }}>GPA: {uni.gpa}</div>
                )}
                {uni.toefl && (
                  <div style={{ color: "var(--tn-muted)" }}>TOEFL: {uni.toefl}</div>
                )}
                {uni.ielts && (
                  <div style={{ color: "var(--tn-muted)" }}>IELTS: {uni.ielts}</div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Deadlines */}
        <div>
          <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--tn-text)" }}>
            Deadlines
          </h4>
          <div className="space-y-1 text-sm">
            {uni.deadlines && Object.keys(uni.deadlines).length === 1 && Object.keys(uni.deadlines)[0].toLowerCase() === 'tba' ? (
              <div style={{ color: "var(--tn-muted)" }}>TBA</div>
            ) : (
              Object.entries(uni.deadlines).map(([period, date]) => (
                <div key={period} style={{ color: "var(--tn-muted)" }}>
                  {period.charAt(0).toUpperCase() + period.slice(1)}: {date}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          className="btn btn-ghost flex-1 text-sm justify-center"
          onClick={() => window.open('/guides', '_blank')}
        >
          <span>View Guide</span>
          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {uni.video ? (
          <button
            className="btn btn-ghost flex-1 text-sm justify-center"
            style={{ background: "rgba(255,255,255,0.1)" }}
            onClick={() => window.open(uni.video, '_blank')}
          >
            Watch Video
          </button>
        ) : (
          <button
            className="btn btn-ghost flex-1 text-sm justify-center"
            style={{ background: "rgba(255,255,255,0.1)" }}
            disabled
          >
            Watch Video
          </button>
        )}
      </div>
    </div>
  );
}

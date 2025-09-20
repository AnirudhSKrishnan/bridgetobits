import React from 'react';

type Props = {
  text: string;
  repeat?: number;
  speedSec?: number;
  className?: string;
};

export default function TextMarquee({ text, repeat = 8, speedSec = 30, className = '' }: Props) {
  const items = Array.from({ length: repeat }, (_, i) => `${text} \u2022 `);
  return (
    <div className={`marquee ${className}`}> 
      <div className="marquee__track" style={{ animationDuration: `${speedSec}s` }}>
        {items.map((t, i) => (
          <span key={i} className="px-6 whitespace-nowrap opacity-95">{t}</span>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export type FeatureIconName =
  | "video"
  | "download"
  | "calendar"
  | "users"
  | "university"
  | "support"
  | "tracking"
  | "books"
  | "cap"
  | "globe"
  | "note"
  | "bulb";

interface Props extends React.SVGProps<SVGSVGElement> {
  name: FeatureIconName;
  size?: number;
}

const strokeCommon = {
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconMap: Record<FeatureIconName, (props: Props) => React.ReactElement> = {
  video: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <rect x="3" y="6" width="13" height="12" rx="2" {...strokeCommon} />
      <path d="M16 10l5-3v10l-5-3z" {...strokeCommon} />
    </svg>
  ),
  download: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <path d="M12 3v11" {...strokeCommon} />
      <path d="M8 10l4 4 4-4" {...strokeCommon} />
      <path d="M4 17h16" {...strokeCommon} />
    </svg>
  ),
  calendar: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <rect x="3" y="5" width="18" height="16" rx="2" {...strokeCommon} />
      <path d="M8 3v4M16 3v4M3 10h18" {...strokeCommon} />
      <path d="M8 14h3M13 14h3M8 18h3M13 18h3" {...strokeCommon} />
    </svg>
  ),
  users: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <path d="M7 14a4 4 0 118 0" {...strokeCommon} />
      <circle cx="11" cy="7" r="3" {...strokeCommon} />
      <path d="M17.5 10a2.5 2.5 0 100-5" {...strokeCommon} />
      <path d="M18.5 14.5a5.5 5.5 0 013.5 5.5H16" {...strokeCommon} />
    </svg>
  ),
  university: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <path d="M3 10l9-5 9 5-9 5-9-5z" {...strokeCommon} />
      <path d="M5 12v6h4v-4h6v4h4v-6" {...strokeCommon} />
    </svg>
  ),
  support: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <circle cx="12" cy="6.5" r="2.5" {...strokeCommon} />
      <rect x="6" y="11" width="12" height="8" rx="2" {...strokeCommon} />
      <path d="M9 15h6" {...strokeCommon} />
    </svg>
  ),
  tracking: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <path d="M4 19V5" {...strokeCommon} />
      <path d="M4 19h16" {...strokeCommon} />
      <path d="M7 15l3-3 3 2 4-5" {...strokeCommon} />
      <path d="M18 6l2 2" {...strokeCommon} />
    </svg>
  ),
  books: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <path d="M5 4h9a2 2 0 012 2v14H7a2 2 0 01-2-2V4z" {...strokeCommon} />
      <path d="M7 4v14a2 2 0 002 2h9V6a2 2 0 00-2-2H7z" opacity=".5" {...strokeCommon} />
    </svg>
  ),
  cap: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <path d="M3 9l9-4 9 4-9 4-9-4z" {...strokeCommon} />
      <path d="M7 12v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4" {...strokeCommon} />
    </svg>
  ),
  globe: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <circle cx="12" cy="12" r="9" {...strokeCommon} />
      <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" {...strokeCommon} />
    </svg>
  ),
  note: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <rect x="5" y="3" width="14" height="18" rx="2" {...strokeCommon} />
      <path d="M8 8h8M8 12h8M8 16h5" {...strokeCommon} />
    </svg>
  ),
  bulb: ({ size = 44, ...rest }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...rest}>
      <path d="M8 14a6 6 0 118 0c-1.2.9-2 2.5-2 4H10c0-1.5-.8-3.1-2-4z" {...strokeCommon} />
      <path d="M10 20h4" {...strokeCommon} />
    </svg>
  ),
};

export default function FeatureIcon({ name, size = 44, style, ...rest }: Props) {
  const Comp = IconMap[name];
  const mergedStyle = {
    color: '#FFD600',
    ...style,
  } as React.CSSProperties;
  return <Comp name={name} size={size} style={mergedStyle} {...rest} />;
}

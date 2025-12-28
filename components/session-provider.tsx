"use client";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
  readonly session?: Session | null;
}

export default function SessionProviders({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

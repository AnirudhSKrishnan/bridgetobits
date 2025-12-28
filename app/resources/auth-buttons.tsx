"use client";

import { signIn, signOut } from "next-auth/react";

const yellow = "#fac203";
const black = "#111";

export function ResourceSignInButton() {
  return (
    <button
      className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform duration-150 hover:-translate-y-0.5"
      style={{ background: yellow, color: black }}
      onClick={() => signIn("google", { callbackUrl: "/resources" })}
      type="button"
    >
      Sign in with Google
    </button>
  );
}

export function ResourceSignOutButton() {
  return (
    <button
      className="px-4 py-2 rounded-lg text-sm font-semibold text-black transition-transform duration-150 hover:-translate-y-0.5"
      style={{ background: yellow }}
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Sign out
    </button>
  );
}

"use client";

const yellow = "#fac203";
const black = "#111";

export function ResourceSignInButton() {
  return (
    <button
      className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform duration-150 hover:-translate-y-0.5"
      style={{ background: yellow, color: black }}
      onClick={() => window.location.href = "/login"}
      type="button"
    >
      Sign in
    </button>
  );
}

export function ResourceSignOutButton() {
  return (
    // NATIVE HTML FORM: This bypasses all Next.js client-side caching magic
    <form action="/api/logout" method="POST">
      <button
        className="px-4 py-2 rounded-lg text-sm font-semibold text-black transition-transform duration-150 hover:-translate-y-0.5"
        style={{ background: yellow }}
        type="submit"
      >
        Sign out
      </button>
    </form>
  );
}
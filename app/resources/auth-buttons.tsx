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
  const handleLogout = async () => {
    try {
      // 1. Call the Next.js native API to securely destroy the cookie
      await fetch("/api/logout", { method: "POST" });
      
      // 2. Hard redirect to completely wipe the Next.js Router Cache
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      className="px-4 py-2 rounded-lg text-sm font-semibold text-black transition-transform duration-150 hover:-translate-y-0.5"
      style={{ background: yellow }}
      onClick={handleLogout}
      type="button"
    >
      Sign out
    </button>
  );
}
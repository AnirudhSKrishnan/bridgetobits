"use client";

import { useRouter } from "next/navigation";

const yellow = "#fac203";
const black = "#111";

export function ResourceSignInButton() {
  const router = useRouter();
  
  return (
    <button
      className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform duration-150 hover:-translate-y-0.5"
      style={{ background: yellow, color: black }}
      onClick={() => router.push("/login")}
      type="button"
    >
      Sign in
    </button>
  );
}

export function ResourceSignOutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Call the Go backend to clear the HttpOnly cookie
      await fetch("https://b2b.ugbhartariya.com/logout", {
        method: "POST", // The Go server accepts POST/GET/OPTIONS based on your CORS config
        credentials: "include", // CRITICAL: This tells the browser to process the Set-Cookie deletion
      });
      
      // Redirect to the login page and force Next.js to re-run middleware
      router.push("/login");
      router.refresh(); 
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
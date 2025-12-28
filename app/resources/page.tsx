import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { auth, isGoogleConfigured } from "@/auth";
import { ResourceSignInButton, ResourceSignOutButton } from "./auth-buttons";

export default async function Page() {
  const session = await auth();
  const userName = session?.user?.name ?? null;
  const userEmail = session?.user?.email ?? null;

  return (
    <div className="mt-32 min-h-screen" style={{ background: "#111", color: "#fff", fontFamily: "Inter, Montserrat, Arial, sans-serif" }}>
      <div className="fixed top-[-16px] left-6 z-50 hidden md:block">
        <Link href="/">
          <Image
            src="/logos/b2b_logo.svg"
            alt="Bridge to BITS Logo"
            width={180}
            height={180}
            className="w-44 h-44 drop-shadow-2xl"
            priority
            style={{ background: "#111", borderRadius: "1.5rem", border: "2px solid #fac203" }}
          />
        </Link>
      </div>
      <Section>
        <div className="text-center">
          <h1 className="h2 yellow-gradient text-center" style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold" }}>Resources</h1>
          <p className="muted mt-2 text-center" style={{ color: "#fff", opacity: 0.85, fontFamily: "Inter, Montserrat, Arial, sans-serif" }}>Guides, videos, and useful links.</p>
        </div>

        {session ? (
          <div className="mt-10 mx-auto max-w-3xl space-y-6 rounded-2xl border border-yellow-400/20 bg-white/5 p-8 text-left shadow-lg backdrop-blur">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wide text-yellow-300/80">Welcome back</p>
              <h2 className="text-2xl font-semibold" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                {userName ?? "Resource Explorer"}
              </h2>
              {userEmail && <p className="text-sm text-white/70">Signed in as {userEmail}</p>}
            </div>
            <p className="text-white/80">
              Thanks for signing in! We&apos;re curating in-depth guides, application checklists, and interview prep videos exclusively for members. Check back soon as we continue to roll out the full resource library.
            </p>
            <div>
              <ResourceSignOutButton />
            </div>
          </div>
        ) : (
          <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-yellow-400/20 bg-black/60 p-8 text-center shadow-xl backdrop-blur">
            <p className="text-lg font-medium text-white/80" style={{ fontFamily: "Inter, Montserrat, Arial, sans-serif" }}>
              Sign in with Google to unlock the full Bridge to BITS resource library.
            </p>
            <p className="mt-3 text-sm text-white/70">
              You&apos;ll be redirected back here after a quick Google login.
            </p>
            <div className="mt-6 flex justify-center">
              {isGoogleConfigured ? (
                <ResourceSignInButton />
              ) : (
                <p className="text-sm text-white/70">
                  Google sign-in isn&apos;t configured yet. Please add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in your deployment environment.
                </p>
              )}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}

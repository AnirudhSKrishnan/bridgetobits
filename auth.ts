import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  // Early exit helps catch misconfiguration before requests hit the provider
  throw new Error("Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET environment variables.");
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId,
      clientSecret,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});

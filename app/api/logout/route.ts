import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // Overwrite the cookie with the EXACT same security footprint Go used, but expired.
  cookies().set("auth_token", "", {
    maxAge: 0,
    expires: new Date(0), // Sets expiration to Jan 1, 1970
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
  
  return NextResponse.json({ success: true });
}
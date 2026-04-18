import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // This physically forces the Next.js server to issue a destruction command for the cookie
  cookies().delete("auth_token");
  return NextResponse.json({ success: true });
}
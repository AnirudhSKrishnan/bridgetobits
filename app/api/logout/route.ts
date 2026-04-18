import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST() {
  // 1. Physically destroy the cookie on the server
  cookies().set("auth_token", "", {
    maxAge: 0,
    expires: new Date(0),
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
  
  // 2. Perform a hard server-side redirect back to login
  redirect("/login");
}
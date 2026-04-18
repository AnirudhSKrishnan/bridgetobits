import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // 1. Get the auth_token cookie
  const token = request.cookies.get('auth_token');

  // 2. If the cookie is missing, immediately redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // 3. Call the new /validate endpoint on your Go server
    // This checks if the JWT version matches the database version
    const response = await fetch('https://b2b.ugbhartariya.com/validate', {
      headers: {
        'Cookie': `auth_token=${token.value}`,
      },
    });

    // 4. If the Go server says the token is invalid or mismatched, kick them out
    if (response.status !== 200) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } catch (error) {
    // If the Go server is unreachable, block access for safety
    console.error("Auth validation failed:", error);
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 5. Everything is valid! Proceed to the requested page
  return NextResponse.next();
}

// Ensure this only runs on your protected resource routes
export const config = {
  matcher: ['/resources/:path*'],
};
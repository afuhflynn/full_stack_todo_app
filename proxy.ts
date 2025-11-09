import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie && url.pathname === "/") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (
    sessionCookie &&
    (url.pathname === "/signin" || url.pathname === "/signup")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Use regex enclosed in parentheses
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
};

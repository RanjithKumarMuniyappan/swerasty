// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  console.log("Token : ", token);
  const isLoggedIn = !!token;
  // const isLoggedIn = true;

  console.log("Token : ", token);
  console.log("Path : ", pathname);
  
  const publicpath = ["/login", "/signup"]

  // If not logged in and trying to access anything other than login
  if (!isLoggedIn && !publicpath.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If logged in and trying to access login
  if (isLoggedIn && pathname === '/login') {
    return NextResponse.redirect(new URL('/pages/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/pages/dashboard', '/profile', '/settings'], // Add more protected routes as needed
};

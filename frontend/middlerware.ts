import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = localStorage.getItem("token");

//   // Check if the path is for the reset password page and contains a token
//   if (path === '/resetpassword' && request.nextUrl.searchParams.has('token')) {
//     return; // Allow access to reset password page with token
//   }

  // Check if the path is one of the public paths
  if (path === "/signin" || path === "/signup"||path==='/all') {
    
    if (token) {
      return NextResponse.redirect(new URL('/all', request.url));
    }
  } 
  else {
    // Redirect to login if user is not authenticated for non-public paths
    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  // If none of the above conditions match, allow access to the requested path
}

export const config = {
  matcher: ['/', '/signin', '/signup', '/all']
}

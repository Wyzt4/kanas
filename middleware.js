// middleware.js
import { NextResponse } from 'next/server';

export const config = { matcher: ['/:path*'] };

export function middleware(req) {
  const auth = req.headers.get('authorization');
  const USER = process.env.BASIC_USER;
  const PASS = process.env.BASIC_PASS;

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic') {
      const [user, pass] = Buffer.from(encoded, 'base64').toString().split(':');
      if (user === USER && pass === PASS) {
        return NextResponse.next();
      }
    }
  }
  return new NextResponse('Auth required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }
  });
}

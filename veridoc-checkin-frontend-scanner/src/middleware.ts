import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export { default } from 'next-auth/middleware'
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const secret = process.env.AUTH_SECRET;

    const token = await getToken({
        req: request,
        secret: secret,
        cookieName: 'next-auth.session-token',
    });
    const url = request.nextUrl;

    if (!token && (url.pathname !== '/login')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (token && (url.pathname == '/' || url.pathname == '/login')) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
}

export const config = {
    matcher: [
        '/dashboard/:path*' // match all nested dashboard routes
    ]
}
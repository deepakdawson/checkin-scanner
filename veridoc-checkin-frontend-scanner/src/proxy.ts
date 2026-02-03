import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export { default } from 'next-auth/middleware'
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
    const secret = process.env.AUTH_SECRET;

    const token = await getToken({
        req: request,
        secret: secret,
        cookieName: 'next-auth.session-token',
    });
    const url = request.nextUrl;

    console.log('mid', token);

    if (!token && (url.pathname !== '/')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (token && (url.pathname == '/' || url.pathname == '/')) {
        return NextResponse.redirect(new URL('/setting/profile', request.url))
    }
}

export const config = {
    matcher: [
        '/setting/:path*', // match all nested setting routes,
        '/'
    ]
}
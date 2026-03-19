import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ['/dashboard', '/profile', '/practicals'];
const authRoutes = ['/login', '/register'];

const showWebsite = process.env.SHOW_WEBSITE === 'true';
const authEnabled = process.env.AUTH_ENABLED === 'true';

export async function middleware(req: NextRequest) {
    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const {pathname} = req.nextUrl;

    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));


    if(!showWebsite && pathname !== '/not-available') {
        return NextResponse.redirect(new URL("/not-available", req.url));
    }

    if(authEnabled && isProtectedRoute && !token) {
        const loginUrl = new URL('/login', req.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }

    if(isAuthRoute && token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
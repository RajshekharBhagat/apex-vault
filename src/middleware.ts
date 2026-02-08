import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedRoutes = ['/dashboard', '/profile', '/'];
const authRoutes = ['/login', '/register'];

export async function middleware(req: NextRequest) {
    const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const {pathname} = req.nextUrl;
    if( authRoutes.some((route) => pathname.startsWith(route))) {
        if(token) {
            return NextResponse.redirect(new URL('/', req.url));
        }
        return NextResponse.next();
    }
    if(protectedRoutes.some((route) => pathname.startsWith(route))) {
        if(!token) {
            const loginUrl = new URL('/login', req.url);
            loginUrl.searchParams.set('callbackUrl', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
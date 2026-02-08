import clientPromise from "@/lib/mongodb";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import { validateUserCredentials } from "@/services/auth.service";

export const options: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "apex predator" },
                password: { label: "Password", type: "password", placeholder: "********" },
            },
            async authorize(credentials, req) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Username and password are required");
                }
                const result = await validateUserCredentials(credentials.username, credentials.password);
                if(!result.success || !result.data) {
                    throw new Error(result.message);
                }
                return {
                    id: result.data.id,
                    username: result.data.username,
                    email: result.data.email,
                };
            },
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.id = user.id;
                token.username = user.username as string;
                token.email = user.email as string;
            }
            return token;
        },
        async session({session, token}) {
            if(token.id && session.user) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.email = token.email;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
}
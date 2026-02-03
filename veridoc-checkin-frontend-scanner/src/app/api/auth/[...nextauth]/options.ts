import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import httpClient from "@/src/config/http/httpClient";
import { UserInfo } from "@/src/models/auth/UserModel";
import AppMessages from "@/src/config/AppMessages";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any): Promise<any> {
                const response = await httpClient.post('/auth/guest/login', {
                    email: credentials.username,
                    PhoneCodeISO: credentials.phoneCodeISO,
                    PhoneNumber: credentials.phoneNumber,
                    otp: credentials.otp
                });
                if (response.status === 200) {
                    const user = response.data as UserInfo;
                    return user;
                }

                if (response.status === 401) {
                    throw new Error(AppMessages.Error.unauthorized);
                }
                throw new Error(AppMessages.Error.serverError);
            }
        })
    ],
    callbacks: {
        async session({ session, user, token }) {
            if (token) {
                session.user = token.user
            }

            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user
            }

            return token
        }
    },
    pages: {
        signIn: '/'
    },
    session: {
        strategy: 'jwt',
        maxAge: 2 * 60 * 60
    },
    secret: process.env.AUTH_SECRET
}

export default authOptions;
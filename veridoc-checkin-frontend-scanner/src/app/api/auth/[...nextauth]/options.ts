import type { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any): Promise<any> {
                const url: string = process.env.API_URL + '/api/account/login';
            }
        })
    ], 
    callbacks: {
        async session({session, user, token}) {
            return session;
        },
        async jwt({token, user}) {
            return token
        }
    },
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt',
        maxAge: 2 * 60 * 60
    },
    secret: process.env.AUTH_SECRET
}

export default authOptions;
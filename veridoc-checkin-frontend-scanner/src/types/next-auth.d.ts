import { UserInfo } from "../models/auth/UserModel";
import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
    interface User {
        firstName: string,
        lastName?: string,
        email: string,
    }
    interface Session {
        user: UserInfo
    }
    interface JWT {
        user: UserInfo
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: UserInfo
    }
}
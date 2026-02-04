import 'jsonwebtoken/index'

declare module 'jsonwentoken/index' {
    interface JwtPayload {
        nameid: string,
        email: string,
        unique_name: string,
        nbf: number,
        exp: number,
        iat: number,
        iss: string,
        aud: string
    }
}
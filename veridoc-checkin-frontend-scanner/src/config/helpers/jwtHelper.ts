import JwtPayload from "@/src/models/jwtPayload";
import jwt from 'jsonwebtoken';

function decodeToken(accessToken?: string): JwtPayload | undefined {
    const _jwtSecret = process.env.JWT_SECRET;
    if (_jwtSecret && accessToken) {
        const payload = jwt.verify(accessToken, _jwtSecret);
        return payload as JwtPayload;
    }
}

export default decodeToken;
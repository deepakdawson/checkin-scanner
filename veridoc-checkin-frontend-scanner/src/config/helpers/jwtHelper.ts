import JwtPayload from "@/src/models/jwtPayload";
import jwt from 'jsonwebtoken';

function decodeToken(accessToken: string): JwtPayload | undefined {
    const jwtSecret = process.env.JWT_SECRET;
    if(jwtSecret){
        const payload = jwt.verify(accessToken, jwtSecret);
       return payload as JwtPayload;
    }
    
}

export default decodeToken;
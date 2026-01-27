import jwt from 'jsonwebtoken';

let JWT_SECRET = process.env.JWT_SECRET;

if(!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
}

export function sighToken(payload) {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '7d'})
}


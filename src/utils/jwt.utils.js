
import jwt from "jsonwebtoken";
import message from "../constants/message.js";

export const verifyTokenUtil = (authHeader) => {

    if (!authHeader) {
        const error = new Error(message.USER.LOGINAGAIN);
        error.statusCode = 401;
        throw error;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        const error = new Error(message.USER.LOGINAGAIN);
        error.statusCode = 401;
        throw error;
    }

    return jwt.verify(token, process.env.JWT_SECRET);
};


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
        console.log("thi isss")
        const error = new Error(message.USER.LOGINAGAIN);
        error.statusCode = 401;
        throw error;
    }
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;

};

import message from "../constants/message.js";
import { responseFailure } from "../utils/response.utils.js";


export default async (req, res, next) => {
    const { email, productName, categoryId } = req.body;
    const token = req.headers.authorization;


    const sendError = (msg, code = 400) =>
        res.status(code).json(responseFailure(msg, code));


    if (!email) {
        return sendError(message.AUTH.INVALIDEMAIL);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return sendError(message.USER.INVALID_EMAIL);
    }
    if (!productName) {
        return sendError(message.USER.PRODUCTEMPTY);
    }
    if (productName.trim().length < 3) {
        return sendError(message.USER.PRODUCTLENGTH);
    }
    if (!categoryId) {
        return sendError(message.USER.VERIFYCATEGORY);
    }
    if (isNaN(categoryId)) {
        return sendError(message.USER.CATEGORY, 400)
    }
    if (!token) {
        return sendError(message.USER.LOGINAGAIN, 400)
    }
    next();

}
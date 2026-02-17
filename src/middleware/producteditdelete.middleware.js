import message from "../constants/message.js";
import { responseFailure } from "../utils/response.utils.js";
import { verifyTokenUtil } from '../utils/jwt.utils.js'
export async function producteditdelete(req, res,next) {
    try {
        const decoded = verifyTokenUtil(req.headers.authorization)
        req.user = decoded
        var email = req.user.email
        const productid = req.query.id;
        if (isNaN(productid) || !productid) {
            return responseFailure(res, message.COMMON.SERVER_ERROR);
        }
        if (!email) {
            return responseFailure(res, message.AUTH.INVALIDEMAIL);
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return responseFailure(res, message.USER.INVALID_EMAIL);
        }
        next()
    }
    catch (error) {
        console.log(error)
        return responseFailure(res, message.USER.LOGINAGAIN, 401);
    }


}
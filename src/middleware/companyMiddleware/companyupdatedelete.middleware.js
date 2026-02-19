import { responseFailure } from '../../utils/response.utils.js'
import message from '../../constants/message.js';
import { isValidPhoneNumber } from "libphonenumber-js";
export async function companyUpdateDeleteMiddleware(req, res, next) {
    try {
        // const companyId = req.query.id;
        // const decoded = verifyTokenUtil(req.headers.authorization)
        // req.user = decoded
        // var email = req.user.email
        const { companyName, phone } = req.body;
        const companyId = req.query.id;
        if (isNaN(companyId) || !companyId) {
            return responseFailure(res, message.COMMON.SERVER_ERROR);
        }
        if (req.path == '/updatecompany') {

            if (companyName && companyName.length < 4) {
                return responseFailure(res, message.COMPANY.COMPANTYMSG);
            }

            if (phone && !isValidPhoneNumber(phone)) {
                return responseFailure(res, message.COMPANY.VALIDATEMOBILE);
            }
        }

        // if (!email) {
        //     return responseFailure(res, message.AUTH.INVALIDEMAIL);
        // }
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // if (!emailRegex.test(email)) {
        //     return responseFailure(res, message.USER.INVALID_EMAIL);
        // }
        next()
    }
    catch (error) {
        return responseFailure(res, message.USER.LOGINAGAIN, 401);
    }

}
import message from "../../constants/message.js";
import { isValidPhoneNumber } from "libphonenumber-js";
import { responseFailure } from "../../utils/response.utils.js";
import { verifyTokenUtil } from '../../utils/jwt.utils.js'

export async function companyMiddleWare(req, res, next) {
    try {
        const decoded = verifyTokenUtil(req.headers.authorization)
        req.user = decoded
        const { companyName, phone, gstNumber, address } = req.body

        if (!companyName || companyName.length < 4) {
            return responseFailure(res, message.COMPANY.COMPANTYMSG)
        }
        if (!phone) {
            return responseFailure(res, message.COMPANY.MOBILENO)
        }
        if (!isValidPhoneNumber(phone)) {
            return responseFailure(res, message.COMPANY.VALIDATEMOBILE)
        }
        if (!gstNumber) {
            return responseFailure(res, message.COMPANY.GSTNUMBER)
        }
        if (!address) {
            return responseFailure(res, message.COMPANY.COMPANYADDRESS)
        }

        next()
    }
    catch (error) {
        return responseFailure(res, message.USER.LOGINAGAIN, 401);
    }
}
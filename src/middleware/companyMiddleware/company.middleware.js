import message from "../../constants/message.js";
import { isValidPhoneNumber } from "libphonenumber-js";
import { responseFailure } from "../../utils/response.utils.js";
import { verifyTokenUtil } from '../../utils/jwt.utils.js'

export async function companyMiddleWare(req, res, next) {
    try {
        const decoded = verifyTokenUtil(req.headers.authorization)
        req.user = decoded
        // console.log(req.path)
        if (req.path == '/getcompany') {

            const page = req.query.page;
            const limit = req.query.limit;
            console.log(page)
            if (isNaN(page) || isNaN(limit)) {
                return responseFailure(res, message.COMMON.VALIDATION_ERROR)
            }
        }
        else {
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
        }

        next()
    }
    catch (error) {
        return responseFailure(res, message.USER.LOGINAGAIN, 401);
    }
}
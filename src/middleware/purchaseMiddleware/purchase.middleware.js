import message from '../../constants/message.js';
import { responseFailure } from '../../utils/response.utils.js';
import { verifyTokenUtil } from '../../utils/jwt.utils.js'
export async function purchaseMiddleware(req, res, next) {
    try {
        // const decoded = verifyTokenUtil(req.headers.authorization)
        // req.user = decoded
        // var email = req.user.email
        // if (!email) {
        //     return responseFailure(res, message.AUTH.INVALIDEMAIL);
        // }
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     return responseFailure(res, message.USER.INVALID_EMAIL);
        // }
        if (req.path == '/getpurchaseItem') {
            const id = req.query.id;
            if (isNaN(id)) {
                return responseFailure(res, message.COMMON.SERVER_ERROR);
            }
        }

        if (req.path == '/purchaseItem') {
            const { companyId, userId, invoiceNo, purchaseDate, Item } = req.body;
            if (isNaN(companyId) || isNaN(userId)) {
                return responseFailure(res, message.COMMON.VALIDATION_ERROR, 401)
            }
            if (invoiceNo.length == 0 || purchaseDate.length == 0) {
                return responseFailure(res, message.PURCHASE.INVALIDINVOICE, 401)
            }
            if (Item.length == 0) {
                return responseFailure(res, message.PURCHASE.PURCHASEITEM, 401)
            }
        }
        next()
    }
    catch (error) {
        return responseFailure(res, message.USER.LOGINAGAIN, 401);
    }
}
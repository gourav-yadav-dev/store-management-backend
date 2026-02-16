// import message from "../constants/message.js";
// import { responseFailure } from "../utils/response.utils.js";


// export default async (req, res, next) => {
//     const { email, productName, categoryId } = req.body;
//     const token = req.headers.authorization;


//     const sendError = (msg, code = 400) =>
//         res.status(code).json(responseFailure(msg, code));


//     if (!email) {
//         return sendError(message.AUTH.INVALIDEMAIL);
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         return sendError(message.USER.INVALID_EMAIL);
//     }
//     if (!productName) {
//         return sendError(message.USER.PRODUCTEMPTY);
//     }
//     if (productName.trim().length < 3) {
//         return sendError(message.USER.PRODUCTLENGTH);
//     }
//     if (!categoryId) {
//         return sendError(message.USER.VERIFYCATEGORY);
//     }
//     if (isNaN(categoryId)) {
//         return sendError(message.USER.CATEGORY, 400)
//     }
//     if (!token) {
//         return sendError(message.USER.LOGINAGAIN, 400)
//     }
//     next();

// }



import message from "../constants/message.js";
import { responseFailure } from "../utils/response.utils.js";
import { verifyTokenUtil } from '../utils/jwt.utils.js'

export default async (req, res, next) => {
    try {
        const decoded = verifyTokenUtil(req.headers.authorization)
        req.user = decoded
        if (req.path === '/getproduct' || req.path == '/getproductbyname') {
            const page = req.query.page || 1;
            const limit = req.query.limit
            if (req.path === '/getproductbyname') {
                const search = req.query.search;
                if (!search) {
                    return responseFailure(res, message.COMMON.SERVER_ERROR)
                }
            }
            if (!page || isNaN(page) || !limit || isNaN(limit)) {

                return responseFailure(res, message.COMMON.SERVER_ERROR)
            }
            var email = req.user.email
        }
        else {
            var { email, productName, categoryId } = req.body;
            if (!productName) {
                return responseFailure(res, message.USER.PRODUCTEMPTY);
            }

            if (productName.trim().length < 3) {
                return responseFailure(res, message.USER.PRODUCTLENGTH);
            }

            // Category validation
            if (!categoryId) {
                return responseFailure(res, message.USER.VERIFYCATEGORY);
            }

            if (isNaN(categoryId)) {
                return responseFailure(res, message.USER.CATEGORY);
            }
        }
        if (!email) {
            return responseFailure(res, message.AUTH.INVALIDEMAIL);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return responseFailure(res, message.USER.INVALID_EMAIL);
        }

        next();
    }
    catch (error) {
        return responseFailure(res, message.USER.LOGINAGAIN, 401);
    }
};

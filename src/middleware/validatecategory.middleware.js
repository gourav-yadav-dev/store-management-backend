import { responseFailure } from "../utils/response.utils.js";
import message from "../constants/message.js";
import { verifyTokenUtil } from '../utils/jwt.utils.js'
export default async (req, res, next) => {

    // const { category } = req.body;
    try {
        verifyTokenUtil(req.headers.authorization)
        if (req.url.split('/')[1] === "editcategory" || req.url.split('/')[1] == "deletecategory") {
            const id = req.params.id
            console.log(`id is ${id}`)
            if (isNaN(id)) {
                // return res.status(400).json(responseFailure(message.COMMON.VALIDATION_ERROR, 400))
                return responseFailure(res, message.COMMON.VALIDATION_ERROR, 400)
            }
            if (req.url.split('/')[1] === "editcategory") {
                req.editCategory = true;
            }
            else {
                var { email } = req.body
                req.deleteCateogory = true;
            }
        }

        if (req.url == '/category' || req.url.split('/')[1] === "editcategory") {

            var { email, category } = req.body
            console.log(req.url)
            console.log("this is cateogory")
            if (!category) {
                // return res.status(400).json(responseFailure(message.USER.VERIFYCATEGORY, 400))
                return responseFailure(res, message.USER.VERIFYCATEGORY, 400)
            }
            if (category.length < 3) {
                return responseFailure(res, message.USER.LENGTHCATEGORY, 400)
                // return res.status(400).json(responseFailure(message.USER.LENGTHCATEGORY, 400))

            }
        }

        if (req.url == '/getcategory') {
            var email = req.body.email
            req.retrivecategory = true;
        }



        if (!email) {
            return responseFailure(res, message.AUTH.INVALIDEMAIL, 400);

            // return res
            //     .status(400)
            //     .json(responseFailure(message.AUTH.INVALIDEMAIL, 400));
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return responseFailure(res, message.USER.INVALID_EMAIL, 400);
            // return res
            //     .status(400)
            //     .json(responseFailure(message.USER.INVALID_EMAIL, 400));
        }
        console.log("here")
        next()


    }
    catch (error) {
        return responseFailure(res, message.USER.LOGINAGAIN, 401);
    }

}
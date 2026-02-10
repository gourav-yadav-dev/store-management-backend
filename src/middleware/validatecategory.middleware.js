import { responseFailure } from "../utils/response.utils.js";
import message from "../constants/message.js";
export default async (req, res, next) => {

    // const { category } = req.body;
    // const { token } = req.headers.authorization

    if (req.url == '/category') {

        var { email, category } = req.body
        console.log(req.url)
        console.log("this is cateogory")
        if (!category) {
            return res.status(400).json(responseFailure(message.USER.VERIFYCATEGORY, 400))
        }
        if (category.length < 3) {
            return res.status(400).json(responseFailure(message.USER.LENGTHCATEGORY, 400))

        }
    }

    if (req.url == '/getcategory') {
        var email = req.body.email
        req.retrivecategory = true;
    }
    if (!req.headers.authorization || req.headers.authorization === undefined) {
        return res.status(400).json(responseFailure(message.USER.LOGINAGAIN, 400))
    }
    if (!email) {
        return res
            .status(400)
            .json(responseFailure(message.AUTH.INVALID_CREDENTIALS, 400));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res
            .status(400)
            .json(responseFailure(message.USER.INVALID_EMAIL, 400));
    }

    next()

}
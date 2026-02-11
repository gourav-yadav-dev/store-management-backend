import { responseFailure } from "../utils/response.utils.js";
import message from "../constants/message.js";
export default async (req, res, next) => {

    // const { category } = req.body;
    // const { token } = req.headers.authorization
    if (req.url.split('/')[1] === "editcategory" || req.url.split('/')[1] == "deletecategory") {
        const id = req.params.id
        if (isNaN(id)) {
            return res.status(400).json(responseFailure(message.COMMON.VALIDATION_ERROR, 400))
        }
        if (req.url.split('/')[1] === "editcategory") {
            req.editCategory = true;
        }
        else {
           var {email}=req.body
            req.deleteCateogory = true;
        }
    }

    if (req.url == '/category' || req.url.split('/')[1] === "editcategory") {

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
        console.log("inside this")
        return res
            .status(400)
            .json(responseFailure(message.AUTH.INVALIDEMAIL, 400));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res
            .status(400)
            .json(responseFailure(message.USER.INVALID_EMAIL, 400));
    }
    console.log("here")
    next()

}
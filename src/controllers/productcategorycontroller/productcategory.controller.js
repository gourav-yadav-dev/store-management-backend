import { responseFailure, responseSuccess } from "../../utils/response.utils.js";
import { productcategories } from '../../services/Productcategories/productcategories.services.js'
import message from "../../constants/message.js";
export async function productcategory(req, res) {
    try {        
            const { category, email } = req.body
        const token = req.headers.authorization;
        // console.log(token)
        const data = await productcategories(category, token, email,req.retrivecategory)
        if (data == true) {
            res.status(200).json(responseSuccess(message.USER.ADDCATEGORY, null, 200, null))
        }
        console.log(data)
        res.status(200).json(responseSuccess(message.USER.SUCCESSFULLY,data, 200, null))

    }
    catch (error) {
        res.status(500).json(responseFailure(error.message, 500))
    }
}
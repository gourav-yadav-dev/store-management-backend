
import message from "../../constants/message.js";
import { productfilterservice } from '../../services/ProductServices/productfilter.service.js'
import { responseFailure, responseSuccess } from '../../utils/response.utils.js'
export async function productfilter(req, res) {
    try {
        console.log("path")
        console.log(req.path)
        console.log("path")
        if (req.path === '/getproductbyname') {
            var search = req.query.search;
            console.log("this is search")
            console.log(search)
            console.log("this is search")
        }
        const limit = req.query.limit;
        const { email } = req.body;
        const offset = (req.query.page - 1) * limit
        const products = await productfilterservice(limit, offset, email, search)
        return responseSuccess(res, message.PRODUCT.PRODUCTSUCCESSFULLY, products, null, 200)
    }
    catch (error) {
        console.log("Herasglkdsgljdsk")
        return responseFailure(res, error.message, error.statusCode || 500)

    }

}
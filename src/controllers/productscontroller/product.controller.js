import message from '../../constants/message.js';
import { productservice } from '../../services/ProductServices/product.services.js'
import { responseFailure, responseSuccess } from '../../utils/response.utils.js'

export async function productController(req, res) {
    try {
        const { email, productName, categoryId } = req.body

        const token = req.headers.authorization;

        const data = await productservice(email, productName, categoryId, token)
        if (data == true) {
            return res.status(200).json(responseSuccess(message.USER.ADDPRODUCT, null, 200, null))
        }
    }

    catch (error) {
        return res.status(error.statusCode || 500).json(responseFailure(error.message, error.statusCode || 500))
    }





}
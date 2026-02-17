import { responseFailure, responseSuccess } from "../../utils/response.utils.js";
import { producteditdeleteservice } from '../../services/ProductServices/producteditdelete.services.js'
import message from "../../constants/message.js";

export async function producteditdeletecontroller(req, res) {
    try {
        let deleteproduct, updates;
        if (req.path === '/deleteproduct') {
            deleteproduct = true
        }
        else {
            const { productName, productCategory, status } = req.body;
            updates = {
                ...(productName !== undefined && { product_name: productName }),
                ...(productCategory !== undefined && { category_id: productCategory }),
                ...(status !== undefined && { status: status })
            };
        }
        const result = await producteditdeleteservice(req.query.id, updates, deleteproduct);

        if (result.filterValue) {
            return responseSuccess(res, message.PRODUCT.UPDATEPRODUCT, null, null, 200)
        }
        else {
            return responseSuccess(res, message.PRODUCT.DELETEPRODUCT, null, null, 200)

        }
    }
    catch (error) {
        return responseFailure(res, error.message, error.statusCode || 500)
    }

}
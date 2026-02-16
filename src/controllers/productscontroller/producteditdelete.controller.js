import { responseFailure, responseSuccess } from "../../utils/response.utils.js";
import { producteditdeleteservice } from '../../services/ProductServices/producteditdelete.services.js'
import message from "../../constants/message.js";

export async function producteditdeletecontroller(req, res) {
    try {
        const { productName, productCategory, status } = req.body;

        const updates = {
            ...(productName !== undefined && { product_name: productName }),
            ...(productCategory !== undefined && { category_id: productCategory }),
            ...(status !== undefined && { status })
        };
        console.log(updates)
        const result = await producteditdeleteservice(req.query.id, updates);
        if (result.affectedRows > 0) {
           return responseSuccess(res,message.PRODUCT.UPDATEPRODUCT,null,null,200)
        }



    }
    catch (error) {
        return responseFailure(res, error.message, error.statusCode || 500)
    }

}
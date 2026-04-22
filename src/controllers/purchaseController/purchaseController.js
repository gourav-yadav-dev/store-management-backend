import message from '../../constants/message.js';
import { purchaseServices } from '../../services/PuchaseServices/purchase.services.js'
import { purchaseGetServices } from '../../services/PuchaseServices/purchaseget.services.js'
import { responseFailure, responseSuccess } from '../../utils/response.utils.js';
export async function purchaseController(req, res, next) {
    try {

        if (req.path == '/getpurchaseItem' || req.path == '/getpurchaseByInvoice') {
            const offset = (req.query.page - 1) * req.query.limit
            const invoiceNo = req.query.invoiceno;
            console.log("heere")
            const purchaseDetail = await purchaseGetServices(req.query.id, offset, req.query.limit, invoiceNo)
            return responseSuccess(res, message.PURCHASE.DATASENT, purchaseDetail, null, 200)
        }
        else {
            const { companyId, userId, invoiceNo, purchaseDate, Item } = req.body;
            const purchase = await purchaseServices(companyId, userId, invoiceNo, purchaseDate, Item)
            if (purchase.AddPurchase == true) {
                return responseSuccess(res, message.PURCHASE.PUCRCHASEITEM, null, null, 200)
            }
        }
    }
    catch (error) {
        return responseFailure(
            res,
            error.message,
            error.statusCode || 500
        );
    }
}
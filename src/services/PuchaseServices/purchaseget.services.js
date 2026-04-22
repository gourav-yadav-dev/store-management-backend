import message from "../../constants/message.js";
import { userById } from "../../repositories/user.respository.js"
import { allPurchaseItem, findPurchaseByInvoiceNo } from '../../repositories/purchase.respository.js'
export async function purchaseGetServices(id, offset, limit, invoice = false) {
    if (invoice != false) {
        const purchaseByInvoiceNo = await findPurchaseByInvoiceNo(invoice)
        return purchaseByInvoiceNo;
    }
    else {
        const userId = await userById(parseInt(id))
        if (userId.length > 0) {
            
            const purchaseItemDetail = await allPurchaseItem(parseInt(id), parseInt(offset), parseInt(limit))
            if (purchaseItemDetail.length > 0) {
                return purchaseItemDetail
            }
            else {
                const error = new Error(message.PURCHASE.PURCHASENOTFOUND);
                error.statusCode = 400;
                throw error;
            }
        }
        else {
            const error = new Error(message.USER.USERNOTFOUNDS);
            error.statusCode = 400;
            throw error;
        }
    }
}
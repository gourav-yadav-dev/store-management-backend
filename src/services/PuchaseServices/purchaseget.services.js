import message from "../../constants/message.js";
import { userById } from "../../repositories/user.respository.js"
import { allPurchaseItem } from '../../repositories/purchase.respository.js'
export async function purchaseGetServices(id) {
    const userId = await userById(parseInt(id))
    if (userId.length > 0) {
        const purchaseItemDetail = await allPurchaseItem(parseInt(id))
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
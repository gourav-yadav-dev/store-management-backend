import { findCompanyById } from '../../repositories/company.repository.js'
import { userById } from '../../repositories/user.respository.js'
import { purchaseItem, purchaseItemByInvoice, lastPurchaseId, AddPurchaseItem } from '../../repositories/purchase.respository.js'
import message from '../../constants/message.js'
export async function purchaseServices(companyId, userId, invoiceNo, purchaseDate, Item) {
    const company = await findCompanyById(parseInt(companyId))

    if (company.length > 0) {
        const userid = await userById(parseInt(userId))
        if (userid.length > 0) {
            const invoiceNumber = await purchaseItemByInvoice(invoiceNo)
            if (invoiceNumber.length == 0) {
                const purchaItem = await purchaseItem(companyId, userId, invoiceNo, purchaseDate);
                if (purchaItem.affectedRows > 0) {
                    const purchaseId = await lastPurchaseId()
                    // console.log(Item)
                    const values = Item.map(item => [
                        purchaseId[0].purchase_id,
                        item.product_id,
                        item.quantity_units,
                        item.actual_price
                    ]);
                    const addPurchaseItems = await AddPurchaseItem(values)
                    if (addPurchaseItems.affectedRows > 0) {
                        return { AddPurchase: true }
                    }

                }
            }
            else {
                const error = new Error(message.PURCHASE.DUPLICCATE);
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
    else {
        const error = new Error(message.COMPANY.COMPANYNOTFOUND);
        error.statusCode = 400;
        throw error;
    }



}
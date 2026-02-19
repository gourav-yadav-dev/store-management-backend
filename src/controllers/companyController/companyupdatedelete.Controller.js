import { companyUpadateDelete } from '../../services/ComapnyServices/companyupdatedelete.js'
import { responseFailure, responseSuccess } from '../../utils/response.utils.js'
import message from '../../constants/message.js'
export async function companyUpdateDeleteController(req, res, next) {
    try {
        let deletecompany = false;
        if (req.path == '/deletecompany') {
            deletecompany = true
        }
        let updates
        const { companyName, phone, gstNumber, address, status } = req.body;
        updates = {
            ...(companyName !== undefined && { company_name: companyName }),
            ...(phone !== undefined && { phone: phone }),
            ...(gstNumber !== undefined && { gst_number: gstNumber }),
            ...(address !== undefined && { address: address }),
            ...(status !== undefined && { status: status })
        };
        const result = await companyUpadateDelete(updates, req.query.id, deletecompany)
        console.log(result)
        if (result.update == true) {
            return responseSuccess(res, message.COMPANY.UPDATECOMPANY, null, null, 200)
        }
        if (result.delete == true) {
            return responseSuccess(res, message.COMPANY.DELETECOMPANY, null, null, 200)
        }


    }
    catch (error) {
        return responseFailure(res, error.message, error.statusCode || 500)
    }


}
import message from '../../constants/message.js'
import { companyService } from '../../services/ComapnyServices/compant.services.js'
import { responseFailure, responseSuccess } from '../../utils/response.utils.js'
export async function companyController(req, res) {
    try {
        const { companyName, phone, gstNumber, address } = req.body
        const result = await companyService(companyName, phone, gstNumber, address, req.user.email)
        if (result == true) {
            return responseSuccess(res, message.COMPANY.ADDCOMPANY, null, null, 200)
        }

    }
    catch (error) {
        return responseFailure(res, error.message, error.statusCode || 500)
    }
} 
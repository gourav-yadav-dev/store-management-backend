import message from '../../constants/message.js'
import { companyService } from '../../services/ComapnyServices/company.services.js'
import { responseFailure, responseSuccess } from '../../utils/response.utils.js'
export async function companyController(req, res) {
    try {
        let DataLimit = []
        if (req.path == '/getcompany') {
            const offset = (req.query.page - 1) * (req.query.limit)
            const LimitOfPage = { offset: offset, limit: req.query.limit }
            DataLimit.push(LimitOfPage)
        }
       
        const { companyName, phone, gstNumber, address } = req.body
        const result = await companyService(companyName, phone, gstNumber, address, req.user.email, DataLimit)
        if (result.getComapany == true) {
            return responseSuccess(res, message.USER.SUCCESSFULLY, result.data,null,200)
        }
        if (result == true) {
            return responseSuccess(res, message.COMPANY.ADDCOMPANY, null, null, 200)
        }
    }
    catch (error) {
        return responseFailure(res, error.message, error.statusCode || 500)
    }
} 
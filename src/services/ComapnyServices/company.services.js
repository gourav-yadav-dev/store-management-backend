import message from "../../constants/message.js";
import { findCompanyByNameOrGst, insertCompany, getComapany } from '../../repositories/company.repository.js'
export async function companyService(companyName, phone, gstNumber, address, email, getDataLimit) {
    if (getDataLimit.length > 0) {
        console.log(getDataLimit)
        const companines = await getComapany(email, parseInt(getDataLimit[0].limit), parseInt(getDataLimit[0].offset))
        if (companines.length == 0) {
            const error = new Error(message.COMPANY.COMPANTYEXIST);
            error.statusCode = 400;
            throw error;
        }

        return { data: companines, getComapany: true }
    }
    else {
        const checkCompany = await findCompanyByNameOrGst(companyName, gstNumber)
        console.log(checkCompany)
        if (checkCompany.length === 0) {
            console.log(email)
            const insertCompanyData = await insertCompany(companyName, phone, gstNumber, address, email)
            if (insertCompanyData.affectedRows > 0) {
                return true;
            }
        }
        else {
            const error = new Error(message.COMPANY.COMPANTYEXIST);
            error.statusCode = 400;
            throw error;
        }
    }

}
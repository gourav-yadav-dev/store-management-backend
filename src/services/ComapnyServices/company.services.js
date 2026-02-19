import message from "../../constants/message.js";
import { findCompanyByNameOrGst, insertCompany } from '../../repositories/company.repository.js'
export async function companyService(companyName, phone, gstNumber, address, email) {
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
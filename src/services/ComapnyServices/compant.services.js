import message from "../../constants/message.js";
import pool from "../../config/db.js";
import { CompanyQuery } from '../../queries/company.queries.js'
export async function companyService(companyName, phone, gstNumber, address, email) {

    const [checkCompany] = await pool.query(CompanyQuery.getCompanyByName, [companyName, gstNumber]);
    if (checkCompany.length == 0) {
        console.log(email)
        const [insertCompany] = await pool.query(CompanyQuery.InsertCompany, [companyName, phone, gstNumber, address, email])
        console.log(insertCompany)
        if (insertCompany.affectedRows > 0) {
            return true;
        }

    }
    else {
        const error = new Error(message.COMPANY.COMPANTYEXIST);
        error.statusCode = 400;
        throw error;
    }



}
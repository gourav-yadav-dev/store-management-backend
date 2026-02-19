import { findCompanyById, updateCompany, findCompanyByNameOrGst, deleteCompanyById } from '../../repositories/company.repository.js'
import message from '../../constants/message.js';
export async function companyUpadateDelete(filtervalue, id, deletecompany = false) {

    const [checkCompany] = await findCompanyById(parseInt(id))
    if (checkCompany) {
        if (deletecompany === true) {
            const deleteCompany = await deleteCompanyById(parseInt(id))
            if (deleteCompany.affectedRows > 0) {

                return { delete: true };
            }
        }
        if (filtervalue.company_name || filtervalue.gst_number) {
            const rows = await findCompanyByNameOrGst(filtervalue.company_name, filtervalue.gst_number)

            if (rows.length == 0) {

                const fields = Object.keys(filtervalue)
                    .map(key => `${key} = ?`)
                    .join(", ");
                const values = Object.values(filtervalue);

                const updateCompanyData = await updateCompany(fields, values, parseInt(id))
               
                console.log(updateCompanyData)
                if (updateCompanyData.affectedRows > 0) {

                    return { update: true };
                }
            }
            else {
                const error = new Error(message.COMPANY.ALREADYNAME);
                error.statusCode = 400;
                throw error;
            }

        }

    }
    else {
        const error = new Error(message.COMPANY.COMPANYNOTEXIST);
        error.statusCode = 400;
        throw error;
    }




    // const query = `
    //         ${productQueries.editProduct}
    //         ${fields.join(",")}
    //         WHERE product_id = ?
    //           `;
    // console.log(query)
    // values.push(parseInt(id));
    // console.log(filtervalue)


}
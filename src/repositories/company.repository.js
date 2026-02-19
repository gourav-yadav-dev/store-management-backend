import pool from '../config/db.js'

export const insertCompany = async (companyName, phone, gstNumber, address, email) => {
    const [rows] = await pool.execute(`INSERT INTO companies (company_name,phone,gst_number,address,email)
    VALUES (?, ?, ?, ?,?)`, [companyName, phone, gstNumber, address, email])
    return rows;
}

export const findCompanyByNameOrGst = async (company_name, gst_number) => {
    const [rows] = await pool.execute(`SELECT company_id from companies where company_name=? or gst_number=?`, [company_name, gst_number])
    return rows;
}
export const findCompanyById = async (id) => {
    const [rows] = await pool.execute(`SELECT company_id from companies where company_id=?`, [id])
    return rows;
}

export const updateCompany = async (fields, values, id) => {
    const [rows] = await pool.execute(`UPDATE companies Set ${fields} where company_id=?`, [...values, id])
    return rows

}

export const deleteCompanyById = async (id) => {
    const [rows] = await pool.execute(`DELETE from companies where company_id=?`, [id])
    return rows;
}
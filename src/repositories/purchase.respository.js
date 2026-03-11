import pool from "../config/db.js";

export const purchaseItem = async (company_id, user_id, invoice_number, purchase_date) => {
    const [rows] = await pool.execute(`INSERT into purchases(company_id,user_id,invoice_number,purchase_date) VALUES (?, ?, ?, ?)`, [company_id, user_id, invoice_number, purchase_date])
    return rows
}

export const purchaseItemByInvoice = async (invoiceId) => {
    const [rows] = await pool.execute(`SELECT invoice_number from purchases where invoice_number=?`, [invoiceId])
    return rows
}

export const lastPurchaseId = async () => {
    const [rows] = await pool.execute(`SELECT purchase_id from purchases where purchase_id=LAST_INSERT_ID()`)
    return rows;
}

export const AddPurchaseItem = async (values) => {
    console.log("check inside")
    console.log(values)
    const [rows] = await pool.query(`INSERT INTO purchase_items (purchase_id, product_id, quantity_units, actual_price) VALUES ?`, [values])
    return rows
}
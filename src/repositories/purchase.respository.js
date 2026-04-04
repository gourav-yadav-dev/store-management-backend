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
    const [rows] = await pool.query(`INSERT INTO purchase_items (purchase_id, product_id, quantity_units, actual_price) VALUES ?`, [values])
    return rows
}


export const allPurchaseItem = async (id, offset, limit) => {
    const [rows] = await pool.query(
        `
        SELECT 
            p.purchase_id,
            p.invoice_number,
            p.purchase_date,
            p.company_id,

            c.company_name,

            pr.product_name,
            pr.product_id,

            pi.quantity_units,
            pi.actual_price

        FROM purchases p

        JOIN companies c 
            ON p.company_id = c.company_id

        JOIN purchase_items pi 
            ON p.purchase_id = pi.purchase_id

        JOIN products pr 
            ON pi.product_id = pr.product_id

        WHERE p.user_id = ?
         LIMIT ? OFFSET ?`,
        [id, limit, offset]
    );
    return rows;
};



export const findPurchaseByInvoiceNo = async (invoice) => {
    const [rows] = await pool.execute(
        `
        SELECT 
        p.purchase_id,
        p.invoice_number,
        p.purchase_date,
        p.company_id,

        c.company_name,
        pr.product_name,
        pr.product_id,

        pi.quantity_units,
        pi.actual_price

    FROM purchases p

    JOIN companies c 
        ON p.company_id = c.company_id

    JOIN purchase_items pi 
        ON p.purchase_id = pi.purchase_id

    JOIN products pr 
        ON pi.product_id = pr.product_id

    WHERE p.invoice_number = ?
        `,
        [invoice]


    )

    return rows


}
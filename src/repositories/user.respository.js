import pool from "../config/db.js";

export const userById = async (id) => {
    const [rows] = await pool.execute(`SELECT user_id from  users WHERE user_id=?`, [id])
    return rows;
}
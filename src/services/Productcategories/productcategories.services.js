import pool from "../../config/db.js";
import jwt from 'jsonwebtoken';
import message from "../../constants/message.js";

export async function productcategories(cateogry = null, token, email, retrivecategory = false) {

    console.log(retrivecategory)
    token = token.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            throw new Error(message.USER.LOGINAGAIN);
        }
    });
    if (retrivecategory == true) {
        const [existCategory] = await pool.execute(
            'SELECT category_name from categories where email=? AND status=?', [email, "ACTIVE"]
        )

        if (existCategory.length == 0) {
            throw new Error(message.USER.CATEGORYNOTPRESENT)
        }
        return existCategory;
    }


    const [existCategory] = await pool.execute(
        'SELECT category_name from categories where category_name=? ', [cateogry]
    )
    if (existCategory.length != 0) {
        console.log(existCategory.length)
        throw new Error(message.USER.CATEGORYALREADY)
    }
    const [data] = await pool.execute(
        'INSERT into categories (category_name, status,email) VALUES (?, ?,?)', [cateogry, "ACTIVE", email]
    )
    if (data.affectedRows == 1) {
        return true;
    }
}
import pool from "../../config/db.js";
import jwt from 'jsonwebtoken';
import message from "../../constants/message.js";

export async function productcategories(cateogry = null, token, email, retrivecategory = false, EditCategory = false, id = null, deleteCategory = false) {

    if (retrivecategory == true) {
        const [existCategory] = await pool.execute(
            'SELECT category_name,category_id from categories where email=? AND status=?', [email, "ACTIVE"]
        )

        if (existCategory.length == 0) {
            throw new Error(message.USER.CATEGORYNOTPRESENT)
        }
        return existCategory;
    }

    if (EditCategory == true || deleteCategory == true) {
        console.log("here i am ")
        let existCategory
        const [verify] = await pool.execute(
            'Select category_id from  categories  where category_id=?', [id]
        )
        console.log(verify)
        if (verify.length != 0) {
            if (EditCategory == true) {
                [existCategory] = await pool.execute(
                    'UPDATE categories set category_name=? where category_id=?', [cateogry, id]
                )
                // const updateCategory=
                console.log("here sdldf00")
                console.log(existCategory)
                console.log("here sdldf00")
                return { update: existCategory.affectedRows }
            }
            if (deleteCategory == true) {
                [existCategory] = await pool.execute(
                    'Delete from categories where category_id=?', [id]
                )
                // const deleteCategory={delete:existCategory.affectedRows}
                return { delete: existCategory.affectedRows };
            }
        }
        else {
            const error = new Error(message.USER.CATEGORYNOTPRESENT);
            error.statusCode = 400;
            throw error;
        }

        // if(verify[0].categor)

    }



    const [existCategory] = await pool.execute(
        'SELECT category_name from categories where category_name=? ', [cateogry]
    )
    if (existCategory.length != 0) {
        const error = new Error(message.USER.CATEGORYALREADY);
        error.statusCode = 400;
        throw error;
    }
    const [data] = await pool.execute(
        'INSERT into categories (category_name, status,email) VALUES (?, ?,?)', [cateogry, "ACTIVE", email]
    )
    if (data.affectedRows == 1) {
        return true;
    }
}
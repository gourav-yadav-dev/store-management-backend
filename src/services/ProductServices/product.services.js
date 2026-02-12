
import pool from "../../config/db.js";
import message from '../../constants/message.js';
import { productQueries, UserQueries, CategoryQueries } from '../../queries/product.queries.js'
export async function productservice(email, productName, categoryId, token) {
    //here verify token
    const [findEmail] = await pool.query(
        UserQueries.findUser, [email]
    )

    if (findEmail.length != 0) {
        const [category] = await pool.query(
            CategoryQueries.findCategory, [categoryId, email]
        )
        console.log("category")
        console.log(category)
        console.log("category")
        if (category.length == 0) {
            const error = new Error(message.USER.CATEGORYNOTPRESENT);
            error.statusCode = 400;
            throw error;
        }
        else {
            const [addproduct] = await pool.query(
                productQueries.createProduct, [email, productName, categoryId]
            )
            if (addproduct.affectedRows == 1) {
                return true;    
            }
        }
    }
    else {
        const error = new Error(message.USER.SECRET_ERROR);
        error.statusCode = 400;
        throw error;

    }

}
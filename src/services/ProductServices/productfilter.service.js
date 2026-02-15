import { UserQueries, productQueries } from '../../queries/product.queries.js'
import pool from '../../config/db.js'
import message from '../../constants/message.js';
export async function productfilterservice(limit, offset, email, search = null) {
    const findUser = await pool.query(
        UserQueries.findUser, [email]
    )
    if (findUser[0].length != 0) {
        if (search!=null) {
            console.log(search)
            console.log("inside condition")
            const [products] = await pool.query(
                productQueries.FilterProduct, [email, email, `%${search}%`, parseInt(limit), parseInt(offset)]
            )
            console.log(products)
            if (products.length != 0) {
                console.log(products)
                return products;
            }
            else {
                const error = new Error(message.PRODUCT.PRODUCTNO);
                error.statusCode = 400;
                throw error;
            }

        }
        const [products] = await pool.query(
            productQueries.getProduct, [email, email, parseInt(limit), parseInt(offset)]
        )
        if (products.length != 0) {
            return products;
        }
        else {
            const error = new Error(message.PRODUCT.PRODUCTNO);
            error.statusCode = 400;
            throw error;
        }

    }
    else {
        const error = new Error(message.USER.SECRET_ERROR);
        error.statusCode = 400;
        throw error;
    }

}
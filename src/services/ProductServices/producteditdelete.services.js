
import pool from "../../config/db.js"
import { productQueries, UserQueries, CategoryQueries } from '../../queries/product.queries.js'
import message from "../../constants/message.js"
export async function producteditdeleteservice(id, filterValue) {
    const [productId] = await pool.query(productQueries.getProductById, [id])
    if (productId.length != 0) {
        if (filterValue.product_category) {
            const [checkCategory] = await pool.query(CategoryQueries.findCategoryById, [filterValue.product_category])
            if (checkCategory.length == 0) {
                const error = new Error(message.USER.CATEGORYNOTPRESENT);
                error.statusCode = 400;
                throw error;
            }
        }
        const fields = Object.keys(filterValue).map(key => `${key} = ?`);
        const values = Object.values(filterValue);
        const query = `
        ${productQueries.editProduct}
        ${fields.join(",")}
        WHERE product_id = ?
          `;

        values.push(parseInt(id));

        const [result] = await pool.query(query, values);
        return result

    }



}
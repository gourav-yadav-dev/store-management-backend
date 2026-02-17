
import pool from "../../config/db.js"
import { productQueries, UserQueries, CategoryQueries } from '../../queries/product.queries.js'
import message from "../../constants/message.js"
export async function producteditdeleteservice(id, filterValue = false, deleteproduct = false) {

    if (deleteproduct == true) {
        const result = await pool.query(productQueries.deleteProduct, [parseInt(id)])
        return { result, deleteproduct }
    }
    const [productId] = await pool.query(productQueries.getProductById, [id])
    if (productId.length != 0) {
        if (filterValue.category_id) {
            const [checkCategory] = await pool.query(CategoryQueries.findCategoryById, [parseInt(filterValue.category_id)])
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
        console.log(query)
        values.push(parseInt(id));

        const [result] = await pool.query(query, values);
        return { result, filterValue }
    }
    else {
        const error = new Error(message.PRODUCT.PRODUCTNO);
        error.statusCode = 400;
        throw error;

    }



}
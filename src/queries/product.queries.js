export const productQueries = {
  createProduct: `
      INSERT INTO products (email, product_name, category_id)
      VALUES (?, ?, ?)
      ;
    `,

  getProductById: `
      SELECT * FROM products
      WHERE id =? ;
    `,

  deleteProduct: `
      DELETE FROM products
      WHERE id = ?;
    `
  ,
  getProductByName: `
    Select product_name from products
    where product_name=?;
     
    `
};


export const UserQueries = {
  findUser:
    `
    SELECT email FROM users where email=?;
    `
}

export const CategoryQueries = {
  findCategory: ` SELECT category_id, email FROM categories
WHERE category_id = ? AND email=?;`

}
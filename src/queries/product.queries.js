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
  ,
  getProduct: `
   SELECT 
    p.product_id,
    p.product_name, 
    c.category_name,
    c.category_id
FROM products p
JOIN categories c 
ON p.category_id = c.category_id
WHERE p.email = ?
AND c.email = ?
And p.status='ACTIVE'
LIMIT ? OFFSET ?;
    `
  ,
  FilterProduct: `
SELECT 
    p.product_id,
    p.product_name, 
    c.category_name,
    c.category_id
FROM products p
JOIN categories c 
    ON p.category_id = c.category_id
WHERE p.email = ?
AND c.email = ?
AND p.status = 'ACTIVE'
AND p.product_name LIKE ?
ORDER BY p.product_id DESC
LIMIT ? OFFSET ?;


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
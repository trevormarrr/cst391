export const productQueries = {
	readProducts: `
        SELECT product_id, name, description, category, quantity, \`condition\`, price, added_date
        FROM products
    `,
	readProductById: `
        SELECT product_id, name, description, category, quantity, \`condition\`, price, added_date
        FROM products
        WHERE product_id = ?
    `,
	createProduct: `
        INSERT INTO products (name, description, category, quantity, \`condition\`, price)
        VALUES (?, ?, ?, ?, ?, ?)
    `,
	updateProduct: `
        UPDATE products
        SET name = ?, description = ?, category = ?, quantity = ?, \`condition\` = ?, price = ?
        WHERE product_id = ?
    `,
	deleteProduct: `
        DELETE FROM products WHERE product_id = ?
    `
};

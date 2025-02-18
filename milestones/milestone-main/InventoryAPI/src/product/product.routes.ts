import { Router } from 'express';
import * as ProductsController from './product.controller';

const router = Router();

// Get all products
router
    .route('/products')
    .get(ProductsController.readProducts);

// Get product by ID
router
    .route('/products/:productId')
    .get(ProductsController.readProductById);

// Add a new product
router
    .route('/products')
    .post(ProductsController.createProduct);

// Update an existing product by ID
router
    .route('/products/:productId')
    .put(ProductsController.updateProduct);

// Delete a product by product ID
router
    .route('/products/:productId')
    .delete(ProductsController.deleteProduct);

export default router;

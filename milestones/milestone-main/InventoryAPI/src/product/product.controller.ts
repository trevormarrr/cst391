import { Request, RequestHandler, Response } from 'express';
import { Product } from './product.model';
import * as ProductDao from './product.dao';
import { OkPacket } from 'mysql';

// Get all products
export const readProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductDao.readProducts();
        res.json(products);  // Array of product objects as described in the documentation
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
};

// Get product by ID
export const readProductById = async (req: Request, res: Response) => {
    const { productId } = req.params;
    try {
        const product = await ProductDao.readProductById(Number(productId));
        if (product.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product[0]);  // Single product object as described in the documentation
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product' });
    }
};

// Create a Product
export const createProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { name, description, category, quantity, condition, price } = req.body;
        const product: Product = {
            product_id: 0, // Auto-generated, set to 0 for now
            name,
            description,
            category,
            quantity,
            condition,
            price,
            added_date: new Date() // Set the current date for added_date
        };

        // Create the product in the database
        const okPacket: OkPacket = await ProductDao.createProduct(product);

        // Send the success response with the product ID
        res.status(201).json({
            message: 'Product added successfully',
            product_id: okPacket.insertId  // Sending back the ID of the newly created product
        });
    } catch (error) {
        console.error('[product.controller][createProduct][Error] ', error);
        res.status(500).json({
            message: 'There was an error when creating the product'
        });
    }
};

// Update a Product
export const updateProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { product_id, name, description, category, quantity, condition, price } = req.body;

        // Exclude added_date from the update request, as it's auto-generated and shouldn't be updated
        const product: Product = {
            product_id,
            name,
            description,
            category,
            quantity,
            condition,
            price,
            added_date: null // Use null instead of undefined for added_date in update
        };

        const okPacket: OkPacket = await ProductDao.updateProduct(product);

        // Send success response
        res.status(200).json({
            message: 'Product updated successfully'
        });
    } catch (error) {
        console.error('[product.controller][updateProduct][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating the product'
        });
    }
};



// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;
    try {
        const result = await ProductDao.deleteProduct(Number(productId));
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
};

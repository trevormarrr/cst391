import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Product } from './product.model';
import { productQueries } from './product.queries';

export const readProducts = async () => {
    return execute<Product[]>(productQueries.readProducts, []);
};

export const readProductById = async (productId: number) => {
    return execute<Product[]>(productQueries.readProductById, [productId]);
};

export const createProduct = async (product: Product) => {
    return execute<OkPacket>(productQueries.createProduct, [
        product.name,
        product.description,
        product.category,
        product.quantity,
        product.condition,
        product.price,
    ]);
};

export const updateProduct = async (product: Product) => {
    return execute<OkPacket>(productQueries.updateProduct, [
        product.name,
        product.description,
        product.category,
        product.quantity,
        product.condition,
        product.price,
        product.product_id
    ]);
};

export const deleteProduct = async (productId: number) => {
    return execute<OkPacket>(productQueries.deleteProduct, [productId]);
};

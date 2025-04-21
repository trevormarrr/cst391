import axios from 'axios';
import { Product } from '../models/Product';

const API_BASE_URL = 'http://localhost:5001';

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

export const createProduct = async (product: Omit<Product, 'product_id' | 'added_date'>) => {
    const response = await axios.post(`${API_BASE_URL}/products`, product);
    return response.data;
};

export const updateProduct = async (product: Product) => {
    const response = await axios.put(`${API_BASE_URL}/products/${product.product_id}`, product);
    return response.data;
};

export const deleteProduct = async (id: number) => {
    const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
    return response.data;
};
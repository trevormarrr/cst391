import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001';

export const getProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const getProductById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post(`${API_BASE_URL}/products`, product);
    return response.data;
};

export const updateProduct = async (product) => {
    const response = await axios.put(`${API_BASE_URL}/products/${product.product_id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
    return response.data;
};
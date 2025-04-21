import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Product } from '../models/Product';
import * as ProductService from '../services/productService';

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const isViewMode = location.pathname.includes(`/products/${id}`) && !location.pathname.includes('/edit');
    const isEditMode = location.pathname.includes('/edit');

    const [product, setProduct] = useState<Product>({
        product_id: 0,
        name: '',
        description: null,
        category: null,
        quantity: 0,
        condition: 'new',
        price: 0,
        added_date: null
    });

    useEffect(() => {
        if (id) {
            loadProduct(parseInt(id));
        }
    }, [id]);

    const loadProduct = async (productId: number) => {
        try {
            const data = await ProductService.getProductById(productId);
            setProduct(data);
        } catch (error) {
            console.error('Error loading product:', error);
        }
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                ProductService.updateProduct(product);
            } else {
                ProductService.createProduct(product);
            }
            navigate('/products');
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: name === 'quantity' || name === 'price' ? parseFloat(value) : value
        }));
    };

    return (
        <div className="container mt-4">
            <h2>
                {isViewMode
                    ? 'Product Details'
                    : isEditMode
                        ? 'Edit Product'
                        : 'Create Product'}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                        readOnly={isViewMode}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={product.description || ''}
                        onChange={handleChange}
                        readOnly={isViewMode}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        value={product.category || ''}
                        onChange={handleChange}
                        readOnly={isViewMode}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        required
                        readOnly={isViewMode}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="condition">Condition</label>
                    <select
                        className="form-select"
                        id="condition"
                        name="condition"
                        value={product.condition}
                        onChange={handleChange}
                        required
                        disabled={isViewMode}
                    >
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                        readOnly={isViewMode}
                    />
                </div>
                <div className="mt-3">
                    {!isViewMode && (
                        <button type="submit" className="btn btn-primary me-2">
                            {isEditMode ? 'Update' : 'Create'}
                        </button>
                    )}
                    {isViewMode && (
                        <button
                            type="button"
                            className="btn btn-primary me-2"
                            onClick={() => navigate(`/products/edit/${product.product_id}`)}
                        >
                            Edit
                        </button>
                    )}
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate('/products')}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as ProductService from '../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await ProductService.getProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ProductService.deleteProduct(id);
            setProducts(products.filter(product => product.product_id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="inventory-container">
            <div className="header-section mb-4">
                <h1 className="text-primary">Inventory Management</h1>
                <p className="text-muted">Track and manage your product inventory</p>
            </div>

            <div className="search-section mb-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            <div className="inventory-summary mb-3">
                <div className="alert alert-info">
                    Total Products: {filteredProducts.length}
                </div>
            </div>

            <div className="table-responsive shadow-sm">
                <table className="table table-hover">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Condition</th>
                            <th>Price</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.product_id}>
                                <td>{product.name}</td>
                                <td>
                                    <span className="badge bg-secondary">
                                        {product.category}
                                    </span>
                                </td>
                                <td>
                                    <span className={product.quantity <= 5 ? 'text-danger' : 'text-success'}>
                                        {product.quantity}
                                    </span>
                                </td>
                                <td>{product.condition}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td className="text-center">
                                    <Link
                                        to={`/products/${product.product_id}`}
                                        className="btn btn-outline-info btn-sm me-2"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        to={`/products/edit/${product.product_id}`}
                                        className="btn btn-outline-primary btn-sm me-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDelete(product.product_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
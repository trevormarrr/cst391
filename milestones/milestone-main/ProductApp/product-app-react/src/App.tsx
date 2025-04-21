import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">Product Management</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/products/new">Add Product</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductForm />} />
          <Route path="/products/edit/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
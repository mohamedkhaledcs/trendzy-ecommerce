import { Link } from 'react-router-dom';
import productsData from '../data/Products';
import { useCart } from '../context/useCart';
import { useAuth } from '../context/useAuth';
import { useToast } from '../context/ToastContext';


import React, { useState } from 'react';

function Products() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();
  // Ensure localStorage products are initialized and sorted
  let productsRaw = [];
  const localProducts = JSON.parse(localStorage.getItem('products'));
  if (Array.isArray(localProducts) && localProducts.length >= 6) {
    productsRaw = localProducts;
  } else {
    productsRaw = productsData;
    localStorage.setItem('products', JSON.stringify(productsData));
  }
  // Sort products by id ascending
  const products = [...productsRaw].sort((a, b) => a.id - b.id);

  // Search and filter state
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  // Get unique categories from products
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category || 'other')))].filter(Boolean);

  // Filter products by search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || (product.category === category);
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    if (!user) {
      showToast('Please login first to add to cart', 'error');
      return;
    }
    addToCart(product);
    showToast('Product added to cart!', 'success');
  };

  return (
  <main className="container-fluid reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.85)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <h2 className="mb-4 text-center fw-bold">Our Products</h2>
      {/* Search and filter controls */}
      <div className="row mb-4 align-items-center justify-content-center">
        <div className="col-12 col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ borderRadius: '8px', fontSize: '1rem' }}
          />
        </div>
        <div className="col-12 col-md-4 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{ borderRadius: '8px', fontSize: '1rem' }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row justify-content-center">
        {filteredProducts.length === 0 ? (
          <div className="col-12 text-center py-5">
            <span style={{ fontSize: '1.2rem', color: '#888' }}>No products found.</span>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
              <div className="card h-100 shadow-sm w-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.price} EGP</p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Details
                    </Link>
                    <button className="btn btn-success btn-sm" onClick={() => handleAddToCart(product)}>
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      </div>
    </main>
  );
}

export default Products;

import { Link } from 'react-router-dom';
import productsData from '../data/Products';
import { useCart } from '../context/useCart';
import { useAuth } from '../context/useAuth';
import { useToast } from '../context/ToastContext';

function Products() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();
  const products = JSON.parse(localStorage.getItem('products')) || productsData;

  const handleAddToCart = (product) => {
    if (!user) {
      showToast('Please login first to add to cart', 'error');
      return;
    }
    addToCart(product);
    showToast('Product added to cart!', 'success');
  };

  return (
    <div>
      <h2 className="mb-4 text-center fw-bold">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
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
        ))}
      </div>
    </div>
  );
}

export default Products;

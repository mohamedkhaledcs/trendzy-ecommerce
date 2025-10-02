import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { useCart } from '../../context/useCart';
import { useAuth } from '../../context/useAuth';
import { useToast } from '../../context/ToastContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    if (!user) {
      showToast('Please login first to add to cart', 'error');
      return;
    }
    addToCart(product);
    showToast('Product added to cart!', 'success');
  };

  return (
    <div className={`card h-100 shadow-sm ${styles.card}`}>
      <img
        src={product.images[0]}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.price} EGP</p>
        <div className="d-flex justify-content-between">
          <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
          <button className="btn btn-success btn-sm" onClick={handleAddToCart}>
            <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

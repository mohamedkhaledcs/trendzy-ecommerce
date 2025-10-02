import { useParams } from 'react-router-dom';
import products from '../data/Products';
import { useCart } from '../context/useCart';
import { useAuth } from '../context/useAuth';
import { useToast } from '../context/ToastContext';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    if (!user) {
      showToast('Please login first to add to cart', 'error');
      return;
    }
    addToCart(product);
    showToast('Product added to cart!', 'success');
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="lead text-muted">{product.price} EGP</p>
        <p>{product.description}</p>
        <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;

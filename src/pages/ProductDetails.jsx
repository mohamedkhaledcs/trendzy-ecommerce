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
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-7">
          <div className="card shadow rounded p-4 d-flex flex-row flex-wrap gap-4">
            <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
              <img src={product.image} alt={product.name} className="img-fluid rounded shadow-sm" style={{ maxHeight: '320px', objectFit: 'cover' }} />
            </div>
            <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
              <h2 className="fw-bold mb-2">{product.name}</h2>
              <p className="lead text-muted mb-2">{product.price} EGP</p>
              <p className="mb-3">{product.description}</p>
              <button className="btn btn-success btn-lg w-100" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default ProductDetails;

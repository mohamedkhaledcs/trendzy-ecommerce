import { useCart } from '../context/useCart';
import { useAuth } from '../context/useAuth';
import { useToast } from '../context/ToastContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();

  if (!user) {
    return <div className="p-5"><h2>سجل دخول الأول عشان تشوف العربة</h2></div>;
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: Date.now(),
      username: user.username,
      products: cart,
      status: 'pending',
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    clearCart();
    showToast('Order placed!', 'success');
  };

  return (
    <div className="p-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="lead mt-3">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.title} - {item.price} EGP</span>
                <div>
                  <button className="btn btn-sm btn-secondary mx-1" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-sm btn-secondary mx-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="btn btn-danger btn-sm mx-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: {total} EGP</h4>
          <button className="btn btn-success mt-3" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;

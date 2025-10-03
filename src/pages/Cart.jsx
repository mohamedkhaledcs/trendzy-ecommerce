import React, { useEffect } from 'react';
import { useCart } from '../context/useCart';
import { useAuth } from '../context/useAuth';
import { useToast } from '../context/ToastContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();
  // show a toast when the user is not logged in (run after render)
  useEffect(() => {
    if (!user && showToast) {
      showToast('Please login first to view your cart', 'error');
    }
  }, [user, showToast]);

  if (!user) {
    return (
      <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px' }}>
        <div className="app-inner">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
          <div className="col-12 col-md-7 col-lg-5 text-center">
            <p className="lead">You need to be logged in to view your cart.</p>
            <p><a href="/login" className="btn btn-primary">Go to Login</a></p>
          </div>
        </div>
        </div>
      </main>
    );
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
    showToast('Order placed successfully!', 'success');
  };

  // Display alert for actions/messages
  // ...existing code...
  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div style={{ position: 'absolute', top: 24, left: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        {/* Toast/Alert will be displayed here by ToastContext */}
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
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
      </div>
      </div>
    </main>
  );
}

export default Cart;

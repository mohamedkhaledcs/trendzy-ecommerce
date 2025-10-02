import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center bg-light p-5 rounded shadow-sm">
        <h1 className="fw-bold mb-3">Welcome to Trendzy</h1>
        <p className="lead mb-4">
          Discover our amazing products with the best prices and styles.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Shop Now
        </Link>
      </section>

      {/* Features Section */}
      <section className="row mt-5 text-center">
        <div className="col-md-4">
          <i className="bi bi-truck fs-1 text-primary"></i>
          <h4 className="mt-3">Fast Delivery</h4>
          <p>Get your orders quickly at your doorstep.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-shield-lock fs-1 text-primary"></i>
          <h4 className="mt-3">Secure Payment</h4>
          <p>All transactions are safe and encrypted.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-star fs-1 text-primary"></i>
          <h4 className="mt-3">Top Quality</h4>
          <p>We ensure the best quality for all our products.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;

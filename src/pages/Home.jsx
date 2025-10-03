import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import products from '../data/Products';

function Home() {
  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      {/* Hero Section */}
      <section className="row justify-content-center text-center bg-light p-5 rounded shadow-sm mx-0">
        <div className="col-12 col-md-8">
          <h1 className="fw-bold mb-3">Welcome to Trendzy</h1>
          <p className="lead mb-4">
            Discover our amazing products with the best prices and styles.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="row mt-5 text-center justify-content-center mx-0">
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <i className="bi bi-truck fs-1 text-primary"></i>
          <h4 className="mt-3">Fast Delivery</h4>
          <p>Get your orders quickly at your doorstep.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <i className="bi bi-shield-lock fs-1 text-primary"></i>
          <h4 className="mt-3">Secure Payment</h4>
          <p>All transactions are safe and encrypted.</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 mb-3">
          <i className="bi bi-star fs-1 text-primary"></i>
          <h4 className="mt-3">Top Quality</h4>
          <p>We ensure the best quality for all our products.</p>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="row mt-5 mx-0">
        <div className="col-12 text-center mb-3">
          <h2 className="fw-bold">Popular Products</h2>
          <p className="text-muted">Handpicked items from Men, Women and Kids</p>
        </div>

        {/* pick one popular product per category (male, female, kids) */}
        <div className="col-12">
          <div className="row">
            {(() => {
              const male = products.find(p => p.category === 'male') || products[0];
              const female = products.find(p => p.category === 'female') || products[1] || products[0];
              const kids = products.find(p => p.category === 'kids') || products[2] || products[0];
              const list = [male, female, kids];
              return list.map((prod) => (
                <div key={prod.id} className="col-12 col-md-4 mb-4">
                  <ProductCard product={prod} />
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Small About Block */}
      <section className="row align-items-center mt-5 mx-0 about-block">
        <div className="col-12 col-md-6 mb-3">
          <h3 className="fw-bold">About Trendzy</h3>
          <p className="text-muted">Trendzy curates stylish, high-quality products for the whole family. We focus on comfort, design and value — updated weekly with new arrivals.</p>
          <Link to="/about" className="btn btn-outline-primary">Learn more</Link>
        </div>
        <div className="col-12 col-md-6">
          <img src="/images/hero-1.jpg" alt="About Trendzy" className="img-fluid rounded shadow-sm" />
        </div>
      </section>
      </div>
    </main>
  );
}

export default Home;

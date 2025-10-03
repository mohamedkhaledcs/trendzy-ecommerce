
function About() {
  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-8 text-center">
          <h2 className="section-title mb-4 fw-bold">About Trendzy</h2>
          <p className="lead mb-3">
            <strong>Trendzy</strong> is your go-to destination for stylish, high-quality fashion for men, women, and kids.<br />
            We believe shopping should be easy, fun, and affordable.
          </p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center mb-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img src="/images/hero-1.jpg" alt="Trendzy Store" className="img-fluid rounded shadow" style={{ maxHeight: '340px', objectFit: 'cover' }} />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <ul className="list-unstyled fs-5">
            <li className="mb-3"><i className="bi bi-check-circle text-success me-2"></i> Fast & Secure Delivery</li>
            <li className="mb-3"><i className="bi bi-check-circle text-success me-2"></i> 100% Quality Guarantee</li>
            <li className="mb-3"><i className="bi bi-check-circle text-success me-2"></i> Easy Returns & Refunds</li>
            <li className="mb-3"><i className="bi bi-check-circle text-success me-2"></i> 24/7 Customer Support</li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow rounded text-center p-3">
            <div className="card-body">
              <h5 className="card-title fw-bold">Our Mission</h5>
              <p className="card-text">To make fashion accessible and enjoyable for everyone, everywhere.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow rounded text-center p-3">
            <div className="card-body">
              <h5 className="card-title fw-bold">Our Vision</h5>
              <p className="card-text">To be the most trusted and loved online fashion store in the region.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow rounded text-center p-3">
            <div className="card-body">
              <h5 className="card-title fw-bold">Our Values</h5>
              <p className="card-text">Quality, Integrity, Innovation, and Customer Satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default About;

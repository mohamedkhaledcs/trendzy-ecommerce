
function About() {
  return (
    <div className="container py-5">
      <h2 className="section-title mb-4">About Trendzy</h2>
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="/images/hero-1.jpg" alt="Trendzy Store" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <p className="lead mb-3">
            <strong>Trendzy</strong> is your go-to destination for stylish, high-quality fashion for men, women, and kids. We believe shopping should be easy, fun, and affordable.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Fast & Secure Delivery</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success"></i> 100% Quality Guarantee</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Easy Returns & Refunds</li>
            <li className="mb-2"><i className="bi bi-check-circle text-success"></i> 24/7 Customer Support</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100 shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">To make fashion accessible and enjoyable for everyone, everywhere.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">To be the most trusted and loved online fashion store in the region.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow rounded">
            <div className="card-body">
              <h5 className="card-title">Our Values</h5>
              <p className="card-text">Quality, Integrity, Innovation, and Customer Satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

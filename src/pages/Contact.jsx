function Contact() {
  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 col-lg-6">
          <div className="card shadow rounded p-4">
            <h2 className="mb-4 text-center fw-bold">Contact Us</h2>
            <form className="mt-2">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" required></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default Contact;

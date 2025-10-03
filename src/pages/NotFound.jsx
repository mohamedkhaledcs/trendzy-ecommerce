import React from "react";

function NotFound() {
  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="col-12 col-md-7 col-lg-6">
          <div className="card shadow rounded p-5 text-center">
            <h1 style={{ fontSize: '5rem', color: '#dc3545' }}>404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="btn btn-primary btn-lg">Go Home</a>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default NotFound;

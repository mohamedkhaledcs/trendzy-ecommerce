import React from "react";

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
      <h1 style={{ fontSize: "5rem", color: "#dc3545" }}>404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="btn btn-primary">Go Home</a>
    </div>
  );
}

export default NotFound;

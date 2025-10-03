import { Link } from "react-router-dom";


function AdminDashboard() {
  // Demo summary data
  const summary = {
    products: 42,
    users: 17,
    orders: 12,
    revenue: 12450,
  };

  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <h1 className="fw-bold mb-4 text-center">Admin Dashboard</h1>
      {/* Summary cards */}
      <div className="row mb-5 justify-content-center">
        <div className="col-12 col-sm-6 col-md-3 mb-3">
          <div className="card text-center shadow-sm p-3" style={{ borderRadius: '14px', background: 'rgba(0,123,255,0.08)' }}>
            <div className="mb-2"><i className="bi bi-box-seam" style={{ fontSize: '2rem', color: '#0d6efd' }}></i></div>
            <h5>Products</h5>
            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>{summary.products}</div>
            <Link to="/admin/products" className="btn btn-outline-primary btn-sm mt-2">Manage</Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-3">
          <div className="card text-center shadow-sm p-3" style={{ borderRadius: '14px', background: 'rgba(40,167,69,0.08)' }}>
            <div className="mb-2"><i className="bi bi-people" style={{ fontSize: '2rem', color: '#28a745' }}></i></div>
            <h5>Users</h5>
            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>{summary.users}</div>
            <Link to="/admin/users" className="btn btn-outline-success btn-sm mt-2">Manage</Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-3">
          <div className="card text-center shadow-sm p-3" style={{ borderRadius: '14px', background: 'rgba(255,193,7,0.08)' }}>
            <div className="mb-2"><i className="bi bi-bag-check" style={{ fontSize: '2rem', color: '#ffc107' }}></i></div>
            <h5>Orders</h5>
            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>{summary.orders}</div>
            <Link to="/admin/orders" className="btn btn-outline-warning btn-sm mt-2">Manage</Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-3">
          <div className="card text-center shadow-sm p-3" style={{ borderRadius: '14px', background: 'rgba(220,53,69,0.08)' }}>
            <div className="mb-2"><i className="bi bi-currency-dollar" style={{ fontSize: '2rem', color: '#dc3545' }}></i></div>
            <h5>Revenue</h5>
            <div className="fw-bold" style={{ fontSize: '1.5rem' }}>{summary.revenue} EGP</div>
          </div>
        </div>
      </div>
      {/* Quick actions */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card shadow-sm p-4" style={{ borderRadius: '14px' }}>
            <h5 className="mb-3">Quick Actions</h5>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Link to="/admin/products/new" className="btn btn-primary">Add Product</Link>
              <Link to="/admin/users/new" className="btn btn-success">Add User</Link>
              <Link to="/admin/orders" className="btn btn-warning">View Orders</Link>
              <Link to="/admin/products" className="btn btn-info">View Products</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default AdminDashboard;

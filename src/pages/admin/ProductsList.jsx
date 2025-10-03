import seedProducts from "../data/seedProducts";

function ProductsList() {
  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="card shadow rounded p-4">
            <h2 className="fw-bold mb-4 text-center">All Products</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {seedProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price} EGP</td>
                      <td>{product.countInStock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default ProductsList;

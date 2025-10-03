import { useState, useEffect } from "react";

function ProductsManagement() {
	const [products, setProducts] = useState([]);
	const [newProduct, setNewProduct] = useState({ title: "", price: "", images: [""], countInStock: 0 });

	useEffect(() => {
		const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
		setProducts(storedProducts);
	}, []);

	const addProduct = () => {
		const id = Date.now();
		const product = { ...newProduct, id };
		const updatedProducts = [...products, product];
		setProducts(updatedProducts);
		localStorage.setItem("products", JSON.stringify(updatedProducts));
		setNewProduct({ title: "", price: "", images: [""], countInStock: 0 });
	};

	const deleteProduct = (id) => {
		const updatedProducts = products.filter(p => p.id !== id);
		setProducts(updatedProducts);
		localStorage.setItem("products", JSON.stringify(updatedProducts));
	};

		return (
			<main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
				<div className="app-inner">
				<div className="row justify-content-center">
					<div className="col-12 col-md-10">
						<div className="card shadow rounded p-4">
							<h2 className="fw-bold mb-4 text-center">Products Management</h2>
							<div className="mb-4">
								<input type="text" placeholder="Title" value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} className="form-control mb-2" />
								<input type="number" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} className="form-control mb-2" />
								<input type="text" placeholder="Image URL" value={newProduct.images[0]} onChange={e => setNewProduct({ ...newProduct, images: [e.target.value] })} className="form-control mb-2" />
								<input type="number" placeholder="Stock" value={newProduct.countInStock} onChange={e => setNewProduct({ ...newProduct, countInStock: Number(e.target.value) })} className="form-control mb-2" />
								<button className="btn btn-primary w-100" onClick={addProduct}>Add Product</button>
							</div>
							<div className="table-responsive">
								<table className="table table-bordered table-hover align-middle">
									<thead className="table-light">
										<tr>
											<th>ID</th>
											<th>Title</th>
											<th>Price</th>
											<th>Stock</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{products.map(product => (
											<tr key={product.id}>
												<td>{product.id}</td>
												<td>{product.title}</td>
												<td>{product.price}</td>
												<td>{product.countInStock}</td>
												<td>
													<button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
												</td>
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

export default ProductsManagement;

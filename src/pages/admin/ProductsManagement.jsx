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
		<div className="p-6">
			<h2 className="text-xl font-bold mb-4">Products Management</h2>
			<div className="mb-4">
				<input type="text" placeholder="Title" value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} className="form-control mb-2" />
				<input type="number" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} className="form-control mb-2" />
				<input type="text" placeholder="Image URL" value={newProduct.images[0]} onChange={e => setNewProduct({ ...newProduct, images: [e.target.value] })} className="form-control mb-2" />
				<input type="number" placeholder="Stock" value={newProduct.countInStock} onChange={e => setNewProduct({ ...newProduct, countInStock: Number(e.target.value) })} className="form-control mb-2" />
				<button className="btn btn-primary" onClick={addProduct}>Add Product</button>
			</div>
			<table className="w-full border">
				<thead className="bg-gray-100">
					<tr>
						<th className="p-2 border">ID</th>
						<th className="p-2 border">Title</th>
						<th className="p-2 border">Price</th>
						<th className="p-2 border">Stock</th>
						<th className="p-2 border">Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => (
						<tr key={product.id}>
							<td className="p-2 border">{product.id}</td>
							<td className="p-2 border">{product.title}</td>
							<td className="p-2 border">{product.price}</td>
							<td className="p-2 border">{product.countInStock}</td>
							<td className="p-2 border">
								<button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ProductsManagement;

import { useState, useEffect } from "react";

function OrdersManagement() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
		setOrders(storedOrders);
	}, []);

	const updateOrderStatus = (orderId, status) => {
		const updatedOrders = orders.map(order =>
			order.id === orderId ? { ...order, status } : order
		);
		setOrders(updatedOrders);
		localStorage.setItem("orders", JSON.stringify(updatedOrders));
	};

		return (
			<main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
				<div className="app-inner">
				<div className="row justify-content-center">
					<div className="col-12 col-md-10">
						<div className="card shadow rounded p-4">
							<h2 className="fw-bold mb-4 text-center">Orders Management</h2>
							<div className="table-responsive">
								<table className="table table-bordered table-hover align-middle">
									<thead className="table-light">
										<tr>
											<th>Order ID</th>
											<th>User</th>
											<th>Products</th>
											<th>Status</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{orders.map(order => (
											<tr key={order.id}>
												<td>{order.id}</td>
												<td>{order.username}</td>
												<td>{order.products.map(p => `${p.title} x${p.quantity}`).join(", ")}</td>
												<td>{order.status}</td>
												<td>
													<button className="btn btn-success btn-sm mx-1" onClick={() => updateOrderStatus(order.id, "confirmed")}>Confirm</button>
													<button className="btn btn-danger btn-sm mx-1" onClick={() => updateOrderStatus(order.id, "rejected")}>Reject</button>
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

export default OrdersManagement;

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
		<div className="p-6">
			<h2 className="text-xl font-bold mb-4">Orders Management</h2>
			<table className="w-full border">
				<thead className="bg-gray-100">
					<tr>
						<th className="p-2 border">Order ID</th>
						<th className="p-2 border">User</th>
						<th className="p-2 border">Products</th>
						<th className="p-2 border">Status</th>
						<th className="p-2 border">Actions</th>
					</tr>
				</thead>
				<tbody>
					{orders.map(order => (
						<tr key={order.id}>
							<td className="p-2 border">{order.id}</td>
							<td className="p-2 border">{order.username}</td>
							<td className="p-2 border">
								{order.products.map(p => `${p.title} x${p.quantity}`).join(", ")}
							</td>
							<td className="p-2 border">{order.status}</td>
							<td className="p-2 border">
								<button className="btn btn-success btn-sm mx-1" onClick={() => updateOrderStatus(order.id, "confirmed")}>Confirm</button>
								<button className="btn btn-danger btn-sm mx-1" onClick={() => updateOrderStatus(order.id, "rejected")}>Reject</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default OrdersManagement;

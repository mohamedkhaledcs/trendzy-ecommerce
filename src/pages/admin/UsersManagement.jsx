import { useState, useEffect } from "react";

function UsersManagement() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
		setUsers(storedUsers);
	}, []);

	const deleteUser = (username) => {
		const updatedUsers = users.filter(u => u.username !== username);
		setUsers(updatedUsers);
		localStorage.setItem("users", JSON.stringify(updatedUsers));
	};

	return (
		<div className="p-6">
			<h2 className="text-xl font-bold mb-4">Users Management</h2>
			<table className="w-full border">
				<thead className="bg-gray-100">
					<tr>
						<th className="p-2 border">Username</th>
						<th className="p-2 border">Role</th>
						<th className="p-2 border">Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user.username}>
							<td className="p-2 border">{user.username}</td>
							<td className="p-2 border">{user.role}</td>
							<td className="p-2 border">
								<button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.username)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default UsersManagement;

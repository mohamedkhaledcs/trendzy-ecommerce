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
			<main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
				<div className="app-inner">
				<div className="row justify-content-center">
					<div className="col-12 col-md-10">
						<div className="card shadow rounded p-4">
							<h2 className="fw-bold mb-4 text-center">Users Management</h2>
							<div className="table-responsive">
								<table className="table table-bordered table-hover align-middle">
									<thead className="table-light">
										<tr>
											<th>Username</th>
											<th>Role</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{users.map(user => (
											<tr key={user.username}>
												<td>{user.username}</td>
												<td>{user.role}</td>
												<td>
													<button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.username)}>Delete</button>
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

export default UsersManagement;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

// User profile page: shows details for the logged-in user or public view
function Profile() {
  // Get username from URL params
  const { username } = useParams();
  // Get current user from context
  const { user, setUser } = useAuth();

  // Check if viewing own profile
  const isOwnProfile = user && user.username === username;

  // Editable profile state
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    email: user?.email || '',
    username: user?.username || '',
    role: user?.role || '',
  });

  // Demo: Save changes to localStorage and context
  const handleSave = () => {
    setEditMode(false);
    setUser({ ...user, ...profileData });
    localStorage.setItem('user', JSON.stringify({ ...user, ...profileData }));
  };

  // Demo recent orders
  const recentOrders = [
    { id: 1, date: '2025-09-28', total: 320, status: 'Delivered' },
    { id: 2, date: '2025-09-15', total: 150, status: 'Shipped' },
    { id: 3, date: '2025-08-30', total: 210, status: 'Processing' },
  ];

  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h2 className="mb-4">User Profile</h2>
          <div className="card shadow p-4 mb-4">
            <h4 className="mb-2">Username: {username}</h4>
            {/* Show extra details if viewing own profile */}
            {isOwnProfile ? (
              <>
                {editMode ? (
                  <>
                    <div className="mb-3">
                      <label>Email:</label>
                      <input type="email" className="form-control" value={profileData.email} onChange={e => setProfileData({ ...profileData, email: e.target.value })} />
                    </div>
                    <div className="mb-3">
                      <label>Username:</label>
                      <input type="text" className="form-control" value={profileData.username} onChange={e => setProfileData({ ...profileData, username: e.target.value })} />
                    </div>
                    <div className="mb-3">
                      <label>Role:</label>
                      <input type="text" className="form-control" value={profileData.role} onChange={e => setProfileData({ ...profileData, role: e.target.value })} />
                    </div>
                    <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
                    <button className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <p><strong>Email:</strong> {profileData.email}</p>
                    <p><strong>Role:</strong> {profileData.role}</p>
                    <button className="btn btn-outline-primary" onClick={() => setEditMode(true)}>Edit Profile</button>
                  </>
                )}
              </>
            ) : (
              <p>This is a public profile view.</p>
            )}
          </div>
          {/* Show recent orders for own profile */}
          {isOwnProfile && (
            <div className="card shadow p-4 mb-4">
              <h5 className="mb-3">Your Recent Orders</h5>
              <table className="table table-bordered">
                <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total (EGP)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        </div>
      </div>
      </div>
    </main>
  );
}

export default Profile;

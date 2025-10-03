import { useState } from 'react';
import { useAuth } from '../context/useAuth';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { register } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const result = register(username, password);
    if (result.success) {
      setSuccess('User registered successfully!');
      setError('');
      setUsername('');
      setPassword('');
    } else {
      setError(result.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
  <main className="container-fluid py-5 reset-side-margins" style={{ width: '100%', minHeight: '70vh', background: 'rgba(255,255,255,0.92)', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', marginTop: '32px', padding: '32px 0' }}>
      <div className="app-inner">
      <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="col-12 col-md-7 col-lg-5">
          <div className="card shadow rounded p-4">
            <h3 className="text-center mb-4 fw-bold">Register</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default Register;

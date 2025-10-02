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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 shadow rounded bg-light w-50" onSubmit={handleRegister}>
        <h3 className="text-center mb-4">Register</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
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
  );
}

export default Register;

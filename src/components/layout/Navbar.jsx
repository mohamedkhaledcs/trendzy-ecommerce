

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { useCart } from '../../context/useCart';


// Main navigation bar for the app
function Navbar() {
  // Get user and cart context
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation links for main pages
  const navLinks = [
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  // Sticky navbar with blur effect on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('main-navbar');
      if (nav) {
        if (window.scrollY > 10) {
          nav.style.backdropFilter = 'blur(8px)';
          nav.style.background = 'rgba(34,34,34,0.85)';
        } else {
          nav.style.backdropFilter = 'none';
          nav.style.background = '#222';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      <nav id="main-navbar" style={{ background: '#222', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', padding: '0.5rem 1.5rem', transition: 'background 0.3s, backdrop-filter 0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Logo link to home */}
          <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0d6efd', textDecoration: 'none' }}>Trendzy</Link>
          {/* Main navigation links */}
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: location.pathname.startsWith(link.to) ? '#0d6efd' : '#fff',
                textDecoration: 'none',
                fontWeight: location.pathname.startsWith(link.to) ? 'bold' : 'normal',
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                background: location.pathname.startsWith(link.to) ? '#e7f3fe' : 'transparent',
                transition: 'background 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          {/* Admin link only for admin users */}
          {user?.role === 'admin' && (
            <Link
              to="/admin"
              style={{
                color: location.pathname.startsWith('/admin') ? '#ffc107' : '#fff',
                fontWeight: 'bold',
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                background: location.pathname.startsWith('/admin') ? '#fff3cd' : 'transparent',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Admin
            </Link>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Cart icon with item count */}
          <Link to="/cart" style={{ color: '#fff', position: 'relative', textDecoration: 'none' }}>
            <i className="bi bi-cart" style={{ fontSize: '1.3rem' }}></i>
            {cart.length > 0 && (
              <span style={{ position: 'absolute', top: -8, right: -12, background: '#dc3545', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: '0.8rem', fontWeight: 'bold' }}>{cart.length}</span>
            )}
          </Link>
          {/* User section: profile link and logout if logged in, else login/register */}
          {user ? (
            <>
              {/* Username is clickable and navigates to profile */}
              <span
                style={{ color: '#fff', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => navigate(`/profile/${user.username}`)}
                title="View your profile"
              >
                Hi, {user.username}
              </span>
              <button
                style={{ background: '#fff', color: '#222', border: 'none', borderRadius: '6px', padding: '6px 16px', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => { logout(); navigate('/'); }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
              <Link to="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

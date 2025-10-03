import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#fff' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div className="app-inner" style={{ width: '100%', maxWidth: 1200, padding: '16px', boxSizing: 'border-box' }}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

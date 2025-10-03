function Hero() {
  return (
    <section className="hero bg-light text-center py-5">
      <div className="app-inner">
        <h1 className="display-4 fw-bold">Welcome to Trendzy</h1>
        <p className="lead mb-4">
          Discover our amazing products with the best prices and styles.
        </p>
        <a href="/products" className="btn btn-primary btn-lg">
          Shop Now
        </a>
      </div>
    </section>
  );
}

export default Hero;

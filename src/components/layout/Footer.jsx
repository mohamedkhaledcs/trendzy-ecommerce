function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-1">&copy; {new Date().getFullYear()} Trendzy. All Rights Reserved.</p>
      <p className="mb-0">
        Built with ❤️ by <strong>mohamedkhaledcs</strong>
      </p>
      <div className="mt-2">
        <a href="https://www.linkedin.com/in/mohamed-khaled-a314792ab/" target="_blank" rel="noreferrer" className="text-white mx-2">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/mohamedkhaledcs" target="_blank" rel="noreferrer" className="text-white mx-2">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://codeforces.com/profile/mokdailyz" target="_blank" rel="noreferrer" className="text-white mx-2">
          <i className="bi bi-code-slash"></i>
        </a>
        <a href="https://www.instagram.com/mohamedkhaledcs/" target="_blank" rel="noreferrer" className="text-white mx-2">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

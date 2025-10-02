function Projects() {
  return (
    <section className="projects py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Some of My Work</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img src="/images/project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Examination System</h5>
                <p className="card-text">Built with ASP.NET Core MVC + SQL Server.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img src="/images/project2.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Restaurant App</h5>
                <p className="card-text">Full-Stack app with EF Core + React frontend.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <img src="/images/project3.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">Modern responsive portfolio using React + Bootstrap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

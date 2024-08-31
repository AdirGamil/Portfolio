const projects = [
    {
      name: "StayFlex (Airbnb clone)",
      description: "This is a sample project description...",
      techStack: "HTML, JavaScript, SASS, React",
      liveLink: "chain",
      codeLink: "github",
      imgSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // Add more projects here
  ];
  
  export function AniProjects() {
    return (
      <section className="projects-section">
        <div className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <h3 className="projects-subtitle">Things I’ve built so far</h3>
        </div>
  
        <div className="projects-list">
          <ul className="projects-items">
            {projects.map((project, index) => (
              <li className="projects-item" key={index}>
                <img src={project.imgSrc} alt={`${project.name} teaser`} className="projects-image" />
                <h2 className="project-name">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-tech-stack"><span>Tech Stack:</span> {project.techStack}</p>
                <div className="project-links">
                  <div className="project-link">
                    <img src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725106045/akar-icons_link-chain_s08zoe.svg" alt="Live Preview Icon" className="project-link-icon" />
                    <a href={project.liveLink} className="project-link-text">Live Preview</a>
                  </div>
                  <div className="project-link">
                    <img src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725106045/akar-icons_github-fill_nc9cci.png" alt="GitHub Icon" className="project-link-icon" />
                    <a href={project.codeLink} className="project-link-text">View Code</a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  
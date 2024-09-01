const projects = [
  {
    name: 'StayFlex (Airbnb clone)',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://stayflex.onrender.com/',
    codeLink: 'https://github.com/AdirGamil/StayFlex-frontend',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725198000/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_krjdij.png',
  },
  {
    name: 'StayFlex (Airbnb clone)',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://stayflex.onrender.com/',
    codeLink: 'https://github.com/AdirGamil/StayFlex-frontend',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725198000/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_krjdij.png',
  },
  {
    name: 'StayFlex (Airbnb clone)',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://stayflex.onrender.com/',
    codeLink: 'https://github.com/AdirGamil/StayFlex-frontend',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725198000/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_krjdij.png',
  },
  {
    name: 'StayFlex (Airbnb clone)',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://stayflex.onrender.com/',
    codeLink: 'https://github.com/AdirGamil/StayFlex-frontend',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725198000/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_krjdij.png',
  },
  
]

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
              <img
                src={project.imgSrc}
                alt={`${project.name} teaser`}
                className="projects-image"
              />
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-tech-stack">
                <span>Tech Stack:</span> {project.techStack}
              </p>
              <div className="project-links">
                <div className="project-link">
                  <img
                    src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725106045/akar-icons_link-chain_s08zoe.svg"
                    alt="Live Preview Icon"
                    className="project-link-icon"
                  />
                  <a href={project.liveLink} className="project-link-text">
                    Live Preview
                  </a>
                </div>
                <div className="project-link">
                  <img
                    src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725106045/akar-icons_github-fill_nc9cci.png"
                    alt="GitHub Icon"
                    className="project-link-icon"
                  />
                  <a href={project.codeLink} className="project-link-text">
                    View Code
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

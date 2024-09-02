const projects = [
  {
    name: 'StayFlex (Airbnb clone)',
    description:
      'StayFlex is powered by a robust tech stack, including React, Redux, SASS, Node.js, Express, WebSockets, and MongoDB.',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://stayflex.onrender.com/',
    codeLink: 'https://github.com/AdirGamil/StayFlex-frontend',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725198000/%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_krjdij.png',
  },
  {
    name: 'AdirGamil Portfolio',
    description:
      'Adir Gamil portfolio showcasing responsive design, dynamic hero section, tech stack, and featured projects.',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://agport.netlify.app/',
    codeLink: 'https://github.com/AdirGamil/Portfolio',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725205341/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2024-09-01_184152_zztvia.png',
  },
  {
    name: 'AniWeather',
    description:
      'React app fetching real-time weather data via OpenWeatherMap API with dynamic icons and responsive design.',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://your-aniweather-live-link.com/',
    codeLink: 'https://github.com/AdirGamil/AniWeather',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725275811/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2024-09-02_141056_ngyckb.png',
  },

  {
    name: 'React-SASS-Starter',
    description:
      'A boilerplate project for building fast, responsive React apps with Vite and SASS, ready for customization.',
    techStack: 'HTML, JavaScript, SASS, React',
    liveLink: 'https://agport.netlify.app/',
    codeLink: 'https://github.com/AdirGamil/React-SASS-Starter',
    imgSrc:
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1725278379/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2024-09-02_145922_moquxk.png',
  },
]

export function AniProjects() {
  return (
    <section className="projects-section" id="projects">
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

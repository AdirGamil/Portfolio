import { HamburgerMenu } from './HamburgerMenu'

export function AniHeader() {
  return (
    <header className="main-header">
      <a href="#hero" className="header-logo">
        <img
          // src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725204235/ACodeLogo_g2co7f.jpg"
          src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725204307/b2fa1aa0-9a51-4bf3-ae08-dd842dad80b6_p7lwbj.png"
          alt="Adir Logo"
          className="logo-img"
        />
      </a>
      <HamburgerMenu />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#hero" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#tech" className="nav-link">Tech Stack</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="social-header-icon">
        <a href="https://github.com/AdirGamil" className="header-icon">
          <img
            src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1724941066/Vector_ywcalo.svg"
            alt="Github icon"
            className="github-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/adirg/" className="header-icon">
          <img
            src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1724941066/entypo-social_linkedin-with-circle_p9yrvm.svg"
            alt="Linkedin"
            className="linkedin-icon"
          />
        </a>
      </div>
    </header>
  )
}

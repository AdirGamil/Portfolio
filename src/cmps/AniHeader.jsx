import { NavLink } from 'react-router-dom'
import { HamburgerMenu } from './HamburgerMenu'

export function AniHeader() {
  return (
    <header className="main-header">
      <NavLink to="/" className="header-logo">
        <img
          src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1724940826/logo_1_i7ziuj.png"
          alt="Adir Logo"
          className="logo-img"
        />
      </NavLink>
      <HamburgerMenu />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/groups"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'inactive-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/releases"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'inactive-link'
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/mangas"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'inactive-link'
              }
            >
              Tech Stack
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/animes"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'inactive-link'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/animes"
              className={({ isActive }) =>
                isActive ? 'active-link' : 'inactive-link'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="social-header-icon">
        <NavLink to="https://github.com/AdirGamil" className="header-icon">
          <img
            src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1724941066/Vector_ywcalo.svg"
            alt="Github icon"
            className="github-icon"
          />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/adirg/"
          className="header-icon"
        >
          <img
            src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1724941066/entypo-social_linkedin-with-circle_p9yrvm.svg"
            alt="Linkedin"
            className="linkein-icon"
          />
        </NavLink>
      </div>
    </header>
  )
}

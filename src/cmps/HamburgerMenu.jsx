import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <nav className="user-menu" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="user-menu-button"
        aria-expanded={isOpen}
      >
        <img
          src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1723724064/ydzzdpxahv4o0o1svvxk.svg"
          alt="Menu Icon"
        />
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/about" className="dropdown-item">
          About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="dropdown-item">
          Tech Stack
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="dropdown-item">
          Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="dropdown-item">
          Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

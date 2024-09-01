import { useState, useEffect, useRef } from 'react'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  function closeMenu() {
    setIsOpen(false)
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
          <a href="#about" className="nav-link dropdown-item" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#tech" className="nav-link dropdown-item" onClick={closeMenu}>
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link dropdown-item" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link dropdown-item" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

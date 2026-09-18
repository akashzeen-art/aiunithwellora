import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../data/categories'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <header className={`navbox${isHome ? '' : ' gradient_bg'}`}>
        <nav className="navbar">
          <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
            <img className="logo" src={logo} alt="Wellora" />
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-controls="main-menu"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </header>

      <div className={`menu-panel${open ? ' is-open' : ''}`} id="main-menu">
        <div className="menu-panel-inner">
          <div className={`navbox menu-panel-bar${isHome ? '' : ' gradient_bg'}`}>
            <nav className="navbar">
              <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
                <img className="logo" src={logo} alt="Wellora" />
              </Link>
              <button
                className="navbar-toggler custom-toggler"
                type="button"
                aria-label="Close navigation"
                aria-expanded={open}
                onClick={() => setOpen(false)}
              >
                <span className="navbar-toggler-icon" />
              </button>
            </nav>
          </div>
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="menu_button"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href || '#'}
                className="menu_button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                }}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </>
  )
}

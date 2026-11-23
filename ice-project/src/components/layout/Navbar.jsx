
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Menu,
  X,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react'
import './Navbar.css'
import robotLogo from '../../assets/robot-footer.png'

const navigation = [
  { name: 'Home', path: '/', end: true },
  { name: 'About Us', path: '/about' },
  { name: 'Programmes', path: '/programmes' },
  { name: 'Cohorts & Impact', path: '/impact' },
  { name: 'Learning', path: '/learning' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Enterprise Development', path: '/enterprise' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="ice-navbar">
      <nav className="ice-navbar-inner" aria-label="Main navigation">

        {/* Brand */}
    <Link
  to="/"
  className="ice-navbar-brand"
  onClick={closeMenu}
  aria-label="ICE Academy home"
>
  <span className="ice-navbar-brand-icon">
  <img src={robotLogo} alt="ICE Academy logo" />
</span>

  <span className="ice-navbar-brand-name">
    <span className="ice-brand-top">
      <strong>Industrial</strong>
    </span>

    <span className="ice-brand-middle">
      Computing Engineering
    </span>

    <span className="ice-brand-bottom">
      <strong>ACADEMY</strong>
    </span>
    <span className="ice-brand-powered">
      Powered by <strong>NextGen Digi</strong>
</span>
  </span>
</Link>

        {/* Desktop navigation */}
        <div className="ice-navbar-links">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `ice-navbar-link ${isActive ? 'active' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Learner portal */}
        <Link to="/portal" className="ice-navbar-portal">
          <span>Learner Portal</span>
          <ArrowUpRight size={15} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`ice-navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="ice-mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="ice-mobile-navigation"
        className={`ice-mobile-navigation ${menuOpen ? 'visible' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="ice-mobile-navigation-inner">
          <span className="ice-mobile-label">MENU</span>

          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                `ice-mobile-link ${isActive ? 'active' : ''}`
              }
            >
              {item.name}
              <ArrowUpRight size={15} />
            </NavLink>
          ))}

          <Link
            to="/portal"
            onClick={closeMenu}
            className="ice-mobile-portal"
          >
            <GraduationCap size={18} />
            Learner Portal
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}
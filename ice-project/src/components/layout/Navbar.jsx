
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programmes', path: '/programmes' },
  { name: 'Cohorts & Impact', path: '/impact' },
  { name: 'Learning', path: '/learning' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Enterprise', path: '/enterprise' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-red-600">
          ICE <span className="text-gray-900">Academy</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/portal"
          className="hidden lg:block bg-red-600 text-white px-5 py-2.5 rounded-md hover:bg-red-700 transition"
        >
          Learner Portal
        </Link>

        <button
          className="lg:hidden text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-red-600"
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/portal"
            onClick={() => setMenuOpen(false)}
            className="block text-red-600 font-semibold"
          >
            Learner Portal
          </Link>
        </div>
      )}
    </header>
  )
}

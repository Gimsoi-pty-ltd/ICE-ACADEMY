
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import './Footer.css'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About ICE Academy', path: '/about' },
  { label: 'Programmes', path: '/programmes' },
  { label: 'Learning', path: '/learning' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Cohorts & Impact', path: '/impact' },
]

export default function Footer() {
  return (
    <footer className="ice-footer">
      <div className="ice-footer-main">
        <div className="ice-footer-container">
          <div className="ice-footer-grid">

            {/* Brand */}
            <div className="ice-footer-brand">
              <Link to="/" className="ice-footer-logo">
                <span className="ice-footer-logo-mark">
                  <GraduationCap size={25} strokeWidth={1.8} />
                </span>

                <span className="ice-footer-logo-text">
                  ICE <strong>ACADEMY</strong>
                </span>
              </Link>

              <p className="ice-footer-slogan">
                Learn. Develop. Innovate.
              </p>

              <p className="ice-footer-description">
                Building knowledge, developing skills and creating
                opportunities for a future driven by innovation.
              </p>

              <div className="ice-footer-location">
                <MapPin size={15} />
                <span>South Africa</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="ice-footer-navigation">
              <h3>Explore</h3>

              <span className="ice-footer-heading-line" />

              <ul>
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      {link.label}
                      <ArrowUpRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="ice-footer-connect">
              <span className="ice-footer-overline">
                LET'S CONNECT
              </span>

              <h3>
                Have a vision for your future?
              </h3>

              <p>
                Connect with ICE Academy and explore opportunities
                to learn, develop and make a difference.
              </p>

              <Link to="/contact" className="ice-footer-contact-link">
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="ice-footer-bottom">
        <div className="ice-footer-container ice-footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} ICE Academy.
            <span> All rights reserved.</span>
          </p>

          <p className="ice-footer-bottom-slogan">
            LEARN <span>•</span> DEVELOP <span>•</span> INNOVATE
          </p>
        </div>
      </div>
    </footer>
  )
}
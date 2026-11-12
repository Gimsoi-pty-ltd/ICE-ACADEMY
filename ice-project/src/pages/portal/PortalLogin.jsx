
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'

import './PortalLogin.css'

export default function PortalLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setMessage('Please enter your email address and password.')
      return
    }

    setMessage(
      'Your login form is working! Account authentication will be connected when the backend is ready.'
    )
  }

  return (
    <main className="portal-login">

      {/* Left branding panel */}
      <section className="portal-login-brand">
        <div className="portal-brand-content">

          <div className="portal-brand-heading">
            <div className="portal-brand-icon">
              <GraduationCap size={36} />
            </div>

            <div>
              <h2>ICE Academy</h2>
              <p>Learner Portal</p>
            </div>
          </div>

          <div className="portal-brand-message">
            <span className="portal-eyebrow">
              WELCOME TO ICE ACADEMY
            </span>

            <h1>
              Your learning journey starts here.
            </h1>

            <p>
              Access your learning space, explore courses and
              keep track of your development with ICE Academy.
            </p>
          </div>

          <div className="portal-brand-footer">
            <p>
              Learn. Develop. Innovate. Build Your Future.
            </p>
          </div>

        </div>
      </section>

      {/* Login section */}
      <section className="portal-login-main">
        <div className="portal-login-container">

          <Link to="/" className="portal-back-link">
            <ArrowLeft size={18} />
            Back to website
          </Link>

          {/* Mobile branding */}
          <div className="portal-mobile-brand">
            <div className="portal-brand-icon">
              <GraduationCap size={30} />
            </div>

            <div>
              <h2>ICE Academy</h2>
              <p>Learner Portal</p>
            </div>
          </div>

          <div className="portal-login-heading">
            <span className="portal-eyebrow">
              LEARNER PORTAL
            </span>

            <h2>Welcome back</h2>

            <p>
              Sign in to access your learning dashboard.
            </p>
          </div>

          {/* Login form */}
          <form
            onSubmit={handleSubmit}
            className="portal-login-form"
          >

            <div className="portal-form-group">
              <label htmlFor="email">
                Email address
              </label>

              <div className="portal-input-wrapper">
                <Mail size={19} />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setMessage('')
                  }}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="portal-form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="portal-input-wrapper">
                <Lock size={19} />

                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                    setMessage('')
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="portal-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showPassword
                    ? <EyeOff size={19} />
                    : <Eye size={19} />
                  }
                </button>
              </div>
            </div>

            {message && (
              <div
                role="status"
                className="portal-login-message"
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              className="portal-submit-button"
            >
              <span>Sign in</span>
              <ArrowRight size={19} />
            </button>

          </form>

          {/* Assistance */}
          <div className="portal-login-assistance">
            <p>
              Need assistance accessing the portal?
            </p>

            <Link to="/contact">
              Contact ICE Academy
            </Link>
          </div>

          <div className="portal-login-copyright">
            ICE Academy · Learner Portal Prototype
          </div>

        </div>
      </section>

    </main>
  )
}

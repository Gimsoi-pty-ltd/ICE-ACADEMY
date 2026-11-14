import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Eye, EyeOff, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react'
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
    setMessage('Your login form is working! Account authentication will be connected when the backend is ready.')
  }

  return (
    <main className="portal-login-page">
      
      {/* Left Side - Branding */}
      <section className="portal-left">
        <div className="portal-brand">
          <div className="portal-brand-icon">
            <GraduationCap size={32} />
          </div>
          <div>
            <h2>ICE Academy</h2>
            <p>Learner Portal</p>
          </div>
        </div>

        <div className="portal-hero-content">
          <span className="portal-eyebrow">WELCOME TO ICE ACADEMY</span>
          <h1>Your learning journey starts here.</h1>
          <p>
            Access your learning space, explore courses and keep track of
            your development with ICE Academy.
          </p>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#c6c8d1', margin: 0 }}>Learn. Develop. Innovate. Build Your Future.</p>
        </div>
      </section>

      {/* Right Side - Login Form */}
      <section className="portal-right">
        <div className="portal-form-wrapper">
          <Link to="/" className="portal-back-link">
            <ArrowLeft size={18} /> Back to website
          </Link>

          <div className="portal-form-header">
            <span className="portal-eyebrow">LEARNER PORTAL</span>
            <h2>Welcome back</h2>
            <p>Sign in to access your learning dashboard.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="portal-form-group">
              <label htmlFor="email">Email address</label>
              <div className="portal-input-wrapper">
                <Mail size={18} />
                <input
                  id="email"
                  type="email"
                  className="portal-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setMessage(''); }}
                  required
                />
              </div>
            </div>

            <div className="portal-form-group">
              <label htmlFor="password">Password</label>
              <div className="portal-input-wrapper">
                <Lock size={18} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="portal-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setMessage(''); }}
                  required
                />
                <button
                  type="button"
                  className="portal-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {message && (
              <div className="portal-alert">
                {message}
              </div>
            )}

            <button type="submit" className="portal-submit-btn">
              Sign in <ArrowRight size={18} />
            </button>
          </form>

          <div className="portal-footer-text">
            Need assistance accessing the portal? <Link to="/contact">Contact ICE Academy</Link>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#6b7280' }}>
            ICE Academy · Learner Portal Prototype
          </div>
        </div>
      </section>

    </main>
  )
}

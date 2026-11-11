
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
    <main className="min-h-[85vh] grid lg:grid-cols-2 bg-white">
      {/* Left side */}
      <section className="hidden lg:flex bg-red-700 text-white items-center justify-center px-12 py-20">
        <div className="max-w-lg">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-white text-red-700 p-3 rounded-lg">
              <GraduationCap size={36} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">ICE Academy</h2>
              <p className="text-red-100 text-sm">Learner Portal</p>
            </div>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Your learning journey starts here.
          </h1>

          <p className="text-red-100 text-lg leading-8 mt-6">
            Access your learning space, explore courses and keep track of
            your development with ICE Academy.
          </p>

          <div className="border-t border-red-500 mt-12 pt-8">
            <p className="text-red-100">
              Learn. Develop. Innovate. Build Your Future.
            </p>
          </div>
        </div>
      </section>

      {/* Right side */}
      <section className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 mb-12"
          >
            <ArrowLeft size={18} />
            Back to website
          </Link>

          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="bg-red-600 text-white p-3 rounded-lg">
              <GraduationCap size={30} />
            </div>
            <div>
              <h2 className="text-xl font-bold">ICE Academy</h2>
              <p className="text-gray-500 text-sm">Learner Portal</p>
            </div>
          </div>

          <p className="text-red-600 font-semibold text-sm">
            LEARNER PORTAL
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Welcome back
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Sign in to access your learning dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setMessage('')
                  }}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                    setMessage('')
                  }}
                  placeholder="Enter your password"
                  required
                  className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {message && (
              <div
                role="status"
                className="bg-blue-50 border border-blue-200 text-blue-800 rounded-md p-3 text-sm leading-6"
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition"
            >
              Sign in <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-10">
            Need assistance accessing the portal?
          </p>

          <p className="text-center mt-2">
            <Link
              to="/contact"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Contact ICE Academy
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-12">
            ICE Academy · Learner Portal Prototype
          </p>
        </div>
      </section>
    </main>
  )
}

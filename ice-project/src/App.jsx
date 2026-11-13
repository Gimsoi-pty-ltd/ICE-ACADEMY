
import { Routes, Route, useLocation } from 'react-router-dom'

// Layout
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

// Public pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Programmes from './pages/Programmes.jsx'
import Impact from './pages/Impact.jsx'
import Learning from './pages/Learning.jsx'
import Partnerships from './pages/Partnerships.jsx'
import Enterprise from './pages/Enterprise.jsx'
import Contact from './pages/Contact.jsx'

// Portal pages
import PortalLogin from './pages/portal/PortalLogin.jsx'
import LearnerDashboard from './pages/portal/LearnerDashboard.jsx'
import Courses from './pages/portal/Courses.jsx'
import Certificates from './pages/portal/Certificates.jsx'
import CoursePlayer from './pages/portal/CoursePlayer.jsx'

// Not found page
import './App.css'

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <span>404</span>
        <h1>Page not found</h1>
        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>
        <a href="/" className="not-found-button">
          Back to homepage
        </a>
      </div>
    </main>
  )
}

export default function App() {
  const location = useLocation()

  const isPortal = location.pathname.startsWith('/portal')

  return (
    <div className="app">
      {!isPortal && <Navbar />}

      <Routes>
        {/* Public website */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/contact" element={<Contact />} />

        {/* Learner portal */}
        <Route path="/portal" element={<PortalLogin />} />
        <Route path="/portal/dashboard" element={<LearnerDashboard />} />
        <Route path="/portal/courses" element={<Courses />} />
        <Route path="/portal/courses/:courseId" element={<CoursePlayer />} />
        <Route path="/portal/certificates" element={<Certificates />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isPortal && <Footer />}
    </div>
  )
}

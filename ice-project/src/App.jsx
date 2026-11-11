
import { Routes, Route } from 'react-router-dom'
import Courses from './pages/portal/Courses.jsx'
import LearnerDashboard from './pages/portal/LearnerDashboard.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Certificates from './pages/portal/Certificates.jsx'
import CoursePlayer from './pages/portal/CoursePlayer.jsx'
import Footer from './components/layout/Footer.jsx'
import PortalLogin from './pages/portal/PortalLogin.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Programmes from './pages/Programmes.jsx'
import Impact from './pages/Impact.jsx'
import Learning from './pages/Learning.jsx'
import Partnerships from './pages/Partnerships.jsx'
import Enterprise from './pages/Enterprise.jsx'
import Contact from './pages/Contact.jsx'

function PlaceholderPage({ title }) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-red-600 font-semibold">ICE Academy</p>
        <h1 className="text-4xl font-bold mt-3">{title}</h1>
        <p className="text-gray-600 mt-4">
          This page is currently under development.
        </p>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/portal" element={<PortalLogin />} />
        <Route path="/portal/dashboard"element={<LearnerDashboard />}/>
        <Route path="/portal/courses" element={<Courses />} />
        <Route path="/portal/certificates"element={<Certificates />}/>
        <Route path="/portal/courses/:courseId"element={<CoursePlayer />}/>
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>

      <Footer />
    </>
  )
}

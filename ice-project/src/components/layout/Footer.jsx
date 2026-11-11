
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-3">
            ICE Academy
          </h2>
          <p className="text-gray-400 leading-7">
            Learn. Develop. Innovate. Build Your Future.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/about">About Us</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/learning">Learning</Link>
            <Link to="/partnerships">Partnerships</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Explore ICE Academy</h3>
          <p className="text-gray-400 leading-7">
            Discover learning opportunities, develop your skills and explore
            innovation.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 text-red-400 hover:text-red-300"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} ICE Academy · Prototype
      </div>
    </footer>
  )
}

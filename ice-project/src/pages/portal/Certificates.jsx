
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  Search,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  Eye,
  X,
  ArrowLeft,
} from 'lucide-react'

const certificateData = [
  {
    id: 1,
    title: 'Introduction to Digital Skills',
    category: 'Digital Skills',
    issuedDate: '15 October 2026',
    certificateNumber: 'ICE-DEMO-001',
    status: 'Completed',
    description:
      'A sample certificate recognising successful completion of the Introduction to Digital Skills programme.',
  },
  {
    id: 2,
    title: 'Introduction to Innovation',
    category: 'Innovation',
    issuedDate: '20 October 2026',
    certificateNumber: 'ICE-DEMO-002',
    status: 'Completed',
    description:
      'A sample certificate recognising successful completion of the Introduction to Innovation programme.',
  },
]

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const filteredCertificates = certificateData.filter((certificate) =>
    certificate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    certificate.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Link
              to="/portal/dashboard"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 mb-3"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              My Certificates
            </h1>

            <p className="text-gray-500 mt-1">
              View your learning achievements and completed programmes.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-3 rounded-lg">
            <Award size={22} />
            <span className="font-semibold">
              {certificateData.length} Sample Certificates
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-8">
        {/* Information notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex gap-3">
          <ShieldCheck className="text-blue-600 shrink-0" size={22} />

          <div>
            <h2 className="font-semibold text-blue-900">
              Demo certificate information
            </h2>
            <p className="text-sm text-blue-800 mt-1">
              These are sample certificates for the frontend prototype.
              Official certificates will require verified learner records
              and backend integration.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Sample certificates</p>
                <h2 className="text-3xl font-bold mt-2">
                  {certificateData.length}
                </h2>
              </div>

              <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                <Award size={25} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Completed programmes</p>
                <h2 className="text-3xl font-bold mt-2">
                  {certificateData.length}
                </h2>
              </div>

              <div className="bg-green-50 text-green-600 p-3 rounded-lg">
                <GraduationCap size={25} />
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={19}
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search certificates by programme or category..."
              className="w-full border border-gray-200 rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900">
            Your achievements
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Sample certificate records for demonstration.
          </p>
        </div>

        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCertificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="bg-gradient-to-r from-red-700 to-red-500 p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-red-100">
                        ICE ACADEMY
                      </p>
                      <h3 className="text-xl font-bold mt-2">
                        Certificate of Completion
                      </h3>
                    </div>

                    <Award size={35} />
                  </div>

                  <p className="text-sm text-red-100 mt-4">
                    SAMPLE CERTIFICATE
                  </p>
                </div>

                <div className="p-6">
                  <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {certificate.status}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900">
                    {certificate.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    {certificate.category}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-5">
                    <CalendarDays size={17} />
                    Sample issue date: {certificate.issuedDate}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                    <BookOpen size={17} />
                    {certificate.certificateNumber}
                  </div>

                  <button
                    onClick={() => setSelectedCertificate(certificate)}
                    className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
                  >
                    <Eye size={18} />
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
            <Award size={45} className="mx-auto text-gray-300" />

            <h3 className="text-lg font-semibold mt-4">
              No certificates found
            </h3>

            <p className="text-gray-500 mt-2">
              Try searching with a different programme name.
            </p>
          </div>
        )}

        {/* Other portal links */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/portal/courses"
            className="text-red-600 font-semibold hover:underline"
          >
            Browse My Courses →
          </Link>

          <Link
            to="/portal/dashboard"
            className="text-red-600 font-semibold hover:underline"
          >
            Return to Dashboard →
          </Link>
        </div>
      </main>

      {/* Certificate Preview Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="font-bold text-lg">
                Certificate Preview
              </h2>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-500 hover:text-red-600"
                aria-label="Close certificate preview"
              >
                <X size={23} />
              </button>
            </div>

            <div className="p-6 sm:p-10">
              <div className="border-4 border-double border-red-600 p-6 sm:p-10 text-center">
                <Award size={48} className="mx-auto text-red-600" />

                <p className="text-red-700 font-bold tracking-widest mt-4">
                  ICE ACADEMY
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold mt-6">
                  Certificate of Completion
                </h3>

                <p className="text-gray-500 mt-6">
                  This sample certificate recognises the completion of
                </p>

                <h4 className="text-xl font-bold text-red-700 mt-3">
                  {selectedCertificate.title}
                </h4>

                <div className="mt-8 border-t pt-5">
                  <p className="text-sm text-gray-500">
                    Sample certificate reference
                  </p>

                  <p className="font-semibold mt-1">
                    {selectedCertificate.certificateNumber}
                  </p>

                  <p className="text-sm text-gray-500 mt-4">
                    Sample issue date: {selectedCertificate.issuedDate}
                  </p>
                </div>

                <div className="mt-6 bg-yellow-50 text-yellow-800 text-xs p-3 rounded">
                  DEMONSTRATION ONLY — NOT AN OFFICIAL CERTIFICATE
                </div>
              </div>
            </div>

            <div className="p-5 border-t flex justify-end">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

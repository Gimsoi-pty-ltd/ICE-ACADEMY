
import { useEffect, useState } from 'react'
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
  FileBadge,
  Sparkles,
} from 'lucide-react'
import './Certificates.css'

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
    `${certificate.title} ${certificate.category} ${certificate.certificateNumber}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    if (!selectedCertificate) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCertificate(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedCertificate])

  return (
    <div className="certificates-page">
      <header className="certificates-header">
        <div className="certificates-header-inner">
          <div className="certificates-heading">
            <Link to="/portal/dashboard" className="certificates-back-link">
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>

            <div className="certificates-title-row">
              <div className="certificates-title-icon">
                <Award size={23} />
              </div>
              <div>
                <span className="certificates-eyebrow">LEARNER PORTAL</span>
                <h1>My Certificates</h1>
                <p>View and celebrate your learning achievements.</p>
              </div>
            </div>
          </div>

          <div className="certificates-header-count">
            <Award size={20} />
            <div>
              <strong>{certificateData.length}</strong>
              <span>Sample certificates</span>
            </div>
          </div>
        </div>
      </header>

      <main className="certificates-main">
        <section className="certificates-notice">
          <div className="certificates-notice-icon">
            <ShieldCheck size={21} />
          </div>
          <div>
            <h2>Demonstration certificate records</h2>
            <p>
              These certificates are sample records for the frontend
              prototype. Official certificates will require verified learner
              records and backend integration.
            </p>
          </div>
        </section>

        <section className="certificates-stats">
          <article className="certificate-stat-card">
            <div>
              <span>Sample certificates</span>
              <strong>{certificateData.length}</strong>
              <small>Available to preview</small>
            </div>
            <div className="certificate-stat-icon red">
              <Award size={23} />
            </div>
          </article>

          <article className="certificate-stat-card">
            <div>
              <span>Completed programmes</span>
              <strong>
                {certificateData.filter((item) => item.status === 'Completed').length}
              </strong>
              <small>Sample completion records</small>
            </div>
            <div className="certificate-stat-icon green">
              <GraduationCap size={23} />
            </div>
          </article>
        </section>

        <section className="certificates-content">
          <div className="certificates-section-heading">
            <div>
              <span className="certificates-eyebrow">YOUR PROGRESS</span>
              <h2>Your achievements</h2>
              <p>Explore your completed programme certificates.</p>
            </div>
            <span className="certificates-results-count">
              {filteredCertificates.length} results
            </span>
          </div>

          <div className="certificates-search">
            <Search size={19} />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by programme, category or reference..."
              aria-label="Search certificates"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          {filteredCertificates.length > 0 ? (
            <div className="certificates-grid">
              {filteredCertificates.map((certificate) => (
                <article className="certificate-card" key={certificate.id}>
                  <div className="certificate-card-banner">
                    <div className="certificate-banner-top">
                      <div className="certificate-brand">
                        <div className="certificate-brand-icon">
                          <GraduationCap size={20} />
                        </div>
                        <span>ICE ACADEMY</span>
                      </div>
                      <Award size={29} />
                    </div>

                    <div className="certificate-banner-bottom">
                      <span>LEARNING ACHIEVEMENT</span>
                      <h3>Certificate of Completion</h3>
                    </div>

                    <span className="certificate-watermark">ICE</span>
                  </div>

                  <div className="certificate-card-body">
                    <div className="certificate-card-meta">
                      <span className="certificate-status">
                        <span />
                        {certificate.status}
                      </span>
                      <span className="certificate-sample-label">SAMPLE</span>
                    </div>

                    <h3>{certificate.title}</h3>
                    <p className="certificate-category">{certificate.category}</p>

                    <div className="certificate-details">
                      <div>
                        <CalendarDays size={16} />
                        <span>{certificate.issuedDate}</span>
                      </div>
                      <div>
                        <FileBadge size={16} />
                        <span>{certificate.certificateNumber}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="certificate-view-button"
                      onClick={() => setSelectedCertificate(certificate)}
                    >
                      <Eye size={17} />
                      View Certificate
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="certificates-empty">
              <div className="certificates-empty-icon">
                <Search size={27} />
              </div>
              <h3>No certificates found</h3>
              <p>
                We couldn't find a certificate matching "{searchTerm}".
                Try another search term.
              </p>
              <button type="button" onClick={() => setSearchTerm('')}>
                Clear Search
              </button>
            </div>
          )}
        </section>

        <section className="certificates-bottom-links">
          <div>
            <Sparkles size={19} />
            <span>Keep building your skills and achievements.</span>
          </div>
          <div className="certificates-navigation-links">
            <Link to="/portal/courses">
              <BookOpen size={16} />
              Browse My Courses
            </Link>
            <Link to="/portal/dashboard">
              <ArrowLeft size={16} />
              Return to Dashboard
            </Link>
          </div>
        </section>
      </main>

      {selectedCertificate && (
        <div
          className="certificate-modal-backdrop"
          onClick={() => setSelectedCertificate(null)}
        >
          <section
            className="certificate-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div>
                <span className="certificates-eyebrow">ACHIEVEMENT PREVIEW</span>
                <h2 id="certificate-modal-title">Certificate Preview</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
              >
                <X size={21} />
              </button>
            </div>

            <div className="certificate-modal-content">
              <div className="certificate-document">
                <div className="certificate-document-inner">
                  <div className="certificate-document-logo">
                    <Award size={38} />
                    <span>ICE ACADEMY</span>
                  </div>

                  <span className="certificate-document-label">
                    RECOGNITION OF ACHIEVEMENT
                  </span>

                  <h3>Certificate of Completion</h3>

                  <p className="certificate-document-description">
                    This sample certificate recognises the successful
                    completion of
                  </p>

                  <h4>{selectedCertificate.title}</h4>
                  <p className="certificate-document-category">
                    {selectedCertificate.category}
                  </p>

                  <div className="certificate-document-footer">
                    <div>
                      <span>Certificate reference</span>
                      <strong>{selectedCertificate.certificateNumber}</strong>
                    </div>
                    <div>
                      <span>Sample issue date</span>
                      <strong>{selectedCertificate.issuedDate}</strong>
                    </div>
                  </div>

                  <div className="certificate-demo-warning">
                    DEMONSTRATION ONLY — NOT AN OFFICIAL CERTIFICATE
                  </div>
                </div>
              </div>
            </div>

            <div className="certificate-modal-footer">
              <span>Sample certificate for frontend demonstration</span>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
              >
                Close Preview
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

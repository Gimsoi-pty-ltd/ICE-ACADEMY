
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Handshake,
  Building2,
  Users,
  Lightbulb,
  ArrowRight,
  X,
} from 'lucide-react'
import './Partnerships.css'

const opportunities = [
  {
    icon: Building2,
    title: 'Organisational partnerships',
    description:
      'Explore opportunities for organisations to connect with the ICE Academy vision.',
    details:
      'ICE Academy welcomes enquiries from organisations interested in building meaningful partnerships, supporting development and creating opportunities for collaboration.',
  },
  {
    icon: Users,
    title: 'Learning collaboration',
    description:
      'Explore ways to support learning, skills development and knowledge sharing.',
    details:
      'Collaborate with ICE Academy to explore learning initiatives, knowledge sharing and opportunities that support skills development.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation collaboration',
    description:
      'Connect around ideas, innovation and opportunities to address real-world challenges.',
    details:
      'Explore opportunities to exchange ideas, encourage innovation and collaborate on approaches to real-world challenges.',
  },
]

export default function Partnerships() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null)

  return (
    <main className="partnerships-page">

      {/* Hero Section */}
      <section className="partnerships-hero">
        <div className="partnerships-container">
          <p className="partnerships-eyebrow">
            PARTNER WITH US
          </p>

          <h1>
            Building opportunities through collaboration.
          </h1>

          <p className="partnerships-hero-description">
            ICE Academy welcomes enquiries from organisations interested in
            learning, development and innovation.
          </p>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="partnerships-section">
        <div className="partnerships-container">

          <div className="partnerships-intro">
            <p className="partnerships-label">
              WORK WITH ICE ACADEMY
            </p>

            <h2>Explore collaboration</h2>

            <p>
              These are areas for potential collaboration. Specific partnership
              arrangements will depend on discussion and approval.
            </p>
          </div>

          <div className="partnerships-grid">
            {opportunities.map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedOpportunity(item)}
                  className="partnership-card"
                >
                  <Icon size={32} className="partnership-card-icon" />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="partnership-card-link">
                    Explore more
                    <ArrowRight size={18} />
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Information Popup */}
      {selectedOpportunity && (
        <div
          className="partnership-modal-overlay"
          onClick={() => setSelectedOpportunity(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="opportunity-title"
            className="partnership-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="partnership-modal-header">
              <h2 id="opportunity-title">
                {selectedOpportunity.title}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedOpportunity(null)}
                aria-label="Close information"
                className="partnership-modal-close"
              >
                <X size={24} />
              </button>
            </div>

            <p className="partnership-modal-description">
              {selectedOpportunity.details}
            </p>

            <Link
              to="/contact"
              onClick={() => setSelectedOpportunity(null)}
              className="partnership-button"
            >
              Partnership enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* Partnership CTA */}
      <section className="partnerships-cta">
        <div className="partnerships-container partnerships-cta-content">

          <div className="partnerships-cta-text">
            <Handshake size={36} className="partnerships-handshake" />

            <h2>Let's explore working together.</h2>

            <p>
              Tell us about your organisation and partnership interests.
            </p>
          </div>

          <Link to="/contact" className="partnerships-cta-button">
            Partnership enquiry
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  )
}

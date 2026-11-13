import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  TrendingUp,
  Lightbulb,
  Rocket,
  Sprout,
  ArrowRight,
  X,
} from 'lucide-react'
import './Enterprise.css'

const pathway = [
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Build knowledge and explore new possibilities.',
    details:
      'Learning is the starting point of the enterprise journey. Explore knowledge, discover opportunities and develop a foundation for future ideas.',
  },
  {
    icon: TrendingUp,
    title: 'Develop',
    description: 'Strengthen skills and develop ideas.',
    details:
      'Development focuses on strengthening practical skills, improving knowledge and turning early ideas into more structured concepts.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Explore creative approaches to real-world challenges.',
    details:
      'Innovation encourages creative thinking, problem-solving and exploring new approaches to challenges in communities and businesses.',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    description: 'Explore the foundations of turning ideas into opportunities.',
    details:
      'Entrepreneurship introduces the principles of identifying opportunities, understanding markets and exploring how ideas can become business concepts.',
  },
  {
    icon: Sprout,
    title: 'Incubate',
    description: 'A proposed stage for developing and refining ideas.',
    details:
      'Incubation is an envisioned stage where business ideas could be developed, tested and refined. Availability of incubation services has not been confirmed.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Work towards sustainable development and growth.',
    details:
      'Growth focuses on exploring long-term development, sustainability and opportunities to expand business ideas into viable enterprises.',
  },
]

export default function Enterprise() {
  const [selectedStep, setSelectedStep] = useState(null)

  return (
    <main className="enterprise-page">
      {/* Hero Section */}
      <section className="enterprise-hero">
        <div className="enterprise-container">
          <span className="enterprise-eyebrow">ICE ENTERPRISE</span>
          <h1>Turning learning and ideas into opportunities.</h1>
          <p className="enterprise-hero-description">
            Explore the envisioned enterprise development pathway connected
            to the ICE Academy learning journey.
          </p>
        </div>
      </section>

      {/* Enterprise Pathway */}
      <section className="enterprise-section">
        <div className="enterprise-container">
          <div className="enterprise-section-heading">
            <span className="enterprise-label">THE ENTERPRISE PATHWAY</span>
            <h2>From learning to growth</h2>
            <p>
              Discover the journey from building knowledge to developing ideas 
              and exploring sustainable enterprise opportunities. This is an 
              envisioned pathway, not a confirmation of currently available services.
            </p>
          </div>

          <div className="enterprise-pathway-grid">
            {pathway.map((step, index) => {
              const Icon = step.icon
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setSelectedStep(step)}
                  className="enterprise-pathway-card"
                >
                  <div className="enterprise-pathway-top">
                    <Icon size={32} className="enterprise-pathway-icon" />
                    <span className="enterprise-pathway-number">0{index + 1}</span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  
                  <span className="enterprise-pathway-link">
                    Explore stage <ArrowRight size={18} />
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Information Popup */}
      {selectedStep && (
        <div
          className="enterprise-modal-overlay"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="enterprise-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="enterprise-modal-header">
              <h2>{selectedStep.title}</h2>
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="enterprise-modal-close"
                aria-label="Close information"
              >
                <X size={24} />
              </button>
            </div>

            <p className="enterprise-modal-description">
              {selectedStep.details}
            </p>

            <Link
              to="/contact"
              onClick={() => setSelectedStep(null)}
              className="enterprise-btn"
            >
              Make an enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="enterprise-cta">
        <div className="enterprise-container">
          <div className="enterprise-cta-content">
            <div>
              <h2>Interested in enterprise development?</h2>
              <p>Contact us to discuss your enquiry.</p>
            </div>
            <Link to="/contact" className="enterprise-btn">
              Make an enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, CalendarDays, Users, ArrowRight, X } from 'lucide-react'
import './Learning.css'

const learningFeatures = [
  { icon: BookOpen, title: 'Learning opportunities', description: 'Discover learning pathways and opportunities as they become available.', details: 'ICE Academy provides learning opportunities designed to help participants develop their knowledge and practical skills. Confirmed programmes will be published here.' },
  { icon: CalendarDays, title: 'Upcoming cohorts', description: 'Information about upcoming learning groups will be shared once confirmed.', details: 'Information about upcoming cohorts, schedules and important dates will be published once confirmed by ICE Academy.' },
  { icon: Users, title: 'Registration support', description: 'Get assistance with enquiries about registration and participation.', details: 'Need help with registration? Contact the ICE Academy team to enquire about participation, eligibility and available opportunities.' },
]

const faqs = [
  { question: 'How can I find available programmes?', answer: 'Visit the Programmes page to explore the proposed programme areas. Confirmed opportunities will be announced when available.' },
  { question: 'How do I register?', answer: 'You can contact ICE Academy through the enquiry form to express your interest. An enquiry does not confirm enrolment.' },
  { question: 'Where can I find programme dates and eligibility requirements?', answer: 'Confirmed schedules, eligibility requirements and other programme details will be published when they are approved.' },
]

export default function Learning() {
  const [selectedFeature, setSelectedFeature] = useState(null)

  return (
    <main className="learning-page">
      <section className="learning-hero">
        <div className="learning-container">
          <p className="learning-eyebrow">LEARNING AT ICE</p>
          <h1>Your learning journey starts here.</h1>
          <p className="learning-hero-description">
            Find information about learning opportunities, upcoming cohorts and registration support.
          </p>
        </div>
      </section>

      <section className="learning-section">
        <div className="learning-container">
          <div className="learning-features-grid">
            {learningFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setSelectedFeature(feature)}
                  className="learning-feature-card"
                >
                  <span className="learning-feature-icon"><Icon size={30} /></span>
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                  <span className="learning-feature-link">Learn more <ArrowRight size={18} /></span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {selectedFeature && (
        <div className="learning-modal-overlay" onClick={() => setSelectedFeature(null)}>
          <div className="learning-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="learning-modal-header">
              <h2>{selectedFeature.title}</h2>
              <button type="button" onClick={() => setSelectedFeature(null)} className="learning-modal-close" aria-label="Close information">
                <X size={24} />
              </button>
            </div>
            <p className="learning-modal-description">{selectedFeature.details}</p>
            <Link to="/contact" onClick={() => setSelectedFeature(null)} className="learning-button">
              Make an enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      <section className="learning-faq-section">
        <div className="learning-container">
          <div className="learning-faq-content">
            <p className="learning-label">FREQUENTLY ASKED QUESTIONS</p>
            <h2>Questions about learning?</h2>
            <div className="learning-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="learning-faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="learning-final-cta">
        <div className="learning-container">
          <div className="learning-final-cta-content">
            <div>
              <h2>Need help with a learning enquiry?</h2>
              <p>Send an enquiry to the ICE Academy team.</p>
            </div>
            <Link to="/contact" className="learning-button">
              Contact us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

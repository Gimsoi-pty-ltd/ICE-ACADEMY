
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
    details: 'Explore knowledge, discover opportunities and develop a foundation for future ideas.',
  },
  {
    icon: TrendingUp,
    title: 'Develop',
    description: 'Strengthen skills and develop ideas.',
    details: 'Strengthen practical skills, improve knowledge and turn early ideas into structured concepts.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Explore creative approaches to real-world challenges.',
    details: 'Develop creative thinking, problem-solving and innovative approaches to challenges.',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    description: 'Explore the foundations of turning ideas into opportunities.',
    details: 'Discover opportunities, understand markets and explore how ideas can become business concepts.',
  },
  {
    icon: Sprout,
    title: 'Incubate',
    description: 'A proposed stage for developing and refining ideas.',
    details: 'Explore how business ideas could be developed, tested and refined. Incubation services are not yet confirmed.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Work towards sustainable development and growth.',
    details: 'Explore long-term development, sustainability and opportunities to grow business ideas.',
  },
]

export default function Enterprise() {
  const [selectedStep, setSelectedStep] = useState(null)

  return (
    <main className="enterprise-page">

      <section className="enterprise-hero">
        <div className="enterprise-container">
          <p className="enterprise-hero-label">ICE ENTERPRISE</p>

          <h1>Turning learning and ideas into opportunities.</h1>

          <p>
            Explore the envisioned enterprise development pathway
            connected to the ICE Academy learning journey.
          </p>
        </div>
      </section>

      <section className="enterprise-pathway">
        <div className="enterprise-intro">
          <span>THE ENTERPRISE PATHWAY</span>
          <h2>From learning to growth</h2>
          <p>
            Discover the journey from building knowledge to developing
            ideas and exploring sustainable enterprise opportunities.
            This is an envisioned pathway, not a confirmation of
            currently available services.
          </p>
        </div>

        <div className="enterprise-pathway-grid">
          {pathway.map((step, index) => {
            const Icon = step.icon

            return (
              <button
                key={step.title}
                type="button"
                className="enterprise-card"
                onClick={() => setSelectedStep(step)}
              >
                <div className="enterprise-card-top">
                  <Icon size={32} />
                  <span>0{index + 1}</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>

                <span className="enterprise-card-link">
                  Explore stage <ArrowRight size={17} />
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {selectedStep && (
        <div
          className="enterprise-overlay"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="enterprise-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="enterprise-close"
              onClick={() => setSelectedStep(null)}
              aria-label="Close"
            >
              <X size={23} />
            </button>

            <h2>{selectedStep.title}</h2>
            <p>{selectedStep.details}</p>

            <Link to="/contact" className="enterprise-button">
              Make an enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      <section className="enterprise-contact">
        <div className="enterprise-container enterprise-contact-inner">
          <div>
            <h2>Interested in enterprise development?</h2>
            <p>Contact ICE Academy to discuss your enquiry.</p>
          </div>

          <Link to="/contact" className="enterprise-button">
            Make an enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  )
}

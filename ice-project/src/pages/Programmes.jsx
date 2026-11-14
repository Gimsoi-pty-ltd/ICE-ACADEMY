import { Link } from 'react-router-dom'
import {
  Code,
  BriefcaseBusiness,
  Rocket,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import './Programmes.css'

const programmes = [
  {
    icon: Code,
    title: 'Digital and Technology Skills',
    description:
      'Explore digital knowledge and technology skills that support learning, problem-solving and career development.',
    topics: [
      'Digital skills',
      'Technology fundamentals',
      'Computing and innovation',
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professional Development',
    description:
      'Develop professional capabilities that can support personal growth and workplace readiness.',
    topics: [
      'Communication',
      'Workplace readiness',
      'Professional growth',
    ],
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship and Business Development',
    description:
      'Explore entrepreneurship, business thinking and the foundations of developing ideas.',
    topics: [
      'Entrepreneurial thinking',
      'Business development',
      'Idea development',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Emerging Technologies',
    description:
      'Discover innovation and explore how emerging technologies can help solve real-world challenges.',
    topics: [
      'Creative problem-solving',
      'Emerging technologies',
      'Innovation',
    ],
  },
]

export default function Programmes() {
  return (
    <main className="programmes-page">
      {/* Hero Section */}
      <section className="programmes-hero">
        <div className="programmes-container">
          <span className="programmes-eyebrow">WHAT WE EXPLORE</span>
          <h1>Learning pathways for a changing world.</h1>
          <p className="programmes-hero-description">
            Discover the programme areas that shape the ICE Academy
            learning vision. Explore opportunities to develop skills,
            build knowledge and prepare for the future.
          </p>
          <Link to="/contact" className="programmes-btn">
            Make an enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Programme Areas */}
      <section className="programmes-section">
        <div className="programmes-container">
          <div className="programmes-section-heading">
            <span className="programmes-label">OUR PROGRAMME AREAS</span>
            <h2>Develop skills. Discover opportunities.</h2>
            <p>
              Explore our proposed areas of learning and development.
              Specific courses and opportunities will be published once
              they have been confirmed.
            </p>
          </div>

          <div className="programmes-grid">
            {programmes.map((programme) => {
              const Icon = programme.icon
              return (
                <article key={programme.title} className="programmes-card">
                  <Icon size={32} className="programmes-card-icon" />
                  <h3>{programme.title}</h3>
                  <p>{programme.description}</p>
                  
                  <div>
                    <h4 style={{ marginTop: '24px', marginBottom: '16px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#c6c8d1' }}>
                      Areas of focus
                    </h4>
                    <ul>
                      {programme.topics.map((topic) => (
                        <li key={topic}>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="programmes-cta">
        <div className="programmes-container">
          <h2>Interested in learning with ICE Academy?</h2>
          <p>
            Get in touch with our team to enquire about learning
            opportunities and programme information.
          </p>
          <Link to="/contact" className="programmes-btn">
            Make an enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

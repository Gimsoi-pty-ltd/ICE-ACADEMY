
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Rocket,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import './Impact.css'

const metrics = [
  {
    icon: Users,
    value: '—',
    label: 'Learners reached',
    description: 'People engaging with learning opportunities.',
  },
  {
    icon: GraduationCap,
    value: '—',
    label: 'Learning completions',
    description: 'Learning milestones and achievements.',
  },
  {
    icon: BriefcaseBusiness,
    value: '—',
    label: 'Partnerships',
    description: 'Collaborations supporting development.',
  },
  {
    icon: TrendingUp,
    value: '—',
    label: 'Growth and development',
    description: 'Progress towards personal and professional goals.',
  },
]

const journey = [
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Build knowledge and develop essential skills.',
  },
  {
    icon: GraduationCap,
    title: 'Develop',
    description: 'Strengthen your abilities and confidence.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Explore ideas and creative solutions.',
  },
  {
    icon: Rocket,
    title: 'Build your future',
    description: 'Apply what you learn to pursue new opportunities.',
  },
]

export default function Impact() {
  const [activeStep, setActiveStep] = useState(0)

  const ActiveIcon = journey[activeStep].icon

  return (
    <main className="impact-page">
      {/* Hero */}
      <section className="impact-hero">
        <div className="impact-container impact-hero-layout">
          <div className="impact-hero-content">
            <div className="impact-label">
              <TrendingUp size={17} />
              <span>COHORTS &amp; IMPACT</span>
            </div>

            <h1>
              Creating opportunities.
              <span> Building meaningful impact.</span>
            </h1>

            <p className="impact-hero-description">
              Discover the impact ICE Academy aims to create through
              learning, development, entrepreneurship and innovation.
            </p>

            <div className="impact-hero-actions">
              <Link to="/programmes" className="impact-button impact-button-primary">
                Explore programmes
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="impact-hero-visual" aria-hidden="true">
            <div className="impact-visual-circle impact-circle-one" />
            <div className="impact-visual-circle impact-circle-two" />

            <div className="impact-visual-card">
              <div className="impact-visual-icon">
                <GraduationCap size={31} />
              </div>
              <span className="impact-visual-small">THE ICE ACADEMY VISION</span>
              <strong>Learning today. Opportunities tomorrow.</strong>
              <div className="impact-visual-line" />
              <div className="impact-visual-footer">
                <span>Learn</span>
                <span>Grow</span>
                <span>Innovate</span>
              </div>
            </div>

            <div className="impact-visual-decoration">
              <TrendingUp size={23} />
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="impact-section">
        <div className="impact-container">
          <div className="impact-section-heading">
            <span className="impact-eyebrow">OUR IMPACT</span>
            <h2>Progress that matters.</h2>
            <p>
              We believe meaningful impact starts with opportunities
              that help people learn, grow and develop. Verified
              performance information will be added when approved
              and available.
            </p>
          </div>

          <div className="impact-metrics-grid">
            {metrics.map((metric, index) => {
              const Icon = metric.icon

              return (
                <article className="impact-metric-card" key={metric.label}>
                  <div className="impact-metric-top">
                    <div className="impact-metric-icon">
                      <Icon size={23} />
                    </div>
                    <span className="impact-metric-number">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="impact-metric-value">{metric.value}</p>
                  <h3>{metric.label}</h3>
                  <p className="impact-metric-description">
                    {metric.description}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="impact-verification-note">
            <CheckCircle2 size={17} />
            <span>
              Performance figures will be published once verified.
            </span>
          </div>
        </div>
      </section>

      {/* Learning journey */}
      <section className="impact-journey-section">
        <div className="impact-container impact-journey-layout">
          <div className="impact-journey-intro">
            <span className="impact-eyebrow">THE LEARNING JOURNEY</span>

            <h2>Every journey starts with an opportunity.</h2>

            <p>
              ICE Academy aims to create learning experiences that
              encourage people to develop skills, explore ideas and
              work towards their personal and professional goals.
            </p>

            <Link to="/about" className="impact-text-link">
              Learn more about us
              <ArrowRight size={17} />
            </Link>

            <div className="impact-journey-highlight">
              <span className="impact-highlight-icon">
                <ActiveIcon size={23} />
              </span>

              <div>
                <span className="impact-highlight-label">
                  YOUR SELECTED STAGE
                </span>
                <h3>{journey[activeStep].title}</h3>
                <p>{journey[activeStep].description}</p>
              </div>
            </div>
          </div>

          <div className="impact-journey-card">
            <div className="impact-journey-card-heading">
              <div>
                <span className="impact-eyebrow">YOUR PATHWAY</span>
                <h3>Explore the journey</h3>
              </div>
              <span className="impact-journey-count">
                0{activeStep + 1} / 04
              </span>
            </div>

            <div className="impact-journey-steps">
              {journey.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep === index

                return (
                  <button
                    type="button"
                    key={step.title}
                    className={`impact-journey-step ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveStep(index)}
                    aria-pressed={isActive}
                  >
                    <span className="impact-step-icon">
                      <Icon size={21} />
                    </span>

                    <span className="impact-step-content">
                      <span className="impact-step-number">
                        STEP 0{index + 1}
                      </span>
                      <strong>{step.title}</strong>
                      <span className="impact-step-description">
                        {step.description}
                      </span>
                    </span>

                    <ChevronRight
                      size={19}
                      className="impact-step-arrow"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="impact-cta">
        <div className="impact-container impact-cta-layout">
          <div className="impact-cta-content">
            <span className="impact-cta-eyebrow">BE PART OF THE JOURNEY</span>
            <h2>Your next opportunity starts here.</h2>
            <p>
              Connect with ICE Academy and discover how learning
              and development can support your future.
            </p>
          </div>

          <Link to="/contact" className="impact-button impact-button-light">
            Contact us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}

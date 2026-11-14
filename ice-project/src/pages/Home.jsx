
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Users,
  Target,
  GraduationCap,
  Rocket,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Globe,
  Award,
} from 'lucide-react'

import './Home.css'
import robotGrad from '../assets/robot-grad.png'


const focusAreas = [
  {
    icon: BookOpen,
    number: '01',
    title: 'Digital and Technology Skills',
    description:
      'Explore practical digital knowledge and technology skills that prepare individuals for an evolving digital world.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Professional Development',
    description:
      'Build professional capabilities, strengthen confidence and prepare for future workplace opportunities.',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Entrepreneurship and Business',
    description:
      'Discover entrepreneurial thinking, business development and the power of turning ideas into opportunities.',
  },
  {
    icon: Target,
    number: '04',
    title: 'Innovation and Emerging Technologies',
    description:
      'Explore creative thinking, emerging technologies and innovative approaches to real-world challenges.',
  },
]

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'Learner Development',
    description:
      'Encouraging individuals to build knowledge, strengthen their capabilities and grow in confidence.',
  },
  {
    icon: Globe,
    title: 'Learning Opportunities',
    description:
      'Promoting access to learning, skills development and opportunities for personal growth.',
  },
  {
    icon: TrendingUp,
    title: 'Future Growth',
    description:
      'Supporting continuous development, innovation and new possibilities for the future.',
  },
]

const highlights = [
  'Learning and skills development',
  'Professional and personal growth',
  'Entrepreneurship and innovation',
]

export default function Home() {
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-glow hero-glow-top" />
        <div className="hero-glow hero-glow-bottom" />

        <div className="home-container hero-layout">
          <div className="hero-content">
            <div className="hero-label">
              <Sparkles size={15} />
              <span>Welcome to ICE Academy</span>
            </div>

            <h1 className="hero-title">
              Learn. Develop.
              <span className="hero-title-red">Innovate.</span>
              <span>Build Your Future.</span>
            </h1>

            <p className="hero-description">
              Discover opportunities to grow your knowledge, develop
              practical skills and explore innovation through learning.
              Your journey towards new possibilities starts here.
            </p>

            <div className="hero-actions">
              <Link to="/programmes" className="home-button home-button-primary">
                Explore Programmes
                <ArrowRight size={17} />
              </Link>

              <Link to="/about" className="home-button home-button-outline">
                Discover ICE Academy
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-icon">
                <CheckCircle2 size={17} />
              </span>
              <span>Empowering learning. Inspiring innovation.</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <div className="hero-visual-glow" />

            <div className="hero-visual-card">
              <div className="visual-heading">
                <div>
                  <p className="visual-eyebrow">The ICE Academy vision</p>
                  <p className="visual-subtitle">
                    Learning for a changing world
                  </p>
                </div>
            <div className="visual-heading-icon">
               <GraduationCap size={23} />
              </div>

              </div>

              <div className="visual-center">
                <div className="visual-circle visual-circle-outer" />
                <div className="visual-circle visual-circle-inner" />

                <div className="visual-main-icon">
  <img src={robotGrad} alt="ICE Robot with graduation cap" style={{ width: '110px', height: '110px', objectFit: 'contain' }} />
</div>

                <div className="floating-icon floating-icon-top">
                  <Lightbulb size={21} />
                </div>

                <div className="floating-icon floating-icon-bottom">
                  <Rocket size={21} />
                </div>
              </div>

              <div className="visual-caption">
                <h2>Your Future Starts Here.</h2>
                <p>Learn. Create. Grow. Achieve.</p>
              </div>

              <div className="visual-pillars">
                {['LEARN', 'DEVELOP', 'INNOVATE'].map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bottom-line" />
      </section>

      {/* INTRODUCTION */}
      <section className="home-introduction">
        <div className="home-container intro-layout">
          <div className="intro-content">
            <p className="section-eyebrow">About ICE Academy</p>

            <h2 className="section-title">
              Creating opportunities through
              <span> learning and innovation.</span>
            </h2>

            <p className="section-description">
              ICE Academy is focused on learning, development and
              innovation. Our aim is to create opportunities for
              individuals to build knowledge, strengthen their
              capabilities and explore new ideas.
            </p>

            <Link to="/about" className="home-button home-button-dark">
              Discover Our Academy
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="commitment-card">
            <div className="commitment-icon">
              <Award size={25} />
            </div>

            <h3>Our Commitment</h3>

            <p>
              We believe that knowledge, practical skills and
              innovative thinking can help individuals explore
              opportunities and work towards a better future.
            </p>

            <div className="commitment-highlights">
              {highlights.map((item) => (
                <div className="commitment-item" key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="home-focus">
        <div className="home-container">
          <div className="section-heading">
            <p className="section-eyebrow">What We Focus On</p>

            <h2 className="section-title">
              Explore Areas of Development
            </h2>

            <p className="section-description">
              Discover our proposed areas of learning and development.
              Each represents an opportunity to explore knowledge,
              strengthen skills and develop new ideas.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => {
              const Icon = area.icon

              return (
                <article className="focus-card" key={area.title}>
                  <div className="focus-card-top">
                    <div className="focus-icon">
                      <Icon size={23} />
                    </div>

                    <span className="focus-number">{area.number}</span>
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <Link to="/programmes" className="focus-link">
                    Explore area
                    <ArrowRight size={16} />
                  </Link>
                </article>
              )
            })}
          </div>

          <div className="section-action">
            <Link to="/programmes" className="home-button home-button-primary">
              View All Programmes
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="home-impact">
        <div className="impact-glow" />

        <div className="home-container impact-content">
          <div className="section-heading impact-heading">
            <p className="section-eyebrow">Our Impact</p>

            <h2 className="section-title">
              Building a Future Through Meaningful Development
            </h2>

            <p className="section-description">
              We believe in creating opportunities for people to learn,
              develop and contribute to their communities.
            </p>
          </div>

          <div className="impact-grid">
            {impactAreas.map((area) => {
              const Icon = area.icon

              return (
                <article className="impact-card" key={area.title}>
                  <div className="impact-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>
                </article>
              )
            })}
          </div>

          <div className="section-action">
            <Link to="/impact" className="home-button home-button-impact">
              Discover Our Impact
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <div className="home-container cta-content">
          <div className="cta-icon">
            <Sparkles size={24} />
          </div>

          <p className="cta-eyebrow">Your Journey Starts Here</p>

          <h2>Ready to Explore Your Next Opportunity?</h2>

          <p className="cta-description">
            Connect with ICE Academy to learn more about our learning
            opportunities, development initiatives and partnerships.
          </p>

          <div className="cta-actions">
            <Link to="/contact" className="home-button home-button-white">
              Get in Touch
              <ArrowRight size={17} />
            </Link>

            <Link to="/programmes" className="home-button home-button-cta-outline">
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

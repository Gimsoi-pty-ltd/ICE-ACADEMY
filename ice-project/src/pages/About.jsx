import {
  Target, Eye, Heart, Lightbulb, Users, TrendingUp, Handshake, Sparkles, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { icon: Heart, title: 'Accessibility', description: 'Creating opportunities for people to access learning and development.' },
  { icon: TrendingUp, title: 'Growth', description: 'Encouraging continuous personal and professional development.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Promoting creative thinking, exploration and new ideas.' },
  { icon: Handshake, title: 'Collaboration', description: 'Building meaningful relationships through teamwork and partnerships.' },
  { icon: Sparkles, title: 'Impact', description: 'Supporting positive contributions to individuals and communities.' },
  { icon: Users, title: 'Empowerment', description: 'Helping individuals build confidence, knowledge and capabilities.' },
]

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <p className="about-eyebrow">ABOUT ICE ACADEMY</p>
          <h1>Building opportunities through learning and innovation.</h1>
          <p className="about-hero-description">
            Discover who we are, what we believe in and how we aim to contribute to learning, development and innovation.
          </p>
          <Link to="/learning" className="about-hero-button">
            Explore learning <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="about-section about-who">
        <div className="about-container">
          <div className="about-who-content">
            <p className="about-label">WHO WE ARE</p>
            <h2>Welcome to ICE Academy</h2>
            <p>ICE Academy is focused on creating opportunities through learning, development and innovation. We aim to support individuals as they build knowledge, strengthen their capabilities and explore new possibilities.</p>
            <p>Through a commitment to continuous development and collaboration, we aim to encourage individuals to discover their potential and turn ideas into meaningful opportunities.</p>
          </div>
        </div>
      </section>

      <section className="about-section about-vision-section">
        <div className="about-container">
          <div className="about-vision-grid">
            <article className="about-vision-card">
              <div className="about-vision-icon"><Eye size={26} /></div>
              <h2>Our Vision</h2>
              <p>To contribute to a future where individuals have opportunities to learn, develop and innovate.</p>
            </article>
            <article className="about-vision-card">
              <div className="about-vision-icon"><Target size={26} /></div>
              <h2>Our Mission</h2>
              <p>To create opportunities for learning, personal development and innovation through accessible and meaningful experiences.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-values-intro">
            <p className="about-label">WHAT GUIDES US</p>
            <h2>Our Core Values</h2>
            <p>The principles that guide our approach to learning, development and innovation.</p>
          </div>
          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <article key={value.title} className="about-value-card">
                  <div className="about-value-top">
                    <div className="about-value-icon"><Icon size={26} /></div>
                    <span className="about-value-number">0{index + 1}</span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container">
          <div className="about-cta-content">
            <div>
              <p className="about-cta-eyebrow">YOUR JOURNEY STARTS HERE</p>
              <h2>Ready to explore new opportunities?</h2>
              <p>Discover learning opportunities and take your next step with ICE Academy.</p>
            </div>
            <Link to="/contact" className="about-cta-button">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

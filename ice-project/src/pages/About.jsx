import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  Handshake,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const values = [
  {
    icon: Heart,
    title: 'Accessibility',
    description: 'Creating opportunities for people to access learning and development.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Encouraging continuous personal and professional development.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Promoting creative thinking, exploration and new ideas.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description: 'Building meaningful relationships through teamwork and partnerships.',
  },
  {
    icon: Sparkles,
    title: 'Impact',
    description: 'Supporting positive contributions to individuals and communities.',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'Helping individuals build confidence, knowledge and capabilities.',
  },
]

export default function About() {
  return (
    <main style={{ width: '100%', overflowX: 'hidden', margin: 0, padding: 0, boxSizing: 'border-box' }}>

      {/* GLOW HOVER EFFECT FOR CARDS */}
      <style>{`
        .ice-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .ice-card:hover {
          transform: translateY(-5px);
          border-color: #fca5a5 !important;
          box-shadow: 0 20px 40px rgba(220, 38, 38, 0.22), 0 0 25px rgba(220, 38, 38, 0.18);
        }
        .ice-icon {
          transition: background 0.3s ease;
        }
        .ice-card:hover .ice-icon {
          background: #dc2626 !important;
        }
        .ice-card:hover .ice-icon svg {
          color: #ffffff !important;
        }
      `}</style>

      {/* HERO - HAS background = LEFT, but NOT touching edge */}
      <section style={{ width: '100%', background: '#030712', color: '#fff', padding: '80px 0', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', padding: '0 24px', boxSizing: 'border-box', textAlign: 'left' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 800, lineHeight: '1.15', maxWidth: '700px', margin: 0, textAlign: 'left' }}>
            Building opportunities through learning and innovation.
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '18px', lineHeight: '32px', marginTop: '24px', maxWidth: '650px', textAlign: 'left' }}>
            Discover who we are, what we believe in and how we aim to
            contribute to learning, development and innovation.
          </p>
          <Link
            to="/learning"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '32px', background: '#dc2626', color: '#fff', padding: '12px 24px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none' }}
          >
            Explore learning
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* WHO WE ARE - NO card, NO background = TRUE CENTRE */}
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '64px 20px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#dc2626', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', textAlign: 'center', margin: 0 }}>
            Who We Are
          </p>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginTop: '16px', marginBottom: 0, textAlign: 'center' }}>
            Welcome to ICE Academy
          </h2>
          <p style={{ color: '#4b5563', fontSize: '18px', lineHeight: '32px', marginTop: '24px', textAlign: 'center' }}>
            ICE Academy is focused on creating opportunities through
            learning, development and innovation. We aim to support
            individuals as they build knowledge, strengthen their
            capabilities and explore new possibilities.
          </p>
          <p style={{ color: '#4b5563', fontSize: '18px', lineHeight: '32px', marginTop: '16px', textAlign: 'center' }}>
            Through a commitment to continuous development and
            collaboration, we aim to encourage individuals to discover
            their potential and turn ideas into meaningful opportunities.
          </p>
        </div>
      </section>

      {/* VISION + MISSION - HAS cards = LEFT inside cards + GLOW */}
      <section style={{ width: '100%', background: '#f9fafb', padding: '64px 20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', boxSizing: 'border-box' }}>
          <article className="ice-card" style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div className="ice-icon" style={{ width: '56px', height: '56px', background: '#fef2f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Eye size={30} color="#dc2626" />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '24px', marginBottom: 0, textAlign: 'left' }}>Our Vision</h2>
            <p style={{ color: '#4b5563', lineHeight: '32px', marginTop: '16px', textAlign: 'left' }}>
              To contribute to a future where individuals have
              opportunities to learn, develop and innovate.
            </p>
          </article>

          <article className="ice-card" style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <div className="ice-icon" style={{ width: '56px', height: '56px', background: '#fef2f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={30} color="#dc2626" />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '24px', marginBottom: 0, textAlign: 'left' }}>Our Mission</h2>
            <p style={{ color: '#4b5563', lineHeight: '32px', marginTop: '16px', textAlign: 'left' }}>
              To create opportunities for learning, personal
              development and innovation through accessible and
              meaningful experiences.
            </p>
          </article>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ width: '100%', padding: '64px 20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto' }}>
          {/* Heading - NO card, NO background = CENTRED */}
          <div style={{ maxWidth: '650px', margin: '0 auto 48px auto', textAlign: 'center' }}>
            <p style={{ color: '#dc2626', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', textAlign: 'center', margin: 0 }}>
              What Guides Us
            </p>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginTop: '16px', marginBottom: 0, textAlign: 'center' }}>
              Our Core Values
            </h2>
            <p style={{ color: '#4b5563', marginTop: '16px', lineHeight: '28px', textAlign: 'center' }}>
              The principles that guide our approach to learning,
              development and innovation.
            </p>
          </div>

          {/* Cards - HAS cards = LEFT inside cards + GLOW */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <article
                  key={value.title}
                  className="ice-card"
                  style={{ padding: '32px', border: '1px solid #e5e7eb', borderRadius: '12px', background: '#fff', textAlign: 'left' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="ice-icon" style={{ width: '56px', height: '56px', background: '#fef2f2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={26} color="#dc2626" />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#d1d5db' }}>0{index + 1}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '24px', marginBottom: 0, textAlign: 'left' }}>{value.title}</h3>
                  <p style={{ color: '#4b5563', lineHeight: '28px', marginTop: '12px', textAlign: 'left' }}>{value.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA - HAS background = LEFT */}
      <section style={{ width: '100%', background: '#030712', color: '#fff', padding: '56px 20px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '32px', textAlign: 'left' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ color: '#f87171', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', margin: 0, textAlign: 'left' }}>
              Your Journey Starts Here
            </p>
            <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '12px', marginBottom: 0, textAlign: 'left' }}>
              Ready to explore new opportunities?
            </h2>
            <p style={{ color: '#d1d5db', marginTop: '16px', lineHeight: '28px', textAlign: 'left' }}>
              Discover learning opportunities and take your next step with ICE Academy.
            </p>
          </div>
          <Link
            to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#dc2626', color: '#fff', padding: '12px 28px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  )
}
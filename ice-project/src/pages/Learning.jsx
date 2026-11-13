import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  CalendarDays,
  Users,
  ArrowRight,
  X,
} from 'lucide-react'

const learningFeatures = [
  {
    icon: BookOpen,
    title: 'Learning opportunities',
    description: 'Discover learning pathways and opportunities as they become available.',
    details: 'ICE Academy provides learning opportunities designed to help participants develop their knowledge and practical skills. Confirmed programmes will be published here.',
  },
  {
    icon: CalendarDays,
    title: 'Upcoming cohorts',
    description: 'Information about upcoming learning groups will be shared once confirmed.',
    details: 'Information about upcoming cohorts, schedules and important dates will be published once confirmed by ICE Academy.',
  },
  {
    icon: Users,
    title: 'Registration support',
    description: 'Get assistance with enquiries about registration and participation.',
    details: 'Need help with registration? Contact the ICE Academy team to enquire about participation, eligibility and available opportunities.',
  },
]

const faqs = [
  {
    question: 'How can I find available programmes?',
    answer: 'Visit the Programmes page to explore the proposed programme areas. Confirmed opportunities will be announced when available.',
  },
  {
    question: 'How do I register?',
    answer: 'You can contact ICE Academy through the enquiry form to express your interest. An enquiry does not confirm enrolment.',
  },
  {
    question: 'Where can I find programme dates and eligibility requirements?',
    answer: 'Confirmed schedules, eligibility requirements and other programme details will be published when they are approved.',
  },
]

export default function Learning() {
  const [selectedFeature, setSelectedFeature] = useState(null)

  return (
    <main style={{ width: '100%', overflowX: 'hidden', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <style>{`
        .ice-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .ice-card:hover {
          transform: translateY(-5px);
          border-color: #fca5a5 !important;
          box-shadow: 0 20px 40px rgba(220,38,38,0.22), 0 0 25px rgba(220,38,38,0.18);
        }
        .ice-card:hover .ice-icon { transform: scale(1.1); }
        .ice-icon { transition: transform 0.3s ease; display: inline-block; }
      `}</style>

      {/* HERO - LEFT, with REAL padding on the section */}
      <section style={{ width: '100%', background: '#030712', color: '#fff', padding: '80px 24px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', boxSizing: 'border-box', textAlign: 'left' }}>
          <p style={{ color: '#f87171', fontWeight: 600, margin: 0, letterSpacing: '1px' }}>LEARNING AT ICE</p>
          <h1 style={{ fontSize: '48px', fontWeight: 800, lineHeight: '1.15', maxWidth: '700px', margin: '16px 0 0 0' }}>
            Your learning journey starts here.
          </h1>
          <p style={{ color: '#d1d5db', maxWidth: '650px', marginTop: '24px', lineHeight: '32px' }}>
            Find information about learning opportunities, upcoming cohorts and registration support.
          </p>
        </div>
      </section>

      {/* CARDS - LEFT inside, with gap from edge */}
      <section style={{ width: '100%', padding: '60px 24px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {learningFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <button key={feature.title} type="button" onClick={() => setSelectedFeature(feature)} className="ice-card"
                style={{ textAlign: 'left', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '32px', background: '#fff', cursor: 'pointer' }}>
                <span className="ice-icon"><Icon size={30} color="#dc2626" /></span>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '20px', marginBottom: 0 }}>{feature.title}</h2>
                <p style={{ color: '#4b5563', marginTop: '12px', lineHeight: '28px' }}>{feature.description}</p>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontWeight: 600, marginTop: '24px' }}>
                  Learn more <ArrowRight size={18} />
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* POPUP */}
      {selectedFeature && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', boxSizing: 'border-box' }}
          onClick={() => setSelectedFeature(null)}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '512px', width: '100%', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', boxSizing: 'border-box' }}
            onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>{selectedFeature.title}</h2>
              <button type="button" onClick={() => setSelectedFeature(null)} aria-label="Close information"
                style={{ color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
            </div>
            <p style={{ color: '#4b5563', marginTop: '20px', lineHeight: '28px' }}>{selectedFeature.details}</p>
            <Link to="/contact" onClick={() => setSelectedFeature(null)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#dc2626', color: '#fff', padding: '12px 24px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', marginTop: '28px' }}>
              Make an enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* FAQ - LEFT, grey background back, with padding */}
      <section style={{ width: '100%', background: '#f9fafb', padding: '60px 24px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '896px', width: '100%', margin: '0 auto', textAlign: 'left' }}>
          <p style={{ color: '#dc2626', fontWeight: 600, margin: 0 }}>FREQUENTLY ASKED QUESTIONS</p>
          <h2 style={{ fontSize: '30px', fontWeight: 700, marginTop: '12px', marginBottom: '32px' }}>Questions about learning?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq) => (
              <details key={faq.question} className="ice-card"
                style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
                <summary style={{ fontWeight: 600, cursor: 'pointer' }}>{faq.question}</summary>
                <p style={{ color: '#4b5563', marginTop: '16px', lineHeight: '28px' }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - NO card, NO background = CENTRED, NOT cut off */}
      <section style={{ width: '100%', padding: '60px 24px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0, textAlign: 'center' }}>Need help with a learning enquiry?</h2>
          <p style={{ color: '#4b5563', marginTop: '8px', textAlign: 'center' }}>Send an enquiry to the ICE Academy team.</p>
          <Link to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#dc2626', color: '#fff', padding: '12px 24px', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', marginTop: '24px' }}>
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
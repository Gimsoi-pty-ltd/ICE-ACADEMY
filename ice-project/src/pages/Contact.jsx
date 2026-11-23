import { useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import './Contact.css'

const enquiryCategories = [
  'Programme information',
  'Learning opportunities',
  'Registration support',
  'Partnerships',
  'Enterprise development',
  'General enquiry',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = {
      fullName: String(fd.get('fullName') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      organisation: String(fd.get('organisation') || '').trim(),
      category: String(fd.get('category') || ''),
      message: String(fd.get('message') || '').trim(),
    }

    const next = {}
    if (data.fullName.length < 2) next.fullName = 'Please enter your full name (at least 2 characters).'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Please enter a valid email address.'
    const digits = data.phone.replace(/\D/g, '')
    if (digits.length < 7 || digits.length > 15) next.phone = 'Please enter a valid contact number.'
    if (!data.category) next.category = 'Please select an enquiry category.'
    if (data.message.length < 10) next.message = 'Your message must contain at least 10 characters.'

    if (Object.keys(next).length) {
      setErrors(next)
      setSubmitted(false)
      return
    }
    setErrors({})
    setSubmitted(true)
    form.reset()
  }

  function clearOnChange() {
    setSubmitted(false)
    setErrors({})
  }

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h1>We'd like to hear from you.</h1>
          <p className="contact-hero-description">
            Contact ICE Academy with questions about programmes, learning
            opportunities, partnerships or enterprise development.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Left Info */}
            <div className="contact-info">
              <span className="contact-eyebrow">CONTACT ICE ACADEMY</span>
              <h2>Send us an enquiry</h2>
              <p>
                Complete the form with your details and enquiry. 
                All required fields must be completed before submission.
              </p>
              
              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ff7777', marginBottom: '8px' }}>
                    <Mail size={24} />
                    <h3 style={{ margin: 0, fontSize: '20px', color: '#fff' }}>Email enquiries</h3>
                  </div>
                  <p style={{ margin: 0 }}>Contact details will be added once confirmed.</p>
                </div>
                
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ff7777', marginBottom: '8px' }}>
                    <MessageSquare size={24} />
                    <h3 style={{ margin: 0, fontSize: '20px', color: '#fff' }}>General enquiries</h3>
                  </div>
                  <p style={{ margin: 0 }}>Choose the category that best describes your enquiry.</p>
                </div>
              </div>

              <div style={{ marginTop: '48px', background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: '#fff', margin: 0, fontSize: '20px' }}>How can we help?</h3>
                <p style={{ marginTop: '12px', marginBottom: 0 }}>
                  Whether you're interested in learning, development, entrepreneurship or partnerships, we're happy to hear from you.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-card">
              {submitted && (
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 'bold' }}>
                    <CheckCircle2 size={20} /> Enquiry form completed successfully!
                  </div>
                  <p style={{ color: '#a1a1aa', fontSize: '14px', marginTop: '8px', marginBottom: 0 }}>
                    Your information passed validation. No information has been sent or stored because this is currently a frontend prototype.
                  </p>
                </div>
              )}

              {Object.keys(errors).length > 0 && (
                <div style={{ background: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.2)', padding: '16px', borderRadius: '8px', marginBottom: '24px', color: '#fca5a5' }}>
                  Please correct the highlighted fields before submitting.
                </div>
              )}

              <form onSubmit={handleSubmit} onChange={clearOnChange} noValidate>
                <div className="contact-form-group">
                  <label htmlFor="fullName">Full name *</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Enter your full name" required />
                  {errors.fullName && <p style={{ color: '#fca5a5', fontSize: '12px', marginTop: '6px' }}>{errors.fullName}</p>}
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">Email address *</label>
                  <input id="email" name="email" type="email" placeholder="Enter your email address" required />
                  {errors.email && <p style={{ color: '#fca5a5', fontSize: '12px', marginTop: '6px' }}>{errors.email}</p>}
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">Contact number *</label>
                  <input id="phone" name="phone" type="tel" placeholder="e.g. 0712345678" required />
                  {errors.phone && <p style={{ color: '#fca5a5', fontSize: '12px', marginTop: '6px' }}>{errors.phone}</p>}
                </div>

                <div className="contact-form-group">
                  <label htmlFor="organisation">Organisation (optional)</label>
                  <input id="organisation" name="organisation" type="text" placeholder="Your organisation" />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="category">Enquiry category *</label>
                  <select id="category" name="category" defaultValue="" required>
                    <option value="" disabled>Select an enquiry category</option>
                    {enquiryCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {errors.category && <p style={{ color: '#fca5a5', fontSize: '12px', marginTop: '6px' }}>{errors.category}</p>}
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} placeholder="Write your enquiry here..." required />
                  {errors.message && <p style={{ color: '#fca5a5', fontSize: '12px', marginTop: '6px' }}>{errors.message}</p>}
                </div>

                <button type="submit" className="contact-btn">
                  Submit enquiry <Send size={18} />
                </button>
                <p style={{ textAlign: 'center', fontSize: '12px', color: '#a1a1aa', marginTop: '16px' }}>* Required fields</p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

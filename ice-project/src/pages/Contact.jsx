
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

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const data = {
      fullName: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      organisation: String(formData.get('organisation') || '').trim(),
      category: String(formData.get('category') || ''),
      message: String(formData.get('message') || '').trim(),
    }

    const newErrors = {}

    if (data.fullName.length < 2)
      newErrors.fullName = 'Please enter your full name.'

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = 'Please enter a valid email address.'

    const phoneDigits = data.phone.replace(/\D/g, '')

    if (phoneDigits.length < 7 || phoneDigits.length > 15)
      newErrors.phone = 'Please enter a valid contact number.'

    if (!data.category)
      newErrors.category = 'Please select an enquiry category.'

    if (data.message.length < 10)
      newErrors.message = 'Your message must contain at least 10 characters.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    form.reset()
  }

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h1>We'd like to hear from you.</h1>

          <p>
            Contact ICE Academy with questions about programmes,
            learning opportunities, partnerships or enterprise development.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container contact-grid">

          <div className="contact-information">
            <span className="contact-label">CONTACT ICE ACADEMY</span>

            <h2>Send us an enquiry</h2>

            <p className="contact-description">
              Complete the form with your details and enquiry.
              All required fields must be completed before submission.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={25} />
              </div>
              <div>
                <h3>Email enquiries</h3>
                <p>Contact details will be added once confirmed.</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MessageSquare size={25} />
              </div>
              <div>
                <h3>General enquiries</h3>
                <p>
                  Choose the category that best describes your enquiry.
                </p>
              </div>
            </div>

            <div className="contact-help-box">
              <h3>How can we help?</h3>
              <p>
                Whether you're interested in learning, development,
                entrepreneurship or partnerships, we're happy to hear
                from you.
              </p>
            </div>
          </div>

          <div className="contact-form-card">

            {submitted && (
              <div className="contact-success" role="status">
                <CheckCircle2 size={23} />
                <div>
                  <strong>Form completed successfully!</strong>
                  <p>
                    Your information passed validation. No enquiry has
                    been sent or stored because this is currently a
                    frontend prototype.
                  </p>
                </div>
              </div>
            )}

            {Object.keys(errors).length > 0 && (
              <div className="contact-error-summary" role="alert">
                Please correct the highlighted fields before submitting.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>

              <div className="contact-field">
                <label htmlFor="fullName">Full name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Contact number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. 0712345678"
                  maxLength={20}
                  aria-invalid={!!errors.phone}
                  onChange={(event) => {
                    event.target.value = event.target.value.replace(
                      /[^0-9+() -]/g, ''
                    )
                  }}
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>

              <div className="contact-field">
                <label htmlFor="organisation">Organisation (optional)</label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  placeholder="Your organisation"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="category">Enquiry category *</label>
                <select
                  id="category"
                  name="category"
                  defaultValue=""
                  aria-invalid={!!errors.category}
                >
                  <option value="" disabled>
                    Select an enquiry category
                  </option>
                  {enquiryCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && <span className="field-error">{errors.category}</span>}
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={2000}
                  placeholder="Write your enquiry here..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button type="submit" className="contact-submit">
                Submit enquiry
                <Send size={18} />
              </button>

              <p className="contact-required-note">
                * Required fields
              </p>

            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

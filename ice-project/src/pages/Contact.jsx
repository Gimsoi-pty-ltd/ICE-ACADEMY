
import { Mail, MessageSquare, Send, ExternalLink } from 'lucide-react'
import './Contact.css'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfEqk6MqsqsYFcN99KQbdYpzRhv4v83XkGjird8uP5dIq6cEA/viewform?embedded=true'

const GOOGLE_FORM_PUBLIC_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfEqk6MqsqsYFcN99KQbdYpzRhv4v83XkGjird8uP5dIq6cEA/viewform'

export default function Contact() {
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

            {/* Left Contact Information */}
            <div className="contact-info">
              <span className="contact-eyebrow">CONTACT ICE ACADEMY</span>
              <h2>Send us an enquiry</h2>
              <p>
                Have a question or interested in working with ICE Academy?
                Complete our enquiry form and our team will get back to you.
              </p>

              <div className="contact-details">

                <div className="contact-detail-item">
                  <div className="contact-detail-heading">
                    <Mail size={24} />
                    <h3>Email enquiries</h3>
                  </div>

                  <a href="mailto:info@gimsoi.com">
                    info@gimsoi.com
                  </a>
                  <p>Send your questions directly to our team.</p>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-heading">
                    <MessageSquare size={24} />
                    <h3>General enquiries</h3>
                  </div>

                  <p>
                    Whether you're interested in learning, development,
                    entrepreneurship or partnerships, we're happy to hear
                    from you.
                  </p>
                </div>

              </div>

              <div className="contact-help-box">
                <h3>How can we help?</h3>
                <p>
                  Tell us what you're looking for. Our team will review
                  your enquiry and guide you in the right direction.
                </p>
              </div>
            </div>

            {/* Google Form */}
            <div className="contact-card google-form-card">
              <div className="google-form-heading">
                <span className="contact-eyebrow">SEND US A MESSAGE</span>
                <h2>Submit your enquiry</h2>
                <p>
                  Complete the form below. All required questions must
                  be answered before submission.
                </p>
              </div>

              <div className="google-form-container">
                <iframe
                  src={"https://docs.google.com/forms/d/e/1FAIpQLSfEqk6MqsqsYFcN99KQbdYpzRhv4v83XkGjird8uP5dIq6cEA/viewform?usp=dialog"}
                  title="ICE Academy General Enquiry Form"
                  width="100%"
                  height="1100"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  loading="lazy"
                >
                  Loading ICE Academy enquiry form...
                </iframe>
              </div>

              <div className="google-form-footer">
                <p>
                  Having trouble viewing the form?
                </p>

                <a
                  href={"https://docs.google.com/forms/d/e/1FAIpQLSfEqk6MqsqsYFcN99KQbdYpzRhv4v83XkGjird8uP5dIq6cEA/viewform?embedded=true"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open form in a new tab
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

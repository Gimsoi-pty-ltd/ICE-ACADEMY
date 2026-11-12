
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  CalendarDays,
  Users,
  ArrowRight,
  Search,
  X,
  MessageCircle,
} from 'lucide-react'

const learningFeatures = [
  {
    icon: BookOpen,
    title: 'Learning opportunities',
    description:
      'Discover learning pathways and opportunities as they become available.',
    link: '/programmes',
    linkText: 'Explore programmes',
  },
  {
    icon: CalendarDays,
    title: 'Upcoming cohorts',
    description:
      'Information about upcoming learning groups will be shared once confirmed.',
    link: '/programmes',
    linkText: 'View programmes',
  },
  {
    icon: Users,
    title: 'Registration support',
    description:
      'Get assistance with enquiries about registration and participation.',
    link: '/contact',
    linkText: 'Get registration help',
  },
]

const faqs = [
  {
    question: 'How can I find available programmes?',
    answer:
      'Visit the Programmes page to explore the proposed programme areas. Confirmed opportunities will be announced when available.',
  },
  {
    question: 'How do I register?',
    answer:
      'You can contact ICE Academy through the enquiry form to express your interest. An enquiry does not confirm enrolment.',
  },
  {
    question: 'Where can I find programme dates and eligibility requirements?',
    answer:
      'Confirmed schedules, eligibility requirements and other programme details will be published when they are approved.',
  },
]

export default function Learning() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFaqs = faqs.filter((faq) => {
    const searchText = searchTerm.toLowerCase().trim()

    return (
      faq.question.toLowerCase().includes(searchText) ||
      faq.answer.toLowerCase().includes(searchText)
    )
  })

  return (
    <main className="learning-page">

      {/* Hero */}
      <section className="learning-hero">
        <div className="learning-container">
          <div className="learning-hero-content">
            <span className="learning-eyebrow">
              LEARNING AT ICE
            </span>

            <h1>
              Your learning journey starts here.
            </h1>

            <p>
              Find information about learning opportunities, upcoming
              cohorts and registration support.
            </p>

            <Link to="/programmes" className="learning-primary-btn">
              Explore programmes
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="learning-hero-decoration">
            <div className="learning-decoration-circle">
              <BookOpen size={100} strokeWidth={1} />
            </div>
            <span className="learning-decoration-label">
              LEARN. DEVELOP. INNOVATE.
            </span>
          </div>
        </div>
      </section>

      {/* Learning opportunities */}
      <section className="learning-features-section">
        <div className="learning-container">
          <div className="learning-section-heading">
            <span className="learning-eyebrow">
              LEARNING OPPORTUNITIES
            </span>

            <h2>Explore your opportunities</h2>

            <p>
              Find the information and support you need to begin
              your learning journey.
            </p>
          </div>

          <div className="learning-features-grid">
            {learningFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  className="learning-feature-card"
                >
                  <div className="learning-feature-icon">
                    <Icon size={29} strokeWidth={1.8} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <Link
                    to={feature.link}
                    className="learning-feature-link"
                  >
                    {feature.linkText}
                    <ArrowRight size={17} />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="learning-faq-section">
        <div className="learning-container learning-faq-container">

          <div className="learning-section-heading">
            <span className="learning-eyebrow">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>Questions about learning?</h2>

            <p>
              Search our frequently asked questions to find
              the information you need.
            </p>
          </div>

          {/* Search */}
          <div className="learning-search-wrapper">
            <Search
              size={20}
              className="learning-search-icon"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search questions..."
              aria-label="Search frequently asked questions"
              className="learning-search-input"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
                className="learning-search-clear"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <p className="learning-results-count">
            Showing {filteredFaqs.length} of {faqs.length} questions
          </p>

          {/* FAQ results */}
          <div className="learning-faq-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="learning-faq-item"
                >
                  <summary>
                    <span>{faq.question}</span>
                    <span className="learning-faq-plus">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))
            ) : (
              <div className="learning-no-results">
                <Search size={36} />

                <h3>No questions found</h3>

                <p>
                  Try using different keywords to find what
                  you're looking for.
                </p>

                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="learning-contact-section">
        <div className="learning-container">
          <div className="learning-contact-card">
            <div className="learning-contact-content">
              <div className="learning-contact-label">
                <MessageCircle size={23} />
                <span>NEED ASSISTANCE?</span>
              </div>

              <h2>
                Need help with a learning enquiry?
              </h2>

              <p>
                Send an enquiry to the ICE Academy team.
              </p>
            </div>

            <Link
              to="/contact"
              className="learning-primary-btn"
            >
              Contact us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

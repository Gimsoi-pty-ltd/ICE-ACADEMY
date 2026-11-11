
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
    <main>
      {/* Hero section */}
      <section className="bg-gray-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-400 font-semibold mb-4">
            LEARNING AT ICE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Your learning journey starts here.
          </h1>

          <p className="text-gray-300 max-w-2xl mt-6 leading-8">
            Find information about learning opportunities, upcoming cohorts
            and registration support.
          </p>

          <Link
            to="/programmes"
            className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Explore programmes
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Learning features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-red-600 font-semibold">
            LEARNING OPPORTUNITIES
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Explore your opportunities
          </h2>

          <p className="text-gray-600 mt-3">
            Find the information and support you need to begin your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {learningFeatures.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="bg-red-50 text-red-600 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Icon size={30} />
                </div>

                <h2 className="text-xl font-bold mt-5">
                  {feature.title}
                </h2>

                <p className="text-gray-600 mt-3 leading-7">
                  {feature.description}
                </p>

                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 text-red-600 font-semibold mt-6 hover:text-red-800 transition"
                >
                  {feature.linkText}
                  <ArrowRight size={17} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <p className="text-red-600 font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="text-3xl font-bold mt-3 mb-4">
            Questions about learning?
          </h2>

          <p className="text-gray-600 mb-8">
            Search our frequently asked questions to find the information you need.
          </p>

          {/* FAQ search */}
          <div className="relative mb-8">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search questions..."
              aria-label="Search frequently asked questions"
              className="w-full bg-white border border-gray-300 rounded-lg pl-12 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Search results count */}
          <p className="text-sm text-gray-500 mb-4">
            Showing {filteredFaqs.length} of {faqs.length} questions
          </p>

          {/* FAQ results */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-red-300 transition"
                >
                  <summary className="font-semibold cursor-pointer flex items-center justify-between gap-4 list-none">
                    <span>{faq.question}</span>

                    <span className="text-red-600 text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>

                  <p className="text-gray-600 mt-4 leading-7">
                    {faq.answer}
                  </p>
                </details>
              ))
            ) : (
              <div className="bg-white border border-gray-200 rounded-lg p-10 text-center">
                <Search
                  size={35}
                  className="mx-auto text-gray-400 mb-4"
                />

                <h3 className="text-lg font-bold">
                  No questions found
                </h3>

                <p className="text-gray-500 mt-2">
                  Try using different keywords to find what you're looking for.
                </p>

                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="mt-5 text-red-600 font-semibold hover:text-red-800"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gray-950 text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-red-400" size={25} />

              <p className="text-red-400 font-semibold">
                NEED ASSISTANCE?
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Need help with a learning enquiry?
            </h2>

            <p className="text-gray-300 mt-3">
              Send an enquiry to the ICE Academy team.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition whitespace-nowrap"
          >
            Contact us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

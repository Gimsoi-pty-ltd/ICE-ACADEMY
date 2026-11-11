
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
    description:
      'Discover learning pathways and opportunities as they become available.',
    details:
      'ICE Academy provides learning opportunities designed to help participants develop their knowledge and practical skills. Confirmed programmes will be published here.',
  },
  {
    icon: CalendarDays,
    title: 'Upcoming cohorts',
    description:
      'Information about upcoming learning groups will be shared once confirmed.',
    details:
      'Information about upcoming cohorts, schedules and important dates will be published once confirmed by ICE Academy.',
  },
  {
    icon: Users,
    title: 'Registration support',
    description:
      'Get assistance with enquiries about registration and participation.',
    details:
      'Need help with registration? Contact the ICE Academy team to enquire about participation, eligibility and available opportunities.',
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
  const [selectedFeature, setSelectedFeature] = useState(null)

  return (
    <main>
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
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {learningFeatures.map((feature) => {
            const Icon = feature.icon

            return (
              <button
                key={feature.title}
                type="button"
                onClick={() => setSelectedFeature(feature)}
                className="text-left border border-gray-200 rounded-lg p-8
                hover:border-red-500 hover:shadow-lg hover:-translate-y-1
                transition-all duration-300 group"
              >
                <Icon
                  size={30}
                  className="text-red-600 group-hover:scale-110 transition-transform"
                />

                <h2 className="text-xl font-bold mt-5">
                  {feature.title}
                </h2>

                <p className="text-gray-600 mt-3 leading-7">
                  {feature.description}
                </p>

                <span className="flex items-center gap-2 text-red-600 font-semibold mt-6">
                  Learn more
                  <ArrowRight size={18} />
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {selectedFeature && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feature-title"
            className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <h2
                id="feature-title"
                className="text-2xl font-bold"
              >
                {selectedFeature.title}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                aria-label="Close information"
                className="text-gray-500 hover:text-red-600"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-600 mt-5 leading-7">
              {selectedFeature.details}
            </p>

            <Link
              to="/contact"
              onClick={() => setSelectedFeature(null)}
              className="inline-flex items-center gap-2 bg-red-600
              text-white px-6 py-3 rounded-md font-semibold
              hover:bg-red-700 mt-7"
            >
              Make an enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-600 font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="text-3xl font-bold mt-3 mb-8">
            Questions about learning?
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <summary className="font-semibold cursor-pointer">
                  {faq.question}
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold">
            Need help with a learning enquiry?
          </h2>

          <p className="text-gray-600 mt-2">
            Send an enquiry to the ICE Academy team.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700"
        >
          Contact us
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  )
}

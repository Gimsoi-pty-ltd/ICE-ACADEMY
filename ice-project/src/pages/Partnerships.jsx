
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Handshake,
  Building2,
  Users,
  Lightbulb,
  ArrowRight,
  X,
} from 'lucide-react'

const opportunities = [
  {
    icon: Building2,
    title: 'Organisational partnerships',
    description:
      'Explore opportunities for organisations to connect with the ICE Academy vision.',
    details:
      'ICE Academy welcomes enquiries from organisations interested in building meaningful partnerships, supporting development and creating opportunities for collaboration.',
  },
  {
    icon: Users,
    title: 'Learning collaboration',
    description:
      'Explore ways to support learning, skills development and knowledge sharing.',
    details:
      'Collaborate with ICE Academy to explore learning initiatives, knowledge sharing and opportunities that support skills development.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation collaboration',
    description:
      'Connect around ideas, innovation and opportunities to address real-world challenges.',
    details:
      'Explore opportunities to exchange ideas, encourage innovation and collaborate on approaches to real-world challenges.',
  },
]

export default function Partnerships() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-400 font-semibold mb-4">
            PARTNER WITH US
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Building opportunities through collaboration.
          </h1>

          <p className="text-gray-300 max-w-2xl mt-6 leading-8">
            ICE Academy welcomes enquiries from organisations interested in
            learning, development and innovation.
          </p>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-red-600 font-semibold">
            WORK WITH ICE ACADEMY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Explore collaboration
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            These are areas for potential collaboration. Specific partnership
            arrangements will depend on discussion and approval.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {opportunities.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedOpportunity(item)}
                className="text-left border border-gray-200 rounded-lg p-8
                hover:border-red-500 hover:shadow-lg hover:-translate-y-1
                transition-all duration-300 group"
              >
                <Icon
                  size={32}
                  className="text-red-600 group-hover:scale-110 transition-transform"
                />

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.description}
                </p>

                <span className="flex items-center gap-2 text-red-600 font-semibold mt-6">
                  Explore more
                  <ArrowRight size={18} />
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Information Popup */}
      {selectedOpportunity && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
          onClick={() => setSelectedOpportunity(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="opportunity-title"
            className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4">
              <h2
                id="opportunity-title"
                className="text-2xl font-bold"
              >
                {selectedOpportunity.title}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedOpportunity(null)}
                aria-label="Close information"
                className="text-gray-500 hover:text-red-600"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-600 mt-5 leading-7">
              {selectedOpportunity.details}
            </p>

            <Link
              to="/contact"
              onClick={() => setSelectedOpportunity(null)}
              className="inline-flex items-center gap-2 bg-red-600
              text-white px-6 py-3 rounded-md font-semibold
              hover:bg-red-700 mt-7"
            >
              Partnership enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* Partnership CTA */}
      <section className="bg-red-600 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Handshake size={36} className="mb-4" />

            <h2 className="text-3xl font-bold">
              Let's explore working together.
            </h2>

            <p className="text-red-100 mt-3">
              Tell us about your organisation and partnership interests.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white
            text-red-600 px-6 py-3 rounded-md font-semibold
            hover:bg-gray-100 transition"
          >
            Partnership enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

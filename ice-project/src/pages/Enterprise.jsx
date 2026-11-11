
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  TrendingUp,
  Lightbulb,
  Rocket,
  Sprout,
  ArrowRight,
  X,
} from 'lucide-react'

const pathway = [
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Build knowledge and explore new possibilities.',
    details:
      'Learning is the starting point of the enterprise journey. Explore knowledge, discover opportunities and develop a foundation for future ideas.',
  },
  {
    icon: TrendingUp,
    title: 'Develop',
    description: 'Strengthen skills and develop ideas.',
    details:
      'Development focuses on strengthening practical skills, improving knowledge and turning early ideas into more structured concepts.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Explore creative approaches to real-world challenges.',
    details:
      'Innovation encourages creative thinking, problem-solving and exploring new approaches to challenges in communities and businesses.',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    description: 'Explore the foundations of turning ideas into opportunities.',
    details:
      'Entrepreneurship introduces the principles of identifying opportunities, understanding markets and exploring how ideas can become business concepts.',
  },
  {
    icon: Sprout,
    title: 'Incubate',
    description: 'A proposed stage for developing and refining ideas.',
    details:
      'Incubation is an envisioned stage where business ideas could be developed, tested and refined. Availability of incubation services has not been confirmed.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Work towards sustainable development and growth.',
    details:
      'Growth focuses on exploring long-term development, sustainability and opportunities to expand business ideas into viable enterprises.',
  },
]

export default function Enterprise() {
  const [selectedStep, setSelectedStep] = useState(null)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-green-950 text-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-300 font-semibold mb-4">
            ICE ENTERPRISE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Turning learning and ideas into opportunities.
          </h1>

          <p className="text-green-100 max-w-2xl mt-6 leading-8">
            Explore the envisioned enterprise development pathway connected
            to the ICE Academy learning journey.
          </p>
        </div>
      </section>

      {/* Enterprise Pathway */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <p className="text-green-700 font-semibold">
            THE ENTERPRISE PATHWAY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            From learning to growth
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            This is an envisioned pathway. It does not mean that incubation,
            funding or business support services are currently available.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathway.map((step, index) => {
            const Icon = step.icon

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setSelectedStep(step)}
                className="text-left border border-gray-200 rounded-lg p-8
                hover:border-green-600 hover:shadow-lg hover:-translate-y-1
                transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={30}
                    className="text-green-700 group-hover:scale-110 transition-transform"
                  />

                  <span className="text-sm font-semibold text-green-700">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-5">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {step.description}
                </p>

                <span className="flex items-center gap-2 text-green-700 font-semibold mt-6">
                  Explore stage
                  <ArrowRight size={18} />
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Information Popup */}
      {selectedStep && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
          onClick={() => setSelectedStep(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pathway-title"
            className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4">
              <h2
                id="pathway-title"
                className="text-2xl font-bold"
              >
                {selectedStep.title}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                aria-label="Close information"
                className="text-gray-500 hover:text-green-700"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-600 mt-5 leading-7">
              {selectedStep.details}
            </p>

            <Link
              to="/contact"
              onClick={() => setSelectedStep(null)}
              className="inline-flex items-center gap-2 bg-green-700
              text-white px-6 py-3 rounded-md font-semibold
              hover:bg-green-800 mt-7"
            >
              Make an enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="bg-green-50 px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-950">
              Interested in enterprise development?
            </h2>

            <p className="text-gray-600 mt-3">
              Contact us to discuss your enquiry.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-green-700
            text-white px-6 py-3 rounded-md font-semibold
            hover:bg-green-800 transition"
          >
            Make an enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

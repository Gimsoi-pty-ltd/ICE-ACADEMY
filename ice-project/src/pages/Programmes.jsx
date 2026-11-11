
import { Link } from 'react-router-dom'
import {
  Code,
  BriefcaseBusiness,
  Rocket,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react'

const programmes = [
  {
    icon: Code,
    title: 'Digital and Technology Skills',
    description:
      'Explore digital knowledge and technology skills that support learning, problem-solving and career development.',
    topics: [
      'Digital skills',
      'Technology fundamentals',
      'Computing and innovation',
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professional Development',
    description:
      'Develop professional capabilities that can support personal growth and workplace readiness.',
    topics: [
      'Communication',
      'Workplace readiness',
      'Professional growth',
    ],
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship and Business Development',
    description:
      'Explore entrepreneurship, business thinking and the foundations of developing ideas.',
    topics: [
      'Entrepreneurial thinking',
      'Business development',
      'Idea development',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Emerging Technologies',
    description:
      'Discover innovation and explore how emerging technologies can help solve real-world challenges.',
    topics: [
      'Creative problem-solving',
      'Emerging technologies',
      'Innovation',
    ],
  },
]

export default function Programmes() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <GraduationCap size={18} />
              WHAT WE EXPLORE
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Learning pathways for a changing world.
            </h1>

            <p className="text-gray-300 mt-6 text-base md:text-lg leading-8 max-w-2xl">
              Discover the programme areas that shape the ICE Academy
              learning vision. Explore opportunities to develop skills,
              build knowledge and prepare for the future.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Make an enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programme Areas */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-red-600 font-semibold tracking-wide">
            OUR PROGRAMME AREAS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mt-3">
            Develop skills. Discover opportunities.
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Explore our proposed areas of learning and development.
            Specific courses and opportunities will be published once
            they have been confirmed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {programmes.map((programme) => {
            const Icon = programme.icon

            return (
              <article
                key={programme.title}
                className="group bg-white border border-gray-200 rounded-xl p-7 md:p-8 hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={27} aria-hidden="true" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-950 mt-6">
                  {programme.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-3">
                  {programme.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-4">
                    Areas of focus
                  </h4>

                  <ul className="space-y-3">
                    {programme.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-sm text-gray-700 flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-red-600 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-red-600 text-white px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-red-100 font-semibold mb-3">
              TAKE THE NEXT STEP
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Interested in learning with ICE Academy?
            </h2>

            <p className="mt-4 text-red-100 leading-7">
              Get in touch with our team to enquire about learning
              opportunities and programme information.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-7 py-4 rounded-md font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 whitespace-nowrap"
          >
            Make an enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

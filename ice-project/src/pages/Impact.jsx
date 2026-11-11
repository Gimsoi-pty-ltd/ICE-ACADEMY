
import {
  Users,
  GraduationCap,
  BriefcaseBusiness,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const metrics = [
  {
    icon: Users,
    value: '—',
    label: 'Learners reached',
    description: 'People engaging with learning opportunities.',
  },
  {
    icon: GraduationCap,
    value: '—',
    label: 'Learning completions',
    description: 'Learning milestones and achievements.',
  },
  {
    icon: BriefcaseBusiness,
    value: '—',
    label: 'Partnerships',
    description: 'Collaborations supporting development.',
  },
  {
    icon: TrendingUp,
    value: '—',
    label: 'Growth and development',
    description: 'Progress towards personal and professional goals.',
  },
]

const journey = [
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Build knowledge and develop essential skills.',
  },
  {
    icon: GraduationCap,
    title: 'Develop',
    description: 'Strengthen your abilities and confidence.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Explore ideas and creative solutions.',
  },
  {
    icon: Rocket,
    title: 'Build your future',
    description: 'Apply what you learn to pursue new opportunities.',
  },
]

export default function Impact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp size={18} aria-hidden="true" />
              COHORTS & IMPACT
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Creating opportunities. Building meaningful impact.
            </h1>

            <p className="text-gray-300 max-w-2xl mt-6 text-base md:text-lg leading-8">
              Discover the impact ICE Academy aims to create through
              learning, development, entrepreneurship and innovation.
            </p>

            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 mt-8 bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              Explore programmes
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-red-600 font-semibold tracking-wide">
            OUR IMPACT
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mt-3">
            Progress that matters.
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            We believe meaningful impact starts with opportunities
            that help people learn, grow and develop. Verified
            performance information will be added when approved
            and available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon

            return (
              <article
                key={metric.label}
                className="group bg-white border border-gray-200 rounded-xl p-7 hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={27} aria-hidden="true" />
                </div>

                <p className="text-4xl md:text-5xl font-bold text-gray-950 mt-7">
                  {metric.value}
                </p>

                <h3 className="font-bold text-gray-900 mt-3">
                  {metric.label}
                </h3>

                <p className="text-sm text-gray-500 mt-3 leading-6">
                  {metric.description}
                </p>
              </article>
            )
          })}
        </div>

        <p className="text-sm text-gray-500 mt-6 flex items-center gap-2">
          <CheckCircle2 size={16} className="text-red-600" />
          Performance figures will be published once verified.
        </p>
      </section>

      {/* Learning Journey */}
      <section className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-red-600 font-semibold tracking-wide">
              THE LEARNING JOURNEY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mt-3 leading-tight">
              Every journey starts with an opportunity.
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              ICE Academy aims to create learning experiences that
              encourage people to develop skills, explore ideas and
              work towards their personal and professional goals.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-7 text-red-600 font-semibold hover:text-red-700 transition"
            >
              Learn more about us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-7 md:p-9 shadow-sm">
            <div className="space-y-8">
              {journey.map((step, index) => {
                const Icon = step.icon

                return (
                  <div key={step.title} className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm">
                        <Icon size={22} aria-hidden="true" />
                      </div>

                      {index !== journey.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-red-100" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-red-600">
                          STEP 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-950 mt-1">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 text-sm mt-2 leading-6">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-600 text-white px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-red-100 font-semibold mb-3">
              BE PART OF THE JOURNEY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Your next opportunity starts here.
            </h2>

            <p className="mt-4 text-red-100 leading-7">
              Connect with ICE Academy and discover how learning
              and development can support your future.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-7 py-4 rounded-md font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 whitespace-nowrap"
          >
            Contact us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
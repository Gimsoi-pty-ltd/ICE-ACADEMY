
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  Handshake,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const values = [
  {
    icon: Heart,
    title: 'Accessibility',
    description:
      'Creating opportunities for people to access learning and development.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description:
      'Encouraging continuous personal and professional development.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Promoting creative thinking, exploration and new ideas.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description:
      'Building meaningful relationships through teamwork and partnerships.',
  },
  {
    icon: Sparkles,
    title: 'Impact',
    description:
      'Supporting positive contributions to individuals and communities.',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description:
      'Helping individuals build confidence, knowledge and capabilities.',
  },
]

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-widest">
            About ICE Academy
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 max-w-3xl leading-tight">
            Building opportunities through learning and innovation.
          </h1>

          <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl">
            Discover who we are, what we believe in and how we aim to
            contribute to learning, development and innovation.
          </p>

          <Link
            to="/learning"
            className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Explore learning
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-600 font-semibold uppercase tracking-wider">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Welcome to ICE Academy
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            ICE Academy is focused on creating opportunities through
            learning, development and innovation. We aim to support
            individuals as they build knowledge, strengthen their
            capabilities and explore new possibilities.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-4">
            Through a commitment to continuous development and
            collaboration, we aim to encourage individuals to discover
            their potential and turn ideas into meaningful opportunities.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Vision */}
          <article className="bg-white p-8 md:p-10 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center">
              <Eye size={30} className="text-red-600" />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8 mt-4">
              To contribute to a future where individuals have
              opportunities to learn, develop and innovate.
            </p>
          </article>

          {/* Mission */}
          <article className="bg-white p-8 md:p-10 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center">
              <Target size={30} className="text-red-600" />
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8 mt-4">
              To create opportunities for learning, personal
              development and innovation through accessible and
              meaningful experiences.
            </p>
          </article>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-wider">
              What Guides Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Our Core Values
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              The principles that guide our approach to learning,
              development and innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon

              return (
                <article
                  key={value.title}
                  className="group p-8 border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition duration-300">
                      <Icon
                        size={26}
                        className="text-red-600 group-hover:text-white transition duration-300"
                      />
                    </div>

                    <span className="text-sm font-semibold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mt-6">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    {value.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">

          <div>
            <p className="text-red-400 font-semibold uppercase tracking-wider">
              Your Journey Starts Here
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Ready to explore new opportunities?
            </h2>

            <p className="text-gray-300 mt-4 leading-7">
              Discover learning opportunities and take your next step
              with ICE Academy.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-md font-semibold transition shrink-0"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>
    </main>
  )
}

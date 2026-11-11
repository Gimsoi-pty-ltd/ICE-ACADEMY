
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Users,
  Target,
  GraduationCap,
  Rocket,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const focusAreas = [
  {
    icon: BookOpen,
    title: 'Digital and Technology Skills',
    description:
      'Explore opportunities to develop practical digital and technology skills.',
  },
  {
    icon: Users,
    title: 'Professional Development',
    description:
      'Build professional capabilities and prepare for future opportunities.',
  },
  {
    icon: Lightbulb,
    title: 'Entrepreneurship and Business',
    description:
      'Discover ideas and knowledge that support business development.',
  },
  {
    icon: Target,
    title: 'Innovation and Emerging Technologies',
    description:
      'Explore innovation and the technologies shaping tomorrow.',
  },
]

const impactAreas = [
  {
    icon: Users,
    title: 'Learner Development',
    description: 'Encouraging individuals to build knowledge and confidence.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Opportunities',
    description: 'Promoting access to learning and skills development.',
  },
  {
    icon: TrendingUp,
    title: 'Future Growth',
    description: 'Supporting continuous development and new possibilities.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Welcome to ICE Academy
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-950">
              Learn. Develop. Innovate.
              <span className="text-red-600"> Build Your Future.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Discover opportunities to grow your knowledge, develop practical
              skills and explore innovation through learning.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Programmes
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-gray-300 text-gray-900 font-semibold hover:bg-gray-100 transition"
              >
                Discover ICE Academy
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-10">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <Sparkles className="text-red-600" size={20} />
              </div>

              <p className="text-sm text-gray-500">
                Learn today. Create tomorrow.
              </p>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-70" />

            <div className="relative bg-gray-950 rounded-2xl min-h-80 md:min-h-[430px] flex items-center justify-center p-10 overflow-hidden">
              <div className="absolute w-72 h-72 border border-gray-700 rounded-full" />
              <div className="absolute w-52 h-52 border border-gray-700 rounded-full" />

              <div className="relative text-center">
                <div className="w-28 h-28 bg-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                  <GraduationCap size={65} className="text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mt-8 text-white">
                  Your Future
                  <span className="text-red-400"> Starts Here</span>
                </h2>

                <p className="text-gray-300 mt-4 leading-7">
                  Discover. Develop. Achieve.
                </p>

                <div className="flex justify-center gap-3 mt-8">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-gray-500" />
                  <span className="w-3 h-3 rounded-full bg-gray-500" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-red-600 font-semibold uppercase tracking-wider text-sm">
            About ICE Academy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-950">
            Creating opportunities through learning and innovation
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            ICE Academy is focused on learning, development and innovation.
            Our aim is to create opportunities for individuals to build
            knowledge, strengthen their capabilities and explore new ideas.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-red-600 font-semibold mt-7 hover:gap-4 transition-all duration-300"
          >
            Learn more about us
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-red-600 font-semibold uppercase tracking-wider text-sm">
              What We Focus On
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Explore Areas of Development
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              Explore our proposed areas of learning and development.
              Programme availability and details will be confirmed separately.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="group border border-gray-200 rounded-xl p-7 hover:border-red-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <Icon
                        className="text-red-600 group-hover:text-white transition-colors duration-300"
                        size={27}
                      />
                    </div>

                    <span className="text-sm font-semibold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mt-6">
                    {area.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mt-3">
                    {area.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-red-600 font-semibold text-sm">
                    Explore area
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-7 py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Explore Programmes
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Impact Preview */}
      <section className="bg-gray-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-red-400 font-semibold uppercase tracking-wider text-sm">
              Our Impact
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Building a Future Through Meaningful Development
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              We believe in creating opportunities for people to learn,
              develop and contribute to their communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {impactAreas.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="border border-gray-700 rounded-xl p-8 hover:border-red-500 hover:bg-gray-900 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center">
                    <Icon size={28} className="text-red-400" />
                  </div>

                  <h3 className="text-xl font-bold mt-6">
                    {area.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">
                    {area.description}
                  </p>
                </article>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-red-400 transition"
            >
              Discover our impact
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-red-600 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Explore Your Next Opportunity?
          </h2>

          <p className="mt-5 text-red-100 text-lg leading-8 max-w-2xl mx-auto">
            Connect with ICE Academy to learn more about our learning
            opportunities and partnerships.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-7 py-3 rounded-md font-bold mt-8 hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
          >
            Get in touch
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>
    </main>
  )
}

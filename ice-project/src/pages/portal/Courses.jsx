
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  BookOpen,
  Clock,
  CheckCircle,
  PlayCircle,
  Filter,
  GraduationCap,
} from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Introduction to Digital Skills',
    category: 'Digital Skills',
    description:
      'Explore essential digital knowledge and develop confidence using digital technologies.',
    lessons: 12,
    duration: 'Self-paced',
    progress: 75,
    status: 'In progress',
  },
  {
    id: 2,
    title: 'Professional Development',
    category: 'Professional Growth',
    description:
      'Explore professional skills, workplace readiness and personal development.',
    lessons: 10,
    duration: 'Self-paced',
    progress: 40,
    status: 'In progress',
  },
  {
    id: 3,
    title: 'Introduction to Innovation',
    category: 'Innovation',
    description:
      'Discover creative thinking, problem-solving and innovation principles.',
    lessons: 8,
    duration: 'Self-paced',
    progress: 100,
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Entrepreneurship Fundamentals',
    category: 'Entrepreneurship',
    description:
      'Explore entrepreneurial thinking and the foundations of business ideas.',
    lessons: 9,
    duration: 'Self-paced',
    progress: 0,
    status: 'Not started',
  },
]

export default function Courses() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const categories = [
    'All',
    ...new Set(courses.map((course) => course.category)),
  ]

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        statusFilter === 'All' || course.status === statusFilter

      const matchesCategory =
        categoryFilter === 'All' || course.category === categoryFilter

      return matchesSearch && matchesStatus && matchesCategory
    })
  }, [search, statusFilter, categoryFilter])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link to="/portal/dashboard" className="flex items-center gap-3">
            <div className="bg-red-600 text-white p-2 rounded-lg">
              <GraduationCap size={25} />
            </div>
            <div>
              <h1 className="font-bold text-lg">ICE Academy</h1>
              <p className="text-gray-500 text-xs">Learner Portal</p>
            </div>
          </Link>

          <Link
            to="/portal/dashboard"
            className="text-sm text-red-600 font-semibold"
          >
            Back to dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div>
          <p className="text-red-600 font-semibold text-sm">MY LEARNING</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            My Courses
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl">
            Explore your learning courses, track your progress and continue
            developing your skills.
          </p>
        </div>

        {/* Course statistics */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-9">
          {[
            {
              label: 'Total courses',
              value: courses.length,
              icon: BookOpen,
            },
            {
              label: 'In progress',
              value: courses.filter((c) => c.status === 'In progress').length,
              icon: Clock,
            },
            {
              label: 'Completed',
              value: courses.filter((c) => c.status === 'Completed').length,
              icon: CheckCircle,
            },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-white border rounded-lg p-6 flex items-center gap-4"
            >
              <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{label}</p>
                <p className="text-2xl font-bold mt-1">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Search and filters */}
        <section className="mt-10 bg-white border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-5">
            <Filter size={19} className="text-red-600" />
            <h3 className="font-semibold">Find a course</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses..."
                className="w-full border rounded-md py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="border rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="All">All statuses</option>
              <option value="In progress">In progress</option>
              <option value="Completed">Completed</option>
              <option value="Not started">Not started</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="border rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'All' ? 'All categories' : category}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Course catalogue */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Available courses</h3>
            <p className="text-sm text-gray-500">
              {filteredCourses.length} courses found
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="bg-white border rounded-lg py-16 text-center">
              <Search size={36} className="text-gray-300 mx-auto" />
              <h3 className="font-bold text-lg mt-4">No courses found</h3>
              <p className="text-gray-500 mt-2">
                Try changing your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearch('')
                  setStatusFilter('All')
                  setCategoryFilter('All')
                }}
                className="text-red-600 font-semibold mt-5"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-36 bg-gradient-to-br from-red-700 to-red-500 flex items-center justify-center text-white">
                    <BookOpen size={52} />
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-red-700 bg-red-50 px-3 py-1 rounded-full">
                      {course.category}
                    </span>

                    <h3 className="text-xl font-bold mt-4">
                      {course.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-6 mt-3 min-h-12">
                      {course.description}
                    </p>

                    <div className="flex justify-between text-xs text-gray-500 mt-5">
                      <span>{course.lessons} lessons</span>
                      <span>{course.duration}</span>
                    </div>

                    <div className="w-full bg-gray-100 h-2 rounded-full mt-5 overflow-hidden">
                      <div
                        className="bg-red-600 h-full rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">
                        {course.status}
                      </span>
                      <span className="text-sm font-semibold">
                        {course.progress}%
                      </span>
                    </div>

                    <Link
                      to={`/portal/courses/${course.id}`}
                      className="w-full mt-6 bg-red-600 text-white rounded-md py-3 flex items-center justify-center gap-2 font-semibold hover:bg-red-700"
                    >
                      <PlayCircle size={18} />
                      {course.progress === 100
                        ? 'Review course'
                        : course.progress > 0
                          ? 'Continue learning'
                          : 'Start course'}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

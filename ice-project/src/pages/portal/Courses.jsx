
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
import './Courses.css'

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
      const searchTerm = search.toLowerCase().trim()

      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)

      const matchesStatus =
        statusFilter === 'All' || course.status === statusFilter

      const matchesCategory =
        categoryFilter === 'All' || course.category === categoryFilter

      return matchesSearch && matchesStatus && matchesCategory
    })
  }, [search, statusFilter, categoryFilter])

  const statistics = [
    {
      label: 'Total courses',
      value: courses.length,
      icon: BookOpen,
    },
    {
      label: 'In progress',
      value: courses.filter((course) => course.status === 'In progress').length,
      icon: Clock,
    },
    {
      label: 'Completed',
      value: courses.filter((course) => course.status === 'Completed').length,
      icon: CheckCircle,
    },
  ]

  const clearFilters = () => {
    setSearch('')
    setStatusFilter('All')
    setCategoryFilter('All')
  }

  return (
    <div className="courses-page">

      {/* Header */}
      <header className="courses-header">
        <div className="courses-header-inner">
          <Link to="/portal/dashboard" className="courses-brand">
            <div className="courses-brand-icon">
              <GraduationCap size={26} />
            </div>

            <div>
              <h1>ICE Academy</h1>
              <p>Learner Portal</p>
            </div>
          </Link>

          <Link
            to="/portal/dashboard"
            className="courses-back-link"
          >
            Back to dashboard
          </Link>
        </div>
      </header>

      <main className="courses-container">

        {/* Page introduction */}
        <section className="courses-intro">
          <p className="courses-eyebrow">MY LEARNING</p>

          <h2>My Courses</h2>

          <p className="courses-intro-text">
            Explore your learning courses, track your progress and continue
            developing your skills.
          </p>
        </section>

        {/* Statistics */}
        <section className="courses-statistics">
          {statistics.map(({ label, value, icon: Icon }) => (
            <article className="courses-stat-card" key={label}>
              <div className="courses-stat-icon">
                <Icon size={25} />
              </div>

              <div>
                <p>{label}</p>
                <h3>{value}</h3>
              </div>
            </article>
          ))}
        </section>

        {/* Search and filters */}
        <section className="courses-filter-section">
          <div className="courses-filter-heading">
            <Filter size={20} />
            <h3>Find a course</h3>
          </div>

          <div className="courses-filter-grid">
            <div className="courses-search">
              <Search size={19} />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses..."
                aria-label="Search courses"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              aria-label="Filter by course status"
            >
              <option value="All">All statuses</option>
              <option value="In progress">In progress</option>
              <option value="Completed">Completed</option>
              <option value="Not started">Not started</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              aria-label="Filter by course category"
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
        <section className="courses-catalogue">

          <div className="courses-catalogue-heading">
            <h3>Available courses</h3>
            <p>{filteredCourses.length} courses found</p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="courses-empty">
              <Search size={38} />

              <h3>No courses found</h3>

              <p>
                Try changing your search or filters.
              </p>

              <button type="button" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <article className="course-card" key={course.id}>

                  <div className="course-card-banner">
                    <BookOpen size={50} />
                  </div>

                  <div className="course-card-content">

                    <span className="course-category">
                      {course.category}
                    </span>

                    <h3>{course.title}</h3>

                    <p className="course-description">
                      {course.description}
                    </p>

                    <div className="course-meta">
                      <span>{course.lessons} lessons</span>
                      <span>{course.duration}</span>
                    </div>

                    <div
                      className="course-progress-track"
                      role="progressbar"
                      aria-label={`${course.title} progress`}
                      aria-valuenow={course.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="course-progress-fill"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="course-progress-info">
                      <span className={`course-status ${course.status.toLowerCase().replace(' ', '-')}`}>
                        {course.status}
                      </span>

                      <strong>{course.progress}%</strong>
                    </div>

                    <Link
                      to={`/portal/courses/${course.id}`}
                      className="course-action"
                    >
                      <PlayCircle size={19} />

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

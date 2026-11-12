
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  GraduationCap,
  BookOpen,
  PlayCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  FileText,
} from 'lucide-react'

import './CoursePlayer.css'

const courseData = {
  1: {
    title: 'Introduction to Digital Skills',
    category: 'Digital Skills',
    description:
      'Explore essential digital knowledge and develop confidence using digital technologies.',
    lessons: [
      { title: 'Welcome to the course', duration: '5 min' },
      { title: 'Understanding digital skills', duration: '12 min' },
      { title: 'Introduction to computers', duration: '15 min' },
      { title: 'Working with digital tools', duration: '18 min' },
      { title: 'Online safety and security', duration: '14 min' },
      { title: 'Digital communication', duration: '10 min' },
    ],
  },
  2: {
    title: 'Professional Development',
    category: 'Professional Growth',
    description:
      'Explore professional skills, workplace readiness and personal development.',
    lessons: [
      { title: 'Welcome and introduction', duration: '5 min' },
      { title: 'Communication skills', duration: '12 min' },
      { title: 'Teamwork and collaboration', duration: '15 min' },
      { title: 'Time management', duration: '10 min' },
      { title: 'Professional conduct', duration: '14 min' },
    ],
  },
  3: {
    title: 'Introduction to Innovation',
    category: 'Innovation',
    description:
      'Discover creative thinking, problem-solving and innovation principles.',
    lessons: [
      { title: 'Welcome to innovation', duration: '5 min' },
      { title: 'Understanding innovation', duration: '12 min' },
      { title: 'Creative thinking', duration: '15 min' },
      { title: 'Problem-solving techniques', duration: '14 min' },
    ],
  },
  4: {
    title: 'Entrepreneurship Fundamentals',
    category: 'Entrepreneurship',
    description:
      'Explore entrepreneurial thinking and the foundations of business ideas.',
    lessons: [
      { title: 'Introduction to entrepreneurship', duration: '5 min' },
      { title: 'Identifying opportunities', duration: '12 min' },
      { title: 'Developing business ideas', duration: '15 min' },
      { title: 'Understanding customers', duration: '14 min' },
    ],
  },
}

export default function CoursePlayer() {
  const { courseId } = useParams()
  const course = courseData[courseId]

  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!course) {
    return (
      <main className="course-not-found">
        <div>
          <GraduationCap size={45} className="not-found-icon" />

          <h1>Course not found</h1>

          <p>
            The course you are looking for does not exist in this demo.
          </p>

          <Link to="/portal/courses" className="course-back-button">
            Back to courses
          </Link>
        </div>
      </main>
    )
  }

  const lesson = course.lessons[currentLesson]
  const totalLessons = course.lessons.length

  const progress = Math.round(
    (completedLessons.length / totalLessons) * 100
  )

  const isCompleted = completedLessons.includes(currentLesson)

  function markComplete() {
    if (!isCompleted) {
      setCompletedLessons((previous) => [
        ...previous,
        currentLesson,
      ])
    }
  }

  function goToNext() {
    if (currentLesson < totalLessons - 1) {
      setCurrentLesson((previous) => previous + 1)
    }
  }

  function goToPrevious() {
    if (currentLesson > 0) {
      setCurrentLesson((previous) => previous - 1)
    }
  }

  return (
    <div className="course-player">

      {/* Header */}
      <header className="course-player-header">

        <Link
          to="/portal/dashboard"
          className="course-header-brand"
          aria-label="Learner dashboard"
        >
          <div className="course-header-icon">
            <GraduationCap size={26} />
          </div>

          <div>
            <h1>ICE Academy</h1>
            <p>Course Player</p>
          </div>
        </Link>

        <Link
          to="/portal/courses"
          className="course-header-back"
        >
          Back to My Courses
        </Link>

      </header>

      <div className="course-player-layout">

        {/* Mobile overlay */}
        {sidebarOpen && (
          <button
            className="course-sidebar-overlay"
            aria-label="Close lesson menu overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Lesson sidebar */}
        <aside
          className={`course-sidebar ${
            sidebarOpen ? 'sidebar-open' : ''
          }`}
        >

          <div className="course-sidebar-heading">

            <div>
              <span className="course-section-label">
                COURSE CONTENT
              </span>

              <h2>{course.title}</h2>
            </div>

            <button
              className="course-sidebar-close"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close lesson menu"
            >
              <X size={22} />
            </button>

          </div>

          {/* Progress */}
          <div className="course-progress-section">

            <div className="course-progress-info">
              <span>Course progress</span>
              <strong>{progress}%</strong>
            </div>

            <div className="course-progress-track">
              <div
                className="course-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p>
              {completedLessons.length} of {totalLessons} lessons completed
            </p>

          </div>

          {/* Lessons */}
          <div className="course-lessons">

            <p className="course-lessons-label">
              LESSONS
            </p>

            <div className="course-lessons-list">

              {course.lessons.map((item, index) => {
                const completed = completedLessons.includes(index)
                const active = currentLesson === index

                return (
                  <button
                    key={item.title}
                    onClick={() => {
                      setCurrentLesson(index)
                      setSidebarOpen(false)
                    }}
                    className={`course-lesson-item ${
                      active ? 'active' : ''
                    }`}
                  >

                    <div className="course-lesson-status">
                      {completed ? (
                        <CheckCircle
                          size={19}
                          className="lesson-completed-icon"
                        />
                      ) : (
                        <PlayCircle
                          size={19}
                          className={
                            active
                              ? 'lesson-active-icon'
                              : 'lesson-pending-icon'
                          }
                        />
                      )}
                    </div>

                    <div className="course-lesson-details">

                      <span className="course-lesson-title">
                        {index + 1}. {item.title}
                      </span>

                      <span className="course-lesson-duration">
                        {item.duration}
                      </span>

                    </div>

                  </button>
                )
              })}

            </div>
          </div>

        </aside>

        {/* Main lesson content */}
        <main className="course-main-content">

          <div className="course-content-container">

            {/* Mobile menu button */}
            <button
              className="course-mobile-menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
              View lessons
            </button>

            {/* Course heading */}
            <div className="course-page-heading">

              <span className="course-category">
                {course.category}
              </span>

              <h2>{course.title}</h2>

              <p>{course.description}</p>

            </div>

            {/* Lesson display */}
            <section className="course-lesson-card">

              <div className="course-video-placeholder">

                <div className="course-video-icon">
                  <BookOpen size={37} />
                </div>

                <span className="course-video-label">
                  LESSON {currentLesson + 1} OF {totalLessons}
                </span>

                <h3>{lesson.title}</h3>

                <p>Lesson content placeholder</p>

              </div>

              {/* Lesson information */}
              <div className="course-lesson-body">

                <div className="course-lesson-meta">
                  <FileText size={18} />
                  <span>{lesson.duration}</span>
                </div>

                <h3>About this lesson</h3>

                <p className="course-lesson-description">
                  Welcome to this lesson. Use this learning space to
                  explore the lesson material, understand the key
                  concepts and build your knowledge step by step.
                  Official lesson content and learning resources
                  will be added when available.
                </p>

                {/* Learning objective */}
                <div className="course-learning-objective">

                  <h4>Learning objective</h4>

                  <p>
                    Understand the main concepts introduced in this
                    lesson and consider how they apply to your
                    learning journey.
                  </p>

                </div>

                {/* Lesson navigation */}
                <div className="course-lesson-actions">

                  <button
                    onClick={goToPrevious}
                    disabled={currentLesson === 0}
                    className="course-action-button previous-button"
                  >
                    <ChevronLeft size={18} />
                    Previous lesson
                  </button>

                  {!isCompleted ? (
                    <button
                      onClick={markComplete}
                      className="course-action-button complete-button"
                    >
                      <CheckCircle size={18} />
                      Mark as complete
                    </button>
                  ) : (
                    <div className="course-completed-message">
                      <CheckCircle size={19} />
                      Lesson completed
                    </div>
                  )}

                  <button
                    onClick={goToNext}
                    disabled={currentLesson === totalLessons - 1}
                    className="course-action-button next-button"
                  >
                    Next lesson
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>

            </section>

            {/* Course completion */}
            {completedLessons.length === totalLessons && (
              <div className="course-completion-banner">

                <CheckCircle size={27} />

                <div>
                  <h3>All demo lessons completed!</h3>

                  <p>
                    You have completed all the lessons in this
                    sample course.
                  </p>
                </div>

              </div>
            )}

          </div>

        </main>

      </div>
    </div>
  )
}

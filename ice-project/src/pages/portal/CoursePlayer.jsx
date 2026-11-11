
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

const courseData = {
  1: {
    title: 'Introduction to Digital Skills',
    category: 'Digital Skills',
    description: 'Explore essential digital knowledge and develop confidence using digital technologies.',
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
    description: 'Explore professional skills, workplace readiness and personal development.',
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
    description: 'Discover creative thinking, problem-solving and innovation principles.',
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
    description: 'Explore entrepreneurial thinking and the foundations of business ideas.',
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
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Course not found</h1>
          <p className="text-gray-500 mt-3">
            The course you are looking for does not exist in this demo.
          </p>
          <Link
            to="/portal/courses"
            className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-md"
          >
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
      setCompletedLessons((previous) => [...previous, currentLesson])
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-950 text-white px-5 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/portal/dashboard"
            className="bg-red-600 p-2 rounded-lg"
            aria-label="Learner dashboard"
          >
            <GraduationCap size={25} />
          </Link>
          <div>
            <h1 className="font-bold">ICE Academy</h1>
            <p className="text-xs text-gray-400">Course Player</p>
          </div>
        </div>

        <Link
          to="/portal/courses"
          className="text-sm text-gray-300 hover:text-white"
        >
          Back to My Courses
        </Link>
      </header>

      <div className="flex relative">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <button
            aria-label="Close lesson menu overlay"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          />
        )}

        {/* Lesson sidebar */}
        <aside
          className={`fixed lg:static top-0 bottom-0 left-0 z-40 w-80 bg-white border-r overflow-y-auto transform transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 border-b flex justify-between items-center">
            <div>
              <p className="text-xs text-red-600 font-semibold">
                COURSE CONTENT
              </p>
              <h2 className="font-bold mt-2">{course.title}</h2>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500"
              aria-label="Close lesson menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="p-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Course progress</span>
              <span className="font-bold">{progress}%</span>
            </div>

            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-green-600 h-full rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-xs text-gray-500 mt-2">
              {completedLessons.length} of {totalLessons} lessons completed
            </p>
          </div>

          <div className="px-4 pb-6">
            <p className="text-xs uppercase font-semibold text-gray-400 px-3 mb-3">
              Lessons
            </p>

            <div className="space-y-2">
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
                    className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition ${
                      active
                        ? 'bg-red-50 border border-red-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="mt-1">
                      {completed ? (
                        <CheckCircle className="text-green-600" size={19} />
                      ) : (
                        <PlayCircle
                          className={active ? 'text-red-600' : 'text-gray-400'}
                          size={19}
                        />
                      )}
                    </div>

                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${
                          active ? 'text-red-700' : 'text-gray-800'
                        }`}
                      >
                        {index + 1}. {item.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {item.duration}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </aside>

        {/* Main lesson content */}
        <main className="flex-1 min-w-0 p-5 md:p-8 lg:p-10">
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 text-red-600 font-semibold mb-6"
            >
              <Menu size={20} />
              View lessons
            </button>

            <div className="mb-7">
              <p className="text-red-600 text-sm font-semibold">
                {course.category}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                {course.title}
              </h2>
              <p className="text-gray-500 mt-3">{course.description}</p>
            </div>

            {/* Lesson display */}
            <section className="bg-white border rounded-xl overflow-hidden">
              <div className="bg-gray-950 text-white aspect-video flex flex-col items-center justify-center px-6 text-center">
                <div className="bg-red-600 p-4 rounded-full mb-5">
                  <BookOpen size={36} />
                </div>
                <p className="text-red-300 text-sm font-semibold">
                  LESSON {currentLesson + 1} OF {totalLessons}
                </p>
                <h3 className="text-xl md:text-3xl font-bold mt-3">
                  {lesson.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3">
                  Lesson content placeholder
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <FileText size={17} />
                  <span>{lesson.duration}</span>
                </div>

                <h3 className="text-xl font-bold mt-6">
                  About this lesson
                </h3>

                <p className="text-gray-600 leading-8 mt-3">
                  Welcome to this lesson. Use this learning space to explore
                  the lesson material, understand the key concepts and build
                  your knowledge step by step. Official lesson content and
                  learning resources will be added when available.
                </p>

                <div className="bg-gray-50 rounded-lg p-5 mt-6">
                  <h4 className="font-semibold">Learning objective</h4>
                  <p className="text-gray-600 text-sm leading-7 mt-2">
                    Understand the main concepts introduced in this lesson
                    and consider how they apply to your learning journey.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                  <button
                    onClick={goToPrevious}
                    disabled={currentLesson === 0}
                    className="border border-gray-300 px-5 py-3 rounded-md flex items-center justify-center gap-2 disabled:opacity-40 hover:bg-gray-50"
                  >
                    <ChevronLeft size={18} />
                    Previous lesson
                  </button>

                  {!isCompleted ? (
                    <button
                      onClick={markComplete}
                      className="bg-green-600 text-white px-5 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-green-700"
                    >
                      <CheckCircle size={18} />
                      Mark as complete
                    </button>
                  ) : (
                    <div className="text-green-700 font-semibold flex items-center justify-center gap-2">
                      <CheckCircle size={19} />
                      Lesson completed
                    </div>
                  )}

                  <button
                    onClick={goToNext}
                    disabled={currentLesson === totalLessons - 1}
                    className="bg-red-600 text-white px-5 py-3 rounded-md flex items-center justify-center gap-2 disabled:opacity-40 hover:bg-red-700"
                  >
                    Next lesson
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </section>

            {completedLessons.length === totalLessons && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={25} />
                  <div>
                    <h3 className="font-bold text-green-900">
                      All demo lessons completed!
                    </h3>
                    <p className="text-green-800 text-sm mt-1">
                      You have completed all the lessons in this sample course.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import {
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  ArrowLeft,
} from 'lucide-react'
import './LearnerDashboard.css'

const enrolledCourses = [
  {
    id: 1,
    title: 'Introduction to Digital Skills',
    category: 'Digital Skills',
    progress: 75,
    lessons: 6,
  },
  {
    id: 2,
    title: 'Professional Development',
    category: 'Professional Growth',
    progress: 40,
    lessons: 5,
  },
  {
    id: 3,
    title: 'Introduction to Innovation',
    category: 'Innovation',
    progress: 100,
    lessons: 4,
  },
]

const stats = [
  { icon: BookOpen, label: 'Courses enrolled', value: 3 },
  { icon: TrendingUp, label: 'In progress', value: 2 },
  { icon: CheckCircle, label: 'Completed', value: 1 },
  { icon: Award, label: 'Certificates', value: 2 },
]

export default function LearnerDashboard() {
  return (
    <main className="learner-dashboard-page">
      <section className="learner-dashboard-hero">
        <div className="learner-dashboard-container">
          <Link to="/" className="learner-dashboard-back">
            <ArrowLeft size={16} /> Back to website
          </Link>
          <span className="learner-dashboard-eyebrow">LEARNER PORTAL</span>
          <h1>Welcome back, learner.</h1>
          <p>
            Continue where you left off, explore new courses and track
            your progress with ICE Academy.
          </p>
        </div>
      </section>

      <section className="learner-dashboard-section">
        <div className="learner-dashboard-container">
          <div className="learner-dashboard-stats">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <article key={stat.label} className="learner-dashboard-stat-card">
                  <div className="learner-dashboard-stat-icon">
                    <Icon size={24} />
                  </div>
                  <p className="learner-dashboard-stat-value">{stat.value}</p>
                  <p className="learner-dashboard-stat-label">{stat.label}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="learner-dashboard-section">
        <div className="learner-dashboard-container">
          <div className="learner-dashboard-section-heading">
            <span className="learner-dashboard-label">YOUR COURSES</span>
            <h2>Continue learning</h2>
            <p>Pick up where you left off.</p>
          </div>

          <div className="learner-dashboard-courses">
            {enrolledCourses.map((course) => (
              <article key={course.id} className="learner-dashboard-course-card">
                <div className="learner-dashboard-course-icon">
                  <GraduationCap size={26} />
                </div>
                <span className="learner-dashboard-course-category">
                  {course.category}
                </span>
                <h3>{course.title}</h3>
                <div className="learner-dashboard-progress">
                  <div
                    className="learner-dashboard-progress-bar"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="learner-dashboard-course-meta">
                  <span>{course.lessons} lessons</span>
                  <span>{course.progress}% complete</span>
                </div>
                <Link
                  to={`/portal/courses/${course.id}`}
                  className="learner-dashboard-course-button"
                >
                  {course.progress === 100
                    ? 'Review course'
                    : course.progress > 0
                    ? 'Continue learning'
                    : 'Start course'}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learner-dashboard-section learner-dashboard-section-alt">
        <div className="learner-dashboard-container">
          <div className="learner-dashboard-quick-links">
            <Link to="/portal/courses" className="learner-dashboard-quick-link">
              <BookOpen size={22} />
              <div>
                <p>Browse all courses</p>
                <span>Explore the full programme catalogue</span>
              </div>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/portal/certificates"
              className="learner-dashboard-quick-link"
            >
              <Award size={22} />
              <div>
                <p>View certificates</p>
                <span>See your earned achievements</span>
              </div>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

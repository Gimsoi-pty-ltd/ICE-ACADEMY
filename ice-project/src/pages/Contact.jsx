import { useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

const enquiryCategories = [
  'Programme information',
  'Learning opportunities',
  'Registration support',
  'Partnerships',
  'Enterprise development',
  'General enquiry',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const data = {
      fullName: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      organisation: String(formData.get('organisation') || '').trim(),
      category: String(formData.get('category') || ''),
      message: String(formData.get('message') || '').trim(),
    }

    const newErrors = {}
    if (data.fullName.length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).'
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(data.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    const phoneDigits = data.phone.replace(/\D/g, '')
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      newErrors.phone = 'Please enter a valid contact number.'
    }
    if (!data.category) {
      newErrors.category = 'Please select an enquiry category.'
    }
    if (data.message.length < 10) {
      newErrors.message = 'Your message must contain at least 10 characters.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    form.reset()
  }

  function handleChange() {
    setSubmitted(false)
    setErrors({})
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 font-semibold mb-5 tracking-wide">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We'd like to hear from you.
          </h1>
          <p className="text-gray-300 max-w-2xl mt-6 leading-relaxed text-lg">
            Contact ICE Academy with questions about programmes,
            learning opportunities, partnerships or enterprise development.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Contact Information */}
        <div className="max-w-xl">
          <p className="text-red-600 font-semibold tracking-wide">
            CONTACT ICE ACADEMY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            Send us an enquiry
          </h2>
          <p className="text-gray-600 mt-5 leading-relaxed text-lg">
            Complete the form with your details and enquiry.
            All required fields must be completed before submission.
          </p>

          <div className="mt-12 space-y-10">
            <div className="flex gap-5">
              <div className="text-red-600 shrink-0">
                <Mail size={26} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email enquiries</h3>
                <p className="text-gray-500 mt-2 leading-relaxed">
                  Contact details will be added once confirmed.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="text-red-600 shrink-0">
                <MessageSquare size={26} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">General enquiries</h3>
                <p className="text-gray-500 mt-2 leading-relaxed">
                  Choose the category that best describes your enquiry.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-red-50 rounded-xl p-7">
            <h3 className="font-bold text-gray-900 text-lg">
              How can we help?
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Whether you're interested in learning, development,
              entrepreneurship or partnerships, we're happy to hear
              from you.
            </p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="border border-gray-200 rounded-2xl p-7 md:p-10 shadow-sm h-fit">

          {submitted && (
            <div role="status" aria-live="polite" className="mb-8 rounded-lg bg-green-50 border border-green-200 p-5 text-green-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={22} />
                <p className="font-semibold">Enquiry form completed successfully!</p>
              </div>
              <p className="text-sm mt-3 leading-relaxed">
                Your information passed validation. No information
                has been sent or stored because this is currently
                a frontend prototype.
              </p>
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div role="alert" className="mb-8 rounded-lg bg-red-50 border border-red-200 p-5 text-red-700">
              Please correct the highlighted fields before submitting.
            </div>
          )}

          <form onSubmit={handleSubmit} onChange={handleChange} noValidate className="space-y-7">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2.5">Full name *</label>
              <input id="fullName" name="fullName" type="text" autoComplete="name" required aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? 'fullName-error' : undefined} className={`w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`} placeholder="Enter your full name" />
              {errors.fullName && <p id="fullName-error" className="text-red-600 text-sm mt-2">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2.5">Email address *</label>
              <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={`w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="Enter your email address" />
              {errors.email && <p id="email-error" className="text-red-600 text-sm mt-2">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2.5">Contact number *</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={20} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} onChange={(event) => { event.target.value = event.target.value.replace(/[^0-9+() -]/g, '') }} className={`w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} placeholder="e.g. 0712345678" />
              {errors.phone && <p id="phone-error" className="text-red-600 text-sm mt-2">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="organisation" className="block text-sm font-medium mb-2.5">Organisation (optional)</label>
              <input id="organisation" name="organisation" type="text" autoComplete="organization" className="w-full border border-gray-300 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your organisation" />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2.5">Enquiry category *</label>
              <select id="category" name="category" defaultValue="" required aria-invalid={!!errors.category} aria-describedby={errors.category ? 'category-error' : undefined} className={`w-full border rounded-lg px-4 py-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.category ? 'border-red-500' : 'border-gray-300'}`}>
                <option value="" disabled>Select an enquiry category</option>
                {enquiryCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <p id="category-error" className="text-red-600 text-sm mt-2">{errors.category}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2.5">Message *</label>
              <textarea id="message" name="message" rows={6} required maxLength={2000} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className={`w-full border rounded-lg px-4 py-3.5 resize-y focus:outline-none focus:ring-2 focus:ring-red-500 leading-relaxed ${errors.message ? 'border-red-500' : 'border-gray-300'}`} placeholder="Write your enquiry here..." />
              {errors.message && <p id="message-error" className="text-red-600 text-sm mt-2">{errors.message}</p>}
            </div>

            <button type="submit" className="w-full bg-red-600 text-white rounded-lg px-6 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-red-700 active:scale-[0.99] transition-all duration-200">
              Submit enquiry <Send size={18} />
            </button>
            <p className="text-xs text-gray-500 text-center pt-1">* Required fields</p>
          </form>
        </div>
      </section>
    </main>
  )
}
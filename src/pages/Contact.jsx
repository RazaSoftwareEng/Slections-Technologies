import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md'
import { HiOutlineCheckCircle } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const contactInfo = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'selectionstechnologies@gmail.com',
    href: 'mailto:selectionstechnologies@gmail.com',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: MdPhone,
    label: 'Phone / WhatsApp',
    value: '0300 3209005',
    href: 'tel:+923003209005',
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
  },
  {
    icon: MdLocationOn,
    label: 'Address',
    value: '28 Davis Road, Garhi Shahu, Lahore, 54000',
    href: null,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
]

const initialForm = { name: '', email: '', phone: '', message: '' }

const contactLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://selectionstechnologies.com/contact#webpage',
  url: 'https://selectionstechnologies.com/contact',
  name: 'Contact Selections Technologies',
  description: 'Get in touch with Selections Technologies for web development, software solutions, and IT consulting services.',
  isPartOf: { '@id': 'https://selectionstechnologies.com/#website' },
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '32381f7f-db3c-4f98-9daa-1ea00f3fcdb7',
          subject: `New Contact Form Submission from ${form.name}`,
          from_name: 'Selections Technologies Website',
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setForm(initialForm)
      } else {
        alert('Something went wrong. Please try again or contact us via WhatsApp.')
      }
    } catch {
      alert('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact Us | Get a Free Quote — Selections Technologies"
        description="Contact Selections Technologies for professional web development, software solutions, mobile apps, and IT consulting. Reach us via email, phone, or WhatsApp. Based in Pakistan, serving worldwide."
        keywords="contact Selections Technologies, hire web developer Pakistan, web development quote Pakistan, software development inquiry, Shopify developer contact, WordPress developer hire, digital marketing contact, graphic designer hire Pakistan, mobile app development quote, IT consulting inquiry, WhatsApp IT support Pakistan, affordable web developer, get website made Pakistan, ecommerce store Pakistan, Selection Technologies contact, Selections Tech contact"
        canonical="/contact"
        ogType="website"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }} />
      {/* ─── Page Hero ────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Contact <span className="text-gradient">Us</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed"
            >
              Have a project in mind or need IT advice? We'd love to hear from you. Let's start a conversation.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Main Content ─────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left — Contact Info + Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Info cards */}
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`shrink-0 p-3 rounded-xl ${bg}`}>
                    <Icon className={`${color} text-xl`} size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a href={href} className={`text-sm font-semibold ${color} hover:underline break-all`}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-navy">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Company card */}
              <motion.div
                variants={fadeUp}
                className="p-5 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-cyan/5 border border-brand-blue/20"
              >
                <h3 className="font-bold text-navy text-base mb-1">Selections Technologies</h3>
                <p className="text-sm text-slate-500">Your trusted technology partner for innovative digital solutions.</p>
              </motion.div>

              {/* Google Map */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl overflow-hidden border border-slate-200 h-56 shadow-sm"
              >
                <iframe
                  title="Selections Technologies Location"
                  src="https://maps.google.com/maps?q=28+Davis+Road,+Garhi+Shahu,+Lahore,+54000,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                      <HiOutlineCheckCircle className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-navy mb-3">Message Sent!</h3>
                    <p className="text-slate-500 text-base max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold text-navy mb-2">Send Us a Message</h2>
                    <p className="text-slate-500 text-sm mb-8">Fill out the form below and we'll get back to you promptly.</p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                              errors.name
                                ? 'border-rose-400 focus:ring-rose-200'
                                : 'border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue'
                            }`}
                          />
                          {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                              errors.email
                                ? 'border-rose-400 focus:ring-rose-200'
                                : 'border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue'
                            }`}
                          />
                          {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+92 XXX XXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 resize-none transition-all ${
                            errors.message
                              ? 'border-rose-400 focus:ring-rose-200'
                              : 'border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue'
                          }`}
                        />
                        {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-4 bg-brand-blue hover:bg-blue-500 disabled:opacity-70 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 disabled:hover:translate-y-0"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <MdSend size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

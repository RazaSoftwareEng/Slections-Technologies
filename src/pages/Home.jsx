import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiOutlineUsers,
  HiOutlineCode,
  HiOutlineSupport,
  HiOutlineBadgeCheck,
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiBadgeCheck,
} from 'react-icons/hi'
import { FaStar, FaWhatsapp } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'
import SEO from '../components/SEO'

const BASE = 'https://selectionstechnologies.com'

const homeLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE}/#webpage`,
  url: `${BASE}/`,
  name: 'Selections Technologies | Web Development & IT Solutions Pakistan',
  description: 'Selections Technologies provides innovative web development, software solutions, and digital transformation services to help businesses grow and succeed.',
  isPartOf: { '@id': `${BASE}/#website` },
  about: { '@id': `${BASE}/#organization` },
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Selections Technologies, a basic business website starts from PKR 25,000. WordPress sites range from PKR 40,000–150,000. E-commerce stores start from PKR 80,000. Custom web apps from PKR 200,000. Contact us for a free custom quote tailored to your needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic landing page takes 3–5 days. A WordPress or Shopify store takes 7–14 days. Custom web applications take 4–8 weeks. We provide a clear timeline before starting any project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer website maintenance after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Selections Technologies offers ongoing website maintenance, security updates, content updates, speed optimisation, and dedicated support packages for all our clients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which services does Selections Technologies offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer web development, WordPress development, Shopify store development, mobile app development, digital marketing, SEO, Meta & Google Ads, graphic designing, AI chatbot development, CRM development, custom software development, and IT consulting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with international clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Selections Technologies works with clients worldwide including UK, USA, UAE, Philippines, and more. We communicate in English and Urdu and accept international payments via PayPal, bank transfer, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Selections Technologies located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based at 28 Davis Road, Garhi Shahu, Lahore 54000, Pakistan. You can also reach us on WhatsApp at +92 300 3209005 or email selectionstechnologies@gmail.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a Shopify store for dropshipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We specialise in Shopify dropshipping store setup including product import, payment gateways, theme customisation, app integration, and launch support. Contact us for a free consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide SEO services in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide complete SEO services including keyword research, on-page SEO, technical SEO, link building, local SEO for Pakistan, and Google ranking reports.',
      },
    },
  ],
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const whyCards = [
  {
    icon: HiOutlineUsers,
    title: 'Professional Team',
    desc: 'Our skilled engineers and designers bring years of experience across diverse technology domains.',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/20',
    iconColor: 'text-brand-blue',
  },
  {
    icon: HiOutlineCode,
    title: 'Modern Technologies',
    desc: 'We leverage the latest frameworks and tools to build fast, scalable, and future-proof solutions.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
    iconColor: 'text-brand-cyan',
  },
  {
    icon: HiOutlineSupport,
    title: 'Reliable Support',
    desc: 'Dedicated post-launch support and maintenance to keep your systems running seamlessly.',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: HiOutlineBadgeCheck,
    title: 'Quality Solutions',
    desc: 'Every project undergoes rigorous quality assurance to meet the highest standards of excellence.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
]

const testimonials = [
  {
    name: 'Fatima K.',
    role: 'E-Commerce Owner',
    country: '🇵🇰',
    service: 'WooCommerce Store',
    rating: 5,
    text: 'Selections Technologies built our online store from scratch. Our sales increased 3x within the first month. Extremely professional team with great communication!',
    avatar: 'FK',
    avatarBg: 'bg-pink-500',
  },
  {
    name: 'James R.',
    role: 'Hospitality Manager',
    country: '🇬🇧',
    service: 'WordPress Website',
    rating: 5,
    text: 'Excellent work on our hotel platform. Delivered on time, communicated clearly throughout, and the final result exceeded our expectations. Highly recommend!',
    avatar: 'JR',
    avatarBg: 'bg-brand-blue',
  },
  {
    name: 'Dr. Ahmed S.',
    role: 'Medical Professional',
    country: '🇵🇰',
    service: 'Professional Website',
    rating: 5,
    text: 'My medical website looks very professional and ranks well on Google. Patient inquiries have significantly increased since launch. Very satisfied!',
    avatar: 'AS',
    avatarBg: 'bg-teal-500',
  },
  {
    name: 'Ayesha M.',
    role: 'Online Business Coach',
    country: '🇵🇰',
    service: 'Training Platform',
    rating: 5,
    text: 'They built our e-commerce training academy website. Clean design, fast loading, and exactly what we needed. Will definitely work with them again.',
    avatar: 'AM',
    avatarBg: 'bg-violet-500',
  },
  {
    name: 'Muhammad T.',
    role: 'Real Estate Developer',
    country: '🇵🇰',
    service: 'Real Estate Portal',
    rating: 5,
    text: 'Our property listing platform works perfectly. Selections Technologies understood our requirements from day one and delivered without any issues.',
    avatar: 'MT',
    avatarBg: 'bg-emerald-500',
  },
  {
    name: 'Sarah L.',
    role: 'Digital Marketing Agency',
    country: '🇬🇧',
    service: 'Agency Website',
    rating: 5,
    text: 'Professional, responsive, and delivered exactly what we needed. The team is knowledgeable and easy to work with. A genuine pleasure to collaborate with!',
    avatar: 'SL',
    avatarBg: 'bg-orange-500',
  },
]

const services = [
  'Web Development',
  'WordPress Website',
  'Shopify Store',
  'Mobile App',
  'Digital Marketing',
  'Graphic Design',
  'SEO Services',
  'Custom Software',
  'AI Chatbot',
  'Other',
]

const trustPoints = [
  { icon: HiOutlineLightningBolt, text: 'Fast delivery — projects start within 24 hours' },
  { icon: HiOutlineShieldCheck, text: '100% satisfaction guarantee on all projects' },
  { icon: HiOutlineClock, text: 'Free consultation — no commitment required' },
]

function Orb({ className }) {
  return <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
}

const initialQuote = { name: '', phone: '', service: '', message: '' }

export default function Home() {
  const [form, setForm] = useState(initialQuote)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '32381f7f-db3c-4f98-9daa-1ea00f3fcdb7',
          subject: `New Quote Request from ${form.name}`,
          from_name: 'Selections Technologies Website',
          name: form.name,
          phone: form.phone,
          service: form.service || 'Not specified',
          message: form.message || 'No additional message',
        }),
      })
      const data = await res.json()
      if (data.success) { setDone(true); setForm(initialQuote) }
    } catch {
      alert('Something went wrong. Please WhatsApp us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Web Development & IT Solutions Pakistan"
        description="Selections Technologies — Pakistan's #1 IT company for web development, WordPress, Shopify, mobile apps, digital marketing, graphic design, SEO & custom software. Affordable. Professional. Trusted."
        keywords="Selections Technologies, Selection Technologies, Selections Tech, Selection Tech, web developer Pakistan, web developer, web development company, website design Pakistan, software house Pakistan, IT company Pakistan, mobile app development, digital marketing Pakistan, graphic design Pakistan, Shopify developer Pakistan, WordPress developer Pakistan, ecommerce website Pakistan, SEO services Pakistan, social media marketing, logo design, UI UX design, IT consulting, digital transformation, React developer Pakistan, best IT company Pakistan, affordable web development, custom software development, tech company Pakistan, startup website, business website Pakistan"
        canonical="/"
        ogType="website"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden hero-grid">
        <Orb className="w-96 h-96 bg-brand-blue top-0 -left-32 animate-pulse-slow" />
        <Orb className="w-80 h-80 bg-brand-cyan bottom-20 right-0 animate-pulse-slow" />
        <Orb className="w-64 h-64 bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/40 bg-brand-blue/10 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            IT Solutions &amp; Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Empowering Businesses{' '}
            <span className="text-gradient block sm:inline">Through Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
          >
            Selections Technologies provides innovative web development, software solutions,
            and digital transformation services to help businesses grow and succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5"
            >
              Get Started <HiArrowRight className="text-lg" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-brand-cyan/60 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient">{value}</div>
                <div className="text-xs text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Why Choose Us ────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-widest uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-500 text-base">
              We combine technical expertise with a client-first mindset to deliver solutions that truly make a difference.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyCards.map(({ icon: Icon, title, desc, color, border, iconColor }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${color} ${border} cursor-default overflow-hidden`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-white/60 mb-5 ${iconColor}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <Orb className="w-80 h-80 bg-brand-blue top-0 left-0 opacity-10" />
        <Orb className="w-72 h-72 bg-brand-cyan bottom-0 right-0 opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-400 text-base">
              Real feedback from real clients — businesses we've helped grow with our digital solutions.
            </p>
            {/* Overall rating */}
            <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <FaStar key={s} className="text-yellow-400" size={18} />
                ))}
              </div>
              <span className="text-white font-bold text-sm">5.0</span>
              <span className="text-slate-400 text-sm">· 30+ verified clients</span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold">
                <HiBadgeCheck size={14} />
                Verified Reviews
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <FaStar key={s} className="text-yellow-400" size={13} />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold">
                    <HiBadgeCheck size={12} />
                    Verified
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed flex-grow mb-5">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-white text-sm font-semibold truncate">
                      {t.name} <span className="ml-1">{t.country}</span>
                    </p>
                    <p className="text-slate-400 text-xs truncate">{t.role}</p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-medium whitespace-nowrap">
                    {t.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Services Teaser ──────────────────────────────── */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold tracking-widest uppercase mb-4">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight">
                End-to-End Technology Solutions for{' '}
                <span className="text-gradient">Modern Businesses</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                From concept to deployment, we deliver full-cycle digital solutions — beautifully designed,
                rigorously tested, and built to scale.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                Explore All Services <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
              {['Web Development', 'Shopify & WordPress', 'Mobile Apps', 'Digital Marketing', 'SEO & Google Ads', 'AI Chatbot'].map((s, i) => (
                <motion.div
                  key={s}
                  variants={fadeUp}
                  custom={i}
                  className="bg-white border border-slate-100 shadow-sm p-5 rounded-xl hover:border-brand-blue/30 hover:shadow-md transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan mb-3" />
                  <p className="text-navy text-sm font-semibold">{s}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Quick Quote Form ─────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <Orb className="w-96 h-96 bg-brand-blue top-1/2 right-0 -translate-y-1/2 opacity-10" />
        <div className="absolute inset-0 hero-grid opacity-30" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — pitch */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4"
              >
                Free Consultation
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight"
              >
                Get a <span className="text-gradient">Free Quote</span>{' '}
                in 24 Hours
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-slate-400 text-base leading-relaxed mb-8"
              >
                Tell us about your project and we'll get back to you with a detailed proposal — no commitment, no cost.
              </motion.p>

              <motion.div variants={stagger} className="space-y-4 mb-10">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <motion.div key={text} variants={fadeUp} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center shrink-0">
                      <Icon className="text-brand-cyan" size={17} />
                    </div>
                    <p className="text-slate-300 text-sm">{text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                variants={fadeUp}
                href="https://wa.me/923003209005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/30"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp Instead
              </motion.a>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {done ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                      <HiOutlineCheckCircle className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="text-xl font-extrabold text-navy mb-2">Request Sent!</h3>
                    <p className="text-slate-500 text-sm mb-6">
                      We'll get back to you within 24 hours with a free quote.
                    </p>
                    <button
                      onClick={() => setDone(false)}
                      className="px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-extrabold text-navy mb-1">Start Your Project</h3>
                    <p className="text-slate-400 text-sm mb-6">Fill in a few details and we'll reach out fast.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                            Your Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                            WhatsApp / Phone <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+92 XXX XXXXXXX"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Brief description of your project..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-4 bg-brand-blue hover:bg-blue-500 disabled:opacity-70 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5"
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
                          <>Get Free Quote <MdSend size={17} /></>
                        )}
                      </button>

                      <p className="text-center text-xs text-slate-400">
                        No spam. We'll only contact you about your project.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-cyan relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              Let's build something extraordinary together. Get in touch with our team today and take the first step toward digital excellence.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Start Your Project <HiArrowRight />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

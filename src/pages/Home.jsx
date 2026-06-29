import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiOutlineUsers,
  HiOutlineCode,
  HiOutlineSupport,
  HiOutlineBadgeCheck,
  HiArrowRight,
} from 'react-icons/hi'
import SEO from '../components/SEO'

const homeLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.selectionstechnologies.com/#webpage',
  url: 'https://www.selectionstechnologies.com/',
  name: 'Selections Technologies | Web Development & IT Solutions Pakistan',
  description:
    'Selections Technologies provides innovative web development, software solutions, and digital transformation services to help businesses grow and succeed.',
  isPartOf: { '@id': 'https://www.selectionstechnologies.com/#website' },
  about: { '@id': 'https://www.selectionstechnologies.com/#organization' },
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

// Decorative floating orbs for hero
function Orb({ className }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    />
  )
}

export default function Home() {
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
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden hero-grid">
        {/* Ambient orbs */}
        <Orb className="w-96 h-96 bg-brand-blue top-0 -left-32 animate-pulse-slow" />
        <Orb className="w-80 h-80 bg-brand-cyan bottom-20 right-0 animate-pulse-slow" />
        <Orb className="w-64 h-64 bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/40 bg-brand-blue/10 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            IT Solutions &amp; Services
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Empowering Businesses{' '}
            <span className="text-gradient block sm:inline">Through Technology</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
          >
            Selections Technologies provides innovative web development, software solutions,
            and digital transformation services to help businesses grow and succeed.
          </motion.p>

          {/* Buttons */}
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
              Get Started
              <HiArrowRight className="text-lg" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 hover:border-brand-cyan/60 text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Stats bar */}
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

        {/* Bottom gradient fade */}
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

      {/* ─── Services Teaser ──────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <Orb className="w-96 h-96 bg-brand-blue top-0 right-0 opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                End-to-End Technology Solutions for{' '}
                <span className="text-gradient">Modern Businesses</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                From concept to deployment, we deliver full-cycle digital solutions — beautifully designed,
                rigorously tested, and built to scale.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                Explore All Services
                <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
              {['Web Development', 'Software Development', 'Mobile Apps', 'IT Consulting'].map((s, i) => (
                <motion.div
                  key={s}
                  variants={fadeUp}
                  custom={i}
                  className="glass p-5 rounded-xl hover:border-brand-cyan/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan mb-3" />
                  <p className="text-white text-sm font-semibold">{s}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
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
                Start Your Project
                <HiArrowRight />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

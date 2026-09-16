import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import { HiExternalLink } from 'react-icons/hi'

const BASE = 'https://alirazadeveloper75.github.io/portfolio/'

const projects = [
  {
    id: 1,
    name: 'GuestFlow Pro',
    tagline: 'Hotel Concierge Platform',
    description: 'Digital concierge platform connecting Italian hospitality expertise with UK guests.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://guestflowpro.com/hotels',
    image: BASE + 'images/Projects/new-projects/guest.png',
    fallback: 'linear-gradient(135deg, #1e40af, #0ea5e9)',
  },
  {
    id: 2,
    name: 'Amica Connect',
    tagline: 'Healthcare Staffing Platform',
    description: 'Hire fully compliant healthcare staff — faster, safer, without recruitment agencies.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://www.amicaconnect.com/',
    image: BASE + 'images/Projects/new-projects/amica.png',
    fallback: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
  {
    id: 3,
    name: 'Maira Textile',
    tagline: 'Premium Bedding E-Commerce',
    description: 'Luxury e-commerce store for premium bedding sets, table linens, and curtains.',
    tech: ['WordPress', 'WooCommerce'],
    category: 'E-Commerce',
    live: 'https://mairatextile.com/',
    image: BASE + 'images/Projects/new-projects/mairatextile.png',
    fallback: 'linear-gradient(135deg, #be185d, #f472b6)',
  },
  {
    id: 4,
    name: 'Selections.pk',
    tagline: 'Fashion & Fragrance Store',
    description: 'Luxury e-commerce platform for premium fragrances and fashion products in Pakistan.',
    tech: ['WordPress', 'WooCommerce'],
    category: 'E-Commerce',
    live: 'https://selections.pk/',
    image: BASE + 'images/Projects/new-projects/selectionpk.png',
    fallback: 'linear-gradient(135deg, #b45309, #fbbf24)',
  },
  {
    id: 5,
    name: 'Selections Technologies',
    tagline: 'IT Services Company',
    description: 'Pakistan-based IT services company offering web development and digital solutions.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://selectionstechnologies.com/',
    image: BASE + 'images/Projects/new-projects/selectiontech.png',
    fallback: 'linear-gradient(135deg, #2563EB, #06B6D4)',
  },
  {
    id: 6,
    name: 'Ayesha Consultancy',
    tagline: 'E-Commerce Training Academy',
    description: 'Expert mentorship for eBay, Amazon & Etsy sellers with proven growth strategies.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://ayeshaconsultancy.com/',
    image: BASE + 'images/Projects/new-projects/ayesha.png',
    fallback: 'linear-gradient(135deg, #059669, #34d399)',
  },
  {
    id: 7,
    name: 'Dehleze',
    tagline: 'Fashion & Lifestyle Store',
    description: 'Modern e-commerce platform for fashion, lifestyle, and home products with Pakistan delivery.',
    tech: ['WordPress', 'WooCommerce'],
    category: 'E-Commerce',
    live: 'https://dehleze.com',
    image: BASE + 'images/Projects/dehleze.png',
    fallback: 'linear-gradient(135deg, #dc2626, #f87171)',
  },
  {
    id: 8,
    name: 'Ecomsy',
    tagline: 'IT Services Website',
    description: 'IT service provider specializing in e-commerce solutions and web development.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    live: 'https://alirazadeveloper75.github.io/ecomsy.official/',
    image: BASE + 'images/Projects/ecomsy.png',
    fallback: 'linear-gradient(135deg, #0f172a, #334155)',
  },
  {
    id: 9,
    name: 'Cardiff Transfers',
    tagline: 'Airport & City Transfers UK',
    description: 'Fast and reliable car booking for airport pickups, city rides, and corporate travel in UK.',
    tech: ['HTML', 'Bootstrap'],
    category: 'Web Development',
    live: 'https://alirazadeveloper75.github.io/Cardiff-Transfers/index.html',
    image: BASE + 'images/Projects/cardiff.png',
    fallback: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
  },
  {
    id: 10,
    name: 'Unclaimed Property',
    tagline: 'Legal & Finance Services UK',
    description: 'Helps individuals identify, claim, and manage unclaimed assets in the UK.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://unclaimd.co.uk/',
    image: BASE + 'images/Projects/unclaimed.png',
    fallback: 'linear-gradient(135deg, #374151, #6b7280)',
  },
  {
    id: 11,
    name: 'Dr. Rashid Siraj',
    tagline: 'Surgeon & Healthcare',
    description: 'Professional website for a General, Laparoscopic, and Bariatric Surgeon.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://drrashidsiraj.com/',
    image: BASE + 'images/Projects/siraj.png',
    fallback: 'linear-gradient(135deg, #0284c7, #38bdf8)',
  },
  {
    id: 12,
    name: 'Razastore.pk',
    tagline: 'Multi-Category E-Commerce',
    description: 'E-commerce platform for fashion, electronics, home essentials, and beauty across Pakistan.',
    tech: ['WordPress', 'WooCommerce'],
    category: 'E-Commerce',
    live: 'https://razastorepk.com/',
    image: BASE + 'images/Projects/raza.png',
    fallback: 'linear-gradient(135deg, #7c3aed, #c084fc)',
  },
  {
    id: 13,
    name: 'Malkeeyat',
    tagline: 'Real Estate Pakistan',
    description: 'Real estate platform with residential, commercial, and industrial property listings.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://malkeeyat.com/',
    image: BASE + 'images/Projects/malk.png',
    fallback: 'linear-gradient(135deg, #065f46, #10b981)',
  },
  {
    id: 14,
    name: 'ISLD',
    tagline: 'Global Leadership Platform',
    description: 'Global educational platform for changemakers promoting leadership and diplomacy.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://isldofficial.com/',
    image: BASE + 'images/Projects/isld.png',
    fallback: 'linear-gradient(135deg, #92400e, #f59e0b)',
  },
  {
    id: 15,
    name: 'PinoyCar',
    tagline: 'Automotive Marketplace',
    description: 'Trusted online platform for buying and selling vehicles in the Philippines.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://pinoycar.com/',
    image: BASE + 'images/Projects/pinoy.png',
    fallback: 'linear-gradient(135deg, #1e3a8a, #2563EB)',
  },
  {
    id: 16,
    name: 'IELTS Lahore',
    tagline: 'IELTS Coaching Institute',
    description: 'Premier institute for IELTS exam coaching and spoken English with personalized training.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://ieltslahore.com/',
    image: BASE + 'images/Projects/ielts.png',
    fallback: 'linear-gradient(135deg, #0e7490, #06B6D4)',
  },
  {
    id: 17,
    name: 'WebSol',
    tagline: 'Web Development Agency',
    description: 'Leading provider of web development and digital marketing services.',
    tech: ['WordPress'],
    category: 'WordPress',
    live: 'https://websol.tech/',
    image: BASE + 'images/Projects/websol.png',
    fallback: 'linear-gradient(135deg, #6d28d9, #8b5cf6)',
  },
  {
    id: 18,
    name: 'Online Tools Platform',
    tagline: 'All-in-One Web Toolkit',
    description: 'Web toolkit with file converters, calculators, and media tools for productivity.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    live: 'https://alirazadeveloper75.github.io/calculation-tools/',
    image: BASE + 'images/Projects/tools.png',
    fallback: 'linear-gradient(135deg, #166534, #22c55e)',
  },
]

const techColors = {
  WordPress:    'bg-blue-50 text-brand-blue border border-blue-100',
  WooCommerce:  'bg-violet-50 text-violet-600 border border-violet-100',
  HTML:         'bg-orange-50 text-orange-600 border border-orange-100',
  CSS:          'bg-sky-50 text-sky-600 border border-sky-100',
  JavaScript:   'bg-yellow-50 text-yellow-700 border border-yellow-100',
  Bootstrap:    'bg-purple-50 text-purple-600 border border-purple-100',
}

const filters = ['All', 'WordPress', 'E-Commerce', 'Web Development']

const stats = [
  { value: '18+', label: 'Projects Delivered' },
  { value: '10+', label: 'Industries Served' },
  { value: '5+', label: 'Countries' },
  { value: '100%', label: 'Client Satisfaction' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const portfolioLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://selectionstechnologies.com/portfolio#webpage',
  url: 'https://selectionstechnologies.com/portfolio',
  name: 'Our Portfolio — Selections Technologies',
  description: 'Explore our portfolio of 18+ web development, WordPress, e-commerce, and software projects delivered across Pakistan and worldwide.',
  isPartOf: { '@id': 'https://selectionstechnologies.com/#website' },
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [imgErrors, setImgErrors] = useState({})

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="Our Portfolio | Web Development Projects — Selections Technologies"
        description="Explore 18+ real-world projects by Selections Technologies — WordPress websites, WooCommerce stores, custom web development for clients across Pakistan, UK, Philippines and worldwide."
        keywords="web development portfolio Pakistan, WordPress projects Lahore, WooCommerce store development, IT company portfolio, website development examples, Shopify developer portfolio, digital agency work Pakistan, Selections Technologies projects, web design portfolio Lahore"
        canonical="/portfolio"
        ogType="website"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioLd) }} />

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4"
            >
              Our Work
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
            >
              Our <span className="text-gradient">Portfolio</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
            >
              Real-world projects delivered across Pakistan and worldwide — from WordPress sites and WooCommerce stores to custom web solutions.
            </motion.p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 mt-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center glass rounded-2xl py-4 px-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-gradient">{value}</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Projects ───────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === f
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-105'
                    : 'bg-white text-slate-600 hover:text-brand-blue border border-slate-200 hover:border-brand-blue/30 hover:shadow-sm'
                }`}
              >
                {f}
                <span className={`ml-2 text-xs ${active === f ? 'text-blue-100' : 'text-slate-400'}`}>
                  ({f === 'All' ? projects.length : projects.filter((p) => p.category === f).length})
                </span>
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  custom={i}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {imgErrors[project.id] ? (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: project.fallback }}
                      >
                        <span className="text-white/80 text-sm font-semibold px-4 text-center">{project.name}</span>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgErrors((prev) => ({ ...prev, [project.id]: true }))}
                        loading="lazy"
                      />
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-navy text-sm font-bold rounded-xl hover:bg-brand-blue hover:text-white transition-colors"
                      >
                        View Live Site <HiExternalLink size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-navy leading-tight">{project.name}</h3>
                        <p className="text-xs text-brand-cyan font-semibold mt-0.5">{project.tagline}</p>
                      </div>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-brand-blue hover:bg-brand-blue/5 transition-colors"
                        aria-label={`Visit ${project.name}`}
                      >
                        <HiExternalLink size={17} />
                      </a>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${techColors[t] ?? 'bg-slate-100 text-slate-600'}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-brand-blue/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Build Your{' '}
              <span className="text-gradient">Next Project?</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Let's turn your idea into a professional digital product. Get a free consultation today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

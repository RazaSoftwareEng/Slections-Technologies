import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import {
  HiOutlineGlobeAlt,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineLightBulb,
  HiOutlineCheckCircle,
  HiArrowRight,
} from 'react-icons/hi'
import { FaShopify, FaWordpress, FaGoogle, FaRobot } from 'react-icons/fa6'
import { MdDesignServices, MdCampaign, MdStorefront, MdSearch } from 'react-icons/md'
import { SiMeta } from 'react-icons/si'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: 'easeOut' },
  }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }

const services = [
  {
    icon: HiOutlineGlobeAlt,
    title: 'Web Development',
    desc: 'Custom, fast, and beautiful websites built with React, Next.js, and modern tech — tailored to your brand.',
    features: ['React / Next.js', 'Responsive Design', 'Landing Pages', 'Web Apps'],
    gradient: 'from-brand-blue/20 to-blue-700/5',
    iconBg: 'bg-brand-blue/15',
    iconColor: 'text-brand-blue',
    border: 'border-brand-blue/20 hover:border-brand-blue/50',
  },
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    desc: 'Professional WordPress websites with custom themes, Elementor, WooCommerce, and speed optimisation.',
    features: ['Custom Themes', 'Elementor / Divi', 'WooCommerce', 'Speed & SEO'],
    gradient: 'from-sky-500/20 to-sky-700/5',
    iconBg: 'bg-sky-500/15',
    iconColor: 'text-sky-500',
    border: 'border-sky-500/20 hover:border-sky-500/50',
  },
  {
    icon: FaShopify,
    title: 'Shopify Store Development',
    desc: 'Launch a stunning, conversion-optimised Shopify store — from setup to payment gateways and apps.',
    features: ['Store Setup', 'Theme Customisation', 'Dropshipping', 'App Integration'],
    gradient: 'from-green-500/20 to-green-700/5',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-500',
    border: 'border-green-500/20 hover:border-green-500/50',
  },
  {
    icon: MdStorefront,
    title: 'E-Commerce Solutions',
    desc: 'Full ecommerce development including product management, payments, logistics, and conversion optimisation.',
    features: ['WooCommerce', 'Shopify / Magento', 'Payment Gateways', 'Inventory System'],
    gradient: 'from-amber-500/20 to-amber-700/5',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-500',
    border: 'border-amber-500/20 hover:border-amber-500/50',
  },
  {
    icon: HiOutlineDesktopComputer,
    title: 'Custom Software Development',
    desc: 'Bespoke software engineered for your exact workflow — scalable, secure, and built to last.',
    features: ['Business Automation', 'SaaS Platforms', 'API Development', 'Cloud Solutions'],
    gradient: 'from-cyan-500/20 to-cyan-700/5',
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-brand-cyan',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
  },
  {
    icon: HiOutlineDesktopComputer,
    title: 'CRM Development',
    desc: 'Custom CRM systems that streamline sales, customer management, and team collaboration in one platform.',
    features: ['Lead Management', 'Sales Pipeline', 'Reporting', 'Custom Workflows'],
    gradient: 'from-teal-500/20 to-teal-700/5',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-400',
    border: 'border-teal-500/20 hover:border-teal-500/50',
  },
  {
    icon: HiOutlineDeviceMobile,
    title: 'Mobile App Development',
    desc: 'Intuitive iOS and Android apps built with React Native — cross-platform, high performance, ready to publish.',
    features: ['React Native', 'iOS & Android', 'Push Notifications', 'App Store Launch'],
    gradient: 'from-purple-500/20 to-purple-700/5',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    border: 'border-purple-500/20 hover:border-purple-500/50',
  },
  {
    icon: FaRobot,
    title: 'AI Chatbot Development',
    desc: 'Intelligent AI chatbots powered by ChatGPT / Gemini — automate customer support, lead generation & more.',
    features: ['ChatGPT Integration', 'WhatsApp Bot', 'Website Chatbot', 'Lead Automation'],
    gradient: 'from-violet-500/20 to-violet-700/5',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/20 hover:border-violet-500/50',
  },
  {
    icon: MdCampaign,
    title: 'Digital Marketing',
    desc: 'Data-driven digital marketing strategies that grow traffic, generate leads, and increase revenue.',
    features: ['Marketing Strategy', 'Email Campaigns', 'Content Marketing', 'Analytics'],
    gradient: 'from-orange-500/20 to-orange-700/5',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
    border: 'border-orange-500/20 hover:border-orange-500/50',
  },
  {
    icon: MdSearch,
    title: 'Search Engine Optimisation (SEO)',
    desc: 'Rank higher on Google with technical SEO, keyword strategy, link building, and content optimisation.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Local SEO'],
    gradient: 'from-emerald-500/20 to-emerald-700/5',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
  },
  {
    icon: SiMeta,
    title: 'Meta & Google Ads',
    desc: 'ROI-focused paid ad campaigns on Facebook, Instagram, and Google — targeting the right audience at the right cost.',
    features: ['Facebook / Instagram Ads', 'Google Search & Display', 'Pixel Setup', 'A/B Testing'],
    gradient: 'from-indigo-500/20 to-indigo-700/5',
    iconBg: 'bg-indigo-500/15',
    iconColor: 'text-indigo-400',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
  },
  {
    icon: MdDesignServices,
    title: 'Graphic Designing',
    desc: 'Stunning visual identities, logos, social media creatives, and marketing materials that make your brand stand out.',
    features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'UI/UX Design'],
    gradient: 'from-rose-500/20 to-rose-700/5',
    iconBg: 'bg-rose-500/15',
    iconColor: 'text-rose-400',
    border: 'border-rose-500/20 hover:border-rose-500/50',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'IT Consulting',
    desc: 'Strategic technology consulting to align your IT infrastructure with business goals and drive digital transformation.',
    features: ['Tech Strategy', 'Digital Transformation', 'Architecture Review', 'Security Audit'],
    gradient: 'from-yellow-500/20 to-yellow-700/5',
    iconBg: 'bg-yellow-500/15',
    iconColor: 'text-yellow-500',
    border: 'border-yellow-500/20 hover:border-yellow-500/50',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and audience before writing a single line of code.' },
  { step: '02', title: 'Planning', desc: 'Detailed roadmap, architecture design, timelines, and cost estimates — fully transparent.' },
  { step: '03', title: 'Development', desc: 'Agile sprints with regular demos, feedback loops, and complete transparency.' },
  { step: '04', title: 'Delivery', desc: 'Thorough QA, launch support, and ongoing maintenance to keep you running smoothly.' },
]

const servicesLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@id': 'https://www.selectionstechnologies.com/#organization' },
  serviceType: [
    'Web Development', 'WordPress Development', 'Shopify Store Development',
    'E-Commerce Solutions', 'Custom Software Development', 'CRM Development',
    'Mobile App Development', 'AI Chatbot Development', 'Digital Marketing',
    'Search Engine Optimisation', 'Meta & Google Ads', 'Graphic Designing', 'IT Consulting',
  ],
  areaServed: 'Worldwide',
  url: 'https://www.selectionstechnologies.com/services',
}

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Web Dev, Shopify, WordPress, SEO, Digital Marketing & More"
        description="Selections Technologies offers web development, Shopify stores, WordPress websites, mobile apps, digital marketing, graphic design, logo design, SEO, social media marketing, AI chatbots, CRM, custom software and IT consulting. Get a free quote!"
        keywords="web development services Pakistan, WordPress development, Shopify store development, ecommerce website, mobile app development Pakistan, AI chatbot development, CRM software, custom software development, digital marketing services, SEO services Pakistan, Meta ads Pakistan, Google ads Pakistan, graphic design services, logo design Pakistan, UI UX design, IT consulting, social media marketing, React development, best IT services Pakistan"
        canonical="/services"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />

      {/* ─── Page Hero ────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-cyan rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              What We Do
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
              All-In-One <span className="text-gradient">IT Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
              From websites and mobile apps to digital marketing, AI chatbots, and graphic design — we are the only IT partner your business needs.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
      </section>

      {/* ─── Service Cards ────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {services.map(({ icon: Icon, title, desc, features, gradient, iconBg, iconColor, border }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative p-7 rounded-2xl border bg-gradient-to-br ${gradient} ${border} transition-all duration-300 overflow-hidden group`}
              >
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors" />

                <div className={`inline-flex p-3 rounded-xl ${iconBg} mb-5`}>
                  <Icon className={`${iconColor}`} size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>

                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <HiOutlineCheckCircle className={`${iconColor} shrink-0`} size={14} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${iconColor} hover:gap-3 transition-all`}
                >
                  Get a Quote <HiArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Our Process ──────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/20 text-brand-cyan text-xs font-semibold tracking-widest uppercase mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our <span className="text-gradient">Process</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                variants={fadeUp}
                custom={i}
                className="relative p-6 glass rounded-2xl group hover:border-brand-cyan/30 transition-colors"
              >
                <div className="text-4xl font-black text-gradient opacity-60 mb-4">{step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                {i < process.length - 1 && (
                  <HiArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-brand-blue text-xl z-10" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-cyan">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Have a Project in Mind?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-blue-100 mb-8">
              Let's discuss your requirements and craft a solution that exceeds your expectations.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Get In Touch <HiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

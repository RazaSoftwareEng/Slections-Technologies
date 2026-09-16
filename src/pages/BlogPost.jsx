import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { blogs } from '../data/blogs'
import { HiArrowLeft, HiClock, HiUser, HiArrowRight, HiOutlineScale, HiOutlineCurrencyDollar, HiOutlineSearch, HiOutlineDeviceMobile, HiOutlineClipboardCheck, HiOutlineShieldCheck } from 'react-icons/hi'
import { FaWhatsapp, FaShopify } from 'react-icons/fa'
import { MdCampaign, MdSmartToy } from 'react-icons/md'

const iconMap = {
  shopify:   FaShopify,
  compare:   HiOutlineScale,
  cost:      HiOutlineCurrencyDollar,
  marketing: MdCampaign,
  seo:       HiOutlineSearch,
  mobile:    HiOutlineDeviceMobile,
  ai:        MdSmartToy,
  agency:    HiOutlineClipboardCheck,
  security:  HiOutlineShieldCheck,
}

function PostIcon({ name }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return (
    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
      <Icon size={30} className="text-white" />
    </div>
  )
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="text-slate-600 leading-relaxed text-base mb-5">{block.text}</p>
    case 'h2':
      return <h2 className="text-xl sm:text-2xl font-extrabold text-navy mt-10 mb-4 leading-tight">{block.text}</h2>
    case 'h3':
      return <h3 className="text-lg font-bold text-navy mt-7 mb-3">{block.text}</h3>
    case 'ul':
      return (
        <ul className="space-y-2 mb-5 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="space-y-2.5 mb-5 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <div className="my-6 p-5 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex items-start gap-3">
          <span className="text-brand-blue text-lg mt-0.5 shrink-0">💡</span>
          <p className="text-brand-blue text-sm font-medium leading-relaxed">{block.text}</p>
        </div>
      )
    case 'table':
      return (
        <div className="my-6 overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-white">
                {block.headers.map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-3 text-slate-600 leading-snug ${ci === 0 ? 'font-medium text-navy' : ''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogs.find((b) => b.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const currentIndex = blogs.findIndex((b) => b.slug === slug)
  const prev = blogs[currentIndex - 1] || null
  const next = blogs[currentIndex + 1] || null

  const postLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    url: `https://selectionstechnologies.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://selectionstechnologies.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Selections Technologies',
      logo: { '@type': 'ImageObject', url: 'https://selectionstechnologies.com/og-image.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://selectionstechnologies.com/blog/${post.slug}` },
    keywords: post.keywords,
    articleSection: post.category,
    inLanguage: 'en',
    isAccessibleForFree: true,
  }

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        canonical={`/blog/${post.slug}`}
        ogType="article"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postLd) }} />

      {/* ─── Hero ─────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: post.coverGradient }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors">
              <HiArrowLeft size={16} /> Back to Blog
            </Link>
            <PostIcon name={post.icon} />
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${post.categoryColor} bg-white/90`}>{post.category}</span>
              <span className="flex items-center gap-1 text-white/70 text-xs"><HiClock size={12} />{post.readTime}</span>
              <span className="text-white/40">·</span>
              <span className="text-white/70 text-xs">
                {new Date(post.date).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl">{post.excerpt}</p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">ST</div>
              <span className="flex items-center gap-1 text-white/70 text-sm"><HiUser size={13} />{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Article Body ─────────────────── */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}

              {/* Author box */}
              <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold text-sm shrink-0">ST</div>
                <div>
                  <p className="font-bold text-navy text-sm">Selections Technologies</p>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    IT company based in Lahore, Pakistan. We build websites, apps, and digital marketing strategies for businesses across Pakistan and worldwide.
                  </p>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {prev && (
                  <Link to={`/blog/${prev.slug}`} className="group flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-brand-blue/30 hover:shadow-md transition-all">
                    <HiArrowLeft className="text-slate-400 group-hover:text-brand-blue mt-0.5 shrink-0 transition-colors" size={18} />
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Previous</p>
                      <p className="text-sm font-semibold text-navy group-hover:text-brand-blue transition-colors leading-tight line-clamp-2">{prev.title}</p>
                    </div>
                  </Link>
                )}
                {next && (
                  <Link to={`/blog/${next.slug}`} className="group flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-2xl hover:border-brand-blue/30 hover:shadow-md transition-all sm:ml-auto text-right">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Next</p>
                      <p className="text-sm font-semibold text-navy group-hover:text-brand-blue transition-colors leading-tight line-clamp-2">{next.title}</p>
                    </div>
                    <HiArrowRight className="text-slate-400 group-hover:text-brand-blue mt-0.5 shrink-0 transition-colors" size={18} />
                  </Link>
                )}
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-navy to-brand-blue/80 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-extrabold text-base mb-2">Need Help?</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-5">
                  Get a free consultation from our team. We'll help you choose the right solution for your business.
                </p>
                <Link to="/contact" className="block text-center py-2.5 bg-white text-navy text-xs font-bold rounded-xl hover:bg-blue-50 transition-colors mb-3">
                  Get Free Quote
                </Link>
                <a
                  href="https://wa.me/923003209005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-green-500 hover:bg-green-400 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  <FaWhatsapp size={14} /> WhatsApp Us
                </a>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                <h3 className="font-extrabold text-navy text-sm mb-4">More Articles</h3>
                <div className="space-y-4">
                  {blogs.filter((b) => b.slug !== slug).slice(0, 4).map((b) => (
                    <Link key={b.id} to={`/blog/${b.slug}`} className="group flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: b.coverGradient }}>
                        <span className="text-white text-xs font-bold">{b.id}</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-navy leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">{b.title}</p>
                        <span className="text-xs text-slate-400 mt-0.5 block">{b.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  )
}

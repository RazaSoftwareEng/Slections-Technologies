import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import logo from '../assests/logo.png'

const socials = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/selections.technologies', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/selections.technologies/?hl=en', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/selections-technologies-792b62426/?skipRedirect=true', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/923003209005', label: 'WhatsApp' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/courses', label: 'Courses' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden md:block bg-navy overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between text-white">
              <div className="flex items-center gap-7">
                <a href="mailto:selectionstechnologies@gmail.com" className="flex items-center gap-2 text-sm font-medium hover:text-brand-cyan transition-colors">
                  <HiOutlineMail size={17} />
                  selectionstechnologies@gmail.com
                </a>
                <a href="tel:+923003209005" className="flex items-center gap-2 text-sm font-medium hover:text-brand-cyan transition-colors">
                  <HiOutlinePhone size={17} />
                  +92 300 3209005
                </a>
              </div>
              <div className="flex items-center gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white hover:text-brand-cyan transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 bg-white ${
          scrolled ? 'shadow-md shadow-slate-200/80 py-2' : 'py-3 border-b border-slate-100'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Selections Technologies — Web Development Pakistan" className="h-12 w-auto object-contain" width="200" height="48" fetchPriority="high" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-brand-blue bg-brand-blue/8'
                    : 'text-navy hover:text-brand-blue hover:bg-brand-blue/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md shadow-brand-blue/25 hover:shadow-brand-blue/40"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-navy p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/8'
                        : 'text-navy hover:text-brand-blue hover:bg-slate-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-brand-blue text-white text-sm font-semibold rounded-lg text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

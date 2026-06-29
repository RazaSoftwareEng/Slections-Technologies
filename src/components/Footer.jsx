import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import logo from '../assests/logo.png'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Web Development',
  'Shopify Store Development',
  'WordPress Development',
  'Mobile App Development',
  'Digital Marketing & SEO',
  'Graphic Designing',
]

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/923043309005', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="bg-white rounded-xl px-4 py-2 inline-block shadow-sm">
                <img src={logo} alt="Selections Technologies" className="h-10 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Empowering businesses through innovative technology solutions, modern web development, and reliable digital services worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-blue/80 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brand-blue rounded-full shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-brand-cyan rounded-full shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MdEmail className="text-brand-cyan mt-0.5 shrink-0" size={16} />
                <a href="mailto:selectionstechnologies@gmail.com" className="hover:text-brand-cyan transition-colors break-all">
                  selectionstechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MdPhone className="text-brand-cyan mt-0.5 shrink-0" size={16} />
                <a href="tel:+923003209005" className="hover:text-brand-cyan transition-colors">
                  0300 3209005
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MdLocationOn className="text-brand-cyan mt-0.5 shrink-0" size={16} />
                <span>28 Davis Road, Garhi Shahu, Lahore, 54000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Selections Technologies. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            28 Davis Road, Garhi Shahu, Lahore, 54000 &nbsp;·&nbsp;
            <span className="text-brand-cyan">selectionstechnologies@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

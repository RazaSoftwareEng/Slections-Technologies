import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp — bottom left */}
      <motion.a
        href="https://wa.me/923003209005"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-shadow"
      >
        <FaWhatsapp size={22} />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </motion.a>

      {/* Call Now — bottom right */}
      <motion.a
        href="tel:+923003209005"
        aria-label="Call Now"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40 hover:shadow-brand-blue/60 transition-shadow"
      >
        <FaPhone size={18} />
        <span className="text-sm font-semibold hidden sm:inline">Call Now</span>
      </motion.a>
    </>
  )
}

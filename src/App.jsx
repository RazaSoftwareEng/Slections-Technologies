import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.selectionstechnologies.com/#organization',
      name: 'Selections Technologies',
      url: 'https://www.selectionstechnologies.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.selectionstechnologies.com/favicon.svg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+92-304-3309005',
        contactType: 'customer service',
        availableLanguage: ['English', 'Urdu'],
      },
      sameAs: [],
      email: 'info@selectionstechnologies.com',
      areaServed: 'Worldwide',
      description:
        'Selections Technologies provides innovative web development, software solutions, mobile app development, and IT consulting services.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.selectionstechnologies.com/#website',
      url: 'https://www.selectionstechnologies.com',
      name: 'Selections Technologies',
      publisher: {
        '@id': 'https://www.selectionstechnologies.com/#organization',
      },
    },
  ],
}

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<Courses />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <FloatingButtons />
      </Router>
    </HelmetProvider>
  )
}

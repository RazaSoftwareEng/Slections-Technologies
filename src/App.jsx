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
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

const BASE = 'https://selectionstechnologies.com'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${BASE}/#organization`,
      name: 'Selections Technologies',
      alternateName: ['Selection Technologies', 'Selections Tech', 'ST'],
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/og-image.png`,
        width: 512,
        height: 512,
      },
      image: `${BASE}/og-image.png`,
      description:
        'Selections Technologies is a Pakistan-based IT company offering web development, WordPress, Shopify, mobile app development, digital marketing, SEO, graphic design, AI chatbots, CRM, and custom software solutions.',
      telephone: '+923003209005',
      email: 'selectionstechnologies@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '28 Davis Road',
        addressLocality: 'Garhi Shahu',
        addressRegion: 'Lahore',
        postalCode: '54000',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.5497,
        longitude: 74.3436,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'PKR, USD, GBP',
      paymentAccepted: 'Cash, Bank Transfer, JazzCash, EasyPaisa, PayPal',
      areaServed: [
        { '@type': 'Country', name: 'Pakistan' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        'Worldwide',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Store Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Designing', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbot Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Solutions', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Development', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Consulting', provider: { '@id': `${BASE}/#organization` } } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta & Google Ads', provider: { '@id': `${BASE}/#organization` } } },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+923003209005',
        contactType: 'customer service',
        availableLanguage: ['English', 'Urdu'],
        areaServed: 'Worldwide',
        contactOption: 'HearingImpairedSupported',
      },
      sameAs: [
        'https://www.facebook.com/selections.technologies',
        'https://www.instagram.com/selections.technologies/?hl=en',
        'https://www.linkedin.com/in/selections-technologies-792b62426/?skipRedirect=true',
        `https://wa.me/923003209005`,
      ],
      founder: {
        '@type': 'Person',
        name: 'Ali Raza',
        jobTitle: 'Founder & CEO',
        url: 'https://alirazadeveloper75.github.io/portfolio/',
      },
      foundingDate: '2019',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 5,
        maxValue: 20,
      },
      keywords: 'web development, WordPress, Shopify, mobile app, digital marketing, SEO, graphic design, IT company Pakistan, Lahore',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Selections Technologies',
      description: "Pakistan's trusted IT company for web development and digital solutions",
      inLanguage: 'en-US',
      publisher: { '@id': `${BASE}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
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
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <FloatingButtons />
      </Router>
    </HelmetProvider>
  )
}

import { Helmet } from 'react-helmet-async'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Zoe Health Management Systems | Medical Tourism & Patient Coordination in the DMV</title>
        <meta
          name="description"
          content="Zoe Health Management Systems provides fully coordinated medical travel, treatment, and recovery — from the first consultation to complete recovery. Serving patients across Washington DC, Maryland and Virginia."
        />
        <link rel="canonical" href="https://www.zoehealthmgmt.com/" />
      </Helmet>
      <a href="#main" className="skip-link" style={{ position: 'absolute', left: '-9999px' }}>
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

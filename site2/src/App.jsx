import { Helmet } from 'react-helmet-async'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Zoe Health Management Systems — Coordinated Medical Travel in the DMV</title>
        <meta
          name="description"
          content="Trusted, on-ground medical travel coordination connecting patients to Johns Hopkins, University of Maryland, Children's National and other nationally ranked health systems in the DMV."
        />
        <link rel="canonical" href="https://www.zoehealthmanagement.com/" />
      </Helmet>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

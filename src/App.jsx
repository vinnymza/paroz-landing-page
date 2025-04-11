import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Element } from 'react-scroll'

// Components
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const theme = {
  colors: {
    primaryDark: '#0D1F24',
    primaryMedium: '#2D4A53',
    primaryLight: '#69818D',
    accent: '#A8ABAF',
    textDark: '#232323',
    textLight: '#ffffff',
  },
  fonts: {
    main: '"Inter", sans-serif',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    midscreen: '1150px',
  },
}

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  // Añadir atributos de esquema para SEO
  React.useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Paroz Labs",
      "url": "https://parozlabs.com",
      "logo": "https://parozlabs.com/logo.png",
      "description": "Software Factory en Mendoza, Argentina. Ofrecemos servicios de desarrollo web, móvil y soluciones digitales de alta calidad.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida España 263",
        "addressLocality": "Mendoza",
        "addressRegion": "Mendoza",
        "postalCode": "5500",
        "addressCountry": "AR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5492616299794",
        "contactType": "customer service",
        "email": "federico@parozlabs.com"
      },
      "sameAs": [
        "https://www.linkedin.com/company/paroz-labs/"
      ]
    };

    // Crear y añadir el script de schema.org al head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App

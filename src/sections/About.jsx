import React from 'react'
import styled from 'styled-components'
import { FaAward, FaUsers, FaProjectDiagram, FaRocket, FaLinkedin } from 'react-icons/fa'

const AboutContainer = styled.div`
  padding: 100px 0;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
`

const AboutContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textDark};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
`

const TeamSection = styled.div`
  margin-bottom: 80px;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 80px;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AboutTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 20px;
`

const AboutText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.8;
  margin-bottom: 25px;
`

const AboutImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
`

const ValueProposition = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`

const ValueCard = styled.div`
  background-color: white;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(105, 129, 141, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1.5rem;
`

const ValueTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 15px;
`

const ValueDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
`

const JoinCTA = styled.div`
  margin-top: 60px;
  text-align: center;
  padding: 50px 30px;
  background: linear-gradient(135deg, rgba(13, 31, 36, 0.05) 0%, rgba(45, 74, 83, 0.1) 100%);
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`

const JoinText = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 15px;
`

const JoinDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: #0077B5; /* LinkedIn blue */
  color: white;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 8px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background-color: #005c8d;
  }
  
  svg {
    font-size: 1.3rem;
  }
`

const About = () => {
  const values = [
    {
      icon: <FaAward />,
      title: 'Experiencia',
      description: 'Nuestro equipo cuenta con amplia experiencia como Tech Leads y Engineering Managers en empresas líderes como Eventbrite, Mercado Libre, Bitso y Mundi.'
    },
    {
      icon: <FaUsers />,
      title: 'Colaboración',
      description: 'Trabajamos en estrecha colaboración con nuestros clientes, entendiendo su negocio y problemáticas para ofrecer soluciones realmente efectivas.'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Mejores Prácticas',
      description: 'Aplicamos las mejores prácticas de la industria en desarrollo de software, gestión de proyectos y producto para garantizar resultados excepcionales.'
    },
    {
      icon: <FaRocket />,
      title: 'Soluciones Adaptadas',
      description: 'Diseñamos soluciones a medida que se adaptan perfectamente a las necesidades específicas de cada cliente, maximizando el valor entregado.'
    }
  ]

  return (
    <AboutContainer>
      <AboutContent>
        <SectionTitle>Sobre Nosotros</SectionTitle>
        <SectionDescription>
        Desde Mendoza, potenciamos negocios de toda la región con tecnología estratégica y escalable. 
        No nacimos como una agencia, nacimos resolviendo problemas reales dentro de empresas como Eventbrite, Mercado Libre, Bitso y Mundi.io.
        </SectionDescription>
        
        <AboutGrid>
          <AboutInfo>
            <AboutTitle>Nuestra Filosofía</AboutTitle>
            <AboutText>
            En Paroz Labs no solo desarrollamos código, interpretamos el negocio detrás del software. 
            Nos destacamos por comprender en profundidad los desafíos de nuestros clientes y crear soluciones digitales con impacto real y valor tangible.
            </AboutText>
            

            <AboutText>
            Nuestro equipo fundador cuenta con experiencia comprobada: se desempeñaron como Tech Leads y Engineering Managers en referentes del ecosistema tecnológico como 
            Eventbrite, Mercado Libre, Bitso y Mundi. De estas empresas incorporaron metodologías de vanguardia en desarrollo de software, 
            gestión de equipos y productos tecnológicos de alto rendimiento.
            </AboutText>
          </AboutInfo>
          
          <AboutImageContainer>
            <AboutImage src="/logo-sin-fondo.png" alt="Paroz Labs Team" />
          </AboutImageContainer>
        </AboutGrid>
        
        <TeamSection>
          <AboutTitle style={{ textAlign: 'center', marginBottom: '40px' }}>¿Por qué elegirnos?</AboutTitle>
          <ValueProposition>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValueProposition>
        </TeamSection>
        
        <JoinCTA>
          <JoinText>¿Te gustaría trabajar con nosotros?</JoinText>
          <JoinDescription>Conecta con nosotros en LinkedIn para conocer nuestras oportunidades laborales</JoinDescription>
          <SocialButton 
            href="https://www.linkedin.com/company/paroz-labs/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visita nuestro perfil de LinkedIn"
          >
            <FaLinkedin aria-hidden="true" title="LinkedIn de Paroz Labs" /> Síguenos en LinkedIn
          </SocialButton>
        </JoinCTA>
      </AboutContent>
    </AboutContainer>
  )
}

export default About
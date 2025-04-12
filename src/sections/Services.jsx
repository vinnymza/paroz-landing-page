import React from 'react'
import styled from 'styled-components'
import { FaCode, FaMobile, FaDatabase, FaCloud, FaChartLine, FaCogs, FaWhatsapp, FaEnvelope, FaCalendar, FaRocket } from 'react-icons/fa'
import { AiOutlineShareAlt } from "react-icons/ai";


const ServicesContainer = styled.div`
  padding: 100px 0;
  background-color: #f9f9f9;
`

const ServicesContent = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
`

const ServiceCard = styled.div`
  background-color: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    &:before {
      transform: translateY(5%);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primaryLight}, ${({ theme }) => theme.colors.accent});
    z-index: 2;
    transition: all 0.3s ease;
  }
`

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(105, 129, 141, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 2rem;
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: white;
  }
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 15px;
`

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textDark};
  line-height: 1.6;
  flex-grow: 1;
`

const ContactCTA = styled.div`
  margin-top: 80px;
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, rgba(13, 31, 36, 0.05) 0%, rgba(45, 74, 83, 0.1) 100%);
  border-radius: 15px;
`

const ContactText = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 25px;
`

const ContactButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: ${({ theme, secondary }) => secondary ? 'transparent' : theme.colors.primaryDark};
  color: ${({ theme, secondary }) => secondary ? theme.colors.primaryDark : theme.colors.textLight};
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 8px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme, secondary }) => secondary ? theme.colors.primaryLight : theme.colors.primaryMedium};
    color: ${({ theme }) => theme.colors.textLight};
    border-color: ${({ theme, secondary }) => secondary ? theme.colors.primaryLight : theme.colors.primaryMedium};
  }
`

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Desarrollo Web',
      description: 'Creamos plataformas online a medida que hacen crecer tu negocio. Desde sistemas internos hasta productos para tus clientes, nos encargamos de todo para que funcione perfecto y se vea profesional.'
    },
    {
      icon: <FaMobile />,
      title: 'Aplicaciones Móviles',
      description: 'Creamos apps que funcionan tanto en Android como en iPhone, con una experiencia rápida, fluida y adaptada a lo que tus usuarios realmente necesitan.'
    },
    {
      icon: <FaDatabase />,
      title: 'Optimización de Información',
      description: 'Te ayudamos a tener tus datos organizados, accesibles y útiles. Para que puedas tomar mejores decisiones, sin hojas de cálculo infinitas.'
    },
    {
      icon: <FaRocket />,
      title: 'Acompañamiento Post-Lanzamiento',
      description: 'No te dejamos solo después del desarrollo. Te guiamos, medimos resultados y ajustamos el producto con vos.'
    },
    {
      icon: <AiOutlineShareAlt />,
      title: 'Inteligencia Artificial',
      description: 'Aplicamos IA para automatizar procesos, mejorar decisiones y potenciar tus productos. Desde recomendaciones inteligentes hasta análisis predictivo, usamos tecnología real para resolver problemas reales de tu negocio.'
    },
    {
      icon: <FaCogs />,
      title: 'Mantenimiento y Mejora',
      description: 'Brindamos servicios de mantenimiento, actualización y optimización de sistemas existentes para asegurar su correcto funcionamiento y evolución.'
    }
  ]
//Escalamos tu negocio con software a medida, entendiendo tu realidad. Somos tu partner tecnológico para crear soluciones digitales que resuelven problemas reales, no solo líneas de código.
  return (
    <ServicesContainer>
      <ServicesContent>
        <SectionTitle>Nuestros Servicios</SectionTitle>
        <SectionDescription>
        Desarrollamos software y soluciones digitales entendiendo tu realidad. 
        Somos tu partner tecnológico para crear soluciones digitales que resuelven problemas reales
        </SectionDescription>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ContactCTA>
          <ContactText>¿Listo para impulsar tu empresa con nuestros servicios?</ContactText>
          <ContactButtons>
            <ContactButton href="https://calendly.com/gustavo-parozlabs/30min" target="_blank" rel="noopener noreferrer" aria-label="Agendá una reunión">
              <FaCalendar aria-hidden="true" title="Agendá una reunión" /> Agendá una reunión
            </ContactButton>
            <ContactButton href="mailto:federico@parozlabs.com" aria-label="Envíanos un correo electrónico" secondary>
              <FaEnvelope aria-hidden="true" title="Email de Paroz Labs" /> Email
            </ContactButton>
          </ContactButtons>
        </ContactCTA>
      </ServicesContent>
    </ServicesContainer>
  )
}

export default Services
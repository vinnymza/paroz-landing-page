import React from 'react'
import styled from 'styled-components'
import { FaCode, FaMobile, FaDatabase, FaCloud, FaChartLine, FaCogs, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

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
      description: 'Creamos plataformas web a medida, aplicaciones SaaS y sistemas con las mejores prácticas y tecnologías como ReactJs, NodeJS, Java, PostgreSql.'
    },
    {
      icon: <FaMobile />,
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos aplicaciones multiplataforma con React Native para Android e iOS que destacan por su rendimiento y experiencia de usuario.'
    },
    {
      icon: <FaDatabase />,
      title: 'Arquitectura de Datos',
      description: 'Diseñamos soluciones de bases de datos escalables y optimizadas para gestionar grandes volúmenes de información con PostgreSQL y otras tecnologías.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud y DevOps',
      description: 'Implementamos soluciones cloud escalables y automatizamos procesos de desarrollo e integración continua para optimizar el ciclo de vida del software.'
    },
    {
      icon: <FaChartLine />,
      title: 'Consultoría Técnica',
      description: 'Ofrecemos asesoramiento estratégico para potenciar su negocio digital, evaluar arquitecturas existentes y definir hojas de ruta tecnológicas.'
    },
    {
      icon: <FaCogs />,
      title: 'Mantenimiento y Mejora',
      description: 'Brindamos servicios de mantenimiento, actualización y optimización de sistemas existentes para asegurar su correcto funcionamiento y evolución.'
    }
  ]

  return (
    <ServicesContainer>
      <ServicesContent>
        <SectionTitle>Nuestros Servicios</SectionTitle>
        <SectionDescription>
        Desarrollamos software y soluciones digitales de punta, con alta escalabilidad y calidad premium, totalmente a medida de lo que tu empresa necesita. 
        Manejamos la última tecnología para que tu negocio destaque en el mercado digital actual.
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
          <ContactText>¿Listo para impulsar tu proyecto con nuestros servicios?</ContactText>
          <ContactButtons>
            <ContactButton href="https://wa.me/5492616299794" target="_blank" rel="noopener noreferrer" aria-label="Contáctanos por WhatsApp">
              <FaWhatsapp aria-hidden="true" title="WhatsApp de Paroz Labs" /> WhatsApp
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
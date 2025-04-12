import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaCalendar } from 'react-icons/fa'

const ContactContainer = styled.div`
  padding: 100px 0;
  background: linear-gradient(135deg, #0D1F24 0%, #2D4A53 100%);
  color: ${({ theme }) => theme.colors.textLight};
`

const ContactContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
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
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const SectionDescription = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  margin-bottom: 40px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.midscreen}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`

const ContactCard = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 10px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const ContactCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 1.5rem;
`

const ContactLabel = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`

const ContactDetail = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`

const LocationMap = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`

const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <SectionTitle>Contáctanos</SectionTitle>
        <SectionDescription>
          Estamos listos para ayudarte a llevar tu negocio al siguiente nivel. Ponte en contacto con nosotros
          y conversemos sobre tus necesidades tecnológicas.
        </SectionDescription>
        
        <ContactInfo>
          <ContactCard href="mailto:federico@parozlabs.com" aria-label="Enviar email a Paroz Labs">
            <ContactCardHeader>
              <ContactIcon>
                <FaEnvelope aria-hidden="true" title="Email de contacto" />
              </ContactIcon>
              <ContactLabel>Email</ContactLabel>
            </ContactCardHeader>
            <ContactDetail>
              federico@parozlabs.com
            </ContactDetail>
          </ContactCard>
          
          <ContactCard href="https://calendly.com/gustavo-parozlabs/30min" target="_blank" rel="noopener noreferrer" aria-label="Agendá una reunión">
            <ContactCardHeader>
              <ContactIcon>
                <FaCalendar aria-hidden="true" title="WhatsApp de contacto" />
              </ContactIcon>
              <ContactLabel>Agendá</ContactLabel>
            </ContactCardHeader>
            <ContactDetail>
              Coordiná un encuentro. Sin compromiso
            </ContactDetail>
          </ContactCard>
          
          <ContactCard href="https://www.linkedin.com/company/paroz-labs/" target="_blank" rel="noopener noreferrer" aria-label="Visitar LinkedIn de Paroz Labs">
            <ContactCardHeader>
              <ContactIcon>
                <FaLinkedin aria-hidden="true" title="LinkedIn de Paroz Labs" />
              </ContactIcon>
              <ContactLabel>LinkedIn</ContactLabel>
            </ContactCardHeader>
            <ContactDetail>
              Paroz Labs
            </ContactDetail>
          </ContactCard>
          
          <ContactCard href="https://maps.google.com/?q=Avenida+España+263,+Mendoza,+Argentina" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps">
            <ContactCardHeader>
              <ContactIcon>
                <FaMapMarkerAlt aria-hidden="true" title="Ubicación de Paroz Labs" />
              </ContactIcon>
              <ContactLabel>Ubicación</ContactLabel>
            </ContactCardHeader>
            <ContactDetail>
              Avenida España 263<br />
              Ciudad de Mendoza<br />
              Argentina
            </ContactDetail>
          </ContactCard>
        </ContactInfo>
        
        <LocationMap>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.1818460962867!2d-68.85090622397565!3d-32.89179497258636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09110103a1fd%3A0x620126f90e18c686!2sAv.%20Espa%C3%B1a%20263%2C%20M5500%20Mendoza!5e0!3m2!1sen!2sar!4v1712878251738!5m2!1sen!2sar" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Paroz Labs"
          ></iframe>
        </LocationMap>
      </ContactContent>
    </ContactContainer>
  )
}

export default Contact
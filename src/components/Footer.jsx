import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 50px 0 20px;
`

const FooterContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`

const FooterSection = styled.div`
  margin-bottom: 30px;
`

const FooterLogo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const ContactInfo = styled.div`
  margin-bottom: 15px;
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  
  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  margin-top: 20px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-5px);
  }
`

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo src="/logotipo-sin-fondo.png" alt="Paroz Labs" />
          <FooterText>
            Creamos soluciones tecnológicas que impulsan el crecimiento de tu negocio.
            Ubicados en Mendoza, Argentina y Santiago, Chile.
          </FooterText>
          <SocialLinks>
            <SocialLink 
              href="https://www.linkedin.com/company/paroz-labs/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden="true" title="LinkedIn de Paroz Labs" />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <ContactInfo>
            <ContactLink href="mailto:federico@parozlabs.com">
              federico@parozlabs.com
            </ContactLink>
            <ContactLink href="https://wa.me/5492616299794" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden="true" title="WhatsApp de Paroz Labs" /> +54 9 261 629-9794
            </ContactLink>
          </ContactInfo>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Ubicación</FooterTitle>
          <FooterText>
            Avenida España 263<br />
            Ciudad de Mendoza<br />
            Argentina
          </FooterText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Paroz Labs. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
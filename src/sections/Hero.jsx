import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

const breatheAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`

const HeroContainer = styled.div`
  height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0D1F24 0%, #2D4A53 100%);
  position: relative;
  overflow: hidden;
`

const HeroContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`

const HeroInfo = styled.div`
  max-width: 600px;
  z-index: 2;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 60px;
  }
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`

const HeroHighlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  line-height: 1.6;
`

const HeroButton = styled(ScrollLink)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 32px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`

const HeroImageContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${breatheAnimation} 5s infinite ease-in-out;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(105, 129, 141, 0.3) 0%, rgba(105, 129, 141, 0) 70%);
  
  &:nth-child(1) {
    width: 600px;
    height: 600px;
    top: -200px;
    right: -100px;
  }
  
  &:nth-child(2) {
    width: 400px;
    height: 400px;
    bottom: -100px;
    left: -100px;
  }
`
//      Impulsamos tu negocio con tecnología que entiende tu realidad.
//      Soluciones de <HeroHighlight>Software</HeroHighlight> que impulsan tu negocio
//      Escalamos tu negocio con software a medida, entendiendo tu realidad. Somos tu partner tecnológico para crear soluciones digitales que resuelven problemas reales, no solo líneas de código.
const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <Circle />
        <Circle />
      </HeroBackground>

      <HeroContent>
        <HeroInfo>
          <HeroTitle>
          Escalamos tu negocio con <HeroHighlight>Software</HeroHighlight> entendiendo tu realidad.
          </HeroTitle>
          <HeroDescription>
          Creamos soluciones digitales a medida para escalar tu operación, optimizar tus procesos y hacer crecer tus ingresos.
          </HeroDescription>
          <HeroDescription>
          No hacemos solo código, creamos impacto.
          </HeroDescription>
          <HeroButton 
            to="services" 
            spy={true} 
            smooth={true} 
            duration={500} 
            offset={-80}
          >
            Descubrir Más
          </HeroButton>
        </HeroInfo>
        
        <HeroImageContainer>
          <HeroImage src="/logo-sin-fondo.png" alt="Paroz Labs" />
        </HeroImageContainer>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
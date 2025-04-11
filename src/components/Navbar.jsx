import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes, FaLinkedin } from 'react-icons/fa'

const Nav = styled.nav`
  background-color: ${({ theme, scrolled }) => scrolled ? theme.colors.primaryDark : 'transparent'};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  padding: 0 30px;
  height: 100%;
  position: relative;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 45px;
  margin-right: 10px;
`

const LogoText = styled.h1`
  color: ${({ theme, scrolled }) => scrolled ? theme.colors.textLight : theme.colors.textDark};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const MenuIcon = styled.div`
  display: none;
  color: ${({ theme, scrolled }) => scrolled ? theme.colors.textLight : theme.colors.textDark};
  font-size: 1.8rem;
  cursor: pointer;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 24px;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    height: auto;
    position: absolute;
    top: 80px;
    left: 0;
    opacity: 1;
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    padding: 10px 0;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 10px;
    z-index: 1000;
  }
`

const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 50px;
  }
`

const NavLink = styled(ScrollLink)`
  color: ${({ theme, scrolled }) => scrolled ? theme.colors.textLight : theme.colors.textDark};
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primaryLight};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primaryLight};
  }
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.textLight};
    width: 100%;
    display: table;
    padding: 0.8rem;
    text-align: center;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
      transition: all 0.3s ease;
    }
  }
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme, scrolled }) => scrolled ? theme.colors.textLight : theme.colors.textDark};
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
    transform: translateY(-2px);
  }
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.textLight};
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  // Cierra el menú cuando se redimensiona la ventana a un tamaño mayor que mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <LogoContainer>
          <Logo src="/logotipo-sin-fondo.png" alt="Paroz Labs" />
        </LogoContainer>
        
        <MenuIcon scrolled={scrolled} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink 
              to="hero" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              scrolled={scrolled}
              onClick={closeMenu}
            >
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="services" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              scrolled={scrolled}
              onClick={closeMenu}
            >
              Servicios
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="about" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              scrolled={scrolled}
              onClick={closeMenu}
            >
              Nosotros
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              scrolled={scrolled}
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </NavItem>
          <NavItem>
            <SocialLink 
              href="https://www.linkedin.com/company/paroz-labs/" 
              target="_blank" 
              rel="noopener noreferrer"
              scrolled={scrolled}
            >
              <FaLinkedin aria-hidden="true" title="LinkedIn de Paroz Labs" />
            </SocialLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
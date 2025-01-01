import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: rgba(10, 25, 47, 0.8);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--cor-primaria);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--cor-destaque);
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo to="/">Dennis Emannuel</Logo>
        <NavLinks>
          <StyledNavLink to="/" end>Início</StyledNavLink>
          <StyledNavLink to="/projects">Projetos</StyledNavLink>
          <StyledNavLink to="/about">Sobre</StyledNavLink>
          <StyledNavLink to="/contact">Contato</StyledNavLink>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

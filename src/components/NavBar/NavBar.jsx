import React from 'react';
import { StyledNavBar, StyledNavLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNavBar>
  );
};

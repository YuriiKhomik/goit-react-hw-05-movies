import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #dbf5da;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  margin-right: 10px;
  border: 1px solid #dbf5da;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    border: 1px solid red;
  }

  &.active {
    color: white;
    background-color: #f5743d;
  }
`;

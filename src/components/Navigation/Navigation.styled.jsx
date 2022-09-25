import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: rgb(255, 107, 8);
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 5px;
  transition: 250ms linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :not(:last-child) {
    margin-right: 15px;
  }
  &.active {
    color: rgb(33, 147, 246);
  }
  &:hover:not(.active) {
    color: #2193f6;
  }
`;

export const NavContainer = styled.nav`
  display: flex;

  margin-left: auto;
  margin-right: auto;

  align-items: center;
  justify-content: space-between;
`;

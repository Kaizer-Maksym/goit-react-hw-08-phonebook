import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutBtn = styled.button`
  display: block;
  width: 100px;
  height: 30px;

  cursor: pointer;

  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 3px 2px 1px rgba(117, 118, 118, 0.662);
  background-color: rgb(255, 107, 8);

  font-size: 16px;
  font-weight: 500;

  color: #fdfcfc;

  transition: 250ms linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #2193f6;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;

  color: #2193f6;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 5px;
`;

import styled from '@emotion/styled';

export const Heading = styled.h1`
  padding: 0;
  margin: 0;

  font-size: 28px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export const AddContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const AddButton = styled.button`
  display: block;
  margin: 0;
  padding: 10px;

  background-color: rgba(13, 92, 92, 0.66);
  box-shadow: 3px 3px 2px rgba(34, 35, 35, 0.66);

  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: rgb(253 252 252);
  cursor: pointer;

  transition: 250ms linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgb(255, 107, 8);
  }
`;

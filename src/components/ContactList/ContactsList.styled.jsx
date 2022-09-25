import styled from '@emotion/styled';

export const ListOfContacts = styled.ul`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: 10px;

  position: relative;

  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  padding: 0 5px;

  height: 60px;
  width: 300px;

  border: 2px solid rgba(13, 92, 92, 0.662);
  border-radius: 5px;

  font-size: 16px;
  font-weight: 600;

  text-transform: uppercase;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BtnOnDelet = styled.button`
  display: block;
  width: 100px;
  height: 30px;

  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 3px 3px 2px rgba(34, 35, 35, 0.662);
  background-color: rgba(13, 92, 92, 0.662);

  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  color: #fdfcfc;

  transition: 250ms linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgb(255, 107, 8);
  }
`;

export const ContactInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 20px;

  font-size: 15px;
  font-weight: 700;

  text-transform: uppercase;
  text-align: right;

  color: rgba(10, 10, 10, 0.689);
`;

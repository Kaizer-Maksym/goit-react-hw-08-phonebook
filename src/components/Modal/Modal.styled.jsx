import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: block;
  padding: 20px;
  height: 250px;
  border-radius: 10px;
  background-color: rgba(85, 154, 218, 0.8);
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;

  transition: 250ms linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover > svg,
  :focus > svg {
    color: #ffffff;
  }
`;

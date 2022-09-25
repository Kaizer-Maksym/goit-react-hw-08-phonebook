import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormBtn = styled.button`
  display: block;
  width: 100%;
  height: 40px;

  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgba(13, 92, 92, 0.66);
  box-shadow: 3px 3px 2px rgba(34, 35, 35, 0.66);

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  color: #fdfcfc;
  transition: 250ms linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: rgb(255, 107, 8);
  }
`;

export const InputContact = styled.input`
  margin-bottom: 25px;
  padding: 5px 10px;
  width: 250px;
  height: 25px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.1), 2px 3px 2px rgba(0, 0, 0, 0.1),
    2px 3px 2px rgba(0, 0, 0, 0.1);
`;

export const FormText = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;

  text-transform: uppercase;
`;

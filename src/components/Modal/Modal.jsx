import React from 'react';
import PropTypes from 'prop-types';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ModalContainer, ModalClose } from './Modal.styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './modal.css';

const Modal = ({ active, setActive }) => {
  return (
    <ModalContainer
      className={active ? 'modal active' : 'modal'}
      onClick={e => e.stopPropagation()}
    >
      <ModalClose type="button" onClick={() => setActive(false)}>
        <AiOutlineCloseCircle size="2em" />
      </ModalClose>
      <ContactsForm />
    </ModalContainer>
  );
};

export default Modal;

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

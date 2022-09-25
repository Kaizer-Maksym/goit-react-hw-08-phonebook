import { useState } from 'react';
import { ContactsList } from '../../components/ContactList/ContactList';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import CreateContact from '../../components/CreateContact/CreateContact';
import Modal from 'components/Modal/Modal';

import { AppContainer, List } from './Contacts.styled';

const Contacts = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <AppContainer>
      <List>
        <CreateContact setActive={setModalActive} />
        <ContactFilter />
        <ContactsList />
      </List>
      <Modal active={modalActive} setActive={setModalActive} />
    </AppContainer>
  );
};

export default Contacts;

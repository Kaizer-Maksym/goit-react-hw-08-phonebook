import { ContactsList } from '../../components/ContactList/ContactList';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import { ContactsForm } from '../../components/ContactForm/ContactForm';
import { AppContainer, ToAddContact, List, Heading } from './Contacts.styled';

const Contacts = () => {
  return (
    <AppContainer>
      <ToAddContact>
        <Heading>Phonebook</Heading>
        <ContactsForm />
      </ToAddContact>

      <List>
        <Heading>Contacts</Heading>
        <ContactFilter />
        <ContactsList />
      </List>
    </AppContainer>
  );
};

export default Contacts;

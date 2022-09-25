import PropTypes from 'prop-types';
import { Heading, AddContact, AddButton } from './CreateContact.styled';

const CreateContact = ({ setActive }) => {
  return (
    <AddContact>
      <Heading>Contacts</Heading>
      <AddButton type="button" onClick={() => setActive(true)}>
        Create contact
      </AddButton>
    </AddContact>
  );
};

export default CreateContact;

CreateContact.propTypes = {
  setActive: PropTypes.func,
};

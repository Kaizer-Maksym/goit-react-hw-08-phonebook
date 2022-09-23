import { useSelector } from 'react-redux';
import { getFiltr, getContacts } from '../redux/contacts/contacts-selectors';

export function useFilter() {
  const contacts = useSelector(getContacts);
  const { filter } = useSelector(getFiltr);

  if (contacts) {
    const getVisibleContact = () => {
      const normalize = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalize)
      );
    };
    const visibleContacts = getVisibleContact();

    return visibleContacts;
  }
}

import { useSelector } from 'react-redux';
import { getFiltr } from 'redux/contacts/contactsSlice';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';

export function useFilter() {
  const { data } = useFetchContactsQuery();
  const filter = useSelector(getFiltr);

  if (data) {
    const getVisibleContact = () => {
      const normalize = filter.toLowerCase();
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalize)
      );
    };
    const visibleContacts = getVisibleContact();

    return visibleContacts;
  }
}

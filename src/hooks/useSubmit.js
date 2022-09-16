import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';

export function useSubmit(e) {
  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    const isInclude = data
      .map(({ name }) => name)
      .some(
        name => name.toLowerCase() === e.target.name.value.toLowerCase().trim()
      );

    if (isInclude) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const newContact = {
        name: name,
        phone: number,
      };
      createContact(newContact);
    }
    e.target.reset();
  };

  return onSubmit;
}

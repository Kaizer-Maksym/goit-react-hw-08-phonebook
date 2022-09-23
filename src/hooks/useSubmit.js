import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/contacts-operations';

export function useSubmit(e) {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    const data = {
      name: name,
      number: number,
    };
    dispatch(addContact(data));

    e.target.reset();
  };

  return onSubmit;
}

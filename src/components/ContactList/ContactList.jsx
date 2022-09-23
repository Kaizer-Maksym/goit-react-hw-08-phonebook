import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFilter } from 'hooks/useFilter';
import {
  fetchContacts,
  removeContact,
} from 'redux/contacts/contacts-operations';

import {
  ContactItem,
  BtnOnDelet,
  ContactInfo,
  ListOfContacts,
} from './ContactsList.styled';

import { BsTelephoneFill } from 'react-icons/bs';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useFilter();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  return (
    <ListOfContacts>
      {visibleContacts &&
        visibleContacts.map(({ name, phone, id }) => (
          <ContactItem key={id}>
            <ContactInfo>
              <BsTelephoneFill size="15px" color="#00000091" />
              <span>{name} :</span>
              <span>{phone}</span>
            </ContactInfo>
            <BtnOnDelet onClick={() => onRemoveContact(id)}>Delete</BtnOnDelet>
          </ContactItem>
        ))}
    </ListOfContacts>
  );
};

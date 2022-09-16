import React from 'react';
import { useFilter } from 'hooks/useFilter';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

import {
  ContactItem,
  BtnOnDelet,
  ContactInfo,
  ListOfContacts,
} from './ContactsList.styled';

import { BsTelephoneFill } from 'react-icons/bs';

export const ContactsList = () => {
  const [deleteContact, result] = useDeleteContactMutation();
  const visibleContacts = useFilter();

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
            <BtnOnDelet
              onClick={() => deleteContact(id)}
              disabled={result.isLoading}
            >
              Delete
            </BtnOnDelet>
          </ContactItem>
        ))}
    </ListOfContacts>
  );
};

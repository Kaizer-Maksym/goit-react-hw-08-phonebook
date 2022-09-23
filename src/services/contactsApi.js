// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://6310cec1826b98071a4b4670.mockapi.io',
// });
import instance from './authApi';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};

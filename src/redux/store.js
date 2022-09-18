import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts/contacts-slice';
import contactsReduser from './contacts/contacts-slice';
import authReducer from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReduser,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

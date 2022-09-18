import { Routes, Route } from 'react-router-dom';

import Contacts from '../../pages/Contacts/Contacts';
import Layout from '../Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

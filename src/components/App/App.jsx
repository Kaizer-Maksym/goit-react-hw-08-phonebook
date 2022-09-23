import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';

import Contacts from '../../pages/Contacts/Contacts';
import Layout from '../Layout/Layout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRouter from 'components/PublicRouter/PublicRouter';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PublicRouter />}>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="Contacts" element={<Contacts />} />
        </Route>
      </Route>
    </Routes>
  );
};

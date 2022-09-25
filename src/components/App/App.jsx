import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRouter from 'components/PublicRouter/PublicRouter';
import NoFoundepage from '../../pages/NoFoundpage';

const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Layout = lazy(() => import('../Layout/Layout'));
const Home = lazy(() => import('../../pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PublicRouter />}>
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="Contacts" element={<Contacts />} />
          </Route>
        </Route>
        <Route to="*" element={<NoFoundepage />} />
      </Routes>
    </Suspense>
  );
};

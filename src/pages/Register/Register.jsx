import { useSelector, useDispatch } from 'react-redux';
import { getAuthError } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

import { registration } from 'redux/auth/auth-operations';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import useAuth from 'hooks/useAuth';

const Register = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  const onRegister = data => {
    dispatch(registration(data));
  };

  if (isLogin) {
    return <Navigate to="/Contacts" />;
  }

  return (
    <>
      <h1>Register page</h1>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </>
  );
};

export default Register;

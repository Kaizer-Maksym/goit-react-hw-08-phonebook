import { useDispatch } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { RegistrationBackground } from './Register.styled';
import { registration } from 'redux/auth/auth-operations';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import useAuth from 'hooks/useAuth';
import logFone from '../../images/log-fone.jpg';

const Register = () => {
  const dispatch = useDispatch();

  const isLogin = useAuth();

  const onRegister = data => {
    dispatch(registration(data));
  };

  if (isLogin) {
    return <Navigate to="/Contacts" />;
  }

  return (
    <div>
      <RegistrationBackground src={logFone} alt="background fone" />
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default Register;

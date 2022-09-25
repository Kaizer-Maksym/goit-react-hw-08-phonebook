import { useDispatch } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { entry } from 'redux/auth/auth-operations';

import { LoginBackground } from './Login.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import useAuth from 'hooks/useAuth';
import logFone from '../../images/log-fone.jpg';

const Login = () => {
  const dispatch = useDispatch();

  const isLogin = useAuth();

  const onLogin = data => {
    dispatch(entry(data));
  };

  if (isLogin) {
    return <Navigate to="/Contacts" />;
  }
  return (
    <div>
      <LoginBackground src={logFone} alt="background fone" />
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default Login;

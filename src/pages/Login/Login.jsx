import { useSelector, useDispatch } from 'react-redux';
import { getAuthError, isAuth } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import { entry } from 'redux/auth/auth-operations';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onLogin = data => {
    dispatch(entry(data));
  };

  if (isLogin) {
    return <Navigate to="/Contacts" />;
  }
  return (
    <>
      <h1>Login page</h1>;
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </>
  );
};

export default Login;

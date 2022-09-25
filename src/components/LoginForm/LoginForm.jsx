import { useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/auth-selectors';
import {
  FormBtn,
  FormText,
  FormStyle,
  InputContact,
  LogContainer,
} from './LoginForm.styled';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit }) => {
  const { status, message } = useSelector(getAuthError);
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    onSubmit(data);
    e.target.reset();
  };

  return (
    <LogContainer>
      <h1>User Login</h1>
      <FormStyle autoCapitalize="off" onSubmit={handleSubmit}>
        <FormText>Email</FormText>
        <label>
          <InputContact type="email" name="email" required />
        </label>

        <FormText>Password</FormText>
        <label>
          <InputContact type="password" name="password" />
        </label>

        <FormBtn type="submit">Login</FormBtn>
      </FormStyle>
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </LogContainer>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

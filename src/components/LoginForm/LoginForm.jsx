import { FormBtn, FormText, FormStyle, InputContact } from './LoginForm.styled';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit }) => {
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
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

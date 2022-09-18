import {
  FormBtn,
  FormText,
  FormStyle,
  InputContact,
} from './RegisterForm.styled';
import PropTypes from 'prop-types';

const RegisterForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    onSubmit(data);
    e.target.reset();
  };

  return (
    <FormStyle autoCapitalize="off" onSubmit={handleSubmit}>
      <FormText>Name</FormText>
      <label>
        <InputContact
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <FormText>Email</FormText>
      <label>
        <InputContact type="email" name="email" required />
      </label>

      <FormText>Password</FormText>
      <label>
        <InputContact type="password" name="password" />
      </label>

      <FormBtn type="submit">Registration</FormBtn>
    </FormStyle>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

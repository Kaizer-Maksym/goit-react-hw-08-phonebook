import { Link, NavContainer } from './NavAuth.styled';

const NavAuth = () => {
  return (
    <NavContainer>
      <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
    </NavContainer>
  );
};

export default NavAuth;

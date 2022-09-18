import { Link, NavContainer } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      <div>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </div>
    </NavContainer>
  );
};

export default Navigation;

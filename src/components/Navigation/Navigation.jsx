import { Link, NavContainer } from './Navigation.styled';
import NavAuth from './NavAuth/NavAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const isLogin = useAuth();
  return (
    <NavContainer>
      <Link to="/">Home</Link>
      {isLogin ? <UserMenu /> : <NavAuth />}
    </NavContainer>
  );
};

export default Navigation;

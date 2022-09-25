import { Link, NavContainer } from './Navigation.styled';
import { RiContactsBookLine } from 'react-icons/ri';
import NavAuth from './NavAuth/NavAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const isLogin = useAuth();
  return (
    <NavContainer>
      <Link to="/">
        <RiContactsBookLine size="2em" />
      </Link>
      {isLogin ? <UserMenu /> : <NavAuth />}
    </NavContainer>
  );
};

export default Navigation;

import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { Link, UserContainer, LogoutBtn } from './UserMenu.styled';
import { logout } from 'redux/auth/auth-operations';
import { IoIosContact } from 'react-icons/io';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <UserContainer>
      <IoIosContact size="2em" color="rgb(33, 147, 246)" />
      <Link to="/Contacts">{email}</Link>
      <LogoutBtn onClick={onLogout} type="button">
        Logout
      </LogoutBtn>
    </UserContainer>
  );
};

export default UserMenu;

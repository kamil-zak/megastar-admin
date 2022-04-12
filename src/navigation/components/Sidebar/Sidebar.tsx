import { HTMLAttributes, useEffect, useState } from 'react';
import { faImages, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import NavigationLink from '../NavigationLink/NavigationLink';
import { useAppDispatch, useAppSelector } from 'store/store';
import { authLogout } from 'store/features/authSlice';
import IconButton from 'components/IconButton/IconButton';
import Text from 'components/Text/Text';
import { StyledLoginInfo, StyledLogo, StyledOpenBtn, Wrapper } from './Sidebar.styles';
import Flex from 'components/Flex/Flex';
import Button from 'components/Button/Button';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import ROUTES from 'constants/routes';
import { useLocation } from 'react-router';

const Sidebar = (props: HTMLAttributes<HTMLDivElement>) => {
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();
  const logout = () => dispatch(authLogout());

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Wrapper {...props} isOpen={isOpen}>
      <StyledLogo />
      <StyledLoginInfo>
        <IconButton icon={faUser} size="lg" />
        <Text size="s" color="primarySuperLight">
          {user}
        </Text>
      </StyledLoginInfo>
      <Flex>
        <NavigationLink icon={faInfoCircle} text="Informacje" to="/info" />
        <NavigationLink icon={faTable} text="Rozkład jazdy" to={ROUTES.timetable} />
        <NavigationLink icon={faImages} text="Galeria" to={ROUTES.albums} />
      </Flex>
      <LayoutItem align="end" justify="center">
        <Button icon={faSignOutAlt} onClick={logout}>
          Wyloguj
        </Button>
      </LayoutItem>
      <StyledOpenBtn isOpen={isOpen} onClick={toggleSidebar} />
    </Wrapper>
  );
};

export default Sidebar;

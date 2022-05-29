import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink).attrs(({ theme }) => ({
  style: ({ isActive }) => ({ opacity: isActive ? '1' : '0.7' }),
}))`
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
`;

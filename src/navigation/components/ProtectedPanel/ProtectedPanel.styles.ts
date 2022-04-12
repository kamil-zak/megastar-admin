import styled from 'styled-components';
import { breakpoints } from 'styles/common';
import Sidebar from '../Sidebar/Sidebar';

export const StyledContent = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.accentSuperLight};
  ${breakpoints.md} {
    margin-left: 250px;
  }
`;

export const StyledSidebar = styled(Sidebar)`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 90vh;

  ${breakpoints.md} {
    height: 100vh;
  }
`;

import logoImg from 'assets/img/logo.svg';
import styled from 'styled-components';
import { breakpoints } from 'styles/common';

interface IWrapperProps {
  isOpen: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  z-index: 10;
  display: grid;
  grid-template-rows: auto 120px auto 1fr;
  padding: 50px 0px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.primaryDark};
  background: #495d63;
  background: #22333b;
  position: relative;

  transition: transform 0.3s linear;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  ${breakpoints.md} {
    transform: translateX(0);
    overflow: hidden;
  }
`;

export const StyledOpenBtn = styled.button<IWrapperProps>`
  background: ${({ theme }) => theme.colors.primaryDark};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 100px;
  right: -30px;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  border-left: none;

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border: solid white;
    border-width: 0 3px 3px 0;
    padding: 3px;
    transform: translate(-50%, -50%) rotate(${({ isOpen }) => (isOpen ? 135 : -45)}deg);
  }
`;

export const StyledLogo = styled.div`
  height: 50px;
  background: url(${logoImg}) no-repeat center;
`;

export const StyledLoginInfo = styled.div`
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
`;

import styled, { keyframes } from 'styled-components';
import { topBar } from 'styles/common';

export const slideIn = keyframes`
  from {
    transform: translateX(150%);
  }
  to {
    transform: translateX(0%);
  }
`;

interface IToastIconProps {
  isSuccess: boolean;
}

export const ToastIcon = styled.div<IToastIconProps>`
  color: ${({ theme, isSuccess }) => theme.colors[isSuccess ? 'success' : 'danger']};
`;

interface IWrapperProps {
  show: boolean;
  isSuccess: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  max-width: 400px;
  display: flex;
  gap: 10px;
  align-items: center;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background: white;
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 20px;
  padding-top: 30px;
  border-radius: ${({ theme }) => theme.radius};
  animation: ${slideIn} 0.5s ease-in-out;
  animation-fill-mode: backwards;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ show }) => (show ? '0%' : '150%')});
  ${({ isSuccess }) => (isSuccess ? topBar('success') : topBar('danger'))}
`;

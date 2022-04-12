import styled, { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateX(150%);
  }
  to {
    transform: translateX(0%);
  }
`;

interface IWrapperProps {
  show: boolean;
  isSuccess: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  background: ${({ theme, isSuccess }) => theme.colors[isSuccess ? 'success' : 'danger']};
  color: ${({ theme, isSuccess }) => theme.colors[isSuccess ? 'successLight' : 'dangerLight']};
  border: 2px solid black;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius};
  animation: ${slideIn} 0.5s ease-in-out;
  animation-fill-mode: backwards;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ show }) => (show ? '0%' : '150%')});
`;

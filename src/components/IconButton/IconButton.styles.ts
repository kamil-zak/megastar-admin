import styled from 'styled-components';
import { breakpoints } from 'styles/common';

interface IWrapperProps {
  size: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: ${({ size }) => size / 2}px;
  font-size: ${({ size }) => size}px;
  background: ${({ theme }) => theme.colors.accentSuperDark};
  color: ${({ theme }) => theme.colors.accentSuperLight};
  border-radius: 50%;
  cursor: pointer;

  ${breakpoints.md} {
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  }
  opacity: 0.8;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`;

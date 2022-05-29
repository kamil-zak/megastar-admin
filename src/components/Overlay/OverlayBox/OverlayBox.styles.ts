import styled from 'styled-components';

interface IWrapperProps {
  moveX: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + (${({ moveX }) => moveX}px)), -50%);
  background-color: white;
  padding: 15px;
  border-radius: ${({ theme }) => theme.radius};
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadow};
`;

import styled, { css } from 'styled-components';

interface IWrapperProps {
  visible: boolean;
  light: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  transition: opacity 0.1s ease-in-out;
  ${({ light }) =>
    light &&
    css`
      opacity: 0.7;
    `}

  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0;
    `}

cursor: move;
`;

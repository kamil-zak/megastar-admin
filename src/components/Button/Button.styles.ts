import styled, { css } from 'styled-components';
import { rotate } from 'styles/animations';

interface IStyledButtonProps {
  bordered?: boolean;
  danger?: boolean;
  spinner?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  --color: ${({ theme, danger }) => theme.colors[danger ? 'danger' : 'primary']};
  --background: ${({ bordered }) => (bordered ? 'white' : 'var(--color)')};
  --content: ${({ bordered }) => (!bordered ? 'white' : 'var(--color)')};
  position: relative;
  padding: 8px 25px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background: var(--background);
  color: var(--content);
  border-radius: ${({ theme }) => theme.radius};
  border: 2px solid var(--color);
  cursor: pointer;

  ${({ spinner }) =>
    spinner
      ? css`
          color: transparent;
          position: relative;
          &::after {
            content: '';
            position: absolute;
            width: 15px;
            height: 15px;
            border: 2px solid var(--content);
            border-color: var(--content) var(--content) var(--content) transparent;
            border-radius: 50%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            animation: ${rotate} 0.8s infinite linear;
          }
        `
      : css`
          transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
          &:hover:not(:disabled) {
            background: var(--content);
            color: var(--background);
          }
        `}

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

import { ClipLoader } from 'react-spinners';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  isTextVisible: boolean;
  small?: boolean;
  danger?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  position: relative;
  padding: ${({ small }) => (small ? '5px 15px' : '10px 25px')};
  font-size: ${({ small, theme }) => theme.fontSizes[small ? 'xxs' : 'xs']}px;
  background: ${({ theme, danger }) => theme.colors[danger ? 'danger' : 'accent']};
  color: ${({ theme, danger }) => theme.colors[danger ? 'dangerLight' : 'accentSuperDark']};
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  cursor: pointer;

  ${({ isTextVisible }) =>
    !isTextVisible &&
    css`
      color: transparent;
    `};

  transition: filter 0.1s ease-in-out;
  &:hover {
    filter: brightness(110%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    filter: inherit;
  }
`;

export const StyledClipLoader = styled(ClipLoader).attrs(({ theme }) => ({
  color: theme.colors.accentDark,
  size: theme.fontSizes.xs,
}))``;

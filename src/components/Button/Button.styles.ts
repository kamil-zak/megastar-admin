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

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

export const StyledClipLoader = styled(ClipLoader).attrs(({ theme }) => ({
  color: theme.colors.accentDark,
  size: theme.fontSizes.xs,
}))``;

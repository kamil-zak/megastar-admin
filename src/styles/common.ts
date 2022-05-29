import { css, DefaultTheme } from 'styled-components';

export const inputStyle = css`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.radius};
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const breakpoints = {
  md: '@media (min-width: 700px)',
  lg: '@media (min-width: 1200px)',
  xl: '@media (min-width: 1600px)',
};

export const topBar = (color: keyof DefaultTheme['colors']) => css`
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.colors[color]};
    height: 15px;
    width: 100%;
  }
`;

import { css } from 'styled-components';

export const inputStyle = css`
  background-color: ${({ theme }) => theme.colors.accentLight};
  border: 1px solid ${({ theme }) => theme.colors.accentDark};
  color: ${({ theme }) => theme.colors.accentDark};
  border-radius: ${({ theme }) => theme.radius};
`;

export const breakpoints = {
  md: '@media (min-width: 700px)',
  lg: '@media (min-width: 1200px)',
  xl: '@media (min-width: 1600px)',
};

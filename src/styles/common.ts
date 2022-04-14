import { css } from 'styled-components';

export const inputStyle = css`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primarySuperDark};
  border-radius: ${({ theme }) => theme.radius};
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const breakpoints = {
  md: '@media (min-width: 700px)',
  lg: '@media (min-width: 1200px)',
  xl: '@media (min-width: 1600px)',
};

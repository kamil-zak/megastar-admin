import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-areas:
      'base'
      'days'
      'dates'
      'intervals';
  }

  ${breakpoints.lg} {
    grid-template-areas:
    'base base base'
    'days dates intervals';
`;

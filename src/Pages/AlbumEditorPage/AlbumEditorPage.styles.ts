import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const Wrapper = styled.div`
  display: grid;
  gap: 40px;

  grid-template-areas:
    'base'
    'upload'
    'photos';

  ${breakpoints.lg} {
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      'base upload'
      'photos photos';
  }
`;

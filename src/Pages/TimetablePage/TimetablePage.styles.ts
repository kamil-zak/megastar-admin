import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;

  ${breakpoints.lg} {
    grid-template-rows: 1fr;
    grid-template-columns: auto auto;
  }
`;

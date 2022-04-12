import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  ${breakpoints.md} {
    grid-template-columns: max-content minmax(auto, 600px);
  }
`;

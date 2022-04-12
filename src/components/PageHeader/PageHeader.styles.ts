import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 40px;
  flex-direction: column;
  gap: 10px;

  ${breakpoints.md} {
    flex-direction: row;
  }
`;

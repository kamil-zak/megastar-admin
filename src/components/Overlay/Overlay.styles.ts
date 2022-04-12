import styled from 'styled-components';

export const StyledBackground = styled.div`
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: black;
  left: 0;
  top: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  position: relative;
`;

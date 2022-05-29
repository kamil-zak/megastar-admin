import AbsoluteWrapper from 'components/AbsoluteWrapper/AbsoluteWrapper';
import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const Wrapper = styled(AbsoluteWrapper)`
  background: white;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  overflow: hidden;
  min-width: 250px;
`;

export const StyledTopBar = styled.div`
  background: ${({ theme }) => theme.colors.primaryDark};
  text-align: right;
  padding: 5px;
  color: white;
`;

export const StyledContent = styled.div`
  padding: 30px;
`;

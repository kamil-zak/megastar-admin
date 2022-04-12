import AbsoluteWrapper from 'components/AbsoluteWrapper/AbsoluteWrapper';
import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const Wrapper = styled(AbsoluteWrapper)`
  background: ${({ theme }) => theme.colors.accentSuperLight};
  border-radius: 10px;
  overflow: hidden;
  min-width: 250px;
`;

export const StyledTopBar = styled.div`
  background: ${({ theme }) => theme.colors.accentDark};
  text-align: right;
  padding: 5px;
  color: ${({ theme }) => theme.colors.accentSuperLight};
`;

export const StyledContent = styled.div`
  padding: 30px;
`;

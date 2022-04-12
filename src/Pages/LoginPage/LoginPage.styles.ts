import styled from 'styled-components';

export const StyledLoginTab = styled.div`
  box-sizing: border-box;
  width: calc(100% - 40px);
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  background: ${({ theme }) => theme.colors.accentSuperLight};
  padding: 30px;
  border-radius: 15px;
`;

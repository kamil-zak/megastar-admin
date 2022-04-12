import styled from 'styled-components';
import fullLogoImg from 'assets/img/fulllogo.svg';

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

export const StyledLogo = styled.img.attrs(() => ({
  src: fullLogoImg,
}))`
  display: block;
  width: 80%;
  max-width: 700px;
  margin: 50px auto;
  filter: invert();
`;

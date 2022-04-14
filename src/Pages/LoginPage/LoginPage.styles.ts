import styled from 'styled-components';
import fullLogoImg from 'assets/img/fulllogo.svg';

export const StyledLoginTab = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  margin-top: 50px;
  padding: 10px;
`;

export const StyledLogo = styled.img.attrs(() => ({
  src: fullLogoImg,
}))`
  margin-top: 30px;
  width: 80%;
  max-width: 600px;
  filter: invert(9%) sepia(82%) saturate(1412%) hue-rotate(195deg) brightness(90%) contrast(98%);
`;

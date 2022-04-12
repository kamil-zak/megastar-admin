import Card from 'components/Card/Card';
import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const StyledCard = styled(Card)`
  display: grid;
  gap: 10px;

  ${breakpoints.md} {
    gap: 50px;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
  }
`;

export const Images = styled.div`
  justify-self: center;
  position: relative;
  width: 220px;
  height: 150px;
`;

export const FirstImage = styled.img`
  position: absolute;
  width: 140px;
  height: 105px;
  left: 20px;
  top: 20px;
  border-radius: 10px;
  z-index: 2;
  transform: rotate(-10deg);
  border: 2px solid white;
`;

export const SecondImage = styled.img`
  position: absolute;
  width: 140px;
  height: 105px;
  left: 60px;
  top: 20px;
  border-radius: 10px;
  border: 2px solid white;

  transform: rotate(10deg);
`;

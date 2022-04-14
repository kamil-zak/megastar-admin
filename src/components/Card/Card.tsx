import styled, { css } from 'styled-components';

export const topBar = css`
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.colors.primarySuperDark};
    height: 15px;
    width: 100%;
  }
`;

const Card = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.primarySuperLight};
  ${topBar}
`;

export default Card;

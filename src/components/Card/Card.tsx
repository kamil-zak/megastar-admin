import styled from 'styled-components';
import { topBar } from 'styles/common';

const Card = styled.div`
  padding: 20px;
  background: white;
  color: ${({ theme }) => theme.colors.primaryDark};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.radius};
  ${topBar('primaryDark')}
`;

export default Card;

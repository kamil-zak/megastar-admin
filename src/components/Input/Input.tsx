import styled from 'styled-components';
import { inputStyle } from 'styles/common';

const Input = styled.input<{ small?: boolean }>`
  padding: ${({ small }) => (small ? '10' : '15')}px;
  font-size: ${({ small, theme }) => theme.fontSizes[small ? 'xs' : 's']};
  ${inputStyle}
`;

export default Input;

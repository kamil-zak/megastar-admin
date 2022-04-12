import styled from 'styled-components';
import { inputStyle } from 'styles/common';

const TextArea = styled.textarea`
  font-family: inherit;
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  ${inputStyle}
`;

export default TextArea;

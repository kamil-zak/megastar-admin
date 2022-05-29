import styled from 'styled-components';
import { inputStyle } from 'styles/common';

const TextArea = styled.textarea`
  font-family: inherit;
  min-height: 80px;
  resize: none;
  ${inputStyle};
`;

export default TextArea;

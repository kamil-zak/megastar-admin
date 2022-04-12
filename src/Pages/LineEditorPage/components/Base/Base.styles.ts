import TextArea from 'components/TextArea/TextArea';
import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  ${breakpoints.md} {
    grid-template-columns: 2fr 3fr;
  }
`;

export const StyledTextArea = styled(TextArea)`
  flex-grow: 1;
`;

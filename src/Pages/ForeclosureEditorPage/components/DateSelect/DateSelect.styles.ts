import Select from 'components/Select/Select';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const StyledSelect = styled(Select)`
  min-width: 130px;
`;

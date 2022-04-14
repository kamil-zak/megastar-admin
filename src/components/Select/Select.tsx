import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primarySuperDark};
  border-radius: ${({ theme }) => theme.radius};
  appearance: button;
  -webkit-appearance: button;
`;

export default Select;

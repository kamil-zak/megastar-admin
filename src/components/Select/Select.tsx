import styled from 'styled-components';

const Select = styled.select<{ small?: boolean }>`
  padding: ${({ small }) => (small ? '10' : '15')}px;
  font-size: ${({ small, theme }) => theme.fontSizes[small ? 'xs' : 's']};
  background-color: ${({ theme }) => theme.colors.accentLight};
  border: 1px solid ${({ theme }) => theme.colors.accentDark};
  color: ${({ theme }) => theme.colors.accentDark};
  border-radius: ${({ theme }) => theme.radius};
  appearance: button;
  -webkit-appearance: button;
`;

export default Select;

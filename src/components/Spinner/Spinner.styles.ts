import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

export const StyledSyncSpinner = styled(SyncLoader).attrs(({ theme }) => ({
  color: theme.colors.primaryDark,
}))``;

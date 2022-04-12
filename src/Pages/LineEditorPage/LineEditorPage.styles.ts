import styled from 'styled-components';
import { breakpoints } from 'styles/common';

export const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-areas:
    'base'
    'timetable'
    'foreclosures';

  ${breakpoints.lg} {
    grid-template-areas:
      'base foreclosures'
      'timetable timetable';
  }
`;

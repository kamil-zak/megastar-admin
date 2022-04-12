import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/common';

type position = 'stretch' | 'start' | 'center' | 'end';

interface ILayoutItemProps {
  area?: string;
  align?: position;
  justify?: position;
  mobileHidden?: boolean;
}

const LayoutItem = styled.div<ILayoutItemProps>`
  ${({ area }) => area && `grid-area: ${area};`}
  ${({ align }) => align && `align-self: ${align};`}
  ${({ justify }) => justify && `justify-self: ${justify};`}

  ${({ mobileHidden }) =>
    mobileHidden &&
    css`
      display: none;
      ${breakpoints.md} {
        display: block;
      }
    `}
`;

export default LayoutItem;

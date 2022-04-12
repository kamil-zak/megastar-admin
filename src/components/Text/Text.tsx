import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { breakpoints } from 'styles/common';

interface ITextProps {
  color?: keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['fontSizes'];
  sizeMd?: keyof DefaultTheme['fontSizes'];
  sizeLg?: keyof DefaultTheme['fontSizes'];
  bold?: boolean;
  center?: boolean;
}

const Text = styled.p<ITextProps>`
  margin: 0;
  padding: 0;
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-size: ${({ theme, size = 'base' }) => theme.fontSizes[size]};

  ${breakpoints.md} {
    ${({ theme, sizeMd }) => sizeMd && `font-size: ${theme.fontSizes[sizeMd]};`}
  }

  ${breakpoints.lg} {
    ${({ theme, sizeLg }) => sizeLg && `font-size: ${theme.fontSizes[sizeLg]};`}
  }
`;

export default Text;

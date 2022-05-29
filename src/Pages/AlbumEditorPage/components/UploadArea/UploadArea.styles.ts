import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ hover: boolean }>`
  position: relative;
  border: 2px dashed ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 50px;
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${({ hover }) =>
    hover &&
    css`
      background: white;
      &
    `}
`;

export const VisibilityWrapper = styled.div<{ hidden: boolean }>`
  opacity: ${({ hidden }) => (hidden ? '0' : '1')};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const HoverText = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.primary};
`;

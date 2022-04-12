import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  background: ${({ theme }) => theme.colors.accentDark};
  color: ${({ theme }) => theme.colors.accentSuperLight};
  border-radius: ${({ theme }) => theme.radius};

  transition: transform 0.2s ease-in-out;

  > .buttons {
    display: none;
  }

  &:hover {
    transform: scale(1.1);
    > .buttons {
      display: block;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    left: -5px;
    top: -5px;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
`;

interface IStyledImgProps {
  transparent: boolean;
}

export const StyledImg = styled.img<IStyledImgProps>`
  opacity: ${({ transparent }) => (transparent ? '0.5' : '1')};
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius};
  object-fit: cover;
`;

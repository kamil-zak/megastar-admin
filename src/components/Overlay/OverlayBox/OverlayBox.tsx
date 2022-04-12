import useOutsideClick from 'hooks/useOutsideClick';
import { FC, useLayoutEffect, useState } from 'react';
import { Wrapper } from './OverlayBox.styles';

interface OverlayBoxProps {
  handleClose: () => void;
}

const OverlayBox: FC<OverlayBoxProps> = ({ handleClose, children }) => {
  const ref = useOutsideClick(handleClose);
  const [moveX, setMoveX] = useState(0);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const { left, right } = ref.current.getBoundingClientRect();
    if (left < 0) setMoveX(-left);
    const realRight = right - document.body.getBoundingClientRect().x;
    if (realRight > window.innerWidth) setMoveX(window.innerWidth - realRight);
  }, [ref]);
  return (
    <Wrapper ref={ref} moveX={moveX}>
      {children}
    </Wrapper>
  );
};

export default OverlayBox;

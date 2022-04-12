import { StyledBackground, Wrapper } from './Overlay.styles';
import { ReactNode, useState } from 'react';
import OverlayBox from './OverlayBox/OverlayBox';

interface IOverlayProps {
  children: (open: () => void) => ReactNode;
  render: (close: () => void) => ReactNode;
}

const Overlay = ({ children, render }: IOverlayProps) => {
  const [overlay, setOverlay] = useState(false);
  const open = () => {
    setOverlay(true);
  };
  const close = () => setOverlay(false);

  return (
    <>
      {overlay && <StyledBackground />}
      <Wrapper>
        {children(open)}
        {overlay && <OverlayBox handleClose={close}>{render(close)}</OverlayBox>}
      </Wrapper>
    </>
  );
};

export default Overlay;

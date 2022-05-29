import { useAppDispatch } from 'store/store';
import { useEffect, useState } from 'react';
import { removeToast, ToastWithId } from 'store/features/toastsSlice';
import { ToastIcon, Wrapper } from './Toast.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface IToastProps {
  toast: ToastWithId;
}

const Toast = ({ toast }: IToastProps) => {
  const [visibility, setVisibility] = useState(true);
  const [paused, setPaused] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (paused) return;
    const timeout = setTimeout(() => setVisibility(false), 3000);
    return () => clearTimeout(timeout);
  }, [paused]);

  useEffect(() => {
    if (visibility) return;
    const remove = () => dispatch(removeToast(toast.id));
    const timeout = setTimeout(remove, 500);
    return () => clearTimeout(timeout);
  }, [visibility, dispatch, toast.id]);

  const mouseProps = { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) };

  const isSuccess = toast.type === 'success';
  return (
    <Wrapper {...mouseProps} isSuccess={isSuccess} show={visibility}>
      <ToastIcon isSuccess={isSuccess}>
        <FontAwesomeIcon icon={faCircleExclamation} size="2x" />
      </ToastIcon>
      {toast.text}
    </Wrapper>
  );
};

export default Toast;

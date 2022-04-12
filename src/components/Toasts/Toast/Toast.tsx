import { useAppDispatch } from 'store/store';
import { useEffect, useState } from 'react';
import { removeToast, ToastWithId } from 'store/features/toastsSlice';
import { Wrapper } from './Toast.styles';

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

  return (
    <Wrapper
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      isSuccess={toast.type === 'success'}
      show={visibility}
    >
      {toast.text}
    </Wrapper>
  );
};

export default Toast;

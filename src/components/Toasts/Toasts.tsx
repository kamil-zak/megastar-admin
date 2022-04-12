import { Wrapper } from './Toasts.styles';
import { useAppSelector } from 'store/store';
import Toast from './Toast/Toast';

const Toasts = () => {
  const toasts = useAppSelector((store) => store.toasts);
  return (
    <Wrapper>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </Wrapper>
  );
};

export default Toasts;

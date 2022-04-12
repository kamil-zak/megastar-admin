import { useEffect, useState } from 'react';
import { showConfirm, hideConfirm } from 'store/features/confirmSlice';
import { useAppSelector, useAppDispatch } from 'store/store';

interface IUseConrirm {
  question: string;
  actionName: string;
  callback: () => void;
}

const useConfirm = ({ question, actionName, callback }: IUseConrirm) => {
  const confirm = useAppSelector((state) => state.confirm);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  const open = () => {
    if (confirm) return;
    dispatch(showConfirm({ question, actionName }));
    setActive(true);
  };

  useEffect(() => {
    if (!confirm || !active) return;
    if (confirm.status !== 'waiting') {
      setActive(false);
      dispatch(hideConfirm());
    }
    if (confirm.status === 'accepted') callback();
  }, [confirm, dispatch, callback, active]);

  return open;
};

export default useConfirm;

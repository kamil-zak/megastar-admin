import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import Modal from 'components/Modal/Modal';
import { useAppDispatch, useAppSelector } from 'store/store';
import { setConfirmStatus } from 'store/features/confirmSlice';

const ConfirmModal = () => {
  const dispatch = useAppDispatch();
  const confirm = useAppSelector((state) => state.confirm);
  if (!confirm) return null;

  const accept = () => dispatch(setConfirmStatus('accepted'));
  const cancel = () => dispatch(setConfirmStatus('canceled'));

  return (
    <Modal handleClose={cancel}>
      <Flex alignItems="flex-end">
        {confirm.question}
        <Flex direction="row" gap={10}>
          <Button onClick={cancel} bordered>
            Anuluj
          </Button>
          <Button danger onClick={accept}>
            {confirm.actionName}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ConfirmModal;

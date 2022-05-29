import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import { addDate } from 'Pages/ForeclosureEditorPage/foreclosureSlice';
import { useEditor } from 'providers/editorProvider';
import { useState } from 'react';
import { isValidDate } from 'utils/format';
import DateSelect from '../../DateSelect/DateSelect';

const NewDate = ({ onClose }: { onClose: () => void }) => {
  const [date, setDate] = useState({ day: -1, month: -1 });

  const { dispatch } = useEditor();

  const handleSave = () => {
    if (!isValidDate(date)) return;
    dispatch(addDate(date));
    onClose();
  };
  return (
    <Flex alignItems="center">
      <DateSelect date={date} onChange={setDate} />
      <Button onClick={handleSave}>Zapisz</Button>
    </Flex>
  );
};

export default NewDate;

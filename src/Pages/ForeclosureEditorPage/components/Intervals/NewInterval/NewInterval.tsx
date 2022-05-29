import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import LabelBox from 'components/LabelBox/LabelBox';
import { addInterval } from 'Pages/ForeclosureEditorPage/foreclosureSlice';
import { useEditor } from 'providers/editorProvider';
import { useState } from 'react';
import { isValidDate } from 'utils/format';
import DateSelect from '../../DateSelect/DateSelect';

const NewInterval = ({ onClose }: { onClose: () => void }) => {
  const [fromDate, setFromDate] = useState({ day: -1, month: -1 });
  const [toDate, setToDate] = useState({ day: -1, month: -1 });

  const { dispatch } = useEditor();

  const handleSave = () => {
    if (!isValidDate(fromDate) || !isValidDate(toDate)) return;
    dispatch(addInterval({ from: fromDate, to: toDate }));
    onClose();
  };
  return (
    <Flex alignItems="center">
      <LabelBox text="Od">
        <DateSelect date={fromDate} onChange={setFromDate} />
      </LabelBox>
      <LabelBox text="Do">
        <DateSelect date={toDate} onChange={setToDate} />
      </LabelBox>
      <Button onClick={handleSave}>Zapisz</Button>
    </Flex>
  );
};

export default NewInterval;

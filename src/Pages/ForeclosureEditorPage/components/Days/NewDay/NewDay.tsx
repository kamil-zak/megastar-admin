import Select from 'components/Select/Select';
import { addDay } from 'Pages/ForeclosureEditorPage/foreclosureSlice';
import { useForeclosure } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { ChangeEvent } from 'react';
import { getDayName } from 'utils/format';

const days = [1, 2, 3, 4, 5, 6, 0];

const NewDay = ({ onClose }: { onClose: () => void }) => {
  const { dispatch } = useEditor();
  const usedDays = useForeclosure().list.days;
  const availableDays = days.filter((day) => !usedDays.includes(day));

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(addDay(Number(e.target.value)));
    onClose();
  };
  return (
    <Select small onChange={handleChange}>
      <option>Wybierz...</option>
      {availableDays.map((day) => (
        <option key={day} value={day}>
          {getDayName(day)}
        </option>
      ))}
    </Select>
  );
};

export default NewDay;

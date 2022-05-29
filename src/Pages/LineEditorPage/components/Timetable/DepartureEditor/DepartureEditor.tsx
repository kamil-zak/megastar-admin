import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';
import LabelBox from 'components/LabelBox/LabelBox';
import { DepartureDirection, DepartureType, ITime } from 'interfaces/line';
import useForeclosuresInput from 'Pages/LineEditorPage/hooks/useForeclosuresInput';
import useTimeInput from 'Pages/LineEditorPage/hooks/useTimeInput';
import { addDeparture, removeDeparture } from 'Pages/LineEditorPage/lineSlice';
import { useEditor } from 'providers/editorProvider';
import { formatTime } from 'utils/format';

interface IDepartureEditorProps {
  onClose: () => void;
  type: DepartureType;
  direction: DepartureDirection;
  time?: ITime;
  id?: string;
}

const DepartureEditor = ({ onClose, time, type, direction, id }: IDepartureEditorProps) => {
  const foreclosuresInput = useForeclosuresInput(time?.foreclosures.join('') || '');
  const focusForeclosures = () => foreclosuresInput.ref.current?.focus();
  const timeInput = useTimeInput(focusForeclosures, time && formatTime(time).padStart(5, '0'));
  const { dispatch } = useEditor();

  const handleSubmit = () => {
    const [hours, mins] = timeInput.value.split(':');
    const newTime = {
      hours: Number(hours),
      mins: Number(mins),
      foreclosures: foreclosuresInput.value.split(''),
    };
    const departure = { type, direction, time: newTime };
    if (id) dispatch(removeDeparture(id));
    dispatch(addDeparture(departure));
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Flex gap={10} alignItems="center">
        <Input autoFocus {...timeInput} />
        <LabelBox text="Ograniczenia">
          <Input {...foreclosuresInput} />
        </LabelBox>
        <Button type="submit">Zapisz</Button>
      </Flex>
    </Form>
  );
};

export default DepartureEditor;

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import IconButton from 'components/IconButton/IconButton';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Overlay from 'components/Overlay/Overlay';
import Text from 'components/Text/Text';
import { removeDate } from 'Pages/ForeclosureEditorPage/foreclosureSlice';
import { useForeclosure } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { getDateString } from 'utils/format';
import NewDate from './NewDate/NewDate';

const Dates = () => {
  const dates = useForeclosure().list.dates;
  const { dispatch } = useEditor();
  const remove = (id: string) => dispatch(removeDate(id));
  return (
    <Flex alignItems="flex-end">
      {dates.map((date) => (
        <Flex key={date.id} direction="row" alignItems="center" gap={10}>
          <Text size="s">{getDateString(date)}</Text>
          <IconButton icon={faTrashAlt} size="md" onClick={() => remove(date.id)} />
        </Flex>
      ))}
      {!dates.length && <Text size="xs">Brak wykluczonych dat</Text>}
      <LayoutItem align="center">
        <Overlay render={(close) => <NewDate onClose={close} />}>
          {(open) => <Button onClick={open}>Wyklucz datę</Button>}
        </Overlay>
      </LayoutItem>
    </Flex>
  );
};

export default Dates;

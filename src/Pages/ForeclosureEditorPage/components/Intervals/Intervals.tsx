import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import IconButton from 'components/IconButton/IconButton';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Overlay from 'components/Overlay/Overlay';
import Text from 'components/Text/Text';
import { removeInterval } from 'Pages/ForeclosureEditorPage/foreclosureSlice';
import { useForeclosure } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { getDateString } from 'utils/format';
import NewInterval from './NewInterval/NewInterval';

const Intervals = () => {
  const intervals = useForeclosure().list.intervals;
  const { dispatch } = useEditor();
  const remove = (id: string) => dispatch(removeInterval(id));
  return (
    <Flex alignItems="flex-end">
      {intervals.map((interval) => (
        <Flex key={interval.id} direction="row" alignItems="center" gap={10}>
          <Text size="s">
            {getDateString(interval.from)} - {getDateString(interval.to)}
          </Text>
          <IconButton icon={faTrashAlt} size="md" onClick={() => remove(interval.id)} />
        </Flex>
      ))}
      {!intervals.length && <Text size="xs">Brak wykluczonych przedziałów</Text>}
      <LayoutItem align="center">
        <Overlay render={(close) => <NewInterval onClose={close} />}>
          {(open) => <Button onClick={open}>Wyklucz przedział</Button>}
        </Overlay>
      </LayoutItem>
    </Flex>
  );
};

export default Intervals;

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import IconButton from 'components/IconButton/IconButton';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Overlay from 'components/Overlay/Overlay';
import Text from 'components/Text/Text';
import { removeDay } from 'Pages/ForeclosureEditorPage/foreclosureSlice';
import { useForeclosure } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { getDayName } from 'utils/format';
import NewDay from './NewDay/NewDay';

const Days = () => {
  const days = useForeclosure().list.days;
  const { dispatch } = useEditor();
  const remove = (day: number) => dispatch(removeDay(day));
  return (
    <Flex alignItems="flex-end">
      {days.map((day) => (
        <Flex key={day} direction="row" alignItems="center" gap={10}>
          <Text size="s">{getDayName(day)}</Text>
          <IconButton icon={faTrashAlt} size="md" onClick={() => remove(day)} />
        </Flex>
      ))}
      {!days.length && <Text size="xs">Brak wykluczonych dni</Text>}
      <LayoutItem align="center">
        <Overlay render={(close) => <NewDay onClose={close} />}>
          {(open) => (
            <Button onClick={open} disabled={days.length === 6}>
              Wyklucz dzień
            </Button>
          )}
        </Overlay>
      </LayoutItem>
    </Flex>
  );
};

export default Days;

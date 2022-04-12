import Flex from 'components/Flex/Flex';
import Overlay from 'components/Overlay/Overlay';
import { useLine } from 'providers/dataProviders';
import TimeEditor from '../DepartureEditor/DepartureEditor';
import DepartureItem from '../DepartureItem/DepartureItem';
import IconButton from 'components/IconButton/IconButton';
import { DepartureDirection, DepartureType } from 'interfaces/line';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DeparturesList = ({ type, direction }: { type: DepartureType; direction: DepartureDirection }) => {
  const line = useLine();
  const departures = line.timetable.filter((departure) => departure.type === type && departure.direction === direction);
  return (
    <Flex alignItems="center" direction="row" justifyContent="center">
      {departures.map((departure) => (
        <DepartureItem key={departure.id} departure={departure} />
      ))}
      <Overlay render={(close) => <TimeEditor onClose={close} type={type} direction={direction} />}>
        {(open) => <IconButton icon={faPlus} size="lg" onClick={open} />}
      </Overlay>
    </Flex>
  );
};

export default DeparturesList;

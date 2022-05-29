import Flex from 'components/Flex/Flex';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Link } from 'react-router-dom';
import LineItem from './LineItem/LineItem';
import Text from 'components/Text/Text';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Button from 'components/Button/Button';
import { IMoveDetails } from 'interfaces/common';
import { moveLine } from 'store/features/linesSlice';
import Sortable from 'components/Sortable/Sortable';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ROUTES from 'constants/routes';

const Lines = () => {
  const lines = useAppSelector((store) => store.lines);
  const dispatch = useAppDispatch();
  if (!lines) return null;
  const handleDrop = (details: IMoveDetails) => dispatch(moveLine(details));
  return (
    <Flex>
      <LayoutItem align="center">
        <Link to={`${ROUTES.lines}/new`}>
          <Button icon={faPlus}>Nowa linia</Button>
        </Link>
      </LayoutItem>
      {lines.map((line) => (
        <Sortable key={line._id} type="lines" id={line._id} onDrop={handleDrop}>
          <LineItem line={line} />
        </Sortable>
      ))}
      {!lines.length && (
        <Text color="primaryDark" size="s">
          Brak linii. Dodaj pierwszą!
        </Text>
      )}
    </Flex>
  );
};

export default Lines;

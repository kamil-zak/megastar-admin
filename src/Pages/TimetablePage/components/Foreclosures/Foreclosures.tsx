import Flex from 'components/Flex/Flex';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Link } from 'react-router-dom';
import ForeclosureItem from './ForeclosureItem/ForeclosureItem';
import Text from 'components/Text/Text';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Button from 'components/Button/Button';
import { moveForeclosure } from 'store/features/foreclosuresSlice';
import { IMoveDetails } from 'interfaces/common';
import Sortable from 'components/Sortable/Sortable';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ROUTES from 'constants/routes';

const Foreclosures = () => {
  const foreclosures = useAppSelector((store) => store.foreclosures);
  const dispatch = useAppDispatch();
  if (!foreclosures) return null;
  const handleDrop = (details: IMoveDetails) => dispatch(moveForeclosure(details));
  return (
    <Flex>
      <LayoutItem align="center">
        <Link to={`${ROUTES.foreclosures}/new`}>
          <Button icon={faPlus}>Nowe ograniczenie</Button>
        </Link>
      </LayoutItem>
      {foreclosures.map((foreclosure) => (
        <Sortable key={foreclosure._id} type="foreclosures" id={foreclosure._id} onDrop={handleDrop}>
          <ForeclosureItem key={foreclosure._id} foreclosure={foreclosure} />
        </Sortable>
      ))}
      {!foreclosures.length && (
        <Text color="primaryDark" size="s">
          Brak ograniczeń. Dodaj pierwsze!
        </Text>
      )}
    </Flex>
  );
};

export default Foreclosures;

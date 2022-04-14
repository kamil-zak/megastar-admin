import { faCalendarDay, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import Text from 'components/Text/Text';
import useConfirm from 'hooks/useConfirm';
import { IForeclosureInfo } from 'interfaces/foreclosure';
import { Link } from 'react-router-dom';
import { removeForeclosure } from 'store/features/foreclosuresSlice';
import useAsyncThunk from 'hooks/useAsyncThunk';
import Flex from 'components/Flex/Flex';
import ROUTES from 'constants/routes';

const ForeclosureItem = ({ foreclosure }: { foreclosure: IForeclosureInfo }) => {
  const [remove, { loading }] = useAsyncThunk(removeForeclosure, foreclosure._id);
  const confirmRemove = useConfirm({
    question: 'Czy na pewno chcesz usunąć ograniczenie?',
    actionName: 'Usuń',
    callback: remove,
  });
  return (
    <Card>
      <Flex>
        <Flex justifyContent="flex-end" alignItems="center" direction="row">
          <Text size="s">{foreclosure.symbol}</Text>
          <FontAwesomeIcon icon={faLongArrowAltRight} size="1x"></FontAwesomeIcon>
          <Text size="s">{foreclosure.description}</Text>
          <FontAwesomeIcon icon={faCalendarDay} size="4x"></FontAwesomeIcon>
        </Flex>
        <Flex justifyContent="flex-end" direction="row">
          <Button danger loading={loading} onClick={confirmRemove}>
            Usuń
          </Button>
          <Link to={`${ROUTES.foreclosures}/${foreclosure._id}`}>
            <Button>Edytuj</Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ForeclosureItem;

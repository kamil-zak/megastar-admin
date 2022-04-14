import { faArrowsAltH, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import Text from 'components/Text/Text';
import useConfirm from 'hooks/useConfirm';
import { ILineInfo } from 'interfaces/line';
import { Link } from 'react-router-dom';
import useAsyncThunk from 'hooks/useAsyncThunk';
import { removeLine } from 'store/features/linesSlice';
import Flex from 'components/Flex/Flex';
import ROUTES from 'constants/routes';

const LineItem = ({ line }: { line: ILineInfo }) => {
  const [remove, { loading }] = useAsyncThunk(removeLine, line._id);
  const confirmRemove = useConfirm({
    question: 'Czy na pewno chcesz usunąć linię?',
    actionName: 'Usuń',
    callback: remove,
  });

  return (
    <Card>
      <Flex>
        <Flex justifyContent="flex-end" alignItems="center" direction="row">
          <Text size="s">{line.entry}</Text>
          <FontAwesomeIcon icon={faArrowsAltH} size="1x"></FontAwesomeIcon>
          <Text size="s">{line.destination}</Text>
          <FontAwesomeIcon icon={faClock} size="4x"></FontAwesomeIcon>
        </Flex>
        <Flex justifyContent="flex-end" direction="row">
          <Button danger loading={loading} onClick={confirmRemove}>
            Usuń
          </Button>
          <Link to={`${ROUTES.lines}/${line._id}`}>
            <Button>Edytuj</Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export default LineItem;

import { FC } from 'react';
import Spinner from 'components/Spinner/Spinner';
import { ILoaderController } from 'interfaces/common';
import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import Button from 'components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

interface ILoaderProps {
  controllers: ILoaderController[];
}
const Loader: FC<ILoaderProps> = ({ controllers, children }) => {
  const isPending = controllers.some((controller) => controller.loading);
  const isFailed = controllers.some((controller) => controller.error);

  const retry = () => controllers.forEach((controller) => controller.error && controller.retry());

  if (isPending) return <Spinner />;
  if (isFailed)
    return (
      <Flex alignItems="center">
        <Text color="primaryDark">
          <FontAwesomeIcon icon={faExclamationTriangle} size="5x" />
        </Text>
        <Text center color="danger">
          Nie udało się wczytać wszystkich danych
        </Text>
        <Button onClick={retry}>Spróbuj ponownie</Button>
      </Flex>
    );
  return <>{children}</>;
};

export default Loader;

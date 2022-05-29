import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import { useLine } from 'providers/dataProviders';
import DeparturesList from './DeparturesList/DeparturesList';

const Timetable = () => {
  const line = useLine();
  return (
    <Flex gap={60}>
      <Flex alignItems="center">
        <Text color="primaryDark">
          {line.entry} - {line.destination}
        </Text>
        <Text color="primaryDark" size="s">
          Dni tygodnia
        </Text>
        <DeparturesList type="week" direction="destination" />
        <Text color="primaryDark" size="s">
          Sobota
        </Text>
        <DeparturesList type="saturday" direction="destination" />
        <Text color="primaryDark" size="s">
          Niedziela
        </Text>
        <DeparturesList type="sunday" direction="destination" />
      </Flex>

      <Flex alignItems="center">
        <Text color="primaryDark">
          {line.destination} - {line.entry}
        </Text>
        <Text color="primaryDark" size="s">
          Dni tygodnia
        </Text>
        <DeparturesList type="week" direction="entry" />
        <Text color="primaryDark" size="s">
          Sobota
        </Text>
        <DeparturesList type="saturday" direction="entry" />
        <Text color="primaryDark" size="s">
          Niedziela
        </Text>
        <DeparturesList type="sunday" direction="entry" />
      </Flex>
    </Flex>
  );
};

export default Timetable;

import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import { useAppSelector } from 'store/store';
import useAsyncThunk from 'hooks/useAsyncThunk';
import { fetchForeclosures } from 'store/features/foreclosuresSlice';

const Foreclosures = () => {
  const foreclosures = useAppSelector((store) => store.foreclosures);
  const [fetch, { loading }] = useAsyncThunk(fetchForeclosures);
  if (!foreclosures) return null;
  return (
    <Flex alignItems="center">
      <table>
        <tbody>
          {foreclosures.map((foreclosure) => (
            <tr key={foreclosure._id}>
              <td align="center">
                <Text color="accentDark">{foreclosure.symbol}</Text>
              </td>
              <td>{foreclosure.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!foreclosures.length && (
        <Text color="primaryDark" size="xs">
          Brak zdefiniowanych ograniczeń
        </Text>
      )}
      <Button loading={loading} onClick={fetch}>
        Odśwież
      </Button>
    </Flex>
  );
};

export default Foreclosures;

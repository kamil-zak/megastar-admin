import Input from 'components/Input/Input';
import LabelBox from 'components/LabelBox/LabelBox';
import Select from 'components/Select/Select';
import { changeDescription, changeSymbol } from 'Pages/ForeclosureEditorPage/foreclosureSlice';
import { useForeclosure } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { ChangeEvent } from 'react';
import { useAppSelector } from 'store/store';
import arrayRange from 'utils/arrayRange';
import { Wrapper } from './Base.styles';

const symbols = arrayRange(65, 90).map((x) => String.fromCharCode(x));

const Base = () => {
  const foreclosures = useAppSelector((store) => store.foreclosures);
  const { symbol, description, _id } = useForeclosure();
  const { dispatch } = useEditor();
  if (!foreclosures) return null;

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeDescription(e.target.value));
  const handleSymbolChange = (e: ChangeEvent<HTMLSelectElement>) => dispatch(changeSymbol(e.target.value));

  const usedSymbols = foreclosures.filter((x) => x._id !== _id).map((x) => x.symbol);
  const availableSymbols = symbols.filter((symbol) => !usedSymbols.includes(symbol));
  return (
    <Wrapper>
      <LabelBox text="Symbol">
        <Select onChange={handleSymbolChange} value={symbol}>
          <option value="">Wybierz...</option>
          {availableSymbols.map((symbol) => (
            <option key={symbol} value={symbol}>
              {symbol}
            </option>
          ))}
        </Select>
      </LabelBox>
      <LabelBox text="Opis">
        <Input value={description} onChange={handleDescriptionChange} />
      </LabelBox>
    </Wrapper>
  );
};

export default Base;

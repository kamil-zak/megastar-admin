import { ChangeEvent } from 'react';
import Flex from 'components/Flex/Flex';
import Input from 'components/Input/Input';
import { changeEntry, changeDestination, changeDescription } from 'Pages/LineEditorPage/lineSlice';
import { useLine } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import LabelBox from 'components/LabelBox/LabelBox';
import { StyledTextArea, Wrapper } from './Base.styles';

const Base = () => {
  const { entry, destination, description } = useLine();
  const { dispatch } = useEditor();
  const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeEntry(e.target.value));
  const handleDestinationChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeDestination(e.target.value));
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(changeDescription(e.target.value));
  return (
    <Wrapper>
      <Flex>
        <LabelBox text="Miejsce startowe">
          <Input value={entry} onChange={handleStartChange} />
        </LabelBox>
        <LabelBox text="Miejsce docelowe">
          <Input value={destination} onChange={handleDestinationChange} />
        </LabelBox>
      </Flex>
      <LabelBox text="Informacje dodatkowe">
        <StyledTextArea value={description} onChange={handleDescriptionChange} />
      </LabelBox>
    </Wrapper>
  );
};

export default Base;

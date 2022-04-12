import { ChangeEvent } from 'react';
import Input from 'components/Input/Input';
import { useAlbum } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import LabelBox from 'components/LabelBox/LabelBox';
import { changeName } from 'Pages/AlbumEditorPage/albumSlice';

const Base = () => {
  const { name } = useAlbum();
  const { dispatch } = useEditor();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeName(e.target.value));
  return (
    <div style={{ display: 'grid' }}>
      <LabelBox text="Nazwa galerii">
        <Input value={name} onChange={handleNameChange} />
      </LabelBox>
    </div>
  );
};

export default Base;

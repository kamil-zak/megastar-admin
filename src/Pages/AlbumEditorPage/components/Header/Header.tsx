import { faSave } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import PageHeader from 'components/PageHeader/PageHeader';
import ROUTES from 'constants/routes';
import useAsyncThunk from 'hooks/useAsyncThunk';
import { useAlbum } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { Navigate } from 'react-router';
import { saveAlbum } from 'store/features/albumsSlice';

const Header = () => {
  const { modified, isNew } = useEditor();
  const album = useAlbum();
  const [save, { loading, loaded }] = useAsyncThunk(saveAlbum, album);
  if (loaded) return <Navigate to={ROUTES.albums} />;
  return (
    <PageHeader title="Edycja albumu">
      {modified && (
        <Button icon={faSave} loading={loading} onClick={save}>
          {isNew ? 'Utwórz' : 'Zapisz'}
        </Button>
      )}
    </PageHeader>
  );
};

export default Header;

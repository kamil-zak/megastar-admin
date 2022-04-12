import { faSave } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import PageHeader from 'components/PageHeader/PageHeader';
import ROUTES from 'constants/routes';
import useAsyncThunk from 'hooks/useAsyncThunk';
import { useLine } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { Navigate } from 'react-router';
import { saveLine } from 'store/features/linesSlice';

const Header = () => {
  const { modified, isNew } = useEditor();
  const line = useLine();

  const [save, { loading, loaded }] = useAsyncThunk(saveLine, line);

  if (loaded) return <Navigate to={ROUTES.timetable} />;
  return (
    <PageHeader title="Edycja linii">
      {modified && (
        <Button icon={faSave} loading={loading} onClick={save}>
          {isNew ? 'Utwórz' : 'Zapisz'}
        </Button>
      )}
    </PageHeader>
  );
};

export default Header;

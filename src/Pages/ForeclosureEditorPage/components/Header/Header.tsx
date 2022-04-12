import { faSave } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import PageHeader from 'components/PageHeader/PageHeader';
import ROUTES from 'constants/routes';
import useAsyncThunk from 'hooks/useAsyncThunk';
import { useForeclosure } from 'providers/dataProviders';
import { useEditor } from 'providers/editorProvider';
import { Navigate } from 'react-router';
import { saveForeclosure } from 'store/features/foreclosuresSlice';

const Header = () => {
  const { modified, isNew } = useEditor();
  const foreclosure = useForeclosure();
  const [save, { loading, loaded }] = useAsyncThunk(saveForeclosure, foreclosure);
  if (loaded) return <Navigate to={ROUTES.timetable} />;
  return (
    <PageHeader title="Edycja ograniczenia">
      {modified && (
        <Button icon={faSave} loading={loading} onClick={save}>
          {isNew ? 'Utwórz' : 'Zapisz'}
        </Button>
      )}
    </PageHeader>
  );
};

export default Header;

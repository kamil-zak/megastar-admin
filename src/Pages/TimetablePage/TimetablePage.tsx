import Loader from 'components/Loader/Loader';
import Foreclosures from './components/Foreclosures/Foreclosures';
import Lines from './components/Lines/Lines';
import useStoreController from 'hooks/useStoreController';
import PageHeader from 'components/PageHeader/PageHeader';
import { Wrapper } from './TimetablePage.styles';

const TimetablePage = () => (
  <Loader controllers={[useStoreController('lines'), useStoreController('foreclosures')]}>
    <PageHeader title="Rozkład jazdy" />
    <Wrapper>
      <Lines />
      <Foreclosures />
    </Wrapper>
  </Loader>
);

export default TimetablePage;

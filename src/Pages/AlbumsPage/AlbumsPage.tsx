import useStoreController from 'hooks/useStoreController';
import Loader from 'components/Loader/Loader';
import PageHeader from 'components/PageHeader/PageHeader';
import AlbumsList from './components/AlbumsList/AlbumsList';
import { Wrapper } from './AlbumsPage.styles';

const AlbumsPage = () => (
  <Loader controllers={[useStoreController('albums')]}>
    <PageHeader title="Galeria" />
    <Wrapper>
      <AlbumsList />
    </Wrapper>
  </Loader>
);
export default AlbumsPage;

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Sortable from 'components/Sortable/Sortable';
import Text from 'components/Text/Text';
import ROUTES from 'constants/routes';
import { IMoveDetails } from 'interfaces/common';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { moveAlbum } from 'store/features/albumsSlice';
import { useAppSelector } from 'store/store';
import AlbumItem from './AlbumItem/AlbumItem';

const AlbumsList = () => {
  const albums = useAppSelector((store) => store.albums);
  const dispatch = useDispatch();
  if (!albums) return null;
  const handleDrop = (details: IMoveDetails) => dispatch(moveAlbum(details));
  return (
    <Flex>
      <LayoutItem align="center">
        <Link to={`${ROUTES.albums}/new`}>
          <Button icon={faPlus}>Nowy album</Button>
        </Link>
      </LayoutItem>
      {albums.map((album) => (
        <Sortable key={album._id} id={album._id} onDrop={handleDrop}>
          <AlbumItem key={album._id} album={album} />
        </Sortable>
      ))}
      {!albums.length && (
        <Text color="primaryDark" size="s">
          Brak albumów. Dodaj pierwszy!
        </Text>
      )}
    </Flex>
  );
};
export default AlbumsList;

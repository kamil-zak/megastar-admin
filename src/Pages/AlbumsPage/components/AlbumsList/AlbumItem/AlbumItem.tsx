import { faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button/Button';
import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import useConfirm from 'hooks/useConfirm';
import { IAlbumInfo } from 'interfaces/album';
import { Link } from 'react-router-dom';
import { removeAlbum } from 'store/features/albumsSlice';
import useAsyncThunk from 'hooks/useAsyncThunk';
import { FirstImage, Images, SecondImage, StyledCard } from './AlbumItem.styles';
import ROUTES, { getThumbUrl } from 'constants/routes';
import LayoutItem from 'components/LayoutItem/LayoutItem';

const AlbumItem = ({ album }: { album: IAlbumInfo }) => {
  const [remove, { loading }] = useAsyncThunk(removeAlbum, album._id);
  const confirmRemove = useConfirm({
    question: 'Czy na pewno chcesz usunąć album?',
    actionName: 'Usuń',
    callback: remove,
  });
  return (
    <StyledCard>
      <Images>
        {album.photos[0] && <FirstImage src={getThumbUrl(album.photos[0])} alt="gallery" />}
        {album.photos[1] && <SecondImage src={getThumbUrl(album.photos[1])} alt="gallery" />}
      </Images>
      <Flex>
        <Flex justifyContent="flex-end" alignItems="center" direction="row">
          <Text size="s">{album.name}</Text>
          <LayoutItem mobileHidden>
            <FontAwesomeIcon icon={faImages} size="4x" />
          </LayoutItem>
        </Flex>
        <Flex justifyContent="flex-end" direction="row">
          <Button danger loading={loading} onClick={confirmRemove}>
            Usuń
          </Button>
          <Link to={`${ROUTES.albums}/${album._id}`}>
            <Button>Edytuj</Button>
          </Link>
        </Flex>
      </Flex>
    </StyledCard>
  );
};

export default AlbumItem;

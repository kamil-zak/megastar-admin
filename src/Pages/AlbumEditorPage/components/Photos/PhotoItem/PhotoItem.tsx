import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import AbsoluteWrapper from 'components/AbsoluteWrapper/AbsoluteWrapper';
import IconButton from 'components/IconButton/IconButton';
import Spinner from 'components/Spinner/Spinner';
import { StyledImg, Wrapper } from './PhotoItem.styles';

interface IPhotoItemProps {
  image: string;
  loading?: boolean;
  onRemove: () => void;
}

const PhotoItem = ({ image, loading = false, onRemove }: IPhotoItemProps) => (
  <Wrapper>
    <StyledImg src={image} transparent={loading} />
    <AbsoluteWrapper position="right-top">
      <IconButton icon={faTrashAlt} size="base" onClick={onRemove} />
    </AbsoluteWrapper>
    {loading && <Spinner small />}
  </Wrapper>
);

export default PhotoItem;

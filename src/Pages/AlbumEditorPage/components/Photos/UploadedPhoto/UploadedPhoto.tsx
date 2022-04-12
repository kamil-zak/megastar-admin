import Sortable from 'components/Sortable/Sortable';
import { changeOrder, removePhoto } from 'Pages/AlbumEditorPage/albumSlice';
import { useEditor } from 'providers/editorProvider';
import { IMoveDetails } from 'interfaces/common';
import PhotoItem from '../PhotoItem/PhotoItem';
import { getThumbUrl } from 'constants/routes';

interface IUploadedPhotoProps {
  photo: string;
}

const UploadedPhoto = ({ photo }: IUploadedPhotoProps) => {
  const { dispatch } = useEditor();
  const remove = () => dispatch(removePhoto(photo));
  const handleDragHover = (details: IMoveDetails) => dispatch(changeOrder(details));
  return (
    <Sortable id={photo} onHover={handleDragHover}>
      <PhotoItem image={getThumbUrl(photo)} onRemove={remove} />
    </Sortable>
  );
};

export default UploadedPhoto;

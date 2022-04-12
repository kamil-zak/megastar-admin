import { addPhoto } from 'Pages/AlbumEditorPage/albumSlice';
import { useEditor } from 'providers/editorProvider';
import { useEffect, useState } from 'react';
import albumService from 'services/albumService';
import { IFileItem } from 'interfaces/common';
import PhotoItem from '../PhotoItem/PhotoItem';
import { useUpload } from 'providers/uploadProvider';

interface IPhotoToUpload {
  fileItem: IFileItem;
  canUpload: boolean;
}

const PhotoToUpload = ({ fileItem, canUpload }: IPhotoToUpload) => {
  const [photoData, setPhotoData] = useState<string | null>(null);
  const { file, id } = fileItem;

  const { removeUpload } = useUpload();

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => setPhotoData(reader.result as string);
    reader.readAsDataURL(file);
  }, [file]);

  const { dispatch } = useEditor();
  useEffect(() => {
    if (!canUpload) return;
    const controller = new AbortController();
    albumService
      .upload(file, controller.signal)
      .then((filename) => {
        dispatch(addPhoto(filename));
      })
      .finally(() => removeUpload(id));

    return () => controller.abort();
  }, [dispatch, file, id, removeUpload, canUpload]);

  if (!photoData) return null;
  return <PhotoItem image={photoData} onRemove={() => removeUpload(id)} loading />;
};

export default PhotoToUpload;

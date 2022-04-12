import Flex from 'components/Flex/Flex';
import { useAlbum } from 'providers/dataProviders';
import PhotoToUpload from './PhotoToUpload/PhotoToUpload';
import UploadedPhoto from './UploadedPhoto/UploadedPhoto';
import Text from 'components/Text/Text';
import { useUpload } from 'providers/uploadProvider';

const Photos = () => {
  const { photos } = useAlbum();
  const { filesToUpload } = useUpload();

  const isEmpty = !photos.length && !filesToUpload.length;
  return (
    <Flex direction="row" justifyContent="center">
      {photos.map((photo) => (
        <UploadedPhoto key={photo} photo={photo} />
      ))}
      {filesToUpload.map((item, index) => (
        <PhotoToUpload key={item.id} fileItem={item} canUpload={index === 0} />
      ))}
      {isEmpty && (
        <Text size="s" color="primaryDark">
          Brak zdjęć. Dodaj pierwsze!
        </Text>
      )}
    </Flex>
  );
};

export default Photos;

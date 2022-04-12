import { getAlbum } from 'store/features/albumsSlice';
import albumReducer, { initialState } from './albumSlice';
import Loader from 'components/Loader/Loader';
import { AlbumProvider } from 'providers/dataProviders';
import EditorProvider from 'providers/editorProvider';
import useEditorFetch from 'hooks/useEditorFetch';
import Header from './components/Header/Header';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Base from './components/Base/Base';
import Photos from './components/Photos/Photos';
import { Wrapper } from './AlbumEditorPage.styles';
import UploadProvider from 'providers/uploadProvider';
import UploadArea from './components/UploadArea/UploadArea';

const AlbumEditorPage = () => {
  const [album, albumController, editor] = useEditorFetch(getAlbum, albumReducer, initialState);
  return (
    <Loader controllers={[albumController]}>
      <AlbumProvider data={album}>
        <EditorProvider editor={editor}>
          <UploadProvider>
            <Header />
            <Wrapper>
              <LayoutItem area="base" align="center">
                <Base />
              </LayoutItem>
              <LayoutItem area="upload">
                <UploadArea />
              </LayoutItem>
              <LayoutItem area="photos">
                <Photos />
              </LayoutItem>
            </Wrapper>
          </UploadProvider>
        </EditorProvider>
      </AlbumProvider>
    </Loader>
  );
};

export default AlbumEditorPage;

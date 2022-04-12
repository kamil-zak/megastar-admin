import Loader from 'components/Loader/Loader';
import foreclosureReducer, { initialState } from './foreclosureSlice';
import { ForeclosureProvider } from '../../providers/dataProviders';
import EditorProvider from 'providers/editorProvider';
import useStoreController from 'hooks/useStoreController';
import { getForeclosure } from 'store/features/foreclosuresSlice';
import useEditorFetch from 'hooks/useEditorFetch';
import Header from './components/Header/Header';
import { Wrapper } from './ForeclosureEditorPage.styles';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Base from './components/Base/Base';
import Days from './components/Days/Days';
import Dates from './components/Dates/Dates';
import Intervals from './components/Intervals/Intervals';

const ForeclosureEditorPage = () => {
  const foreclosuresController = useStoreController('foreclosures');
  const [foreclosure, foreclosureController, editor] = useEditorFetch(getForeclosure, foreclosureReducer, initialState);

  return (
    <Loader controllers={[foreclosuresController, foreclosureController]}>
      <ForeclosureProvider data={foreclosure}>
        <EditorProvider editor={editor}>
          <Header />
          <Wrapper>
            <LayoutItem area="base">
              <Base />
            </LayoutItem>
            <LayoutItem area="days" justify="center">
              <Days />
            </LayoutItem>
            <LayoutItem area="dates" justify="center">
              <Dates />
            </LayoutItem>
            <LayoutItem area="intervals" justify="center">
              <Intervals />
            </LayoutItem>
          </Wrapper>
        </EditorProvider>
      </ForeclosureProvider>
    </Loader>
  );
};

export default ForeclosureEditorPage;

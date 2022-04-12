import Loader from 'components/Loader/Loader';
import lineReducer, { initialState } from './lineSlice';
import { LineProvider } from '../../providers/dataProviders';
import EditorProvider from 'providers/editorProvider';
import { getLine } from 'store/features/linesSlice';
import useStoreController from 'hooks/useStoreController';
import useEditorFetch from 'hooks/useEditorFetch';
import Header from './components/Header/Header';
import { Wrapper } from './LineEditorPage.styles';
import LayoutItem from 'components/LayoutItem/LayoutItem';
import Base from './components/Base/Base';
import Foreclosures from './components/Foreclosures/Foreclosures';
import Timetable from './components/Timetable/Timetable';

const LineEditorPage = () => {
  const foreclosuresController = useStoreController('foreclosures');
  const [line, lineController, editor] = useEditorFetch(getLine, lineReducer, initialState);
  return (
    <Loader controllers={[foreclosuresController, lineController]}>
      <LineProvider data={line}>
        <EditorProvider editor={editor}>
          <Header />
          <Wrapper>
            <LayoutItem area="base">
              <Base />
            </LayoutItem>
            <LayoutItem area="foreclosures">
              <Foreclosures />
            </LayoutItem>
            <LayoutItem area="timetable">
              <Timetable />
            </LayoutItem>
          </Wrapper>
        </EditorProvider>
      </LineProvider>
    </Loader>
  );
};

export default LineEditorPage;

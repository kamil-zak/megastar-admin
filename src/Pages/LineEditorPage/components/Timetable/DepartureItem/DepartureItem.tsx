import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import AbsoluteWrapper from 'components/AbsoluteWrapper/AbsoluteWrapper';
import IconButton from 'components/IconButton/IconButton';
import Overlay from 'components/Overlay/Overlay';
import { IDeparture } from 'interfaces/line';
import { removeDeparture } from 'Pages/LineEditorPage/lineSlice';
import { useEditor } from 'providers/editorProvider';
import { formatDeparture } from 'utils/format';
import TimeEditor from '../DepartureEditor/DepartureEditor';
import { Wrapper } from './DepartureItem.styles';

interface IDepartureItemProps {
  departure: IDeparture;
}

const DepartureItem = ({ departure }: IDepartureItemProps) => {
  const { dispatch } = useEditor();
  const remove = () => dispatch(removeDeparture(departure.id));
  return (
    <Overlay render={(close) => <TimeEditor onClose={close} {...departure} />}>
      {(open) => (
        <Wrapper>
          {formatDeparture(departure)}
          <div className="buttons">
            <AbsoluteWrapper
              position="left-top"
              onClick={(e) => {
                e.stopPropagation();
                open();
              }}
            >
              <IconButton icon={faPen} size="sm" />
            </AbsoluteWrapper>
            <AbsoluteWrapper position="right-top" onClick={remove}>
              <IconButton icon={faTrashAlt} size="sm" />
            </AbsoluteWrapper>
          </div>
        </Wrapper>
      )}
    </Overlay>
  );
};

export default DepartureItem;
